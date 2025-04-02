exports.OAuth2SnippetOAuth2Api = class OAuth2SnippetOAuth2Api {
	name = 'oAuth2SnippetOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'OAuth2 Snippet OAuth2 API';
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/';
	properties = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://snippet.com/oauth2/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://api.snippet.com/oauth2/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
	];
};