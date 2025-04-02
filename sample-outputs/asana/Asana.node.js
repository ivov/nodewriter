exports.Asana = class Asana {
	description = {
		displayName: 'Asana',
		name: 'asana',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description:
			'This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is gene...',
		defaults: {
			name: 'Asana',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'asanaOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['asanaOAuth2Api'],
					},
				},
			},
			{
				name: 'asanaApi',
				required: true,
				displayOptions: {
					show: {
						authentication: ['asanaApi'],
					},
				},
			},
		],
		requestDefaults: {
			baseURL: 'https://app.asana.com/api/1.0',
			headers: {
				'Content-Type': 'application/json',
			},
			returnFullResponse: true,
		},
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'Asana OAuth2 API',
						value: 'asanaOAuth2Api',
					},
					{
						name: 'Asana API',
						value: 'asanaApi',
					},
				],
				default: 'asanaOAuth2Api',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'attachment',
				options: [
					{
						name: 'Attachment',
						value: 'attachment',
					},
					{
						name: 'Batch API',
						value: 'batchApi',
					},
					{
						name: 'Custom Field',
						value: 'customField',
					},
					{
						name: 'Event',
						value: 'event',
					},
					{
						name: 'Goal Relationship',
						value: 'goalRelationship',
					},
					{
						name: 'Goal',
						value: 'goal',
					},
					{
						name: 'Job',
						value: 'job',
					},
					{
						name: 'Organization Export',
						value: 'organizationExport',
					},
					{
						name: 'Portfolio Membership',
						value: 'portfolioMembership',
					},
					{
						name: 'Portfolio',
						value: 'portfolio',
					},
					{
						name: 'Custom Field Setting',
						value: 'customFieldSetting',
					},
					{
						name: 'Project Brief',
						value: 'projectBrief',
					},
					{
						name: 'Project Membership',
						value: 'projectMembership',
					},
					{
						name: 'Project Status',
						value: 'projectStatus',
					},
					{
						name: 'Project Template',
						value: 'projectTemplate',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Section',
						value: 'section',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'Status Update',
						value: 'statusUpdate',
					},
					{
						name: 'Story',
						value: 'story',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Team Membership',
						value: 'teamMembership',
					},
					{
						name: 'Team',
						value: 'team',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Time Period',
						value: 'timePeriod',
					},
					{
						name: 'User Task List',
						value: 'userTaskList',
					},
					{
						name: 'Workspace Membership',
						value: 'workspaceMembership',
					},
					{
						name: 'Webhook',
						value: 'webhook',
					},
					{
						name: 'Workspace',
						value: 'workspace',
					},
					{
						name: 'Audit Log API',
						value: 'auditLogApi',
					},
					{
						name: 'Typeahead',
						value: 'typeahead',
					},
				],
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getAttachmentsForObject',
				options: [
					{
						name: 'Get attachments from an object',
						value: 'getAttachmentsForObject',
						action:
							'Returns the compact records for all attachments on the object.  There are three possible `parent` values for this reques...',
						routing: {
							request: {
								method: 'GET',
								url: '/attachments',
							},
						},
					},
					{
						name: 'Upload an attachment',
						value: 'createAttachmentForObject',
						action:
							'Upload an attachment.  This method uploads an attachment on an object and returns the compact record for the created att...',
						routing: {
							request: {
								method: 'POST',
								url: '/attachments',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Delete an attachment',
						value: 'deleteAttachment',
						action: 'Deletes a specific, existing attachment.  Returns an empty data record',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/attachments/{{ $parameter["attachment_gid"] }}',
							},
						},
					},
					{
						name: 'Get an attachment',
						value: 'getAttachment',
						action: 'Get the full record for a single attachment',
						routing: {
							request: {
								method: 'GET',
								url: '=/attachments/{{ $parameter["attachment_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['attachment'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'createBatchRequest',
				options: [
					{
						name: 'Submit parallel requests',
						value: 'createBatchRequest',
						action: "Make multiple requests in parallel to Asana's API",
						routing: {
							request: {
								method: 'POST',
								url: '/batch',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['batchApi'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'createCustomField',
				options: [
					{
						name: 'Create a custom field',
						value: 'createCustomField',
						action:
							'Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and thi...',
						routing: {
							request: {
								method: 'POST',
								url: '/custom_fields',
							},
						},
					},
					{
						name: 'Delete a custom field',
						value: 'deleteCustomField',
						action:
							'A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field. Locked cus...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/custom_fields/{{ $parameter["custom_field_gid"] }}',
							},
						},
					},
					{
						name: 'Get a custom field',
						value: 'getCustomField',
						action:
							'Get the complete definition of a custom field™s metadata.  Since custom fields can be defined for one of a number of typ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/custom_fields/{{ $parameter["custom_field_gid"] }}',
							},
						},
					},
					{
						name: 'Update a custom field',
						value: 'updateCustomField',
						action:
							'A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fiel...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/custom_fields/{{ $parameter["custom_field_gid"] }}',
							},
						},
					},
					{
						name: 'Create an enum option',
						value: 'createEnumOptionForCustomField',
						action:
							'Creates an enum option and adds it to this custom field™s list of enum options. A custom field can have at most 500 enum...',
						routing: {
							request: {
								method: 'POST',
								url: '=/custom_fields/{{ $parameter["custom_field_gid"] }}/enum_options',
							},
						},
					},
					{
						name: "Reorder a custom field's enum",
						value: 'insertEnumOptionForCustomField',
						action:
							'Moves a particular enum option to be either before or after another specified enum option in the custom field. Locked cu...',
						routing: {
							request: {
								method: 'POST',
								url: '=/custom_fields/{{ $parameter["custom_field_gid"] }}/enum_options/insert',
							},
						},
					},
					{
						name: 'Update an enum option',
						value: 'updateEnumOption',
						action:
							'Updates an existing enum option. Enum custom fields require at least one enabled enum option. Locked custom fields can o...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/enum_options/{{ $parameter["enum_option_gid"] }}',
							},
						},
					},
					{
						name: "Get a workspace's custom fields",
						value: 'getCustomFieldsForWorkspace',
						action:
							'Returns a list of the compact representation of all of the custom fields in a workspace',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/custom_fields',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['customField'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getEvents',
				options: [
					{
						name: 'Get events on a resource',
						value: 'getEvents',
						action:
							'Returns the full record for all events that have occurred since the sync token was created.  A `GET` request to the endp...',
						routing: {
							request: {
								method: 'GET',
								url: '/events',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['event'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getGoalRelationships',
				options: [
					{
						name: 'Get goal relationships',
						value: 'getGoalRelationships',
						action: 'Returns compact goal relationship records',
						routing: {
							request: {
								method: 'GET',
								url: '/goal_relationships',
							},
						},
					},
					{
						name: 'Get a goal relationship',
						value: 'getGoalRelationship',
						action:
							'Returns the complete updated goal relationship record for a single goal relationship',
						routing: {
							request: {
								method: 'GET',
								url: '=/goal_relationships/{{ $parameter["goal_relationship_gid"] }}',
							},
						},
					},
					{
						name: 'Update a goal relationship',
						value: 'updateGoalRelationship',
						action:
							'An existing goal relationship can be updated by making a PUT request on the URL for that goal relationship. Only the fie...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/goal_relationships/{{ $parameter["goal_relationship_gid"] }}',
							},
						},
					},
					{
						name: 'Add a supporting goal relationship',
						value: 'addSupportingRelationship',
						action:
							'Creates a goal relationship by adding a supporting resource to a given goal.  Returns the newly created goal relationshi...',
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/addSupportingRelationship',
							},
						},
					},
					{
						name: 'Removes a supporting goal relationship',
						value: 'removeSupportingRelationship',
						action: 'Removes a goal relationship for a given parent goal',
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/removeSupportingRelationship',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getGoals',
				options: [
					{
						name: 'Get goals',
						value: 'getGoals',
						action: 'Returns compact goal records',
						routing: {
							request: {
								method: 'GET',
								url: '/goals',
							},
						},
					},
					{
						name: 'Create a goal',
						value: 'createGoal',
						action:
							'Creates a new goal in a workspace or team.  Returns the full record of the newly created goal',
						routing: {
							request: {
								method: 'POST',
								url: '/goals',
							},
						},
					},
					{
						name: 'Delete a goal',
						value: 'deleteGoal',
						action:
							'A specific, existing goal can be deleted by making a DELETE request on the URL for that goal.  Returns an empty data rec...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/goals/{{ $parameter["goal_gid"] }}',
							},
						},
					},
					{
						name: 'Get a goal',
						value: 'getGoal',
						action: 'Returns the complete goal record for a single goal',
						routing: {
							request: {
								method: 'GET',
								url: '=/goals/{{ $parameter["goal_gid"] }}',
							},
						},
					},
					{
						name: 'Update a goal',
						value: 'updateGoal',
						action:
							'An existing goal can be updated by making a PUT request on the URL for that goal. Only the fields provided in the `data`...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/goals/{{ $parameter["goal_gid"] }}',
							},
						},
					},
					{
						name: 'Add a collaborator to a goal',
						value: 'addFollowers',
						action:
							'Adds followers to a goal. Returns the goal the followers were added to. Each goal can be associated with zero or more fo...',
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/addFollowers',
							},
						},
					},
					{
						name: 'Get parent goals from a goal',
						value: 'getParentGoalsForGoal',
						action: 'Returns a compact representation of all of the parent goals of a goal',
						routing: {
							request: {
								method: 'GET',
								url: '=/goals/{{ $parameter["goal_gid"] }}/parentGoals',
							},
						},
					},
					{
						name: 'Remove a collaborator from a goal',
						value: 'removeFollowers',
						action:
							'Removes followers from a goal. Returns the goal the followers were removed from. Each goal can be associated with zero o...',
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/removeFollowers',
							},
						},
					},
					{
						name: 'Create a goal metric',
						value: 'createGoalMetric',
						action:
							'Creates and adds a goal metric to a specified goal. Note that this replaces an existing goal metric if one already exist...',
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/setMetric',
							},
						},
					},
					{
						name: 'Update a goal metric',
						value: 'updateGoalMetric',
						action:
							"Updates a goal's existing metric's `current_number_value` if one exists, otherwise responds with a 400 status code.  Ret...",
						routing: {
							request: {
								method: 'POST',
								url: '=/goals/{{ $parameter["goal_gid"] }}/setMetricCurrentValue',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['goal'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getJob',
				options: [
					{
						name: 'Get a job by id',
						value: 'getJob',
						action: 'Returns the full record for a job',
						routing: {
							request: {
								method: 'GET',
								url: '=/jobs/{{ $parameter["job_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['job'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'createOrganizationExport',
				options: [
					{
						name: 'Create an organization export request',
						value: 'createOrganizationExport',
						action:
							'This method creates a request to export an Organization. Asana will complete the export at some point after you create t...',
						routing: {
							request: {
								method: 'POST',
								url: '/organization_exports',
							},
						},
					},
					{
						name: 'Get details on an org export request',
						value: 'getOrganizationExport',
						action: 'Returns details of a previously-requested Organization export',
						routing: {
							request: {
								method: 'GET',
								url: '=/organization_exports/{{ $parameter["organization_export_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['organizationExport'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getPortfolioMemberships',
				options: [
					{
						name: 'Get multiple portfolio memberships',
						value: 'getPortfolioMemberships',
						action:
							'Returns a list of portfolio memberships in compact representation. You must specify `portfolio`, `portfolio` and `user`,...',
						routing: {
							request: {
								method: 'GET',
								url: '/portfolio_memberships',
							},
						},
					},
					{
						name: 'Get a portfolio membership',
						value: 'getPortfolioMembership',
						action: 'Returns the complete portfolio record for a single portfolio membership',
						routing: {
							request: {
								method: 'GET',
								url: '=/portfolio_memberships/{{ $parameter["portfolio_membership_gid"] }}',
							},
						},
					},
					{
						name: 'Get memberships from a portfolio',
						value: 'getPortfolioMembershipsForPortfolio',
						action: 'Returns the compact portfolio membership records for the portfolio',
						routing: {
							request: {
								method: 'GET',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/portfolio_memberships',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['portfolioMembership'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getPortfolios',
				options: [
					{
						name: 'Get multiple portfolios',
						value: 'getPortfolios',
						action:
							'Returns a list of the portfolios in compact representation that are owned by the current API user',
						routing: {
							request: {
								method: 'GET',
								url: '/portfolios',
							},
						},
					},
					{
						name: 'Create a portfolio',
						value: 'createPortfolio',
						action:
							'Creates a new portfolio in the given workspace with the supplied name.  Note that portfolios created in the Asana UI may...',
						routing: {
							request: {
								method: 'POST',
								url: '/portfolios',
							},
						},
					},
					{
						name: 'Delete a portfolio',
						value: 'deletePortfolio',
						action:
							'An existing portfolio can be deleted by making a DELETE request on the URL for that portfolio.  Returns an empty data re...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}',
							},
						},
					},
					{
						name: 'Get a portfolio',
						value: 'getPortfolio',
						action: 'Returns the complete portfolio record for a single portfolio',
						routing: {
							request: {
								method: 'GET',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}',
							},
						},
					},
					{
						name: 'Update a portfolio',
						value: 'updatePortfolio',
						action:
							'An existing portfolio can be updated by making a PUT request on the URL for that portfolio. Only the fields provided in ...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}',
							},
						},
					},
					{
						name: 'Add a custom field to a portfolio',
						value: 'addCustomFieldSettingForPortfolio',
						action:
							'Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the por...',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/addCustomFieldSetting',
							},
						},
					},
					{
						name: 'Add a portfolio item',
						value: 'addItemForPortfolio',
						action: 'Add an item to a portfolio. Returns an empty data block',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/addItem',
							},
						},
					},
					{
						name: 'Add users to a portfolio',
						value: 'addMembersForPortfolio',
						action:
							'Adds the specified list of users as members of the portfolio. Returns the updated portfolio record',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/addMembers',
							},
						},
					},
					{
						name: 'Get portfolio items',
						value: 'getItemsForPortfolio',
						action: 'Get a list of the items in compact form in a portfolio',
						routing: {
							request: {
								method: 'GET',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/items',
							},
						},
					},
					{
						name: 'Remove a custom field from a portfolio',
						value: 'removeCustomFieldSettingForPortfolio',
						action: 'Removes a custom field setting from a portfolio',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/removeCustomFieldSetting',
							},
						},
					},
					{
						name: 'Remove a portfolio item',
						value: 'removeItemForPortfolio',
						action: 'Remove an item from a portfolio. Returns an empty data block',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/removeItem',
							},
						},
					},
					{
						name: 'Remove users from a portfolio',
						value: 'removeMembersForPortfolio',
						action:
							'Removes the specified list of users from members of the portfolio. Returns the updated portfolio record',
						routing: {
							request: {
								method: 'POST',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/removeMembers',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['portfolio'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getCustomFieldSettingsForPortfolio',
				options: [
					{
						name: "Get a portfolio's custom fields",
						value: 'getCustomFieldSettingsForPortfolio',
						action:
							'Returns a list of all of the custom fields settings on a portfolio, in compact form',
						routing: {
							request: {
								method: 'GET',
								url: '=/portfolios/{{ $parameter["portfolio_gid"] }}/custom_field_settings',
							},
						},
					},
					{
						name: "Get a project's custom fields",
						value: 'getCustomFieldSettingsForProject',
						action:
							'Returns a list of all of the custom fields settings on a project, in compact form. Note that, as in all queries to colle...',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/custom_field_settings',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['customFieldSetting'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'deleteProjectBrief',
				options: [
					{
						name: 'Delete a project brief',
						value: 'deleteProjectBrief',
						action: 'Deletes a specific, existing project brief.  Returns an empty data record',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/project_briefs/{{ $parameter["project_brief_gid"] }}',
							},
						},
					},
					{
						name: 'Get a project brief',
						value: 'getProjectBrief',
						action: 'Get the full record for a project brief',
						routing: {
							request: {
								method: 'GET',
								url: '=/project_briefs/{{ $parameter["project_brief_gid"] }}',
							},
						},
					},
					{
						name: 'Update a project brief',
						value: 'updateProjectBrief',
						action:
							'An existing project brief can be updated by making a PUT request on the URL for that project brief. Only the fields prov...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/project_briefs/{{ $parameter["project_brief_gid"] }}',
							},
						},
					},
					{
						name: 'Create a project brief',
						value: 'createProjectBrief',
						action:
							'Creates a new project brief.  Returns the full record of the newly created project brief',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/project_briefs',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['projectBrief'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getProjectMembership',
				options: [
					{
						name: 'Get a project membership',
						value: 'getProjectMembership',
						action: 'Returns the complete project record for a single project membership',
						routing: {
							request: {
								method: 'GET',
								url: '=/project_memberships/{{ $parameter["project_membership_gid"] }}',
							},
						},
					},
					{
						name: 'Get memberships from a project',
						value: 'getProjectMembershipsForProject',
						action: 'Returns the compact project membership records for the project',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/project_memberships',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['projectMembership'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'deleteProjectStatus',
				options: [
					{
						name: 'Delete a project status',
						value: 'deleteProjectStatus',
						action:
							'*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Deletes a specific, existing pro...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/project_statuses/{{ $parameter["project_status_gid"] }}',
							},
						},
					},
					{
						name: 'Get a project status',
						value: 'getProjectStatus',
						action:
							'*Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*  Returns the complete record for ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/project_statuses/{{ $parameter["project_status_gid"] }}',
							},
						},
					},
					{
						name: 'Get statuses from a project',
						value: 'getProjectStatusesForProject',
						action:
							'*Deprecated: new integrations should prefer the `/status_updates` route.*  Returns the compact project status update rec...',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/project_statuses',
							},
						},
					},
					{
						name: 'Create a project status',
						value: 'createProjectStatusForProject',
						action:
							'*Deprecated: new integrations should prefer the `/status_updates` route.*  Creates a new status update on the project.  ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/project_statuses',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['projectStatus'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getProjectTemplates',
				options: [
					{
						name: 'Get multiple project templates',
						value: 'getProjectTemplates',
						action:
							'Returns the compact project template records for all project templates in the given team or workspace',
						routing: {
							request: {
								method: 'GET',
								url: '/project_templates',
							},
						},
					},
					{
						name: 'Get a project template',
						value: 'getProjectTemplate',
						action: 'Returns the complete project template record for a single project template',
						routing: {
							request: {
								method: 'GET',
								url: '=/project_templates/{{ $parameter["project_template_gid"] }}',
							},
						},
					},
					{
						name: 'Instantiate a project from a project template',
						value: 'instantiateProject',
						action:
							'Creates and returns a job that will asynchronously handle the project instantiation.  To form this request, it is recomm...',
						routing: {
							request: {
								method: 'POST',
								url: '=/project_templates/{{ $parameter["project_template_gid"] }}/instantiateProject',
							},
						},
					},
					{
						name: "Get a team's project templates",
						value: 'getProjectTemplatesForTeam',
						action:
							'Returns the compact project template records for all project templates in the team',
						routing: {
							request: {
								method: 'GET',
								url: '=/teams/{{ $parameter["team_gid"] }}/project_templates',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['projectTemplate'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getProjects',
				options: [
					{
						name: 'Get multiple projects',
						value: 'getProjects',
						action:
							'Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to fil...',
						routing: {
							request: {
								method: 'GET',
								url: '/projects',
							},
						},
					},
					{
						name: 'Create a project',
						value: 'createProject',
						action:
							'Create a new project in a workspace or team.  Every project is required to be created in a specific workspace or organiz...',
						routing: {
							request: {
								method: 'POST',
								url: '/projects',
							},
						},
					},
					{
						name: 'Delete a project',
						value: 'deleteProject',
						action:
							'A specific, existing project can be deleted by making a DELETE request on the URL for that project.  Returns an empty da...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/projects/{{ $parameter["project_gid"] }}',
							},
						},
					},
					{
						name: 'Get a project',
						value: 'getProject',
						action: 'Returns the complete project record for a single project',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}',
							},
						},
					},
					{
						name: 'Update a project',
						value: 'updateProject',
						action:
							'A specific, existing project can be updated by making a PUT request on the URL for that project. Only the fields provide...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/projects/{{ $parameter["project_gid"] }}',
							},
						},
					},
					{
						name: 'Add a custom field to a project',
						value: 'addCustomFieldSettingForProject',
						action:
							'Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the proje...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/addCustomFieldSetting',
							},
						},
					},
					{
						name: 'Add followers to a project',
						value: 'addFollowersForProject',
						action:
							'Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to rec...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/addFollowers',
							},
						},
					},
					{
						name: 'Add users to a project',
						value: 'addMembersForProject',
						action:
							'Adds the specified list of users as members of the project. Note that a user being added as a member may also be added a...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/addMembers',
							},
						},
					},
					{
						name: 'Duplicate a project',
						value: 'duplicateProject',
						action: 'Creates and returns a job that will asynchronously handle the duplication',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/duplicate',
							},
						},
					},
					{
						name: 'Remove a custom field from a project',
						value: 'removeCustomFieldSettingForProject',
						action: 'Removes a custom field setting from a project',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/removeCustomFieldSetting',
							},
						},
					},
					{
						name: 'Remove followers from a project',
						value: 'removeFollowersForProject',
						action:
							'Removes the specified list of users from following the project, this will not affect project membership status. Returns ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/removeFollowers',
							},
						},
					},
					{
						name: 'Remove users from a project',
						value: 'removeMembersForProject',
						action:
							'Removes the specified list of users from members of the project. Returns the updated project record',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/removeMembers',
							},
						},
					},
					{
						name: 'Create a project template from a project',
						value: 'projectSaveAsTemplate',
						action:
							'Creates and returns a job that will asynchronously handle the project template creation. Note that while the resulting p...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/saveAsTemplate',
							},
						},
					},
					{
						name: 'Get task count of a project',
						value: 'getTaskCountsForProject',
						action:
							'Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output...',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/task_counts',
							},
						},
					},
					{
						name: 'Get projects a task is in',
						value: 'getProjectsForTask',
						action: 'Returns a compact representation of all of the projects the task is in',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/projects',
							},
						},
					},
					{
						name: "Get a team's projects",
						value: 'getProjectsForTeam',
						action: 'Returns the compact project records for all projects in the team',
						routing: {
							request: {
								method: 'GET',
								url: '=/teams/{{ $parameter["team_gid"] }}/projects',
							},
						},
					},
					{
						name: 'Create a project in a team',
						value: 'createProjectForTeam',
						action:
							'Creates a project shared with the given team.  Returns the full record of the newly created project',
						routing: {
							request: {
								method: 'POST',
								url: '=/teams/{{ $parameter["team_gid"] }}/projects',
							},
						},
					},
					{
						name: 'Get all projects in a workspace',
						value: 'getProjectsForWorkspace',
						action:
							'Returns the compact project records for all projects in the workspace. *Note: This endpoint may timeout for large domain...',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/projects',
							},
						},
					},
					{
						name: 'Create a project in a workspace',
						value: 'createProjectForWorkspace',
						action:
							'Returns the compact project records for all projects in the workspace.  If the workspace for your project is an organiza...',
						routing: {
							request: {
								method: 'POST',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/projects',
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
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getSectionsForProject',
				options: [
					{
						name: 'Get sections in a project',
						value: 'getSectionsForProject',
						action: 'Returns the compact records for all sections in the specified project',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/sections',
							},
						},
					},
					{
						name: 'Create a section in a project',
						value: 'createSectionForProject',
						action:
							'Creates a new section in a project. Returns the full record of the newly created section',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/sections',
							},
						},
					},
					{
						name: 'Move or Insert sections',
						value: 'insertSectionForProject',
						action:
							'Move sections relative to each other. One of `before_section` or `after_section` is required.  Sections cannot be moved ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/projects/{{ $parameter["project_gid"] }}/sections/insert',
							},
						},
					},
					{
						name: 'Delete a section',
						value: 'deleteSection',
						action:
							'A specific, existing section can be deleted by making a DELETE request on the URL for that section.  Note that sections ...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/sections/{{ $parameter["section_gid"] }}',
							},
						},
					},
					{
						name: 'Get a section',
						value: 'getSection',
						action: 'Returns the complete record for a single section',
						routing: {
							request: {
								method: 'GET',
								url: '=/sections/{{ $parameter["section_gid"] }}',
							},
						},
					},
					{
						name: 'Update a section',
						value: 'updateSection',
						action:
							'A specific, existing section can be updated by making a PUT request on the URL for that project. Only the fields provide...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/sections/{{ $parameter["section_gid"] }}',
							},
						},
					},
					{
						name: 'Add task to section',
						value: 'addTaskForSection',
						action:
							'Add a task to a specific, existing section. This will remove the task from other sections of the project.  The task will...',
						routing: {
							request: {
								method: 'POST',
								url: '=/sections/{{ $parameter["section_gid"] }}/addTask',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['section'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getTasksForProject',
				options: [
					{
						name: 'Get tasks from a project',
						value: 'getTasksForProject',
						action:
							'Returns the compact task records for all tasks within the given project, ordered by their priority within the project. T...',
						routing: {
							request: {
								method: 'GET',
								url: '=/projects/{{ $parameter["project_gid"] }}/tasks',
							},
						},
					},
					{
						name: 'Get tasks from a section',
						value: 'getTasksForSection',
						action:
							'*Board view only*: Returns the compact section records for all tasks within the given section',
						routing: {
							request: {
								method: 'GET',
								url: '=/sections/{{ $parameter["section_gid"] }}/tasks',
							},
						},
					},
					{
						name: 'Get tasks from a tag',
						value: 'getTasksForTag',
						action:
							'Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time',
						routing: {
							request: {
								method: 'GET',
								url: '=/tags/{{ $parameter["tag_gid"] }}/tasks',
							},
						},
					},
					{
						name: 'Get multiple tasks',
						value: 'getTasks',
						action:
							'Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter th...',
						routing: {
							request: {
								method: 'GET',
								url: '/tasks',
							},
						},
					},
					{
						name: 'Create a task',
						value: 'createTask',
						action:
							'Creating a new task is as easy as POSTing to the `/tasks` endpoint with a data block containing the fields you™d like to...',
						routing: {
							request: {
								method: 'POST',
								url: '/tasks',
							},
						},
					},
					{
						name: 'Delete a task',
						value: 'deleteTask',
						action:
							'A specific, existing task can be deleted by making a DELETE request on the URL for that task. Deleted tasks go into the ...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/tasks/{{ $parameter["task_gid"] }}',
							},
						},
					},
					{
						name: 'Get a task',
						value: 'getTask',
						action: 'Returns the complete task record for a single task',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}',
							},
						},
					},
					{
						name: 'Update a task',
						value: 'updateTask',
						action:
							'A specific, existing task can be updated by making a PUT request on the URL for that task. Only the fields provided in t...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/tasks/{{ $parameter["task_gid"] }}',
							},
						},
					},
					{
						name: 'Set dependencies for a task',
						value: 'addDependenciesForTask',
						action:
							'Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dep...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/addDependencies',
							},
						},
					},
					{
						name: 'Set dependents for a task',
						value: 'addDependentsForTask',
						action:
							'Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 depende...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/addDependents',
							},
						},
					},
					{
						name: 'Add followers to a task',
						value: 'addFollowersForTask',
						action:
							'Adds followers to a task. Returns an empty data block. Each task can be associated with zero or more followers in the sy...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/addFollowers',
							},
						},
					},
					{
						name: 'Add a project to a task',
						value: 'addProjectForTask',
						action:
							'Adds the task to the specified project, in the optional location specified. If no location arguments are given, the task...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/addProject',
							},
						},
					},
					{
						name: 'Add a tag to a task',
						value: 'addTagForTask',
						action: 'Adds a tag to a task. Returns an empty data block',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/addTag',
							},
						},
					},
					{
						name: 'Get dependencies from a task',
						value: 'getDependenciesForTask',
						action: 'Returns the compact representations of all of the dependencies of a task',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/dependencies',
							},
						},
					},
					{
						name: 'Get dependents from a task',
						value: 'getDependentsForTask',
						action: 'Returns the compact representations of all of the dependents of a task',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/dependents',
							},
						},
					},
					{
						name: 'Duplicate a task',
						value: 'duplicateTask',
						action: 'Creates and returns a job that will asynchronously handle the duplication',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/duplicate',
							},
						},
					},
					{
						name: 'Unlink dependencies from a task',
						value: 'removeDependenciesForTask',
						action: 'Unlinks a set of dependencies from this task',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/removeDependencies',
							},
						},
					},
					{
						name: 'Unlink dependents from a task',
						value: 'removeDependentsForTask',
						action: 'Unlinks a set of dependents from this task',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/removeDependents',
							},
						},
					},
					{
						name: 'Remove followers from a task',
						value: 'removeFollowerForTask',
						action:
							'Removes each of the specified followers from the task if they are following. Returns the complete, updated record for th...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/removeFollowers',
							},
						},
					},
					{
						name: 'Remove a project from a task',
						value: 'removeProjectForTask',
						action:
							'Removes the task from the specified project. The task will still exist in the system, but it will not be in the project ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/removeProject',
							},
						},
					},
					{
						name: 'Remove a tag from a task',
						value: 'removeTagForTask',
						action: 'Removes a tag from a task. Returns an empty data block',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/removeTag',
							},
						},
					},
					{
						name: 'Set the parent of a task',
						value: 'setParentForTask',
						action:
							'parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most on...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/setParent',
							},
						},
					},
					{
						name: 'Get subtasks from a task',
						value: 'getSubtasksForTask',
						action: 'Returns a compact representation of all of the subtasks of a task',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/subtasks',
							},
						},
					},
					{
						name: 'Create a subtask',
						value: 'createSubtaskForTask',
						action:
							'Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/subtasks',
							},
						},
					},
					{
						name: 'Get tasks from a user task list',
						value: 'getTasksForUserTaskList',
						action:
							'Returns the compact list of tasks in a user™s My Tasks list. *Note: Access control is enforced for this endpoint as with...',
						routing: {
							request: {
								method: 'GET',
								url: '=/user_task_lists/{{ $parameter["user_task_list_gid"] }}/tasks',
							},
						},
					},
					{
						name: 'Search tasks in a workspace',
						value: 'searchTasksForWorkspace',
						action:
							"To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint tha...",
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/tasks/search',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['task'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getStatusesForObject',
				options: [
					{
						name: 'Get status updates from an object',
						value: 'getStatusesForObject',
						action: 'Returns the compact status update records for all updates on the object',
						routing: {
							request: {
								method: 'GET',
								url: '/status_updates',
							},
						},
					},
					{
						name: 'Create a status update',
						value: 'createStatusForObject',
						action:
							'Creates a new status update on an object. Returns the full record of the newly created status update',
						routing: {
							request: {
								method: 'POST',
								url: '/status_updates',
							},
						},
					},
					{
						name: 'Delete a status update',
						value: 'deleteStatus',
						action: 'Deletes a specific, existing status update.  Returns an empty data record',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/status_updates/{{ $parameter["status_gid"] }}',
							},
						},
					},
					{
						name: 'Get a status update',
						value: 'getStatus',
						action: 'Returns the complete record for a single status update',
						routing: {
							request: {
								method: 'GET',
								url: '=/status_updates/{{ $parameter["status_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['statusUpdate'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'deleteStory',
				options: [
					{
						name: 'Delete a story',
						value: 'deleteStory',
						action:
							'Deletes a story. A user can only delete stories they have created.  Returns an empty data record',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/stories/{{ $parameter["story_gid"] }}',
							},
						},
					},
					{
						name: 'Get a story',
						value: 'getStory',
						action: 'Returns the full record for a single story',
						routing: {
							request: {
								method: 'GET',
								url: '=/stories/{{ $parameter["story_gid"] }}',
							},
						},
					},
					{
						name: 'Update a story',
						value: 'updateStory',
						action:
							'Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, a...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/stories/{{ $parameter["story_gid"] }}',
							},
						},
					},
					{
						name: 'Get stories from a task',
						value: 'getStoriesForTask',
						action: 'Returns the compact records for all stories on the task',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/stories',
							},
						},
					},
					{
						name: 'Create a story on a task',
						value: 'createStoryForTask',
						action:
							'Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be autho...',
						routing: {
							request: {
								method: 'POST',
								url: '=/tasks/{{ $parameter["task_gid"] }}/stories',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['story'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getTags',
				options: [
					{
						name: 'Get multiple tags',
						value: 'getTags',
						action:
							'Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the ...',
						routing: {
							request: {
								method: 'GET',
								url: '/tags',
							},
						},
					},
					{
						name: 'Create a tag',
						value: 'createTag',
						action:
							'Creates a new tag in a workspace or organization.  Every tag is required to be created in a specific workspace or organi...',
						routing: {
							request: {
								method: 'POST',
								url: '/tags',
							},
						},
					},
					{
						name: 'Delete a tag',
						value: 'deleteTag',
						action:
							'A specific, existing tag can be deleted by making a DELETE request on the URL for that tag.  Returns an empty data recor...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/tags/{{ $parameter["tag_gid"] }}',
							},
						},
					},
					{
						name: 'Get a tag',
						value: 'getTag',
						action: 'Returns the complete tag record for a single tag',
						routing: {
							request: {
								method: 'GET',
								url: '=/tags/{{ $parameter["tag_gid"] }}',
							},
						},
					},
					{
						name: 'Update a tag',
						value: 'updateTag',
						action:
							'Updates the properties of a tag. Only the fields provided in the `data` block will be updated; any unspecified fields wi...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/tags/{{ $parameter["tag_gid"] }}',
							},
						},
					},
					{
						name: "Get a task's tags",
						value: 'getTagsForTask',
						action: 'Get a compact representation of all of the tags the task has',
						routing: {
							request: {
								method: 'GET',
								url: '=/tasks/{{ $parameter["task_gid"] }}/tags',
							},
						},
					},
					{
						name: 'Get tags in a workspace',
						value: 'getTagsForWorkspace',
						action:
							'Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/tags',
							},
						},
					},
					{
						name: 'Create a tag in a workspace',
						value: 'createTagForWorkspace',
						action:
							'Creates a new tag in a workspace or organization.  Every tag is required to be created in a specific workspace or organi...',
						routing: {
							request: {
								method: 'POST',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/tags',
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
				default: 'getTeamMemberships',
				options: [
					{
						name: 'Get team memberships',
						value: 'getTeamMemberships',
						action: 'Returns compact team membership records',
						routing: {
							request: {
								method: 'GET',
								url: '/team_memberships',
							},
						},
					},
					{
						name: 'Get a team membership',
						value: 'getTeamMembership',
						action: 'Returns the complete team membership record for a single team membership',
						routing: {
							request: {
								method: 'GET',
								url: '=/team_memberships/{{ $parameter["team_membership_gid"] }}',
							},
						},
					},
					{
						name: 'Get memberships from a team',
						value: 'getTeamMembershipsForTeam',
						action: 'Returns the compact team memberships for the team',
						routing: {
							request: {
								method: 'GET',
								url: '=/teams/{{ $parameter["team_gid"] }}/team_memberships',
							},
						},
					},
					{
						name: 'Get memberships from a user',
						value: 'getTeamMembershipsForUser',
						action: 'Returns the compact team membership records for the user',
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}/team_memberships',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['teamMembership'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'createTeam',
				options: [
					{
						name: 'Create a team',
						value: 'createTeam',
						action: 'Creates a team within the current workspace',
						routing: {
							request: {
								method: 'POST',
								url: '/teams',
							},
						},
					},
					{
						name: 'Update a team',
						value: 'updateTeam',
						action: 'Updates a team within the current workspace',
						routing: {
							request: {
								method: 'PUT',
								url: '/teams',
							},
						},
					},
					{
						name: 'Get a team',
						value: 'getTeam',
						action: 'Returns the full record for a single team',
						routing: {
							request: {
								method: 'GET',
								url: '=/teams/{{ $parameter["team_gid"] }}',
							},
						},
					},
					{
						name: 'Add a user to a team',
						value: 'addUserForTeam',
						action:
							'The user making this call must be a member of the team in order to add others. The user being added must exist in the sa...',
						routing: {
							request: {
								method: 'POST',
								url: '=/teams/{{ $parameter["team_gid"] }}/addUser',
							},
						},
					},
					{
						name: 'Remove a user from a team',
						value: 'removeUserForTeam',
						action:
							'The user making this call must be a member of the team in order to remove themselves or others',
						routing: {
							request: {
								method: 'POST',
								url: '=/teams/{{ $parameter["team_gid"] }}/removeUser',
							},
						},
					},
					{
						name: 'Get teams for a user',
						value: 'getTeamsForUser',
						action: 'Returns the compact records for all teams to which the given user is assigned',
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}/teams',
							},
						},
					},
					{
						name: 'Get teams in a workspace',
						value: 'getTeamsForWorkspace',
						action:
							'Returns the compact records for all teams in the workspace visible to the authorized user',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/teams',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['team'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getUsersForTeam',
				options: [
					{
						name: 'Get users in a team',
						value: 'getUsersForTeam',
						action:
							'Returns the compact records for all users that are members of the team. Results are sorted alphabetically and limited to...',
						routing: {
							request: {
								method: 'GET',
								url: '=/teams/{{ $parameter["team_gid"] }}/users',
							},
						},
					},
					{
						name: 'Get multiple users',
						value: 'getUsers',
						action:
							'Returns the user records for all users in all workspaces and organizations accessible to the authenticated user. Accepts...',
						routing: {
							request: {
								method: 'GET',
								url: '/users',
							},
						},
					},
					{
						name: 'Get a user',
						value: 'getUser',
						action: 'Returns the full user record for the single user with the provided ID',
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}',
							},
						},
					},
					{
						name: "Get a user's favorites",
						value: 'getFavoritesForUser',
						action:
							"Returns all of a user's favorites in the given workspace, of the given type. Results are given in order (The same order ...",
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}/favorites',
							},
						},
					},
					{
						name: 'Get users in a workspace or organization',
						value: 'getUsersForWorkspace',
						action:
							'Returns the compact records for all users in the specified workspace or organization. Results are sorted alphabetically ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/users',
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
				default: 'getTimePeriods',
				options: [
					{
						name: 'Get time periods',
						value: 'getTimePeriods',
						action: 'Returns compact time period records',
						routing: {
							request: {
								method: 'GET',
								url: '/time_periods',
							},
						},
					},
					{
						name: 'Get a time period',
						value: 'getTimePeriod',
						action: 'Returns the full record for a single time period',
						routing: {
							request: {
								method: 'GET',
								url: '=/time_periods/{{ $parameter["time_period_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['timePeriod'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getUserTaskList',
				options: [
					{
						name: 'Get a user task list',
						value: 'getUserTaskList',
						action: 'Returns the full record for a user task list',
						routing: {
							request: {
								method: 'GET',
								url: '=/user_task_lists/{{ $parameter["user_task_list_gid"] }}',
							},
						},
					},
					{
						name: "Get a user's task list",
						value: 'getUserTaskListForUser',
						action: "Returns the full record for a user's task list",
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}/user_task_list',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['userTaskList'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getWorkspaceMembershipsForUser',
				options: [
					{
						name: 'Get workspace memberships for a user',
						value: 'getWorkspaceMembershipsForUser',
						action: 'Returns the compact workspace membership records for the user',
						routing: {
							request: {
								method: 'GET',
								url: '=/users/{{ $parameter["user_gid"] }}/workspace_memberships',
							},
						},
					},
					{
						name: 'Get a workspace membership',
						value: 'getWorkspaceMembership',
						action: 'Returns the complete workspace record for a single workspace membership',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspace_memberships/{{ $parameter["workspace_membership_gid"] }}',
							},
						},
					},
					{
						name: 'Get the workspace memberships for a workspace',
						value: 'getWorkspaceMembershipsForWorkspace',
						action: 'Returns the compact workspace membership records for the workspace',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/workspace_memberships',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['workspaceMembership'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getWebhooks',
				options: [
					{
						name: 'Get multiple webhooks',
						value: 'getWebhooks',
						action:
							'Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace',
						routing: {
							request: {
								method: 'GET',
								url: '/webhooks',
							},
						},
					},
					{
						name: 'Establish a webhook',
						value: 'createWebhook',
						action:
							'Establishing a webhook is a two-part process. First, a simple HTTP POST request initiates the creation similar to creati...',
						routing: {
							request: {
								method: 'POST',
								url: '/webhooks',
							},
						},
					},
					{
						name: 'Delete a webhook',
						value: 'deleteWebhook',
						action:
							'This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in fligh...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/webhooks/{{ $parameter["webhook_gid"] }}',
							},
						},
					},
					{
						name: 'Get a webhook',
						value: 'getWebhook',
						action: 'Returns the full record for the given webhook',
						routing: {
							request: {
								method: 'GET',
								url: '=/webhooks/{{ $parameter["webhook_gid"] }}',
							},
						},
					},
					{
						name: 'Update a webhook',
						value: 'updateWebhook',
						action:
							"An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook'...",
						routing: {
							request: {
								method: 'PUT',
								url: '=/webhooks/{{ $parameter["webhook_gid"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['webhook'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getWorkspaces',
				options: [
					{
						name: 'Get multiple workspaces',
						value: 'getWorkspaces',
						action: 'Returns the compact records for all workspaces visible to the authorized user',
						routing: {
							request: {
								method: 'GET',
								url: '/workspaces',
							},
						},
					},
					{
						name: 'Get a workspace',
						value: 'getWorkspace',
						action: 'Returns the full workspace record for a single workspace',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}',
							},
						},
					},
					{
						name: 'Update a workspace',
						value: 'updateWorkspace',
						action:
							'A specific, existing workspace can be updated by making a PUT request on the URL for that workspace. Only the fields pro...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}',
							},
						},
					},
					{
						name: 'Add a user to a workspace or organization',
						value: 'addUserForWorkspace',
						action:
							'Add a user to a workspace or organization. The user can be referenced by their globally unique user ID or their email ad...',
						routing: {
							request: {
								method: 'POST',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/addUser',
							},
						},
					},
					{
						name: 'Remove a user from a workspace or organization',
						value: 'removeUserForWorkspace',
						action:
							'Remove a user from a workspace or organization. The user making this call must be an admin in the workspace. The user ca...',
						routing: {
							request: {
								method: 'POST',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/removeUser',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['workspace'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getAuditLogEvents',
				options: [
					{
						name: 'Get audit log events',
						value: 'getAuditLogEvents',
						action:
							'Retrieve the audit log events that have been captured in your domain.  This endpoint will return a list of [AuditLogEven...',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/audit_log_events',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['auditLogApi'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'typeaheadForWorkspace',
				options: [
					{
						name: 'Get objects via typeahead',
						value: 'typeaheadForWorkspace',
						action:
							'Retrieves objects in the workspace based via an auto-completion/typeahead search algorithm. This feature is meant to pro...',
						routing: {
							request: {
								method: 'GET',
								url: '=/workspaces/{{ $parameter["workspace_gid"] }}/typeahead',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['typeahead'],
					},
				},
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
				required: true,
				description:
					'Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`',
				placeholder: 'e.g. 159874',
				routing: {
					send: {
						type: 'query',
						property: 'parent',
					},
				},
				displayOptions: {
					show: {
						resource: ['attachment'],
						operation: ['getAttachmentsForObject'],
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
						resource: ['attachment'],
						operation: ['getAttachmentsForObject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
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
						resource: ['attachment'],
						operation: ['createAttachmentForObject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Connect To App',
						name: 'connect_to_app',
						type: 'boolean',
						default: false,
						description:
							'*Optional*. Only relevant for external attachments with a parent task. A boolean indicating whether the current app shou...',
						routing: {
							send: {
								type: 'body',
								property: 'connect_to_app',
							},
						},
					},
					{
						displayName: 'File',
						name: 'file',
						type: 'string',
						default: '',
						description: 'Required for `asana` attachments',
						routing: {
							send: {
								type: 'body',
								property: 'file',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'The name of the external resource being attached. Required for attachments of type `external`',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Parent',
						name: 'parent',
						type: 'string',
						default: '',
						description:
							'Required identifier of the parent task, project, or project_brief, as a string',
						routing: {
							send: {
								type: 'body',
								property: 'parent',
							},
						},
					},
					{
						displayName: 'Resource Subtype',
						name: 'resource_subtype',
						type: 'string',
						default: '',
						description:
							'The type of the attachment. Must be one of the given values. If not specified, a file attachment of type `asana` will be...',
						placeholder: 'e.g. external',
						routing: {
							send: {
								type: 'body',
								property: 'resource_subtype',
							},
						},
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						default: '',
						description:
							'The URL of the external resource being attached. Required for attachments of type `external`',
						routing: {
							send: {
								type: 'body',
								property: 'url',
							},
						},
					},
				],
			},
			{
				displayName: 'Attachment GID',
				name: 'attachment_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the attachment',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['attachment'],
						operation: ['deleteAttachment'],
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
						resource: ['attachment'],
						operation: ['deleteAttachment'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Attachment GID',
				name: 'attachment_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the attachment',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['attachment'],
						operation: ['getAttachment'],
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
						resource: ['attachment'],
						operation: ['getAttachment'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['batchApi'],
						operation: ['createBatchRequest'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description: 'A request object for use in a batch request',
						routing: {
							send: {
								type: 'body',
								property: 'data',
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
						resource: ['customField'],
						operation: ['createCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Custom Field GID',
				name: 'custom_field_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the custom field',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['deleteCustomField'],
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
						resource: ['customField'],
						operation: ['deleteCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Custom Field GID',
				name: 'custom_field_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the custom field',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['getCustomField'],
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
						resource: ['customField'],
						operation: ['getCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Custom Field GID',
				name: 'custom_field_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the custom field',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['updateCustomField'],
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
						resource: ['customField'],
						operation: ['updateCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Custom Field GID',
				name: 'custom_field_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the custom field',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['createEnumOptionForCustomField'],
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
						resource: ['customField'],
						operation: ['createEnumOptionForCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Custom Field GID',
				name: 'custom_field_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the custom field',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['insertEnumOptionForCustomField'],
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
						resource: ['customField'],
						operation: ['insertEnumOptionForCustomField'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Enum Option GID',
				name: 'enum_option_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the enum option',
				placeholder: 'e.g. 124578',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['updateEnumOption'],
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
						resource: ['customField'],
						operation: ['updateEnumOption'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'string',
				default: '',
				required: true,
				description: 'A resource ID to subscribe to. The resource can be a task or project',
				placeholder: 'e.g. 12345',
				routing: {
					send: {
						type: 'query',
						property: 'resource',
					},
				},
				displayOptions: {
					show: {
						resource: ['event'],
						operation: ['getEvents'],
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
						resource: ['event'],
						operation: ['getEvents'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sync',
						name: 'sync',
						type: 'string',
						default: '',
						description:
							'A sync token received from the last request, or none on first sync. Events will be returned from the point in time that ...',
						placeholder: 'e.g. de4774f6915eae04714ca93bb2f5ee81',
						routing: {
							send: {
								type: 'query',
								property: 'sync',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Supported Goal',
				name: 'supported_goal',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the supported goal in the goal relationship',
				placeholder: 'e.g. 12345',
				routing: {
					send: {
						type: 'query',
						property: 'supported_goal',
					},
				},
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
						operation: ['getGoalRelationships'],
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
						resource: ['goalRelationship'],
						operation: ['getGoalRelationships'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Resource Subtype',
						name: 'resource_subtype',
						type: 'string',
						default: '',
						description: 'If provided, filter to goal relationships with a given resource_subtype',
						placeholder: 'e.g. subgoal',
						routing: {
							send: {
								type: 'query',
								property: 'resource_subtype',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal Relationship GID',
				name: 'goal_relationship_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal relationship',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
						operation: ['getGoalRelationship'],
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
						resource: ['goalRelationship'],
						operation: ['getGoalRelationship'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal Relationship GID',
				name: 'goal_relationship_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal relationship',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
						operation: ['updateGoalRelationship'],
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
						resource: ['goalRelationship'],
						operation: ['updateGoalRelationship'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
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
						resource: ['goal'],
						operation: ['getGoals'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Portfolio',
						name: 'portfolio',
						type: 'string',
						default: '',
						description: 'Globally unique identifier for supporting portfolio',
						placeholder: 'e.g. 159874',
						routing: {
							send: {
								type: 'query',
								property: 'portfolio',
							},
						},
					},
					{
						displayName: 'Project',
						name: 'project',
						type: 'string',
						default: '',
						description: 'Globally unique identifier for supporting project',
						placeholder: 'e.g. 512241',
						routing: {
							send: {
								type: 'query',
								property: 'project',
							},
						},
					},
					{
						displayName: 'Is Workspace Level',
						name: 'is_workspace_level',
						type: 'boolean',
						default: false,
						description:
							'Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter',
						routing: {
							send: {
								type: 'query',
								property: 'is_workspace_level',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'Globally unique identifier for the team',
						placeholder: 'e.g. 31326',
						routing: {
							send: {
								type: 'query',
								property: 'team',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'Globally unique identifier for the workspace',
						placeholder: 'e.g. 31326',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'Time Periods',
						name: 'time_periods',
						type: 'string',
						default: '',
						description: 'Globally unique identifiers for the time periods',
						routing: {
							send: {
								type: 'query',
								property: 'time_periods',
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
						resource: ['goal'],
						operation: ['createGoal'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['deleteGoal'],
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
						resource: ['goal'],
						operation: ['deleteGoal'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['getGoal'],
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
						resource: ['goal'],
						operation: ['getGoal'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['updateGoal'],
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
						resource: ['goal'],
						operation: ['updateGoal'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['addFollowers'],
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
						resource: ['goal'],
						operation: ['addFollowers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
						operation: ['addSupportingRelationship'],
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
						resource: ['goalRelationship'],
						operation: ['addSupportingRelationship'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['getParentGoalsForGoal'],
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
						resource: ['goal'],
						operation: ['getParentGoalsForGoal'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['removeFollowers'],
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
						resource: ['goal'],
						operation: ['removeFollowers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goalRelationship'],
						operation: ['removeSupportingRelationship'],
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
						resource: ['goalRelationship'],
						operation: ['removeSupportingRelationship'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['createGoalMetric'],
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
						resource: ['goal'],
						operation: ['createGoalMetric'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description: 'A generic Asana Resource, containing a globally unique identifier',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Goal GID',
				name: 'goal_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the goal',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['goal'],
						operation: ['updateGoalMetric'],
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
						resource: ['goal'],
						operation: ['updateGoalMetric'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description: 'A generic Asana Resource, containing a globally unique identifier',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Job GID',
				name: 'job_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the job',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['job'],
						operation: ['getJob'],
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
						resource: ['job'],
						operation: ['getJob'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['organizationExport'],
						operation: ['createOrganizationExport'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'An *organization_export* request starts a job to export the complete data of the given Organization',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Organization Export GID',
				name: 'organization_export_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the organization export',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['organizationExport'],
						operation: ['getOrganizationExport'],
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
						resource: ['organizationExport'],
						operation: ['getOrganizationExport'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['portfolioMembership'],
						operation: ['getPortfolioMemberships'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Portfolio',
						name: 'portfolio',
						type: 'string',
						default: '',
						description: 'The portfolio to filter results on',
						placeholder: 'e.g. 12345',
						routing: {
							send: {
								type: 'query',
								property: 'portfolio',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'The workspace to filter results on',
						placeholder: 'e.g. 12345',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
						placeholder: 'e.g. me',
						routing: {
							send: {
								type: 'query',
								property: 'user',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio Membership GID',
				name: 'portfolio_membership_gid',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['portfolioMembership'],
						operation: ['getPortfolioMembership'],
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
						resource: ['portfolioMembership'],
						operation: ['getPortfolioMembership'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'The workspace or organization to filter portfolios on',
				placeholder: 'e.g. 1331',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['getPortfolios'],
					},
				},
			},
			{
				displayName: 'Owner',
				name: 'owner',
				type: 'string',
				default: '',
				required: true,
				description:
					'The user who owns the portfolio. Currently, API users can only get a list of portfolios that they themselves own',
				placeholder: 'e.g. 14916',
				routing: {
					send: {
						type: 'query',
						property: 'owner',
					},
				},
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['getPortfolios'],
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
						resource: ['portfolio'],
						operation: ['getPortfolios'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
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
						resource: ['portfolio'],
						operation: ['createPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['deletePortfolio'],
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
						resource: ['portfolio'],
						operation: ['deletePortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['getPortfolio'],
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
						resource: ['portfolio'],
						operation: ['getPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['updatePortfolio'],
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
						resource: ['portfolio'],
						operation: ['updatePortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['addCustomFieldSettingForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['addCustomFieldSettingForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['addItemForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['addItemForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['addMembersForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['addMembersForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customFieldSetting'],
						operation: ['getCustomFieldSettingsForPortfolio'],
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
						resource: ['customFieldSetting'],
						operation: ['getCustomFieldSettingsForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['getItemsForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['getItemsForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolioMembership'],
						operation: ['getPortfolioMembershipsForPortfolio'],
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
						resource: ['portfolioMembership'],
						operation: ['getPortfolioMembershipsForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
						placeholder: 'e.g. me',
						routing: {
							send: {
								type: 'query',
								property: 'user',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['removeCustomFieldSettingForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['removeCustomFieldSettingForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['removeItemForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['removeItemForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Portfolio GID',
				name: 'portfolio_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the portfolio',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['portfolio'],
						operation: ['removeMembersForPortfolio'],
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
						resource: ['portfolio'],
						operation: ['removeMembersForPortfolio'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Brief GID',
				name: 'project_brief_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project brief',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['projectBrief'],
						operation: ['deleteProjectBrief'],
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
						resource: ['projectBrief'],
						operation: ['deleteProjectBrief'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Brief GID',
				name: 'project_brief_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project brief',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['projectBrief'],
						operation: ['getProjectBrief'],
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
						resource: ['projectBrief'],
						operation: ['getProjectBrief'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Brief GID',
				name: 'project_brief_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project brief',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['projectBrief'],
						operation: ['updateProjectBrief'],
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
						resource: ['projectBrief'],
						operation: ['updateProjectBrief'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Membership GID',
				name: 'project_membership_gid',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectMembership'],
						operation: ['getProjectMembership'],
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
						resource: ['projectMembership'],
						operation: ['getProjectMembership'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Status GID',
				name: 'project_status_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The project status update to get',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['projectStatus'],
						operation: ['deleteProjectStatus'],
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
						resource: ['projectStatus'],
						operation: ['deleteProjectStatus'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Status GID',
				name: 'project_status_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The project status update to get',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['projectStatus'],
						operation: ['getProjectStatus'],
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
						resource: ['projectStatus'],
						operation: ['getProjectStatus'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['projectTemplate'],
						operation: ['getProjectTemplates'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'The workspace to filter results on',
						placeholder: 'e.g. 12345',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'The team to filter projects on',
						placeholder: 'e.g. 14916',
						routing: {
							send: {
								type: 'query',
								property: 'team',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Template GID',
				name: 'project_template_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project template',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectTemplate'],
						operation: ['getProjectTemplate'],
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
						resource: ['projectTemplate'],
						operation: ['getProjectTemplate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project Template GID',
				name: 'project_template_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project template',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectTemplate'],
						operation: ['instantiateProject'],
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
						resource: ['projectTemplate'],
						operation: ['instantiateProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
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
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'The workspace or organization to filter projects on',
						placeholder: 'e.g. 1331',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'The team to filter projects on',
						placeholder: 'e.g. 14916',
						routing: {
							send: {
								type: 'query',
								property: 'team',
							},
						},
					},
					{
						displayName: 'Archived',
						name: 'archived',
						type: 'boolean',
						default: false,
						description:
							'Only return projects whose `archived` field takes on the value of this parameter',
						routing: {
							send: {
								type: 'query',
								property: 'archived',
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
						operation: ['createProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['deleteProject'],
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
						operation: ['deleteProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getProject'],
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
						operation: ['getProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['updateProject'],
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
						operation: ['updateProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['addCustomFieldSettingForProject'],
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
						operation: ['addCustomFieldSettingForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['addFollowersForProject'],
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
						operation: ['addFollowersForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['addMembersForProject'],
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
						operation: ['addMembersForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['customFieldSetting'],
						operation: ['getCustomFieldSettingsForProject'],
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
						resource: ['customFieldSetting'],
						operation: ['getCustomFieldSettingsForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['duplicateProject'],
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
						operation: ['duplicateProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectBrief'],
						operation: ['createProjectBrief'],
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
						resource: ['projectBrief'],
						operation: ['createProjectBrief'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectMembership'],
						operation: ['getProjectMembershipsForProject'],
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
						resource: ['projectMembership'],
						operation: ['getProjectMembershipsForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
						placeholder: 'e.g. me',
						routing: {
							send: {
								type: 'query',
								property: 'user',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectStatus'],
						operation: ['getProjectStatusesForProject'],
					},
				},
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectStatus'],
						operation: ['getProjectStatusesForProject'],
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
						resource: ['projectStatus'],
						operation: ['getProjectStatusesForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['projectStatus'],
						operation: ['createProjectStatusForProject'],
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
						resource: ['projectStatus'],
						operation: ['createProjectStatusForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['removeCustomFieldSettingForProject'],
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
						operation: ['removeCustomFieldSettingForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['removeFollowersForProject'],
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
						operation: ['removeFollowersForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['removeMembersForProject'],
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
						operation: ['removeMembersForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['projectSaveAsTemplate'],
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
						operation: ['projectSaveAsTemplate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['getSectionsForProject'],
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
						resource: ['section'],
						operation: ['getSectionsForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['createSectionForProject'],
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
						resource: ['section'],
						operation: ['createSectionForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['insertSectionForProject'],
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
						resource: ['section'],
						operation: ['insertSectionForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getTaskCountsForProject'],
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
						operation: ['getTaskCountsForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Project GID',
				name: 'project_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the project',
				placeholder: 'e.g. 1331',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getTasksForProject'],
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
						resource: ['task'],
						operation: ['getTasksForProject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Completed Since',
						name: 'completed_since',
						type: 'string',
						default: '',
						description:
							'Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or ...',
						placeholder: 'e.g. 2012-02-22T02:06:58.158Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_since',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Section GID',
				name: 'section_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The globally unique identifier for the section',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['deleteSection'],
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
						resource: ['section'],
						operation: ['deleteSection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Section GID',
				name: 'section_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The globally unique identifier for the section',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['getSection'],
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
						resource: ['section'],
						operation: ['getSection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Section GID',
				name: 'section_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The globally unique identifier for the section',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['updateSection'],
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
						resource: ['section'],
						operation: ['updateSection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Section GID',
				name: 'section_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The globally unique identifier for the section',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['section'],
						operation: ['addTaskForSection'],
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
						resource: ['section'],
						operation: ['addTaskForSection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Section GID',
				name: 'section_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The globally unique identifier for the section',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getTasksForSection'],
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
						resource: ['task'],
						operation: ['getTasksForSection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
				required: true,
				description:
					'Globally unique identifier for object to fetch statuses from. Must be a GID for a project, portfolio, or goal',
				placeholder: 'e.g. 159874',
				routing: {
					send: {
						type: 'query',
						property: 'parent',
					},
				},
				displayOptions: {
					show: {
						resource: ['statusUpdate'],
						operation: ['getStatusesForObject'],
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
						resource: ['statusUpdate'],
						operation: ['getStatusesForObject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Created Since',
						name: 'created_since',
						type: 'string',
						default: '',
						description: 'Only return statuses that have been created since the given time',
						placeholder: 'e.g. 2012-02-22T02:06:58.158Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_since',
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
						resource: ['statusUpdate'],
						operation: ['createStatusForObject'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Status GID',
				name: 'status_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The status update to get',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['statusUpdate'],
						operation: ['deleteStatus'],
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
						resource: ['statusUpdate'],
						operation: ['deleteStatus'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Status GID',
				name: 'status_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The status update to get',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['statusUpdate'],
						operation: ['getStatus'],
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
						resource: ['statusUpdate'],
						operation: ['getStatus'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Story GID',
				name: 'story_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the story',
				placeholder: 'e.g. 35678',
				displayOptions: {
					show: {
						resource: ['story'],
						operation: ['deleteStory'],
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
						resource: ['story'],
						operation: ['deleteStory'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Story GID',
				name: 'story_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the story',
				placeholder: 'e.g. 35678',
				displayOptions: {
					show: {
						resource: ['story'],
						operation: ['getStory'],
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
						resource: ['story'],
						operation: ['getStory'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Story GID',
				name: 'story_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the story',
				placeholder: 'e.g. 35678',
				displayOptions: {
					show: {
						resource: ['story'],
						operation: ['updateStory'],
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
						resource: ['story'],
						operation: ['updateStory'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A story represents an activity associated with an object in the Asana system',
						routing: {
							send: {
								type: 'body',
								property: 'data',
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
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'The workspace to filter tags on',
						placeholder: 'e.g. 1331',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
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
						operation: ['createTag'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Tag GID',
				name: 'tag_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the tag',
				placeholder: 'e.g. 11235',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['deleteTag'],
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
						operation: ['deleteTag'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Tag GID',
				name: 'tag_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the tag',
				placeholder: 'e.g. 11235',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['getTag'],
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
						operation: ['getTag'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Tag GID',
				name: 'tag_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the tag',
				placeholder: 'e.g. 11235',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['updateTag'],
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
						operation: ['updateTag'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Tag GID',
				name: 'tag_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the tag',
				placeholder: 'e.g. 11235',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getTasksForTag'],
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
						resource: ['task'],
						operation: ['getTasksForTag'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
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
						resource: ['task'],
						operation: ['getTasks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Assignee',
						name: 'assignee',
						type: 'string',
						default: '',
						description:
							'The assignee to filter tasks on. If searching for unassigned tasks, assignee.any = null can be specified. *Note: If you ...',
						placeholder: 'e.g. 14641',
						routing: {
							send: {
								type: 'query',
								property: 'assignee',
							},
						},
					},
					{
						displayName: 'Project',
						name: 'project',
						type: 'string',
						default: '',
						description: 'The project to filter tasks on',
						placeholder: 'e.g. 321654',
						routing: {
							send: {
								type: 'query',
								property: 'project',
							},
						},
					},
					{
						displayName: 'Section',
						name: 'section',
						type: 'string',
						default: '',
						description:
							'The section to filter tasks on. *Note: Currently, this is only supported in board views.*',
						placeholder: 'e.g. 321654',
						routing: {
							send: {
								type: 'query',
								property: 'section',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description:
							'The workspace to filter tasks on. *Note: If you specify `workspace`, you must also specify the `assignee` to filter on.*',
						placeholder: 'e.g. 321654',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'Completed Since',
						name: 'completed_since',
						type: 'string',
						default: '',
						description:
							'Only return tasks that are either incomplete or that have been completed since this time',
						routing: {
							send: {
								type: 'query',
								property: 'completed_since',
							},
						},
					},
					{
						displayName: 'Modified Since',
						name: 'modified_since',
						type: 'string',
						default: '',
						description:
							'Only return tasks that have been modified since the given time.  *Note: A task is considered modified if any of its prop...',
						placeholder: 'e.g. 2012-02-22T02:06:58.158Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_since',
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
						resource: ['task'],
						operation: ['createTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['deleteTask'],
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
						resource: ['task'],
						operation: ['deleteTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getTask'],
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
						resource: ['task'],
						operation: ['getTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['updateTask'],
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
						resource: ['task'],
						operation: ['updateTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['addDependenciesForTask'],
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
						resource: ['task'],
						operation: ['addDependenciesForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['addDependentsForTask'],
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
						resource: ['task'],
						operation: ['addDependentsForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description: 'A set of dependent tasks',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['addFollowersForTask'],
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
						resource: ['task'],
						operation: ['addFollowersForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['addProjectForTask'],
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
						resource: ['task'],
						operation: ['addProjectForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['addTagForTask'],
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
						resource: ['task'],
						operation: ['addTagForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getDependenciesForTask'],
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
						resource: ['task'],
						operation: ['getDependenciesForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getDependentsForTask'],
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
						resource: ['task'],
						operation: ['getDependentsForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['duplicateTask'],
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
						resource: ['task'],
						operation: ['duplicateTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getProjectsForTask'],
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
						operation: ['getProjectsForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['removeDependenciesForTask'],
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
						resource: ['task'],
						operation: ['removeDependenciesForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['removeDependentsForTask'],
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
						resource: ['task'],
						operation: ['removeDependentsForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description: 'A set of dependent tasks',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['removeFollowerForTask'],
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
						resource: ['task'],
						operation: ['removeFollowerForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['removeProjectForTask'],
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
						resource: ['task'],
						operation: ['removeProjectForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['removeTagForTask'],
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
						resource: ['task'],
						operation: ['removeTagForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['setParentForTask'],
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
						resource: ['task'],
						operation: ['setParentForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['story'],
						operation: ['getStoriesForTask'],
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
						resource: ['story'],
						operation: ['getStoriesForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['story'],
						operation: ['createStoryForTask'],
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
						resource: ['story'],
						operation: ['createStoryForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A story represents an activity associated with an object in the Asana system',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getSubtasksForTask'],
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
						resource: ['task'],
						operation: ['getSubtasksForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['createSubtaskForTask'],
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
						resource: ['task'],
						operation: ['createSubtaskForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Task GID',
				name: 'task_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'The task to operate on',
				placeholder: 'e.g. 321654',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['getTagsForTask'],
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
						operation: ['getTagsForTask'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
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
						resource: ['teamMembership'],
						operation: ['getTeamMemberships'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'Globally unique identifier for the team',
						placeholder: 'e.g. 159874',
						routing: {
							send: {
								type: 'query',
								property: 'team',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A string identifying a user. This can either be the string "me", an email, or the gid of a user. This parameter must be ...',
						placeholder: 'e.g. 512241',
						routing: {
							send: {
								type: 'query',
								property: 'user',
							},
						},
					},
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description:
							'Globally unique identifier for the workspace. This parameter must be used with the user parameter',
						placeholder: 'e.g. 31326',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
				],
			},
			{
				displayName: 'Team Membership GID',
				name: 'team_membership_gid',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. 724362',
				displayOptions: {
					show: {
						resource: ['teamMembership'],
						operation: ['getTeamMembership'],
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
						resource: ['teamMembership'],
						operation: ['getTeamMembership'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['team'],
						operation: ['createTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
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
						resource: ['team'],
						operation: ['updateTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['getTeam'],
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
						resource: ['team'],
						operation: ['getTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['addUserForTeam'],
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
						resource: ['team'],
						operation: ['addUserForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A user identification object for specification with the addUser/removeUser endpoints',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['projectTemplate'],
						operation: ['getProjectTemplatesForTeam'],
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
						resource: ['projectTemplate'],
						operation: ['getProjectTemplatesForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getProjectsForTeam'],
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
						operation: ['getProjectsForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Archived',
						name: 'archived',
						type: 'boolean',
						default: false,
						description:
							'Only return projects whose `archived` field takes on the value of this parameter',
						routing: {
							send: {
								type: 'query',
								property: 'archived',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['createProjectForTeam'],
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
						operation: ['createProjectForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['removeUserForTeam'],
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
						resource: ['team'],
						operation: ['removeUserForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A user identification object for specification with the addUser/removeUser endpoints',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['teamMembership'],
						operation: ['getTeamMembershipsForTeam'],
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
						resource: ['teamMembership'],
						operation: ['getTeamMembershipsForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Team GID',
				name: 'team_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the team',
				placeholder: 'e.g. 159874',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUsersForTeam'],
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
						operation: ['getUsersForTeam'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace',
				placeholder: 'e.g. 31326',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['timePeriod'],
						operation: ['getTimePeriods'],
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
						resource: ['timePeriod'],
						operation: ['getTimePeriods'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Start On',
						name: 'start_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'start_on',
							},
						},
					},
					{
						displayName: 'End On',
						name: 'end_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'end_on',
							},
						},
					},
				],
			},
			{
				displayName: 'Time Period GID',
				name: 'time_period_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the time period',
				placeholder: 'e.g. 917392',
				displayOptions: {
					show: {
						resource: ['timePeriod'],
						operation: ['getTimePeriod'],
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
						resource: ['timePeriod'],
						operation: ['getTimePeriod'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'User Task List GID',
				name: 'user_task_list_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the user task list',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['userTaskList'],
						operation: ['getUserTaskList'],
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
						resource: ['userTaskList'],
						operation: ['getUserTaskList'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'User Task List GID',
				name: 'user_task_list_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the user task list',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['getTasksForUserTaskList'],
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
						resource: ['task'],
						operation: ['getTasksForUserTaskList'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Completed Since',
						name: 'completed_since',
						type: 'string',
						default: '',
						description:
							'Only return tasks that are either incomplete or that have been completed since this time. Accepts a date-time string or ...',
						placeholder: 'e.g. 2012-02-22T02:06:58.158Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_since',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
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
						resource: ['user'],
						operation: ['getUsers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Workspace',
						name: 'workspace',
						type: 'string',
						default: '',
						description: 'The workspace or organization ID to filter users on',
						placeholder: 'e.g. 1331',
						routing: {
							send: {
								type: 'query',
								property: 'workspace',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'The team ID to filter users on',
						placeholder: 'e.g. 15627',
						routing: {
							send: {
								type: 'query',
								property: 'team',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUser'],
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
						operation: ['getUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getFavoritesForUser'],
					},
				},
			},
			{
				displayName: 'Resource Type',
				name: 'resource_type',
				type: 'options',
				default: 'project',
				required: true,
				description: 'The resource type of favorites to be returned',
				options: [
					{
						name: 'Portfolio',
						value: 'portfolio',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Project Template',
						value: 'project_template',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'resource_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getFavoritesForUser'],
					},
				},
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'The workspace in which to get favorites',
				placeholder: 'e.g. 1234',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getFavoritesForUser'],
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
						operation: ['getFavoritesForUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['teamMembership'],
						operation: ['getTeamMembershipsForUser'],
					},
				},
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace',
				placeholder: 'e.g. 31326',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['teamMembership'],
						operation: ['getTeamMembershipsForUser'],
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
						resource: ['teamMembership'],
						operation: ['getTeamMembershipsForUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['getTeamsForUser'],
					},
				},
			},
			{
				displayName: 'Organization',
				name: 'organization',
				type: 'string',
				default: '',
				required: true,
				description: 'The workspace or organization to filter teams on',
				placeholder: 'e.g. 1331',
				routing: {
					send: {
						type: 'query',
						property: 'organization',
					},
				},
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['getTeamsForUser'],
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
						resource: ['team'],
						operation: ['getTeamsForUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['userTaskList'],
						operation: ['getUserTaskListForUser'],
					},
				},
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'The workspace in which to get the user task list',
				placeholder: 'e.g. 1234',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['userTaskList'],
						operation: ['getUserTaskListForUser'],
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
						resource: ['userTaskList'],
						operation: ['getUserTaskListForUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'User GID',
				name: 'user_gid',
				type: 'string',
				default: '',
				required: true,
				description:
					'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
				placeholder: 'e.g. me',
				displayOptions: {
					show: {
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembershipsForUser'],
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
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembershipsForUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace',
				name: 'workspace',
				type: 'string',
				default: '',
				required: true,
				description: 'The workspace to query for webhooks in',
				placeholder: 'e.g. 1331',
				routing: {
					send: {
						type: 'query',
						property: 'workspace',
					},
				},
				displayOptions: {
					show: {
						resource: ['webhook'],
						operation: ['getWebhooks'],
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
						resource: ['webhook'],
						operation: ['getWebhooks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Resource',
						name: 'resource',
						type: 'string',
						default: '',
						description: 'Only return webhooks for the given resource',
						placeholder: 'e.g. 51648',
						routing: {
							send: {
								type: 'query',
								property: 'resource',
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
						resource: ['webhook'],
						operation: ['createWebhook'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Webhook GID',
				name: 'webhook_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the webhook',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['webhook'],
						operation: ['deleteWebhook'],
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
						resource: ['webhook'],
						operation: ['deleteWebhook'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Webhook GID',
				name: 'webhook_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the webhook',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['webhook'],
						operation: ['getWebhook'],
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
						resource: ['webhook'],
						operation: ['getWebhook'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Webhook GID',
				name: 'webhook_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the webhook',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['webhook'],
						operation: ['updateWebhook'],
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
						resource: ['webhook'],
						operation: ['updateWebhook'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace Membership GID',
				name: 'workspace_membership_gid',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembership'],
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
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembership'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
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
						resource: ['workspace'],
						operation: ['getWorkspaces'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['getWorkspace'],
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
						resource: ['workspace'],
						operation: ['getWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['updateWorkspace'],
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
						resource: ['workspace'],
						operation: ['updateWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['addUserForWorkspace'],
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
						resource: ['workspace'],
						operation: ['addUserForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A user identification object for specification with the addUser/removeUser endpoints',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['auditLogApi'],
						operation: ['getAuditLogEvents'],
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
						resource: ['auditLogApi'],
						operation: ['getAuditLogEvents'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Start At',
						name: 'start_at',
						type: 'string',
						default: '',
						description: 'Filter to events created after this time (inclusive)',
						routing: {
							send: {
								type: 'query',
								property: 'start_at',
							},
						},
					},
					{
						displayName: 'End At',
						name: 'end_at',
						type: 'string',
						default: '',
						description: 'Filter to events created before this time (exclusive)',
						routing: {
							send: {
								type: 'query',
								property: 'end_at',
							},
						},
					},
					{
						displayName: 'Event Type',
						name: 'event_type',
						type: 'string',
						default: '',
						description:
							'Filter to events of this type. Refer to the [Supported AuditLogEvents](/docs/supported-auditlogevents) for a full list o...',
						routing: {
							send: {
								type: 'query',
								property: 'event_type',
							},
						},
					},
					{
						displayName: 'Actor Type',
						name: 'actor_type',
						type: 'options',
						default: 'user',
						description:
							'Filter to events with an actor of this type. This only needs to be included if querying for actor types without an ID. I...',
						options: [
							{
								name: 'User',
								value: 'user',
							},
							{
								name: 'Asana',
								value: 'asana',
							},
							{
								name: 'Asana Support',
								value: 'asana_support',
							},
							{
								name: 'Anonymous',
								value: 'anonymous',
							},
							{
								name: 'External Administrator',
								value: 'external_administrator',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'actor_type',
							},
						},
					},
					{
						displayName: 'Actor GID',
						name: 'actor_gid',
						type: 'string',
						default: '',
						description: 'Filter to events triggered by the actor with this ID',
						routing: {
							send: {
								type: 'query',
								property: 'actor_gid',
							},
						},
					},
					{
						displayName: 'Resource GID',
						name: 'resource_gid',
						type: 'string',
						default: '',
						description: 'Filter to events with this resource ID',
						routing: {
							send: {
								type: 'query',
								property: 'resource_gid',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['customField'],
						operation: ['getCustomFieldsForWorkspace'],
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
						resource: ['customField'],
						operation: ['getCustomFieldsForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['getProjectsForWorkspace'],
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
						operation: ['getProjectsForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
					{
						displayName: 'Archived',
						name: 'archived',
						type: 'boolean',
						default: false,
						description:
							'Only return projects whose `archived` field takes on the value of this parameter',
						routing: {
							send: {
								type: 'query',
								property: 'archived',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['project'],
						operation: ['createProjectForWorkspace'],
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
						operation: ['createProjectForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspace'],
						operation: ['removeUserForWorkspace'],
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
						resource: ['workspace'],
						operation: ['removeUserForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						description:
							'A user identification object for specification with the addUser/removeUser endpoints',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['getTagsForWorkspace'],
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
						operation: ['getTagsForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['tag'],
						operation: ['createTagForWorkspace'],
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
						operation: ['createTagForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Data',
						name: 'data',
						type: 'json',
						default: '{}',
						routing: {
							send: {
								type: 'body',
								property: 'data',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['task'],
						operation: ['searchTasksForWorkspace'],
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
						resource: ['task'],
						operation: ['searchTasksForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						description: 'Performs full-text search on both task name and description',
						placeholder: 'e.g. Bug',
						routing: {
							send: {
								type: 'query',
								property: 'text',
							},
						},
					},
					{
						displayName: 'Resource Subtype',
						name: 'resource_subtype',
						type: 'options',
						default: 'milestone',
						description: "Filters results by the task's resource_subtype",
						options: [
							{
								name: 'Default Task',
								value: 'default_task',
							},
							{
								name: 'Milestone',
								value: 'milestone',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'resource_subtype',
							},
						},
					},
					{
						displayName: 'Assignee Any',
						name: 'assignee.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'assignee.any',
							},
						},
					},
					{
						displayName: 'Assignee Not',
						name: 'assignee.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'assignee.not',
							},
						},
					},
					{
						displayName: 'Portfolios Any',
						name: 'portfolios.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of portfolio IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'portfolios.any',
							},
						},
					},
					{
						displayName: 'Projects Any',
						name: 'projects.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of project IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'projects.any',
							},
						},
					},
					{
						displayName: 'Projects Not',
						name: 'projects.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of project IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'projects.not',
							},
						},
					},
					{
						displayName: 'Projects All',
						name: 'projects.all',
						type: 'string',
						default: '',
						description: 'Comma-separated list of project IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'projects.all',
							},
						},
					},
					{
						displayName: 'Sections Any',
						name: 'sections.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of section or column IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'sections.any',
							},
						},
					},
					{
						displayName: 'Sections Not',
						name: 'sections.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of section or column IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'sections.not',
							},
						},
					},
					{
						displayName: 'Sections All',
						name: 'sections.all',
						type: 'string',
						default: '',
						description: 'Comma-separated list of section or column IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'sections.all',
							},
						},
					},
					{
						displayName: 'Tags Any',
						name: 'tags.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of tag IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'tags.any',
							},
						},
					},
					{
						displayName: 'Tags Not',
						name: 'tags.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of tag IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'tags.not',
							},
						},
					},
					{
						displayName: 'Tags All',
						name: 'tags.all',
						type: 'string',
						default: '',
						description: 'Comma-separated list of tag IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'tags.all',
							},
						},
					},
					{
						displayName: 'Teams Any',
						name: 'teams.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of team IDs',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'teams.any',
							},
						},
					},
					{
						displayName: 'Followers Not',
						name: 'followers.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'followers.not',
							},
						},
					},
					{
						displayName: 'Created By Any',
						name: 'created_by.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'created_by.any',
							},
						},
					},
					{
						displayName: 'Created By Not',
						name: 'created_by.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'created_by.not',
							},
						},
					},
					{
						displayName: 'Assigned By Any',
						name: 'assigned_by.any',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'assigned_by.any',
							},
						},
					},
					{
						displayName: 'Assigned By Not',
						name: 'assigned_by.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'assigned_by.not',
							},
						},
					},
					{
						displayName: 'Liked By Not',
						name: 'liked_by.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'liked_by.not',
							},
						},
					},
					{
						displayName: 'Commented On By Not',
						name: 'commented_on_by.not',
						type: 'string',
						default: '',
						description: 'Comma-separated list of user identifiers',
						placeholder: 'e.g. 12345,23456,34567',
						routing: {
							send: {
								type: 'query',
								property: 'commented_on_by.not',
							},
						},
					},
					{
						displayName: 'Due On Before',
						name: 'due_on.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'due_on.before',
							},
						},
					},
					{
						displayName: 'Due On After',
						name: 'due_on.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'due_on.after',
							},
						},
					},
					{
						displayName: 'Due On',
						name: 'due_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string or `null`',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'due_on',
							},
						},
					},
					{
						displayName: 'Due At Before',
						name: 'due_at.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'due_at.before',
							},
						},
					},
					{
						displayName: 'Due At After',
						name: 'due_at.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'due_at.after',
							},
						},
					},
					{
						displayName: 'Start On Before',
						name: 'start_on.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'start_on.before',
							},
						},
					},
					{
						displayName: 'Start On After',
						name: 'start_on.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'start_on.after',
							},
						},
					},
					{
						displayName: 'Start On',
						name: 'start_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string or `null`',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'start_on',
							},
						},
					},
					{
						displayName: 'Created On Before',
						name: 'created_on.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_on.before',
							},
						},
					},
					{
						displayName: 'Created On After',
						name: 'created_on.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_on.after',
							},
						},
					},
					{
						displayName: 'Created On',
						name: 'created_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string or `null`',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_on',
							},
						},
					},
					{
						displayName: 'Created At Before',
						name: 'created_at.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_at.before',
							},
						},
					},
					{
						displayName: 'Created At After',
						name: 'created_at.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'created_at.after',
							},
						},
					},
					{
						displayName: 'Completed On Before',
						name: 'completed_on.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_on.before',
							},
						},
					},
					{
						displayName: 'Completed On After',
						name: 'completed_on.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_on.after',
							},
						},
					},
					{
						displayName: 'Completed On',
						name: 'completed_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string or `null`',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_on',
							},
						},
					},
					{
						displayName: 'Completed At Before',
						name: 'completed_at.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_at.before',
							},
						},
					},
					{
						displayName: 'Completed At After',
						name: 'completed_at.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'completed_at.after',
							},
						},
					},
					{
						displayName: 'Modified On Before',
						name: 'modified_on.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_on.before',
							},
						},
					},
					{
						displayName: 'Modified On After',
						name: 'modified_on.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_on.after',
							},
						},
					},
					{
						displayName: 'Modified On',
						name: 'modified_on',
						type: 'string',
						default: '',
						description: 'ISO 8601 date string or `null`',
						placeholder: 'e.g. 2019-09-15T00:00:00.000Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_on',
							},
						},
					},
					{
						displayName: 'Modified At Before',
						name: 'modified_at.before',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_at.before',
							},
						},
					},
					{
						displayName: 'Modified At After',
						name: 'modified_at.after',
						type: 'string',
						default: '',
						description: 'ISO 8601 datetime string',
						placeholder: 'e.g. 2019-04-15T01:01:46.055Z',
						routing: {
							send: {
								type: 'query',
								property: 'modified_at.after',
							},
						},
					},
					{
						displayName: 'Is Blocking',
						name: 'is_blocking',
						type: 'boolean',
						default: false,
						description: 'Filter to incomplete tasks with dependents',
						routing: {
							send: {
								type: 'query',
								property: 'is_blocking',
							},
						},
					},
					{
						displayName: 'Is Blocked',
						name: 'is_blocked',
						type: 'boolean',
						default: false,
						description: 'Filter to tasks with incomplete dependencies',
						routing: {
							send: {
								type: 'query',
								property: 'is_blocked',
							},
						},
					},
					{
						displayName: 'Has Attachment',
						name: 'has_attachment',
						type: 'boolean',
						default: false,
						description: 'Filter to tasks with attachments',
						routing: {
							send: {
								type: 'query',
								property: 'has_attachment',
							},
						},
					},
					{
						displayName: 'Completed',
						name: 'completed',
						type: 'boolean',
						default: false,
						description: 'Filter to completed tasks',
						routing: {
							send: {
								type: 'query',
								property: 'completed',
							},
						},
					},
					{
						displayName: 'Is Subtask',
						name: 'is_subtask',
						type: 'boolean',
						default: false,
						description: 'Filter to subtasks',
						routing: {
							send: {
								type: 'query',
								property: 'is_subtask',
							},
						},
					},
					{
						displayName: 'Sort By',
						name: 'sort_by',
						type: 'options',
						default: 'modified_at',
						description:
							'One of `due_date`, `created_at`, `completed_at`, `likes`, or `modified_at`, defaults to `modified_at`',
						options: [
							{
								name: 'Due Date',
								value: 'due_date',
							},
							{
								name: 'Created At',
								value: 'created_at',
							},
							{
								name: 'Completed At',
								value: 'completed_at',
							},
							{
								name: 'Likes',
								value: 'likes',
							},
							{
								name: 'Modified At',
								value: 'modified_at',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort_by',
							},
						},
					},
					{
						displayName: 'Sort Ascending',
						name: 'sort_ascending',
						type: 'boolean',
						default: false,
						description: 'Default `false`',
						routing: {
							send: {
								type: 'query',
								property: 'sort_ascending',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['getTeamsForWorkspace'],
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
						resource: ['team'],
						operation: ['getTeamsForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['typeahead'],
						operation: ['typeaheadForWorkspace'],
					},
				},
			},
			{
				displayName: 'Resource Type',
				name: 'resource_type',
				type: 'options',
				default: 'user',
				required: true,
				description:
					'The type of values the typeahead should return. You can choose from one of the following: `custom_field`, `project`, `pr...',
				options: [
					{
						name: 'Custom Field',
						value: 'custom_field',
					},
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Project Template',
						value: 'project_template',
					},
					{
						name: 'Portfolio',
						value: 'portfolio',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Task',
						value: 'task',
					},
					{
						name: 'User',
						value: 'user',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'resource_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['typeahead'],
						operation: ['typeaheadForWorkspace'],
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
						resource: ['typeahead'],
						operation: ['typeaheadForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 'user',
						description: '*Deprecated: new integrations should prefer the resource_type field.*',
						options: [
							{
								name: 'Custom Field',
								value: 'custom_field',
							},
							{
								name: 'Portfolio',
								value: 'portfolio',
							},
							{
								name: 'Project',
								value: 'project',
							},
							{
								name: 'Tag',
								value: 'tag',
							},
							{
								name: 'Task',
								value: 'task',
							},
							{
								name: 'User',
								value: 'user',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'type',
							},
						},
					},
					{
						displayName: 'Query',
						name: 'query',
						type: 'string',
						default: '',
						description:
							'The string that will be used to search for relevant objects. If an empty string is passed in, the API will return result...',
						placeholder: 'e.g. Greg',
						routing: {
							send: {
								type: 'query',
								property: 'query',
							},
						},
					},
					{
						displayName: 'Count',
						name: 'count',
						type: 'number',
						default: 0,
						description:
							'The number of results to return. The default is 20 if this parameter is omitted, with a minimum of 1 and a maximum of 10...',
						routing: {
							send: {
								type: 'query',
								property: 'count',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['getUsersForWorkspace'],
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
						operation: ['getUsersForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
			{
				displayName: 'Workspace GID',
				name: 'workspace_gid',
				type: 'string',
				default: '',
				required: true,
				description: 'Globally unique identifier for the workspace or organization',
				placeholder: 'e.g. 12345',
				displayOptions: {
					show: {
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembershipsForWorkspace'],
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
						resource: ['workspaceMembership'],
						operation: ['getWorkspaceMembershipsForWorkspace'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A string identifying a user. This can either be the string "me", an email, or the gid of a user',
						placeholder: 'e.g. me',
						routing: {
							send: {
								type: 'query',
								property: 'user',
							},
						},
					},
					{
						displayName: 'Opt Pretty',
						name: 'opt_pretty',
						type: 'boolean',
						default: false,
						description:
							'Provides pretty output. Provides the response in a pretty format. In the case of JSON this means doing proper line break...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_pretty',
							},
						},
					},
					{
						displayName: 'Opt Fields',
						name: 'opt_fields',
						type: 'string',
						default: '',
						description:
							'Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and c...',
						routing: {
							send: {
								type: 'query',
								property: 'opt_fields',
							},
						},
					},
					{
						displayName: 'Limit',
						name: 'limit',
						type: 'number',
						default: 0,
						description:
							'Results per page. The number of objects to return per page. The value must be between 1 and 100',
						routing: {
							send: {
								type: 'query',
								property: 'limit',
							},
						},
					},
					{
						displayName: 'Offset',
						name: 'offset',
						type: 'string',
						default: '',
						description:
							'Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which ca...',
						placeholder: 'e.g. eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9',
						routing: {
							send: {
								type: 'query',
								property: 'offset',
							},
						},
					},
				],
			},
		],
	};
};