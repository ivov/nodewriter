exports.N8nApi = class N8nApi {
	name = 'n8nApi';
	displayName = 'N8n API';
	documentationUrl = 'https://docs.n8n.io/api/';
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
				'X-N8N-API-KEY': '={{ $credentials.apiKey }}',
			},
		},
	};
};