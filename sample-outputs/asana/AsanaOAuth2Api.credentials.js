exports.AsanaOAuth2Api = class AsanaOAuth2Api {
	name = 'asanaOAuth2Api';
	extends = ['oAuth2Api'];
	displayName = 'Asana OAuth2 API';
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
			default: 'https://app.asana.com/-/oauth_authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://app.asana.com/-/oauth_token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: ['default', 'email', 'openid', 'profile'].join(' '),
		},
	];
};