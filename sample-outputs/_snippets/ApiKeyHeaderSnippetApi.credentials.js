exports.ApiKeyHeaderSnippetApi = class ApiKeyHeaderSnippetApi {
	name = 'apiKeyHeaderSnippetApi';
	displayName = 'API Key Header Snippet API';
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/';
	properties = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{ $credentials.apiKey }}',
			},
		},
	};
};