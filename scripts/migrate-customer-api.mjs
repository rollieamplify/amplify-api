import fs from 'node:fs';
import path from 'node:path';

const [sourcePath, existingOpenApiJson] = process.argv.slice(2);
if (!sourcePath || !existingOpenApiJson) {
  throw new Error('Usage: node scripts/migrate-customer-api.mjs <source-collection> <existing-openapi-json>');
}

const root = process.cwd();
const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const existing = JSON.parse(fs.readFileSync(existingOpenApiJson, 'utf8'));
const changes = [];
const issues = [];

const titleFixes = new Map([
  ['Generate Token', 'Generate an access token'],
  ['Fax Send', 'Send a fax'], ['Fax Forward', 'Forward a fax'], ['Fax Report', 'Generate a fax report'],
  ['Fax Delete', 'Delete a fax'], ['Fax Resend', 'Resend a fax'], ['Scheduled Fax List', 'List scheduled faxes'],
  ['Send Fax List', 'List sent faxes'], ['Pending Fax Approval List', 'List pending fax approvals'],
  ['Fax Approval', 'Approve or reject a fax'], ['Fax Download', 'Download a fax'], ['Fax Status', 'Get fax status'],
  ['Fax Mark As Done', 'Mark a fax as done'], ['Fax Mark As Not Done', 'Mark a fax as not done'],
  ['Fax Transmission Report', 'Get a fax transmission receipt'], ['Cancel Fax', 'Cancel a fax'],
  ['Country list', 'List available countries'], ['Area list', 'List available areas'],
  ['Available Number list', 'List available numbers'], ['Search number', 'Search available numbers'],
  ['Filled Requirements', 'List filled requirements'], ['Purchase number', 'Purchase a number'],
  ['Purchase number with requirements', 'Purchase a number with requirements'], ['List', 'List'],
  ['Delete number', 'Delete a number'], ['Received Fax List', 'List received faxes'],
  ['Received All Fax List', 'List all received faxes'], ['Assign Fax To User', 'Assign a fax to a user'],
  ['Un-Assign Fax To User', 'Unassign a fax from a user'], ['Request OCR & NLP', 'Request OCR and NLP processing'],
  ['Extract OCR & NLP Data', 'Extract OCR and NLP data'], ['Label List', 'List labels'],
  ['Assign Label To Fax', 'Assign a label to a fax'], ['Remove Fax Lable', 'Remove a label from a fax'],
  ['Custom Field List', 'List fax custom fields'], ['Add/Update Custom Field', 'Create or update a fax custom field'],
  ['Remove Custom Field List', 'Remove a fax custom field'], ['segments', 'List automation segments'],
  ['detail', 'Get automation details'], ['Document Status', 'Get document status'],
  ['Template Details', 'Get template details'], ['Save Theme (POST)', 'Create document theme'],
  ['Save Theme (PATCH)', 'Update document theme'], ['Save Template Theme (POST)', 'Create template theme'],
  ['Save Template Theme (PATCH)', 'Update template theme'],
]);

const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const normalizeName = (name, ancestry) => {
  let result = titleFixes.get(name) || name;
  if (result === 'List') result = ancestry.includes('Groups') ? 'List contact groups' : ancestry.includes('Custom Fields') ? 'List contact custom fields' : ancestry.includes('Contacts') ? 'List contacts' : result;
  if (result === 'Create') result = ancestry.includes('Groups') ? 'Create a contact group' : ancestry.includes('Custom Fields') ? 'Create a contact custom field' : ancestry.includes('Automations') ? 'Create an automation' : 'Create a contact';
  if (result === 'Update') result = ancestry.includes('Groups') ? 'Update a contact group' : ancestry.includes('Custom Fields') ? 'Update a contact custom field' : 'Update a contact';
  if (result === 'Delete') result = ancestry.includes('Groups') ? 'Delete a contact group' : ancestry.includes('Custom Fields') ? 'Delete a contact custom field' : 'Delete a contact';
  return result;
};

function rawPath(raw = '') {
  let value = raw.replace(/^https?:\/\/[^/]+/i, '').replace(/^\{\{[^}]+\}\}/, '');
  value = value.split('?')[0];
  value = value.replace(/^\/api\/customer\/?/, '/').replace(/^\/customer\/?/, '/');
  if (!value.startsWith('/')) value = `/${value}`;
  if (!value.startsWith('/v1/')) value = `/v1${value}`;
  return value.replace(/\/+/g, '/').replace(/\{\{([^}]+)\}\}/g, '{$1}');
}

function parseRaw(raw, requestName) {
  if (!raw || !raw.trim()) return undefined;
  let cleaned = raw.replace(/^\s*\/\/.*$/gm, '').replace(/,\s*([}\]])/g, '$1').trim();
  cleaned = cleaned.replace(/\{\{([^}]+)\}\}/g, '"<$1>"');
  if (!cleaned) return undefined;
  try { return JSON.parse(cleaned); }
  catch (error) {
    issues.push({endpoint: requestName, issue: `Request example is not valid JSON: ${error.message}`, action: 'Kept the original example as text in Postman; OpenAPI uses a generic object schema.'});
    return undefined;
  }
}

function normalizeBooleans(value, trail, endpoint) {
  if (Array.isArray(value)) return value.map((v, i) => normalizeBooleans(v, [...trail, i], endpoint));
  if (!value || typeof value !== 'object') return value;
  const output = {};
  for (const [key, child] of Object.entries(value)) {
    if (/^(is_|can_|has_)/.test(key) && (child === 0 || child === 1 || child === '0' || child === '1')) {
      output[key] = child === 1 || child === '1';
      changes.push({endpoint, change: `${[...trail, key].join('.')} normalized from ${JSON.stringify(child)} to boolean ${output[key]}.`});
    } else output[key] = normalizeBooleans(child, [...trail, key], endpoint);
  }
  return output;
}

function inferSchema(value) {
  if (Array.isArray(value)) return {type: 'array', items: value.length ? inferSchema(value[0]) : {}};
  if (value === null) return {};
  if (typeof value === 'boolean') return {type: 'boolean'};
  if (typeof value === 'number') return {type: Number.isInteger(value) ? 'integer' : 'number'};
  if (typeof value === 'object') return {type: 'object', properties: Object.fromEntries(Object.entries(value).map(([k,v]) => [k, inferSchema(v)]))};
  return {type: 'string'};
}

function flatten(items, ancestry = []) {
  const out = [];
  for (const item of items || []) {
    if (item.request) out.push({item, ancestry});
    else out.push(...flatten(item.item, [...ancestry, item.name]));
  }
  return out;
}

function groupFor(ancestry) {
  const top = ancestry[0];
  if (top === 'Auth') return ['Authentication'];
  if (top === 'Send Fax') return ['Fax', 'Send and manage faxes'];
  if (top === 'Receive Fax') return ['Fax', 'Receive faxes'];
  if (top === 'OCR & NLP') return ['Fax', 'OCR and NLP'];
  if (top === 'Labels') return ['Fax', 'Labels'];
  if (top === 'Custom Field') return ['Fax', 'Custom fields'];
  if (top === 'Automations') return ['Fax', 'Automations'];
  if (top === 'Numbers') return ['Numbers', ...ancestry.slice(1)];
  if (top === 'Contacts') return ['Contacts', ...ancestry.slice(1)];
  if (top === 'Customer eSign Documents') return ['Collect', 'Documents', ...ancestry.slice(1)];
  if (top === 'Customer eSign Templates') return ['Collect', 'Templates', ...ancestry.slice(1)];
  return ancestry;
}

const requests = flatten(source.item);
const normalized = [];
for (const {item, ancestry} of requests) {
  const oldUrl = item.request.url?.raw || '';
  const apiPath = rawPath(oldUrl);
  const name = normalizeName(item.name, ancestry);
  const endpoint = `${item.request.method} ${apiPath}`;
  let example = item.request.body?.mode === 'raw' ? parseRaw(item.request.body.raw, endpoint) : undefined;
  if (example) example = normalizeBooleans(example, [], endpoint);
  const url = `{{baseUrl}}${apiPath}` + (oldUrl.includes('?') ? `?${oldUrl.split('?')[1]}` : '');
  const request = structuredClone(item.request);
  request.url = url;
  request.auth = apiPath === '/v1/auth' ? {type: 'noauth'} : {type: 'bearer', bearer: [{key: 'token', value: '{{accessToken}}', type: 'string'}]};
  if (item.request.body?.mode === 'raw' && example) {
    request.body = {mode: 'raw', raw: JSON.stringify(example, null, 2), options: {raw: {language: 'json'}}};
    request.header = [{key: 'Content-Type', value: 'application/json', type: 'text'}];
  }
  if (oldUrl !== url) changes.push({endpoint, change: `URL normalized from ${oldUrl || '(missing)'} to ${url}.`});
  if (item.name !== name) changes.push({endpoint, change: `Request renamed from “${item.name}” to “${name}”.`});
  if (item.request.body?.mode === 'formdata' && item.request.method === 'GET') {
    delete request.body;
    changes.push({endpoint, change: 'Removed the multipart body from the GET request; query parameters remain in the URL.'});
  } else if (item.request.body?.mode === 'formdata' && apiPath !== '/v1/faxes/send') {
    issues.push({endpoint, issue: 'Source upload request uses multipart form-data.', action: 'Preserved multipart form-data because the source includes a file upload; confirm whether JSON/Base64 is also supported.'});
  }
  normalized.push({name, request, response: item.response || [], group: groupFor(ancestry), apiPath, example, original: [...ancestry, item.name].join(' > ')});
}

// Retain the already-reviewed JSON Send Fax and Forward Fax definitions.
const validatedBodies = new Map([
  ['/v1/auth', {api_secret_key: '<string>'}],
  ['/v1/faxes/send', {fax_number: '+12509997881', fax_data: [{file_name: 'document.pdf', file_url: 'https://example.com/document.pdf'}]}],
  ['/v1/faxes/forward', {job_id: '<string>', fax_number: '+12509997881'}],
]);
for (const entry of normalized) {
  if (validatedBodies.has(entry.apiPath)) {
    entry.example = validatedBodies.get(entry.apiPath);
    entry.request.body = {mode: 'raw', raw: JSON.stringify(entry.example, null, 2), options: {raw: {language: 'json'}}};
    entry.request.header = [{key: 'Content-Type', value: 'application/json', type: 'text'}];
  }
}

function nest(entries) {
  const roots = [];
  for (const entry of entries) {
    let items = roots;
    for (const folder of entry.group) {
      let node = items.find((x) => x.name === folder && x.item);
      if (!node) { node = {name: folder, item: []}; items.push(node); }
      items = node.item;
    }
    items.push({name: entry.name, request: entry.request, response: entry.response});
  }
  return roots;
}

const collection = {
  info: {...source.info, name: 'Amplify Customer API', description: 'Source-of-truth collection for Amplify customer-facing API v1 endpoints.'},
  auth: {type: 'bearer', bearer: [{key: 'token', value: '{{accessToken}}', type: 'string'}]},
  variable: [{key: 'baseUrl', value: 'https://dev-api.amplify.xyz', type: 'string'}, {key: 'accessToken', value: '', type: 'string'}],
  item: nest(normalized),
};
fs.mkdirSync(path.join(root, 'postman'), {recursive: true});
fs.writeFileSync(path.join(root, 'postman', 'Amplify Customer API.postman_collection.json'), JSON.stringify(collection, null, 2) + '\n');

const api = structuredClone(existing);
api.info.description = 'Source-of-truth contract for Amplify customer-facing API v1 endpoints migrated from the Customer API v1 Postman collection.';
api.tags = [...new Set(normalized.map((x) => x.group[0]))].map((name) => ({name}));
api.paths ||= {};
for (const entry of normalized) {
  const method = entry.request.method.toLowerCase();
  if (api.paths[entry.apiPath]?.[method]) continue;
  const operation = {
    tags: [entry.group[0]],
    operationId: `${method}${entry.apiPath.replace(/\{([^}]+)\}/g, (_,x) => ` by ${x}`).split(/[^a-zA-Z0-9]+/).filter(Boolean).map((x,i) => i ? x[0].toUpperCase()+x.slice(1) : x).join('')}`,
    summary: entry.name,
    description: `Migrated from Customer API v1: ${entry.original}.`,
    security: entry.apiPath === '/v1/auth' ? [] : [{bearerAuth: []}],
    responses: {'200': {description: 'Successful response. Response body was not included in the source collection.'}},
  };
  const params = [...entry.apiPath.matchAll(/\{([^}]+)\}/g)].map((m) => ({name: m[1], in: 'path', required: true, schema: {type: 'string'}}));
  if (params.length) operation.parameters = params;
  if (entry.request.body?.mode === 'raw') operation.requestBody = {required: false, content: {'application/json': {schema: entry.example ? inferSchema(entry.example) : {type: 'object'}, ...(entry.example ? {example: entry.example} : {})}}};
  if (entry.request.body?.mode === 'formdata') operation.requestBody = {required: false, content: {'multipart/form-data': {schema: {type: 'object', properties: Object.fromEntries((entry.request.body.formdata || []).map((x) => [x.key, {type: x.type === 'file' ? 'string' : 'string', ...(x.type === 'file' ? {format: 'binary'} : {})}]))}}}};
  api.paths[entry.apiPath] ||= {};
  api.paths[entry.apiPath][method] = operation;
}
fs.writeFileSync(path.join(root, 'openapi', 'customer-api.json'), JSON.stringify(api, null, 2) + '\n');

// Generate one concise Mintlify wrapper per operation. Request and response
// details are rendered from OpenAPI in the endpoint sidebar.
const pageRows = [];
const reviewedPages = new Map([
  ['POST /v1/auth', 'api-reference/authentication/generate-access-token'],
  ['POST /v1/faxes/send', 'api-reference/fax/post-fax-send'],
  ['POST /v1/faxes/forward', 'api-reference/fax/post-fax-forward'],
]);
for (const entry of normalized) {
  const section = slug(entry.group.join('-'));
  const file = `${entry.request.method.toLowerCase()}-${slug(entry.apiPath.replace(/^\/v1\/?/, '')) || 'root'}.mdx`;
  const rel = `api-reference/customer-v1/${section}/${file}`;
  const dir = path.join(root, path.dirname(rel));
  fs.mkdirSync(dir, {recursive: true});
  const body = `---\ntitle: "${entry.name.replace(/"/g, '\\"')}"\ndescription: "Customer API v1 endpoint."\nopenapi: "${entry.request.method} ${entry.apiPath}"\n---\n\n${entry.name}. Authenticate with a Bearer access token unless the endpoint is the authentication token exchange.\n`;
  fs.writeFileSync(path.join(root, `${rel}.mdx`), body);
  pageRows.push({...entry, rel: reviewedPages.get(`${entry.request.method} ${entry.apiPath}`) || rel});
}

const docsPath = path.join(root, 'docs.json');
const docs = JSON.parse(fs.readFileSync(docsPath, 'utf8'));
docs.api.openapi = 'openapi/customer-api.json';
const retained = docs.navigation.pages.filter((x) => ['Introduction', 'Guides', 'Webhooks'].includes(x.group));
const apiGroups = [];
for (const top of ['Authentication', 'Fax', 'Numbers', 'Contacts', 'Collect']) {
  const rows = pageRows.filter((x) => x.group[0] === top);
  const direct = rows.filter((x) => x.group.length === 1).map((x) => x.rel);
  const children = [];
  for (const subgroup of [...new Set(rows.filter((x) => x.group.length > 1).map((x) => x.group.slice(1).join(' / ')))]) {
    children.push({group: subgroup, pages: rows.filter((x) => x.group.slice(1).join(' / ') === subgroup).map((x) => x.rel)});
  }
  apiGroups.push({group: top === 'Fax' ? 'Fax API' : top === 'Numbers' ? 'Numbers API' : top === 'Contacts' ? 'Contacts API' : top === 'Collect' ? 'Collect API' : 'Authentication', pages: [...direct, ...children]});
}
docs.navigation.pages = [...retained, ...apiGroups];
fs.writeFileSync(docsPath, JSON.stringify(docs, null, 2) + '\n');

const lines = ['# Customer API v1 migration report', '', `Generated from the exported **Customer API v1** collection. ${normalized.length} customer-facing requests were migrated.`, '', '## Normalizations', '', '| Endpoint | Change |', '|---|---|'];
for (const row of changes) lines.push(`| \`${row.endpoint}\` | ${row.change.replace(/\|/g, '\\|')} |`);
lines.push('', '## Review items', '', '| Endpoint | Source issue or uncertainty | Migration treatment / follow-up |', '|---|---|---|');
for (const row of issues) lines.push(`| \`${row.endpoint}\` | ${row.issue.replace(/\|/g, '\\|')} | ${row.action.replace(/\|/g, '\\|')} |`);
lines.push('', '## Coverage by section', '', ...Object.entries(normalized.reduce((a,x) => (a[x.group[0]]=(a[x.group[0]]||0)+1,a),{})).map(([k,v]) => `- ${k}: ${v} requests`), '');
fs.writeFileSync(path.join(root, 'CUSTOMER_API_MIGRATION_REPORT.md'), lines.join('\n'));

console.log(JSON.stringify({requests: normalized.length, paths: Object.keys(api.paths).length, changes: changes.length, issues: issues.length}, null, 2));
