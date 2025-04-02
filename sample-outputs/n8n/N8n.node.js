exports.N8n = class N8n {
	description = {
		displayName: 'N8n',
		name: 'n8n',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'n8n Public API',
		defaults: {
			name: 'N8n',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'n8nApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '/api/v1',
			headers: {
				'Content-Type': 'application/json',
			},
			returnFullResponse: true,
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'audit',
				options: [
					{
						name: 'Audit',
						value: 'audit',
					},
					{
						name: 'Credential',
						value: 'credential',
					},
					{
						name: 'Execution',
						value: 'execution',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Workflow',
						value: 'workflow',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Source Control',
						value: 'sourceControl',
					},
					{
						name: 'Variable',
						value: 'variable',
					},
					{
						name: 'Project',
						value: 'project',
					},
				],
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postAudit',
				options: [
					{
						name: 'Generate an audit',
						value: 'postAudit',
						action: 'Generate a security audit for your n8n instance',
						routing: {
							request: {
								method: 'POST',
								url: '/audit',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['audit'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postCredentials',
				options: [
					{
						name: 'Create a credential',
						value: 'postCredentials',
						action: 'Creates a credential that can be used by nodes of the specified type',
						routing: {
							request: {
								method: 'POST',
								url: '/credentials',
							},
						},
					},
					{
						name: 'Delete credential by ID',
						value: 'deleteCredential',
						action:
							'Deletes a credential from your instance. You must be the owner of the credentials',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/credentials/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Show credential data schema',
						value: 'getCredentialsSchemaCredentialtypename',
						action: 'Show credential data schema',
						routing: {
							request: {
								method: 'GET',
								url: '=/credentials/schema/{{ $parameter["credentialTypeName"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['credential'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getExecutions',
				options: [
					{
						name: 'Retrieve all executions',
						value: 'getExecutions',
						action: 'Retrieve all executions from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '/executions',
							},
						},
					},
					{
						name: 'Retrieve an execution',
						value: 'getExecutionsId',
						action: 'Retrieve an execution from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '=/executions/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Delete an execution',
						value: 'deleteExecutionsId',
						action: 'Deletes an execution from your instance',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/executions/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['execution'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postTags',
				options: [
					{
						name: 'Create a tag',
						value: 'postTags',
						action: 'Create a tag in your instance',
						routing: {
							request: {
								method: 'POST',
								url: '/tags',
							},
						},
					},
					{
						name: 'Retrieve all tags',
						value: 'getTags',
						action: 'Retrieve all tags from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '/tags',
							},
						},
					},
					{
						name: 'Retrieves a tag',
						value: 'getTagsId',
						action: 'Retrieves a tag',
						routing: {
							request: {
								method: 'GET',
								url: '=/tags/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Delete a tag',
						value: 'deleteTagsId',
						action: 'Deletes a tag',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/tags/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a tag',
						value: 'putTagsId',
						action: 'Update a tag',
						routing: {
							request: {
								method: 'PUT',
								url: '=/tags/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['tag'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postWorkflows',
				options: [
					{
						name: 'Create a workflow',
						value: 'postWorkflows',
						action: 'Create a workflow in your instance',
						routing: {
							request: {
								method: 'POST',
								url: '/workflows',
							},
						},
					},
					{
						name: 'Retrieve all workflows',
						value: 'getWorkflows',
						action: 'Retrieve all workflows from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '/workflows',
							},
						},
					},
					{
						name: 'Retrieves a workflow',
						value: 'getWorkflowsId',
						action: 'Retrieves a workflow',
						routing: {
							request: {
								method: 'GET',
								url: '=/workflows/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Delete a workflow',
						value: 'deleteWorkflowsId',
						action: 'Deletes a workflow',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/workflows/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a workflow',
						value: 'putWorkflowsId',
						action: 'Update a workflow',
						routing: {
							request: {
								method: 'PUT',
								url: '=/workflows/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Activate a workflow',
						value: 'postWorkflowsIdActivate',
						action: 'Active a workflow',
						routing: {
							request: {
								method: 'POST',
								url: '=/workflows/{{ $parameter["id"] }}/activate',
							},
						},
					},
					{
						name: 'Deactivate a workflow',
						value: 'postWorkflowsIdDeactivate',
						action: 'Deactivate a workflow',
						routing: {
							request: {
								method: 'POST',
								url: '=/workflows/{{ $parameter["id"] }}/deactivate',
							},
						},
					},
					{
						name: 'Transfer a workflow to another project',
						value: 'putWorkflowsIdTransfer',
						action: 'Transfer a workflow to another project',
						routing: {
							request: {
								method: 'PUT',
								url: '=/workflows/{{ $parameter["id"] }}/transfer',
							},
						},
					},
					{
						name: 'Transfer a credential to another project',
						value: 'putCredentialsIdTransfer',
						action: 'Transfer a credential to another project',
						routing: {
							request: {
								method: 'PUT',
								url: '=/credentials/{{ $parameter["id"] }}/transfer',
							},
						},
					},
					{
						name: 'Get workflow tags',
						value: 'getWorkflowsIdTags',
						action: 'Get workflow tags',
						routing: {
							request: {
								method: 'GET',
								url: '=/workflows/{{ $parameter["id"] }}/tags',
							},
						},
					},
					{
						name: 'Update tags of a workflow',
						value: 'putWorkflowsIdTags',
						action: 'Update tags of a workflow',
						routing: {
							request: {
								method: 'PUT',
								url: '=/workflows/{{ $parameter["id"] }}/tags',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['workflow'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getUsers',
				options: [
					{
						name: 'Retrieve all users',
						value: 'getUsers',
						action: 'Retrieve all users from your instance. Only available for the instance owner',
						routing: {
							request: {
								method: 'GET',
								url: '/users',
							},
						},
					},
					{
						name: 'Create multiple users',
						value: 'postUsers',
						action: 'Create one or more users',
						routing: {
							request: {
								method: 'POST',
								url: '/users',
							},
						},
					},
					{
						name: 'Get user by ID/Email',
						value: 'getUsersId',
						action: 'Retrieve a user from your instance. Only available for the instance owner',
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Delete a user',
						value: 'deleteUsersId',
						action: 'Delete a user from your instance',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/users/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: "Change a user's global role",
						value: 'patchUsersIdRole',
						action: "Change a user's global role",
						routing: {
							request: {
								method: 'PATCH',
								url: '=/users/{{ $parameter["id"] }}/role',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['user'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postSourceControlPull',
				options: [
					{
						name: 'Pull changes from the remote repository',
						value: 'postSourceControlPull',
						action:
							'Requires the Source Control feature to be licensed and connected to a repository',
						routing: {
							request: {
								method: 'POST',
								url: '/source-control/pull',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['sourceControl'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postVariables',
				options: [
					{
						name: 'Create a variable',
						value: 'postVariables',
						action: 'Create a variable in your instance',
						routing: {
							request: {
								method: 'POST',
								url: '/variables',
							},
						},
					},
					{
						name: 'Retrieve variables',
						value: 'getVariables',
						action: 'Retrieve variables from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '/variables',
							},
						},
					},
					{
						name: 'Delete a variable',
						value: 'deleteVariablesId',
						action: 'Delete a variable from your instance',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/variables/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['variable'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postProjects',
				options: [
					{
						name: 'Create a project',
						value: 'postProjects',
						action: 'Create a project in your instance',
						routing: {
							request: {
								method: 'POST',
								url: '/projects',
							},
						},
					},
					{
						name: 'Retrieve projects',
						value: 'getProjects',
						action: 'Retrieve projects from your instance',
						routing: {
							request: {
								method: 'GET',
								url: '/projects',
							},
						},
					},
					{
						name: 'Delete a project',
						value: 'deleteProjectsProjectid',
						action: 'Delete a project from your instance',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/projects/{{ $parameter["projectId"] }}',
							},
						},
					},
					{
						name: 'Update a project',
						value: 'putProjectsProjectid',
						action: 'Update a project',
						routing: {
							request: {
								method: 'PUT',
								url: '/projects/{projectId}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['project'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['audit'],
						operation: ['postAudit'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Additional Options',
						name: 'additionalOptions',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'additionalOptions',
							},
						},
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: "e.g. Joe's Github Credentials",
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['postCredentials'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. github',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['postCredentials'],
					},
				},
			},
			{
				displayName: 'Data',
				name: 'data',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'data',
					},
				},
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['postCredentials'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['postCredentials'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'e.g. R2DjclaysHbqn778',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Created At',
						name: 'createdAt',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2022-04-29T11:02:29.842Z',
						routing: {
							send: {
								type: 'body',
								property: 'createdAt',
							},
						},
					},
					{
						displayName: 'Updated At',
						name: 'updatedAt',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2022-04-29T11:02:29.842Z',
						routing: {
							send: {
								type: 'body',
								property: 'updatedAt',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The credential ID that needs to be deleted',
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['deleteCredential'],
					},
				},
			},
			{
				displayName: 'Credential Type Name',
				name: 'credentialTypeName',
				type: 'string',
				default: '',
				required: true,
				description: 'The credential type name that you want to get the schema for',
				displayOptions: {
					show: {
						resource: ['credential'],
						operation: ['getCredentialsSchemaCredentialtypename'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['execution'],
						operation: ['getExecutions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Include Data',
						name: 'includeData',
						type: 'boolean',
						default: false,
						description: "Whether or not to include the execution's detailed data",
						routing: {
							send: {
								type: 'query',
								property: 'includeData',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'error',
						description: 'Status to filter the executions by',
						options: [
							{
								name: 'Error',
								value: 'error',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Waiting',
								value: 'waiting',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
							},
						},
					},
					{
						displayName: 'Workflow ID',
						name: 'workflowId',
						type: 'string',
						default: '',
						description: 'Workflow to filter the executions by',
						routing: {
							send: {
								type: 'query',
								property: 'workflowId',
							},
						},
					},
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'projectId',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'The ID of the execution',
				displayOptions: {
					show: {
						resource: ['execution'],
						operation: ['getExecutionsId'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['execution'],
						operation: ['getExecutionsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Include Data',
						name: 'includeData',
						type: 'boolean',
						default: false,
						description: "Whether or not to include the execution's detailed data",
						routing: {
							send: {
								type: 'query',
								property: 'includeData',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'The ID of the execution',
				displayOptions: {
					show: {
						resource: ['execution'],
						operation: ['deleteExecutionsId'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Production',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['postTags'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['postTags'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2tUt1wbLX592XDdX',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Created At',
						name: 'createdAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'createdAt',
							},
						},
					},
					{
						displayName: 'Updated At',
						name: 'updatedAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'updatedAt',
							},
						},
					},
				],
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['getTags'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the tag',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['getTagsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the tag',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['deleteTagsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the tag',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['putTagsId'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Production',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['putTagsId'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['putTagsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2tUt1wbLX592XDdX',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Created At',
						name: 'createdAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'createdAt',
							},
						},
					},
					{
						displayName: 'Updated At',
						name: 'updatedAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'updatedAt',
							},
						},
					},
				],
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Workflow 1',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflows'],
					},
				},
			},
			{
				displayName: 'Nodes',
				name: 'nodes',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'nodes',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflows'],
					},
				},
			},
			{
				displayName: 'Connections',
				name: 'connections',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'connections',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflows'],
					},
				},
			},
			{
				displayName: 'Settings',
				name: 'settings',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'settings',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflows'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflows'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2tUt1wbLX592XDdX',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Active',
						name: 'active',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'body',
								property: 'active',
							},
						},
					},
					{
						displayName: 'Created At',
						name: 'createdAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'createdAt',
							},
						},
					},
					{
						displayName: 'Updated At',
						name: 'updatedAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'updatedAt',
							},
						},
					},
					{
						displayName: 'Static Data',
						name: 'staticData',
						type: 'string',
						default: '',
						placeholder: 'e.g. {"lastId":1}',
						routing: {
							send: {
								type: 'body',
								property: 'staticData',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'tags',
							},
						},
					},
				],
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['getWorkflows'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Active',
						name: 'active',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'query',
								property: 'active',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'projectId',
							},
						},
					},
					{
						displayName: 'Exclude Pinned Data',
						name: 'excludePinnedData',
						type: 'boolean',
						default: false,
						description: 'Set this to avoid retrieving pinned data',
						routing: {
							send: {
								type: 'query',
								property: 'excludePinnedData',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['getWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['getWorkflowsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Exclude Pinned Data',
						name: 'excludePinnedData',
						type: 'boolean',
						default: false,
						description: 'Set this to avoid retrieving pinned data',
						routing: {
							send: {
								type: 'query',
								property: 'excludePinnedData',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['deleteWorkflowsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Workflow 1',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Nodes',
				name: 'nodes',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'nodes',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Connections',
				name: 'connections',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'connections',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Settings',
				name: 'settings',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'settings',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						placeholder: 'e.g. 2tUt1wbLX592XDdX',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Active',
						name: 'active',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'body',
								property: 'active',
							},
						},
					},
					{
						displayName: 'Created At',
						name: 'createdAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'createdAt',
							},
						},
					},
					{
						displayName: 'Updated At',
						name: 'updatedAt',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'updatedAt',
							},
						},
					},
					{
						displayName: 'Static Data',
						name: 'staticData',
						type: 'string',
						default: '',
						placeholder: 'e.g. {"lastId":1}',
						routing: {
							send: {
								type: 'body',
								property: 'staticData',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'tags',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflowsIdActivate'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['postWorkflowsIdDeactivate'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsIdTransfer'],
					},
				},
			},
			{
				displayName: 'Destination Project ID',
				name: 'destinationProjectId',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the project to transfer the workflow to',
				routing: {
					send: {
						type: 'body',
						property: 'destinationProjectId',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsIdTransfer'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the credential',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putCredentialsIdTransfer'],
					},
				},
			},
			{
				displayName: 'Destination Project ID',
				name: 'destinationProjectId',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the project to transfer the credential to',
				routing: {
					send: {
						type: 'body',
						property: 'destinationProjectId',
					},
				},
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putCredentialsIdTransfer'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['getWorkflowsIdTags'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the workflow',
				displayOptions: {
					show: {
						resource: ['workflow'],
						operation: ['putWorkflowsIdTags'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUsers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
					{
						displayName: 'Include Role',
						name: 'includeRole',
						type: 'boolean',
						default: false,
						description: "Whether to include the user's role or not",
						routing: {
							send: {
								type: 'query',
								property: 'includeRole',
							},
						},
					},
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'projectId',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID or email of the user',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUsersId'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUsersId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Include Role',
						name: 'includeRole',
						type: 'boolean',
						default: false,
						description: "Whether to include the user's role or not",
						routing: {
							send: {
								type: 'query',
								property: 'includeRole',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID or email of the user',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['deleteUsersId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID or email of the user',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['patchUsersIdRole'],
					},
				},
			},
			{
				displayName: 'New Role Name',
				name: 'newRoleName',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'newRoleName',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['patchUsersIdRole'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['sourceControl'],
						operation: ['postSourceControlPull'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Force',
						name: 'force',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'body',
								property: 'force',
							},
						},
					},
					{
						displayName: 'Variables',
						name: 'variables',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'variables',
							},
						},
					},
				],
			},
			{
				displayName: 'Key',
				name: 'key',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'key',
					},
				},
				displayOptions: {
					show: {
						resource: ['variable'],
						operation: ['postVariables'],
					},
				},
			},
			{
				displayName: 'Value',
				name: 'value',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. test',
				routing: {
					send: {
						type: 'body',
						property: 'value',
					},
				},
				displayOptions: {
					show: {
						resource: ['variable'],
						operation: ['postVariables'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['variable'],
						operation: ['postVariables'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'type',
							},
						},
					},
				],
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['variable'],
						operation: ['getVariables'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
				],
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the variable',
				displayOptions: {
					show: {
						resource: ['variable'],
						operation: ['deleteVariablesId'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['postProjects'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['postProjects'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'type',
							},
						},
					},
				],
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getProjects'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 100,
						description: 'The maximum number of items to return',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Cursor',
						name: 'cursor',
						type: 'string',
						default: '',
						description:
							"Paginate by setting the cursor parameter to the nextCursor attribute returned by the previous request's response. Defaul...",
						routing: {
							send: {
								type: 'query',
								property: 'cursor',
							},
						},
					},
				],
			},
			{
				displayName: 'Project ID',
				name: 'projectId',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the project',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['deleteProjectsProjectid'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['putProjectsProjectid'],
					},
				},
			},
			{
				displayName: 'Additional Options',
				name: 'additionalOptions',
				type: 'collection',
				placeholder: 'Add Option',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['putProjectsProjectid'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'body',
								property: 'type',
							},
						},
					},
				],
			},
		],
	};
};