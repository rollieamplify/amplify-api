# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- Use "Amplify API" for the public REST API.
- Use "resource" for an API object such as a fax, document, or contact.
- Use "access token" for credentials sent in the `access_token` header.
- Use "bearer token" for credentials sent in the `Authorization` header.
- Format field names, parameter names, paths, and header names as code.

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

- Document only behavior supported by an approved API contract.
- Do not document internal implementation details or unconfirmed roadmap features.
- Do not publish real credentials, tenant data, or personally identifiable information in examples.
- Call out unsupported v1 capabilities instead of implying that they are available.
