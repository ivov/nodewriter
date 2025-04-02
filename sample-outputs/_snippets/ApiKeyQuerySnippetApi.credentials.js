exports.ApiKeyQuerySnippetApi = class ApiKeyQuerySnippetApi {
	name = 'apiKeyQuerySnippetApi';
	displayName = 'API Key Query Snippet API';
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
			qs: {
				api_key: '={{ $credentials.apiKey }}',
			},
		},
	};
};