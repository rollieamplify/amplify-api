# Customer API v1 migration report

Generated from the exported **Customer API v1** collection. 115 customer-facing requests were migrated.

## Normalizations

| Endpoint | Change |
|---|---|
| `POST /v1/auth` | URL normalized from {{customer_url}}auth to {{baseUrl}}/v1/auth. |
| `POST /v1/auth` | Request renamed from “Generate Token” to “Generate an access token”. |
| `POST /v1/faxes/send` | URL normalized from {{customer_url}}faxes/send to {{baseUrl}}/v1/faxes/send. |
| `POST /v1/faxes/send` | Request renamed from “Fax Send” to “Send a fax”. |
| `POST /v1/faxes/forward` | URL normalized from {{customer_url}}faxes/forward to {{baseUrl}}/v1/faxes/forward. |
| `POST /v1/faxes/forward` | Request renamed from “Fax Forward” to “Forward a fax”. |
| `POST /v1/report` | URL normalized from https://dev-api.amplify.xyz/api/customer/report to {{baseUrl}}/v1/report. |
| `POST /v1/report` | Request renamed from “Fax Report” to “Generate a fax report”. |
| `POST /v1/faxes/cancel-schedule` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/cancel-schedule to {{baseUrl}}/v1/faxes/cancel-schedule. |
| `DELETE /v1/faxes/delete` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/delete to {{baseUrl}}/v1/faxes/delete. |
| `DELETE /v1/faxes/delete` | Request renamed from “Fax Delete” to “Delete a fax”. |
| `POST /v1/faxes/resend` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/resend to {{baseUrl}}/v1/faxes/resend. |
| `POST /v1/faxes/resend` | Request renamed from “Fax Resend” to “Resend a fax”. |
| `GET /v1/faxes/schedule` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/schedule?limit=10&cursor=1 to {{baseUrl}}/v1/faxes/schedule?limit=10&cursor=1. |
| `GET /v1/faxes/schedule` | Request renamed from “Scheduled Fax List” to “List scheduled faxes”. |
| `POST /v1/faxes/lists` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/lists?limit=10&cursor=0 to {{baseUrl}}/v1/faxes/lists?limit=10&cursor=0. |
| `POST /v1/faxes/lists` | Request renamed from “Send Fax List” to “List sent faxes”. |
| `POST /v1/faxes/pending-approval` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/pending-approval?limit=10&cursor=1 to {{baseUrl}}/v1/faxes/pending-approval?limit=10&cursor=1. |
| `POST /v1/faxes/pending-approval` | Request renamed from “Pending Fax Approval List” to “List pending fax approvals”. |
| `POST /v1/faxes/approval` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/approval to {{baseUrl}}/v1/faxes/approval. |
| `POST /v1/faxes/approval` | Request renamed from “Fax Approval” to “Approve or reject a fax”. |
| `POST /v1/faxes/download` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/download to {{baseUrl}}/v1/faxes/download. |
| `POST /v1/faxes/download` | Request renamed from “Fax Download” to “Download a fax”. |
| `POST /v1/faxes/status` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/status to {{baseUrl}}/v1/faxes/status. |
| `POST /v1/faxes/status` | Request renamed from “Fax Status” to “Get fax status”. |
| `POST /v1/faxes/mark-as-done` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/mark-as-done to {{baseUrl}}/v1/faxes/mark-as-done. |
| `POST /v1/faxes/mark-as-done` | Request renamed from “Fax Mark As Done” to “Mark a fax as done”. |
| `POST /v1/faxes/mark-as-not-done` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/mark-as-not-done to {{baseUrl}}/v1/faxes/mark-as-not-done. |
| `POST /v1/faxes/mark-as-not-done` | Request renamed from “Fax Mark As Not Done” to “Mark a fax as not done”. |
| `POST /v1/faxes/transmission-receipt` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/transmission-receipt to {{baseUrl}}/v1/faxes/transmission-receipt. |
| `POST /v1/faxes/transmission-receipt` | Request renamed from “Fax Transmission Report” to “Get a fax transmission receipt”. |
| `POST /v1/faxes/cancel` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/cancel to {{baseUrl}}/v1/faxes/cancel. |
| `POST /v1/faxes/cancel` | Request renamed from “Cancel Fax” to “Cancel a fax”. |
| `POST /v1/numbers/verification/create_address` | URL normalized from {{customer_url}}numbers/verification/create_address to {{baseUrl}}/v1/numbers/verification/create_address. |
| `POST /v1/numbers/verification/upload_document` | URL normalized from {{customer_url}}numbers/verification/upload_document to {{baseUrl}}/v1/numbers/verification/upload_document. |
| `POST /v1/numbers/verification/upload_did_requirements` | URL normalized from {{customer_url}}numbers/verification/upload_did_requirements to {{baseUrl}}/v1/numbers/verification/upload_did_requirements. |
| `GET /v1/numbers/country-list` | URL normalized from {{customer_url}}numbers/country-list to {{baseUrl}}/v1/numbers/country-list. |
| `GET /v1/numbers/country-list` | Request renamed from “Country list” to “List available countries”. |
| `POST /v1/numbers/area-list` | URL normalized from {{customer_url}}numbers/area-list to {{baseUrl}}/v1/numbers/area-list. |
| `POST /v1/numbers/area-list` | Request renamed from “Area list” to “List available areas”. |
| `POST /v1/numbers/available-list` | URL normalized from {{customer_url}}numbers/available-list to {{baseUrl}}/v1/numbers/available-list. |
| `POST /v1/numbers/available-list` | Request renamed from “Available Number list” to “List available numbers”. |
| `POST /v1/numbers/search` | URL normalized from {{customer_url}}numbers/search to {{baseUrl}}/v1/numbers/search. |
| `POST /v1/numbers/search` | Request renamed from “Search number” to “Search available numbers”. |
| `POST /v1/numbers/filled_requirements` | URL normalized from {{customer_url}}numbers/filled_requirements to {{baseUrl}}/v1/numbers/filled_requirements. |
| `POST /v1/numbers/filled_requirements` | Request renamed from “Filled Requirements” to “List filled requirements”. |
| `POST /v1/numbers/purchase` | URL normalized from {{customer_url}}numbers/purchase to {{baseUrl}}/v1/numbers/purchase. |
| `POST /v1/numbers/purchase` | Request renamed from “Purchase number” to “Purchase a number”. |
| `POST /v1/numbers/purchase_with_requirements` | URL normalized from {{customer_url}}numbers/purchase_with_requirements to {{baseUrl}}/v1/numbers/purchase_with_requirements. |
| `POST /v1/numbers/purchase_with_requirements` | Request renamed from “Purchase number with requirements” to “Purchase a number with requirements”. |
| `GET /v1/numbers/list` | URL normalized from {{customer_url}}numbers/list to {{baseUrl}}/v1/numbers/list. |
| `GET /v1/numbers/list` | Removed the multipart body from the GET request; query parameters remain in the URL. |
| `POST /v1/numbers/delete` | URL normalized from {{customer_url}}numbers/delete to {{baseUrl}}/v1/numbers/delete. |
| `POST /v1/numbers/delete` | Request renamed from “Delete number” to “Delete a number”. |
| `POST /v1/faxes/received` | URL normalized from {{customer_url}}faxes/received to {{baseUrl}}/v1/faxes/received. |
| `POST /v1/faxes/received` | Request renamed from “Received Fax List” to “List received faxes”. |
| `GET /v1/faxes/all/received` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/all/received?limit=20&cursor=1 to {{baseUrl}}/v1/faxes/all/received?limit=20&cursor=1. |
| `GET /v1/faxes/all/received` | Request renamed from “Received All Fax List” to “List all received faxes”. |
| `GET /v1/faxes/all/received` | Removed the multipart body from the GET request; query parameters remain in the URL. |
| `POST /v1/faxes/assign` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/assign to {{baseUrl}}/v1/faxes/assign. |
| `POST /v1/faxes/assign` | Request renamed from “Assign Fax To User” to “Assign a fax to a user”. |
| `POST /v1/faxes/unassign` | URL normalized from https://dev-api.amplify.xyz/api/customer/faxes/unassign to {{baseUrl}}/v1/faxes/unassign. |
| `POST /v1/faxes/unassign` | Request renamed from “Un-Assign Fax To User” to “Unassign a fax from a user”. |
| `POST /v1/ai/process` | URL normalized from https://dev-api.amplify.xyz/api/customer/ai/process to {{baseUrl}}/v1/ai/process. |
| `POST /v1/ai/process` | Request renamed from “Request OCR & NLP” to “Request OCR and NLP processing”. |
| `POST /v1/ai/extract` | URL normalized from https://dev-api.amplify.xyz/api/customer/ai/extract to {{baseUrl}}/v1/ai/extract. |
| `POST /v1/ai/extract` | Request renamed from “Extract OCR & NLP Data” to “Extract OCR and NLP data”. |
| `GET /v1/contacts/group-list` | URL normalized from {{customer_url}}contacts/group-list to {{baseUrl}}/v1/contacts/group-list. |
| `GET /v1/contacts/group-list` | Request renamed from “List” to “List contact groups”. |
| `POST /v1/contacts/group-create` | URL normalized from {{customer_url}}contacts/group-create to {{baseUrl}}/v1/contacts/group-create. |
| `POST /v1/contacts/group-create` | Request renamed from “Create” to “Create a contact group”. |
| `POST /v1/contacts/group-update` | URL normalized from {{customer_url}}contacts/group-update to {{baseUrl}}/v1/contacts/group-update. |
| `POST /v1/contacts/group-update` | Request renamed from “Update” to “Update a contact group”. |
| `POST /v1/contacts/group-delete` | URL normalized from {{customer_url}}contacts/group-delete to {{baseUrl}}/v1/contacts/group-delete. |
| `POST /v1/contacts/group-delete` | Request renamed from “Delete” to “Delete a contact group”. |
| `GET /v1/contacts/custom-field/list` | URL normalized from {{customer_url}}contacts/custom-field/list to {{baseUrl}}/v1/contacts/custom-field/list. |
| `GET /v1/contacts/custom-field/list` | Request renamed from “List” to “List contact custom fields”. |
| `POST /v1/contacts/custom-field/create` | URL normalized from {{customer_url}}contacts/custom-field/create to {{baseUrl}}/v1/contacts/custom-field/create. |
| `POST /v1/contacts/custom-field/create` | Request renamed from “Create” to “Create a contact custom field”. |
| `POST /v1/contacts/custom-field/update` | URL normalized from {{customer_url}}contacts/custom-field/update to {{baseUrl}}/v1/contacts/custom-field/update. |
| `POST /v1/contacts/custom-field/update` | Request renamed from “Update” to “Update a contact custom field”. |
| `POST /v1/contacts/custom-field/delete` | URL normalized from {{customer_url}}contacts/custom-field/delete to {{baseUrl}}/v1/contacts/custom-field/delete. |
| `POST /v1/contacts/custom-field/delete` | Request renamed from “Delete” to “Delete a contact custom field”. |
| `POST /v1/contacts/create` | URL normalized from {{dev_url}}/customer/contacts/create to {{baseUrl}}/v1/contacts/create. |
| `POST /v1/contacts/create` | Request renamed from “Create” to “Create a contact”. |
| `POST /v1/contacts/upload-patient-doc` | URL normalized from {{dev_url}}/customer/contacts/upload-patient-doc to {{baseUrl}}/v1/contacts/upload-patient-doc. |
| `POST /v1/contacts/list` | URL normalized from {{dev_url}}/customer/contacts/list to {{baseUrl}}/v1/contacts/list. |
| `POST /v1/contacts/list` | Request renamed from “List” to “List contacts”. |
| `POST /v1/contacts/details` | URL normalized from {{dev_url}}/customer/contacts/details to {{baseUrl}}/v1/contacts/details. |
| `POST /v1/contacts/update` | URL normalized from {{dev_url}}/customer/contacts/update to {{baseUrl}}/v1/contacts/update. |
| `POST /v1/contacts/update` | Request renamed from “Update” to “Update a contact”. |
| `POST /v1/contacts/delete` | URL normalized from {{dev_url}}/customer/contacts/delete to {{baseUrl}}/v1/contacts/delete. |
| `POST /v1/contacts/delete` | Request renamed from “Delete” to “Delete a contact”. |
| `POST /v1/contacts/patient/save` | URL normalized from {{dev_url}}/contacts/patient/save to {{baseUrl}}/v1/contacts/patient/save. |
| `POST /v1/contacts/patient/get_matched_contacts` | URL normalized from {{dev_url}}/contacts/patient/get_matched_contacts to {{baseUrl}}/v1/contacts/patient/get_matched_contacts. |
| `GET /v1/labels/list` | URL normalized from {{customer_url}}labels/list to {{baseUrl}}/v1/labels/list. |
| `GET /v1/labels/list` | Request renamed from “Label List” to “List labels”. |
| `POST /v1/labels/assign` | URL normalized from {{customer_url}}labels/assign to {{baseUrl}}/v1/labels/assign. |
| `POST /v1/labels/assign` | Request renamed from “Assign Label To Fax” to “Assign a label to a fax”. |
| `POST /v1/labels/remove` | URL normalized from {{customer_url}}labels/remove to {{baseUrl}}/v1/labels/remove. |
| `POST /v1/labels/remove` | Request renamed from “Remove Fax Lable” to “Remove a label from a fax”. |
| `POST /v1/custom/field/list` | URL normalized from https://dev-api.amplify.xyz/api/customer/custom/field/list to {{baseUrl}}/v1/custom/field/list. |
| `POST /v1/custom/field/list` | Request renamed from “Custom Field List” to “List fax custom fields”. |
| `POST /v1/custom/field/save` | URL normalized from https://dev-api.amplify.xyz/api/customer/custom/field/save to {{baseUrl}}/v1/custom/field/save. |
| `POST /v1/custom/field/save` | Request renamed from “Add/Update Custom Field” to “Create or update a fax custom field”. |
| `POST /v1/custom/field/remove` | URL normalized from https://dev-api.amplify.xyz/api/customer/custom/field/remove to {{baseUrl}}/v1/custom/field/remove. |
| `POST /v1/custom/field/remove` | Request renamed from “Remove Custom Field List” to “Remove a fax custom field”. |
| `GET /v1/automations/list` | URL normalized from {{dev_url}}/customer/automations/list to {{baseUrl}}/v1/automations/list. |
| `POST /v1/automations/segments` | URL normalized from {{dev_url}}/customer/automations/segments to {{baseUrl}}/v1/automations/segments. |
| `POST /v1/automations/segments` | Request renamed from “segments” to “List automation segments”. |
| `POST /v1/automations/create` | URL normalized from {{dev_url}}/customer/automations/create to {{baseUrl}}/v1/automations/create. |
| `POST /v1/automations/create` | Request renamed from “Create” to “Create an automation”. |
| `POST /v1/automations/detail` | URL normalized from {{dev_url}}/customer/automations/detail to {{baseUrl}}/v1/automations/detail. |
| `POST /v1/automations/detail` | Request renamed from “detail” to “Get automation details”. |
| `POST /v1/esign_documents/{documentId}/variables` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/variables to {{baseUrl}}/v1/esign_documents/{documentId}/variables. |
| `GET /v1/esign_documents/{documentId}/variables` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/variables to {{baseUrl}}/v1/esign_documents/{documentId}/variables. |
| `GET /v1/esign_documents/{documentId}/variables/{variableId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/variables/{{variableId}} to {{baseUrl}}/v1/esign_documents/{documentId}/variables/{variableId}. |
| `PATCH /v1/esign_documents/{documentId}/variables/{variableId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/variables/{{variableId}} to {{baseUrl}}/v1/esign_documents/{documentId}/variables/{variableId}. |
| `DELETE /v1/esign_documents/{documentId}/variables/{variableId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/variables/{{variableId}} to {{baseUrl}}/v1/esign_documents/{documentId}/variables/{variableId}. |
| `POST /v1/esign_documents/{documentId}/fields` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields to {{baseUrl}}/v1/esign_documents/{documentId}/fields. |
| `GET /v1/esign_documents/{documentId}/fields` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields to {{baseUrl}}/v1/esign_documents/{documentId}/fields. |
| `GET /v1/esign_documents/{documentId}/fields/{fieldId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields/{{fieldId}} to {{baseUrl}}/v1/esign_documents/{documentId}/fields/{fieldId}. |
| `PATCH /v1/esign_documents/{documentId}/fields` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields to {{baseUrl}}/v1/esign_documents/{documentId}/fields. |
| `PATCH /v1/esign_documents/{documentId}/fields/{fieldId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields/{{fieldId}} to {{baseUrl}}/v1/esign_documents/{documentId}/fields/{fieldId}. |
| `DELETE /v1/esign_documents/{documentId}/fields/{fieldId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields/{{fieldId}} to {{baseUrl}}/v1/esign_documents/{documentId}/fields/{fieldId}. |
| `POST /v1/esign_documents/{documentId}/fields/delete` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/fields/delete to {{baseUrl}}/v1/esign_documents/{documentId}/fields/delete. |
| `POST /v1/esign_documents/{documentId}/theme` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/theme to {{baseUrl}}/v1/esign_documents/{documentId}/theme. |
| `POST /v1/esign_documents/{documentId}/theme` | Request renamed from “Save Theme (POST)” to “Create document theme”. |
| `GET /v1/esign_documents/{documentId}/theme` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/theme to {{baseUrl}}/v1/esign_documents/{documentId}/theme. |
| `PATCH /v1/esign_documents/{documentId}/theme` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/theme to {{baseUrl}}/v1/esign_documents/{documentId}/theme. |
| `PATCH /v1/esign_documents/{documentId}/theme` | Request renamed from “Save Theme (PATCH)” to “Update document theme”. |
| `DELETE /v1/esign_documents/{documentId}/theme` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/theme to {{baseUrl}}/v1/esign_documents/{documentId}/theme. |
| `POST /v1/esign_documents/{documentId}/field_rule` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/field_rule to {{baseUrl}}/v1/esign_documents/{documentId}/field_rule. |
| `GET /v1/esign_documents/{documentId}/field_rule` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/field_rule to {{baseUrl}}/v1/esign_documents/{documentId}/field_rule. |
| `PATCH /v1/esign_documents/{documentId}/field_rule/{fieldRuleId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/field_rule/{{fieldRuleId}} to {{baseUrl}}/v1/esign_documents/{documentId}/field_rule/{fieldRuleId}. |
| `DELETE /v1/esign_documents/{documentId}/field_rule/{fieldRuleId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/field_rule/{{fieldRuleId}} to {{baseUrl}}/v1/esign_documents/{documentId}/field_rule/{fieldRuleId}. |
| `GET /v1/esign_documents` | URL normalized from {{customer_url}}esign_documents to {{baseUrl}}/v1/esign_documents. |
| `POST /v1/esign_documents` | has_sign_order normalized from 1 to boolean true. |
| `POST /v1/esign_documents` | URL normalized from {{baseUrl}}/esign_documents to {{baseUrl}}/v1/esign_documents. |
| `GET /v1/esign_documents/{documentId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}} to {{baseUrl}}/v1/esign_documents/{documentId}. |
| `GET /v1/esign_documents/{documentId}` | Request renamed from “Document Status” to “Get document status”. |
| `PATCH /v1/esign_documents/{documentId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}} to {{baseUrl}}/v1/esign_documents/{documentId}. |
| `POST /v1/esign_documents/{documentId}/send` | is_from_copy_link normalized from 0 to boolean false. |
| `POST /v1/esign_documents/{documentId}/send` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/send to {{baseUrl}}/v1/esign_documents/{documentId}/send. |
| `GET /v1/esign_documents/{documentId}/download` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/download to {{baseUrl}}/v1/esign_documents/{documentId}/download. |
| `DELETE /v1/esign_documents/{documentId}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}} to {{baseUrl}}/v1/esign_documents/{documentId}. |
| `DELETE /v1/esign_documents/{documentId}/pages/{pageNumber}` | URL normalized from {{baseUrl}}/esign_documents/{{documentId}}/pages/{{pageNumber}} to {{baseUrl}}/v1/esign_documents/{documentId}/pages/{pageNumber}. |
| `POST /v1/esign_templates/{templateId}/variables` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/variables to {{baseUrl}}/v1/esign_templates/{templateId}/variables. |
| `GET /v1/esign_templates/{templateId}/variables` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/variables to {{baseUrl}}/v1/esign_templates/{templateId}/variables. |
| `GET /v1/esign_templates/{templateId}/variables/{templateVariableId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/variables/{{templateVariableId}} to {{baseUrl}}/v1/esign_templates/{templateId}/variables/{templateVariableId}. |
| `PATCH /v1/esign_templates/{templateId}/variables/{templateVariableId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/variables/{{templateVariableId}} to {{baseUrl}}/v1/esign_templates/{templateId}/variables/{templateVariableId}. |
| `DELETE /v1/esign_templates/{templateId}/variables/{templateVariableId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/variables/{{templateVariableId}} to {{baseUrl}}/v1/esign_templates/{templateId}/variables/{templateVariableId}. |
| `POST /v1/esign_templates/{templateId}/theme` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/theme to {{baseUrl}}/v1/esign_templates/{templateId}/theme. |
| `POST /v1/esign_templates/{templateId}/theme` | Request renamed from “Save Template Theme (POST)” to “Create template theme”. |
| `GET /v1/esign_templates/{templateId}/theme` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/theme to {{baseUrl}}/v1/esign_templates/{templateId}/theme. |
| `PATCH /v1/esign_templates/{templateId}/theme` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/theme to {{baseUrl}}/v1/esign_templates/{templateId}/theme. |
| `PATCH /v1/esign_templates/{templateId}/theme` | Request renamed from “Save Template Theme (PATCH)” to “Update template theme”. |
| `DELETE /v1/esign_templates/{templateId}/theme` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/theme to {{baseUrl}}/v1/esign_templates/{templateId}/theme. |
| `POST /v1/esign_templates/{templateId}/fields` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields to {{baseUrl}}/v1/esign_templates/{templateId}/fields. |
| `GET /v1/esign_templates/{templateId}/fields` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields to {{baseUrl}}/v1/esign_templates/{templateId}/fields. |
| `GET /v1/esign_templates/{templateId}/fields/{fieldTemplateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields/{{fieldTemplateId}} to {{baseUrl}}/v1/esign_templates/{templateId}/fields/{fieldTemplateId}. |
| `PATCH /v1/esign_templates/{templateId}/fields` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields to {{baseUrl}}/v1/esign_templates/{templateId}/fields. |
| `PATCH /v1/esign_templates/{templateId}/fields/{fieldTemplateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields/{{fieldTemplateId}} to {{baseUrl}}/v1/esign_templates/{templateId}/fields/{fieldTemplateId}. |
| `DELETE /v1/esign_templates/{templateId}/fields/{fieldTemplateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields/{{fieldTemplateId}} to {{baseUrl}}/v1/esign_templates/{templateId}/fields/{fieldTemplateId}. |
| `POST /v1/esign_templates/{templateId}/fields/delete` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/fields/delete to {{baseUrl}}/v1/esign_templates/{templateId}/fields/delete. |
| `POST /v1/esign_templates/{templateId}/field_rule` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/field_rule to {{baseUrl}}/v1/esign_templates/{templateId}/field_rule. |
| `GET /v1/esign_templates/{templateId}/field_rule` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/field_rule to {{baseUrl}}/v1/esign_templates/{templateId}/field_rule. |
| `PATCH /v1/esign_templates/{templateId}/field_rule/{templateFieldRuleId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/field_rule/{{templateFieldRuleId}} to {{baseUrl}}/v1/esign_templates/{templateId}/field_rule/{templateFieldRuleId}. |
| `DELETE /v1/esign_templates/{templateId}/field_rule/{templateFieldRuleId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/field_rule/{{templateFieldRuleId}} to {{baseUrl}}/v1/esign_templates/{templateId}/field_rule/{templateFieldRuleId}. |
| `GET /v1/esign_templates` | URL normalized from {{baseUrl}}/esign_templates to {{baseUrl}}/v1/esign_templates. |
| `POST /v1/esign_templates` | URL normalized from {{baseUrl}}/esign_templates to {{baseUrl}}/v1/esign_templates. |
| `GET /v1/esign_templates/{templateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}} to {{baseUrl}}/v1/esign_templates/{templateId}. |
| `GET /v1/esign_templates/{templateId}` | Request renamed from “Template Details” to “Get template details”. |
| `PATCH /v1/esign_templates/{templateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}} to {{baseUrl}}/v1/esign_templates/{templateId}. |
| `DELETE /v1/esign_templates/{templateId}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}} to {{baseUrl}}/v1/esign_templates/{templateId}. |
| `DELETE /v1/esign_templates/{templateId}/pages/{pageNumber}` | URL normalized from {{baseUrl}}/esign_templates/{{templateId}}/pages/{{pageNumber}} to {{baseUrl}}/v1/esign_templates/{templateId}/pages/{pageNumber}. |

## Review items

| Endpoint | Source issue or uncertainty | Migration treatment / follow-up |
|---|---|---|
| `POST /v1/numbers/verification/upload_document` | Source upload request uses multipart form-data. | Preserved multipart form-data because the source includes a file upload; confirm whether JSON/Base64 is also supported. |
| `POST /v1/contacts/upload-patient-doc` | Source upload request uses multipart form-data. | Preserved multipart form-data because the source includes a file upload; confirm whether JSON/Base64 is also supported. |

## Coverage by section

- Authentication: 1 requests
- Fax: 32 requests
- Numbers: 12 requests
- Contacts: 16 requests
- Collect: 54 requests
