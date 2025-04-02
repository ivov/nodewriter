exports.HttpBearerSnippetApi = class HttpBearerSnippetApi {
	name = 'httpBearerSnippetApi';
	displayName = 'Http Bearer Snippet API';
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/';
	properties = [
		{
			displayName: 'Bearer Token',
			name: 'token',
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
				Authorization: 'Bearer {{ $credentials.token }}',
			},
		},
	};
};