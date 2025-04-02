exports.Hetzner = class Hetzner {
	description = {
		displayName: 'Hetzner',
		name: 'hetzner',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description:
			'This is the official API documentation for the Public Hetzner Cloud.  ## Introduction  The Hetzner Cloud API operates ov...',
		defaults: {
			name: 'Hetzner',
		},
		inputs: ['main'],
		outputs: ['main'],
		requestDefaults: {
			baseURL: 'https://api.hetzner.cloud/v1',
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
				default: 'action',
				options: [
					{
						name: 'Action',
						value: 'action',
					},
					{
						name: 'Certificate',
						value: 'certificate',
					},
					{
						name: 'Certificate Action',
						value: 'certificateAction',
					},
					{
						name: 'Datacenter',
						value: 'datacenter',
					},
					{
						name: 'Firewall',
						value: 'firewall',
					},
					{
						name: 'Firewall Action',
						value: 'firewallAction',
					},
					{
						name: 'Floating IP',
						value: 'floatingIp',
					},
					{
						name: 'Floating IP Action',
						value: 'floatingIpAction',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Image Action',
						value: 'imageAction',
					},
					{
						name: 'Iso',
						value: 'iso',
					},
					{
						name: 'Load Balancer Type',
						value: 'loadBalancerType',
					},
					{
						name: 'Load Balancer',
						value: 'loadBalancer',
					},
					{
						name: 'Load Balancer Action',
						value: 'loadBalancerAction',
					},
					{
						name: 'Location',
						value: 'location',
					},
					{
						name: 'Network',
						value: 'network',
					},
					{
						name: 'Network Action',
						value: 'networkAction',
					},
					{
						name: 'Placement Group',
						value: 'placementGroup',
					},
					{
						name: 'Pricing',
						value: 'pricing',
					},
					{
						name: 'Primary IP',
						value: 'primaryIp',
					},
					{
						name: 'Primary IP Action',
						value: 'primaryIpAction',
					},
					{
						name: 'Server Type',
						value: 'serverType',
					},
					{
						name: 'Server',
						value: 'server',
					},
					{
						name: 'Server Action',
						value: 'serverAction',
					},
					{
						name: 'Ssh Key',
						value: 'sshKey',
					},
					{
						name: 'Volume',
						value: 'volume',
					},
					{
						name: 'Volume Action',
						value: 'volumeAction',
					},
				],
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getActions',
				options: [
					{
						name: 'Get all Actions',
						value: 'getActions',
						action:
							'Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status...',
						routing: {
							request: {
								method: 'GET',
								url: '/actions',
							},
						},
					},
					{
						name: 'Get an Action',
						value: 'getActionsId',
						action: 'Returns a specific Action object',
						routing: {
							request: {
								method: 'GET',
								url: '=/actions/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['action'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getCertificates',
				options: [
					{
						name: 'Get all Certificates',
						value: 'getCertificates',
						action: 'Returns all Certificate objects',
						routing: {
							request: {
								method: 'GET',
								url: '/certificates',
							},
						},
					},
					{
						name: 'Create a Certificate',
						value: 'postCertificates',
						action:
							'Creates a new Certificate.  The default type **uploaded** allows for uploading your existing `certificate` and `private_...',
						routing: {
							request: {
								method: 'POST',
								url: '/certificates',
							},
						},
					},
					{
						name: 'Delete a Certificate',
						value: 'deleteCertificatesId',
						action: 'Deletes a Certificate',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/certificates/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Certificate',
						value: 'getCertificatesId',
						action: 'Gets a specific Certificate object',
						routing: {
							request: {
								method: 'GET',
								url: '=/certificates/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Certificate',
						value: 'putCertificatesId',
						action:
							'Updates the Certificate properties.  Note that when updating labels, the Certificate’s current set of labels will be rep...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/certificates/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['certificate'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getCertificatesIdActions',
				options: [
					{
						name: 'Get all Actions for a Certificate',
						value: 'getCertificatesIdActions',
						action:
							'Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter the...',
						routing: {
							request: {
								method: 'GET',
								url: '=/certificates/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Retry Issuance or Renewal',
						value: 'postCertificatesIdActionsRetry',
						action:
							'Retry a failed Certificate issuance or renewal.  Only applicable if the type of the Certificate is `managed` and the iss...',
						routing: {
							request: {
								method: 'POST',
								url: '=/certificates/{{ $parameter["id"] }}/actions/retry',
							},
						},
					},
					{
						name: 'Get an Action for a Certificate',
						value: 'getCertificatesIdActionsActionId',
						action:
							'Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions',
						routing: {
							request: {
								method: 'GET',
								url: '=/certificates/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['certificateAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getDatacenters',
				options: [
					{
						name: 'Get all Datacenters',
						value: 'getDatacenters',
						action: 'Returns all Datacenter objects',
						routing: {
							request: {
								method: 'GET',
								url: '/datacenters',
							},
						},
					},
					{
						name: 'Get a Datacenter',
						value: 'getDatacentersId',
						action: 'Returns a specific Datacenter object',
						routing: {
							request: {
								method: 'GET',
								url: '=/datacenters/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['datacenter'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getFirewalls',
				options: [
					{
						name: 'Get all Firewalls',
						value: 'getFirewalls',
						action: 'Returns all Firewall objects',
						routing: {
							request: {
								method: 'GET',
								url: '/firewalls',
							},
						},
					},
					{
						name: 'Create a Firewall',
						value: 'postFirewalls',
						action:
							'Creates a new Firewall.  #### Call specific error codes  | Code                          | Description                  ...',
						routing: {
							request: {
								method: 'POST',
								url: '/firewalls',
							},
						},
					},
					{
						name: 'Delete a Firewall',
						value: 'deleteFirewallsId',
						action:
							'Deletes a Firewall.  #### Call specific error codes  | Code                 | Description                               ...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/firewalls/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Firewall',
						value: 'getFirewallsId',
						action: 'Gets a specific Firewall object',
						routing: {
							request: {
								method: 'GET',
								url: '=/firewalls/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Firewall',
						value: 'putFirewallsId',
						action:
							"Updates the Firewall.  Note that when updating labels, the Firewall's current set of labels will be replaced with the la...",
						routing: {
							request: {
								method: 'PUT',
								url: '=/firewalls/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['firewall'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getFirewallsIdActions',
				options: [
					{
						name: 'Get all Actions for a Firewall',
						value: 'getFirewallsIdActions',
						action:
							'Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them w...',
						routing: {
							request: {
								method: 'GET',
								url: '=/firewalls/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Apply to Resources',
						value: 'postFirewallsIdActionsApplyToResources',
						action:
							'Applies one Firewall to multiple resources.  Currently servers (public network interface) and label selectors are suppor...',
						routing: {
							request: {
								method: 'POST',
								url: '=/firewalls/{{ $parameter["id"] }}/actions/apply_to_resources',
							},
						},
					},
					{
						name: 'Remove from Resources',
						value: 'postFirewallsIdActionsRemoveFromResources',
						action:
							'Removes one Firewall from multiple resources.  Currently only Servers (and their public network interfaces) are supporte...',
						routing: {
							request: {
								method: 'POST',
								url: '=/firewalls/{{ $parameter["id"] }}/actions/remove_from_resources',
							},
						},
					},
					{
						name: 'Set Rules',
						value: 'postFirewallsIdActionsSetRules',
						action:
							'Sets the rules of a Firewall.  All existing rules will be overwritten. Pass an empty `rules` array to remove all rules. ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/firewalls/{{ $parameter["id"] }}/actions/set_rules',
							},
						},
					},
					{
						name: 'Get an Action for a Firewall',
						value: 'getFirewallsIdActionsActionId',
						action: 'Returns a specific Action for a Firewall',
						routing: {
							request: {
								method: 'GET',
								url: '=/firewalls/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['firewallAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getFloatingIps',
				options: [
					{
						name: 'Get all Floating IPs',
						value: 'getFloatingIps',
						action: 'Returns all Floating IP objects',
						routing: {
							request: {
								method: 'GET',
								url: '/floating_ips',
							},
						},
					},
					{
						name: 'Create a Floating IP',
						value: 'postFloatingIps',
						action:
							'Creates a new Floating IP assigned to a Server. If you want to create a Floating IP that is not bound to a Server, you n...',
						routing: {
							request: {
								method: 'POST',
								url: '/floating_ips',
							},
						},
					},
					{
						name: 'Delete a Floating IP',
						value: 'deleteFloatingIpsId',
						action:
							'Deletes a Floating IP. If it is currently assigned to a Server it will automatically get unassigned',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/floating_ips/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Floating IP',
						value: 'getFloatingIpsId',
						action: 'Returns a specific Floating IP object',
						routing: {
							request: {
								method: 'GET',
								url: '=/floating_ips/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Floating IP',
						value: 'putFloatingIpsId',
						action:
							'Updates the description or labels of a Floating IP. Also note that when updating labels, the Floating IP’s current set o...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/floating_ips/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['floatingIp'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getFloatingIpsIdActions',
				options: [
					{
						name: 'Get all Actions for a Floating IP',
						value: 'getFloatingIpsIdActions',
						action:
							'Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter the...',
						routing: {
							request: {
								method: 'GET',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Assign a Floating IP to a Server',
						value: 'postFloatingIpsIdActionsAssign',
						action: 'Assigns a Floating IP to a Server',
						routing: {
							request: {
								method: 'POST',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions/assign',
							},
						},
					},
					{
						name: 'Change reverse DNS entry for a Floating IP',
						value: 'postFloatingIpsIdActionsChangeDnsPtr',
						action:
							'Changes the hostname that will appear when getting the hostname belonging to this Floating IP',
						routing: {
							request: {
								method: 'POST',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions/change_dns_ptr',
							},
						},
					},
					{
						name: 'Change Floating IP Protection',
						value: 'postFloatingIpsIdActionsChangeProtection',
						action: 'Changes the protection configuration of the Floating IP',
						routing: {
							request: {
								method: 'POST',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Unassign a Floating IP',
						value: 'postFloatingIpsIdActionsUnassign',
						action:
							'Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time',
						routing: {
							request: {
								method: 'POST',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions/unassign',
							},
						},
					},
					{
						name: 'Get an Action for a Floating IP',
						value: 'getFloatingIpsIdActionsActionId',
						action: 'Returns a specific Action object for a Floating IP',
						routing: {
							request: {
								method: 'GET',
								url: '=/floating_ips/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getImages',
				options: [
					{
						name: 'Get all Images',
						value: 'getImages',
						action:
							'Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters',
						routing: {
							request: {
								method: 'GET',
								url: '/images',
							},
						},
					},
					{
						name: 'Delete an Image',
						value: 'deleteImagesId',
						action: 'Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/images/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get an Image',
						value: 'getImagesId',
						action: 'Returns a specific Image object',
						routing: {
							request: {
								method: 'GET',
								url: '=/images/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update an Image',
						value: 'putImagesId',
						action:
							'Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/images/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['image'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getImagesIdActions',
				options: [
					{
						name: 'Get all Actions for an Image',
						value: 'getImagesIdActions',
						action:
							'Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them wit...',
						routing: {
							request: {
								method: 'GET',
								url: '=/images/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Change Image Protection',
						value: 'postImagesIdActionsChangeProtection',
						action:
							'Changes the protection configuration of the Image. Can only be used on snapshots',
						routing: {
							request: {
								method: 'POST',
								url: '=/images/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Get an Action for an Image',
						value: 'getImagesIdActionsActionId',
						action: 'Returns a specific Action for an Image',
						routing: {
							request: {
								method: 'GET',
								url: '=/images/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['imageAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getIsos',
				options: [
					{
						name: 'Get all ISOs',
						value: 'getIsos',
						action: 'Returns all available ISO objects',
						routing: {
							request: {
								method: 'GET',
								url: '/isos',
							},
						},
					},
					{
						name: 'Get an ISO',
						value: 'getIsosId',
						action: 'Returns a specific ISO object',
						routing: {
							request: {
								method: 'GET',
								url: '=/isos/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['iso'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getLoadBalancerTypes',
				options: [
					{
						name: 'Get all Load Balancer Types',
						value: 'getLoadBalancerTypes',
						action: 'Gets all Load Balancer type objects',
						routing: {
							request: {
								method: 'GET',
								url: '/load_balancer_types',
							},
						},
					},
					{
						name: 'Get a Load Balancer Type',
						value: 'getLoadBalancerTypesId',
						action: 'Gets a specific Load Balancer type object',
						routing: {
							request: {
								method: 'GET',
								url: '=/load_balancer_types/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['loadBalancerType'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getLoadBalancers',
				options: [
					{
						name: 'Get all Load Balancers',
						value: 'getLoadBalancers',
						action: 'Gets all existing Load Balancers that you have available',
						routing: {
							request: {
								method: 'GET',
								url: '/load_balancers',
							},
						},
					},
					{
						name: 'Create a Load Balancer',
						value: 'postLoadBalancers',
						action:
							'Creates a Load Balancer.  #### Call specific error codes  | Code                                    | Description       ...',
						routing: {
							request: {
								method: 'POST',
								url: '/load_balancers',
							},
						},
					},
					{
						name: 'Delete a Load Balancer',
						value: 'deleteLoadBalancersId',
						action: 'Deletes a Load Balancer',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/load_balancers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Load Balancer',
						value: 'getLoadBalancersId',
						action: 'Gets a specific Load Balancer object',
						routing: {
							request: {
								method: 'GET',
								url: '=/load_balancers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Load Balancer',
						value: 'putLoadBalancersId',
						action:
							'Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.  Note that when updating la...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/load_balancers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get Metrics for a LoadBalancer',
						value: 'getLoadBalancersIdMetrics',
						action:
							'You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `band...',
						routing: {
							request: {
								method: 'GET',
								url: '=/load_balancers/{{ $parameter["id"] }}/metrics',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getLoadBalancersIdActions',
				options: [
					{
						name: 'Get all Actions for a Load Balancer',
						value: 'getLoadBalancersIdActions',
						action:
							'Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter t...',
						routing: {
							request: {
								method: 'GET',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Add Service',
						value: 'postLoadBalancersIdActionsAddService',
						action:
							'Adds a service to a Load Balancer.  #### Call specific error codes  | Code                       | Description          ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/add_service',
							},
						},
					},
					{
						name: 'Add Target',
						value: 'postLoadBalancersIdActionsAddTarget',
						action:
							'Adds a target to a Load Balancer.  #### Call specific error codes  | Code                                    | Descripti...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/add_target',
							},
						},
					},
					{
						name: 'Attach a Load Balancer to a Network',
						value: 'postLoadBalancersIdActionsAttachToNetwork',
						action:
							'Attach a Load Balancer to a Network.  **Call specific error codes**  | Code                             | Description   ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/attach_to_network',
							},
						},
					},
					{
						name: 'Change Algorithm',
						value: 'postLoadBalancersIdActionsChangeAlgorithm',
						action: 'Change the algorithm that determines to which target new requests are sent',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/change_algorithm',
							},
						},
					},
					{
						name: 'Change reverse DNS entry for this Load Balancer',
						value: 'postLoadBalancersIdActionsChangeDnsPtr',
						action:
							'Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/change_dns_ptr',
							},
						},
					},
					{
						name: 'Change Load Balancer Protection',
						value: 'postLoadBalancersIdActionsChangeProtection',
						action: 'Changes the protection configuration of a Load Balancer',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Change the Type of a Load Balancer',
						value: 'postLoadBalancersIdActionsChangeType',
						action:
							'Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.  **Call specific error codes**  | C...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/change_type',
							},
						},
					},
					{
						name: 'Delete Service',
						value: 'postLoadBalancersIdActionsDeleteService',
						action: 'Delete a service of a Load Balancer',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/delete_service',
							},
						},
					},
					{
						name: 'Detach a Load Balancer from a Network',
						value: 'postLoadBalancersIdActionsDetachFromNetwork',
						action: 'Detaches a Load Balancer from a network',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/detach_from_network',
							},
						},
					},
					{
						name: 'Disable the public interface of a Load Balancer',
						value: 'postLoadBalancersIdActionsDisablePublicInterface',
						action:
							'Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its publ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/disable_public_interface',
							},
						},
					},
					{
						name: 'Enable the public interface of a Load Balancer',
						value: 'postLoadBalancersIdActionsEnablePublicInterface',
						action:
							'Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IP...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/enable_public_interface',
							},
						},
					},
					{
						name: 'Remove Target',
						value: 'postLoadBalancersIdActionsRemoveTarget',
						action: 'Removes a target from a Load Balancer',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/remove_target',
							},
						},
					},
					{
						name: 'Update Service',
						value: 'postLoadBalancersIdActionsUpdateService',
						action:
							'Updates a Load Balancer Service.  #### Call specific error codes  | Code                       | Description            ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/update_service',
							},
						},
					},
					{
						name: 'Get an Action for a Load Balancer',
						value: 'getLoadBalancersIdActionsActionId',
						action: 'Returns a specific Action for a Load Balancer',
						routing: {
							request: {
								method: 'GET',
								url: '=/load_balancers/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getLocations',
				options: [
					{
						name: 'Get all Locations',
						value: 'getLocations',
						action: 'Returns all Location objects',
						routing: {
							request: {
								method: 'GET',
								url: '/locations',
							},
						},
					},
					{
						name: 'Get a Location',
						value: 'getLocationsId',
						action: 'Returns a specific Location object',
						routing: {
							request: {
								method: 'GET',
								url: '=/locations/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['location'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getNetworks',
				options: [
					{
						name: 'Get all Networks',
						value: 'getNetworks',
						action: 'Gets all existing networks that you have available',
						routing: {
							request: {
								method: 'GET',
								url: '/networks',
							},
						},
					},
					{
						name: 'Create a Network',
						value: 'postNetworks',
						action:
							'Creates a network with the specified `ip_range`.  You may specify one or more `subnets`. You can also add more Subnets l...',
						routing: {
							request: {
								method: 'POST',
								url: '/networks',
							},
						},
					},
					{
						name: 'Delete a Network',
						value: 'deleteNetworksId',
						action:
							'Deletes a network. If there are Servers attached they will be detached in the background.  Note: if the network object c...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/networks/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Network',
						value: 'getNetworksId',
						action: 'Gets a specific network object',
						routing: {
							request: {
								method: 'GET',
								url: '=/networks/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Network',
						value: 'putNetworksId',
						action:
							'Updates the network properties.  Note that when updating labels, the network’s current set of labels will be replaced wi...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/networks/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['network'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getNetworksIdActions',
				options: [
					{
						name: 'Get all Actions for a Network',
						value: 'getNetworksIdActions',
						action:
							'Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them wi...',
						routing: {
							request: {
								method: 'GET',
								url: '=/networks/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Add a route to a Network',
						value: 'postNetworksIdActionsAddRoute',
						action:
							'Adds a route entry to a Network.  Note: if the Network object changes during the request, the response will be a “confli...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/add_route',
							},
						},
					},
					{
						name: 'Add a subnet to a Network',
						value: 'postNetworksIdActionsAddSubnet',
						action:
							'Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick t...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/add_subnet',
							},
						},
					},
					{
						name: 'Change IP range of a Network',
						value: 'postNetworksIdActionsChangeIpRange',
						action:
							'Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of a...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/change_ip_range',
							},
						},
					},
					{
						name: 'Change Network Protection',
						value: 'postNetworksIdActionsChangeProtection',
						action:
							'Changes the protection configuration of a Network.  Note: if the Network object changes during the request, the response...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Delete a route from a Network',
						value: 'postNetworksIdActionsDeleteRoute',
						action:
							'Delete a route entry from a Network.  Note: if the Network object changes during the request, the response will be a “co...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/delete_route',
							},
						},
					},
					{
						name: 'Delete a subnet from a Network',
						value: 'postNetworksIdActionsDeleteSubnet',
						action:
							'Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have S...',
						routing: {
							request: {
								method: 'POST',
								url: '=/networks/{{ $parameter["id"] }}/actions/delete_subnet',
							},
						},
					},
					{
						name: 'Get an Action for a Network',
						value: 'getNetworksIdActionsActionId',
						action: 'Returns a specific Action for a Network',
						routing: {
							request: {
								method: 'GET',
								url: '=/networks/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['networkAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getPlacementGroups',
				options: [
					{
						name: 'Get all PlacementGroups',
						value: 'getPlacementGroups',
						action: 'Returns all PlacementGroup objects',
						routing: {
							request: {
								method: 'GET',
								url: '/placement_groups',
							},
						},
					},
					{
						name: 'Create a PlacementGroup',
						value: 'postPlacementGroups',
						action: 'Creates a new PlacementGroup.',
						routing: {
							request: {
								method: 'POST',
								url: '/placement_groups',
							},
						},
					},
					{
						name: 'Delete a PlacementGroup',
						value: 'deletePlacementGroupsId',
						action: 'Deletes a PlacementGroup',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/placement_groups/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a PlacementGroup',
						value: 'getPlacementGroupsId',
						action: 'Gets a specific PlacementGroup object',
						routing: {
							request: {
								method: 'GET',
								url: '=/placement_groups/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a PlacementGroup',
						value: 'putPlacementGroupsId',
						action:
							'Updates the PlacementGroup properties.  Note that when updating labels, the PlacementGroup’s current set of labels will ...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/placement_groups/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['placementGroup'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getPricing',
				options: [
					{
						name: 'Get all prices',
						value: 'getPricing',
						action:
							'Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculati...',
						routing: {
							request: {
								method: 'GET',
								url: '/pricing',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['pricing'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getPrimaryIps',
				options: [
					{
						name: 'Get all Primary IPs',
						value: 'getPrimaryIps',
						action: 'Returns all Primary IP objects',
						routing: {
							request: {
								method: 'GET',
								url: '/primary_ips',
							},
						},
					},
					{
						name: 'Create a Primary IP',
						value: 'postPrimaryIps',
						action:
							'Creates a new Primary IP, optionally assigned to a Server.  If you want to create a Primary IP that is not assigned to a...',
						routing: {
							request: {
								method: 'POST',
								url: '/primary_ips',
							},
						},
					},
					{
						name: 'Delete a Primary IP',
						value: 'deletePrimaryIpsId',
						action:
							'Deletes a Primary IP.  The Primary IP may be assigned to a Server. In this case it is unassigned automatically. The Serv...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/primary_ips/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Primary IP',
						value: 'getPrimaryIpsId',
						action: 'Returns a specific Primary IP object',
						routing: {
							request: {
								method: 'GET',
								url: '=/primary_ips/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Primary IP',
						value: 'putPrimaryIpsId',
						action:
							"Updates the Primary IP.  Note that when updating labels, the Primary IP's current set of labels will be replaced with th...",
						routing: {
							request: {
								method: 'PUT',
								url: '=/primary_ips/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['primaryIp'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'postPrimaryIpsIdActionsAssign',
				options: [
					{
						name: 'Assign a Primary IP to a resource',
						value: 'postPrimaryIpsIdActionsAssign',
						action:
							'Assigns a Primary IP to a Server.  A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned....',
						routing: {
							request: {
								method: 'POST',
								url: '=/primary_ips/{{ $parameter["id"] }}/actions/assign',
							},
						},
					},
					{
						name: 'Change reverse DNS entry for a Primary IP',
						value: 'postPrimaryIpsIdActionsChangeDnsPtr',
						action:
							'Changes the hostname that will appear when getting the hostname belonging to this Primary IP',
						routing: {
							request: {
								method: 'POST',
								url: '=/primary_ips/{{ $parameter["id"] }}/actions/change_dns_ptr',
							},
						},
					},
					{
						name: 'Change Primary IP Protection',
						value: 'postPrimaryIpsIdActionsChangeProtection',
						action:
							'Changes the protection configuration of a Primary IP.  A Primary IP can only be delete protected if its `auto_delete` pr...',
						routing: {
							request: {
								method: 'POST',
								url: '=/primary_ips/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Unassign a Primary IP from a resource',
						value: 'postPrimaryIpsIdActionsUnassign',
						action:
							'Unassigns a Primary IP from a Server.  The Server must be powered off (status `off`) in order for this operation to succ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/primary_ips/{{ $parameter["id"] }}/actions/unassign',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getServerTypes',
				options: [
					{
						name: 'Get all Server Types',
						value: 'getServerTypes',
						action: 'Gets all Server type objects',
						routing: {
							request: {
								method: 'GET',
								url: '/server_types',
							},
						},
					},
					{
						name: 'Get a Server Type',
						value: 'getServerTypesId',
						action: 'Gets a specific Server type object',
						routing: {
							request: {
								method: 'GET',
								url: '=/server_types/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['serverType'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getServers',
				options: [
					{
						name: 'Get all Servers',
						value: 'getServers',
						action: 'Returns all existing Server objects',
						routing: {
							request: {
								method: 'GET',
								url: '/servers',
							},
						},
					},
					{
						name: 'Create a Server',
						value: 'postServers',
						action:
							'Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of crea...',
						routing: {
							request: {
								method: 'POST',
								url: '/servers',
							},
						},
					},
					{
						name: 'Delete a Server',
						value: 'deleteServersId',
						action:
							'Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/servers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Server',
						value: 'getServersId',
						action: 'Returns a specific Server object. The Server must exist inside the Project',
						routing: {
							request: {
								method: 'GET',
								url: '=/servers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Server',
						value: 'putServersId',
						action:
							'Updates a Server. You can update a Server’s name and a Server’s labels. Please note that Server names must be unique per...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/servers/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get Metrics for a Server',
						value: 'getServersIdMetrics',
						action:
							'Get Metrics for specified Server.  You must specify the type of metric to get: cpu, disk or network. You can also specif...',
						routing: {
							request: {
								method: 'GET',
								url: '=/servers/{{ $parameter["id"] }}/metrics',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['server'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getServersIdActions',
				options: [
					{
						name: 'Get all Actions for a Server',
						value: 'getServersIdActions',
						action:
							'Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them wit...',
						routing: {
							request: {
								method: 'GET',
								url: '=/servers/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Add a Server to a Placement Group',
						value: 'postServersIdActionsAddToPlacementGroup',
						action:
							'Adds a Server to a Placement Group.  Server must be powered off for this command to succeed.  #### Call specific error c...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/add_to_placement_group',
							},
						},
					},
					{
						name: 'Attach an ISO to a Server',
						value: 'postServersIdActionsAttachIso',
						action:
							'Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automaticall...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/attach_iso',
							},
						},
					},
					{
						name: 'Attach a Server to a Network',
						value: 'postServersIdActionsAttachToNetwork',
						action:
							'Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/attach_to_network',
							},
						},
					},
					{
						name: 'Change alias IPs of a Network',
						value: 'postServersIdActionsChangeAliasIps',
						action:
							'Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be r...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/change_alias_ips',
							},
						},
					},
					{
						name: 'Change reverse DNS entry for this Server',
						value: 'postServersIdActionsChangeDnsPtr',
						action:
							'Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Ser...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/change_dns_ptr',
							},
						},
					},
					{
						name: 'Change Server Protection',
						value: 'postServersIdActionsChangeProtection',
						action: 'Changes the protection configuration of the Server',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Change the Type of a Server',
						value: 'postServersIdActionsChangeType',
						action:
							'Changes the type (Cores, RAM and disk sizes) of a Server.  Server must be powered off for this command to succeed.  This...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/change_type',
							},
						},
					},
					{
						name: 'Create Image from a Server',
						value: 'postServersIdActionsCreateImage',
						action:
							'Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current s...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/create_image',
							},
						},
					},
					{
						name: 'Detach a Server from a Network',
						value: 'postServersIdActionsDetachFromNetwork',
						action: 'Detaches a Server from a network. The interface for this network will vanish',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/detach_from_network',
							},
						},
					},
					{
						name: 'Detach an ISO from a Server',
						value: 'postServersIdActionsDetachIso',
						action:
							'Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is imme...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/detach_iso',
							},
						},
					},
					{
						name: 'Disable Backups for a Server',
						value: 'postServersIdActionsDisableBackup',
						action:
							'Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backu...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/disable_backup',
							},
						},
					},
					{
						name: 'Disable Rescue Mode for a Server',
						value: 'postServersIdActionsDisableRescue',
						action:
							'Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.  Rescue Mode i...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/disable_rescue',
							},
						},
					},
					{
						name: 'Enable and Configure Backups for a Server',
						value: 'postServersIdActionsEnableBackup',
						action:
							'Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the pr...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/enable_backup',
							},
						},
					},
					{
						name: 'Enable Rescue Mode for a Server',
						value: 'postServersIdActionsEnableRescue',
						action:
							'Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/enable_rescue',
							},
						},
					},
					{
						name: 'Power off a Server',
						value: 'postServersIdActionsPoweroff',
						action:
							'Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. M...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/poweroff',
							},
						},
					},
					{
						name: 'Power on a Server',
						value: 'postServersIdActionsPoweron',
						action: 'Starts a Server by turning its power on',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/poweron',
							},
						},
					},
					{
						name: 'Soft-reboot a Server',
						value: 'postServersIdActionsReboot',
						action:
							'Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the r...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/reboot',
							},
						},
					},
					{
						name: 'Rebuild a Server from an Image',
						value: 'postServersIdActionsRebuild',
						action:
							'Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Serve...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/rebuild',
							},
						},
					},
					{
						name: 'Remove from Placement Group',
						value: 'postServersIdActionsRemoveFromPlacementGroup',
						action: 'Removes a Server from a Placement Group.',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/remove_from_placement_group',
							},
						},
					},
					{
						name: 'Request Console for a Server',
						value: 'postServersIdActionsRequestConsole',
						action:
							'Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/request_console',
							},
						},
					},
					{
						name: 'Reset a Server',
						value: 'postServersIdActionsReset',
						action:
							'Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/reset',
							},
						},
					},
					{
						name: 'Reset root Password of a Server',
						value: 'postServersIdActionsResetPassword',
						action:
							'Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/reset_password',
							},
						},
					},
					{
						name: 'Shutdown a Server',
						value: 'postServersIdActionsShutdown',
						action:
							'Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and re...',
						routing: {
							request: {
								method: 'POST',
								url: '=/servers/{{ $parameter["id"] }}/actions/shutdown',
							},
						},
					},
					{
						name: 'Get an Action for a Server',
						value: 'getServersIdActionsActionId',
						action: 'Returns a specific Action object for a Server',
						routing: {
							request: {
								method: 'GET',
								url: '=/servers/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['serverAction'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getSshKeys',
				options: [
					{
						name: 'Get all SSH keys',
						value: 'getSshKeys',
						action: 'Returns all SSH key objects',
						routing: {
							request: {
								method: 'GET',
								url: '/ssh_keys',
							},
						},
					},
					{
						name: 'Create an SSH key',
						value: 'postSshKeys',
						action:
							'Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls ...',
						routing: {
							request: {
								method: 'POST',
								url: '/ssh_keys',
							},
						},
					},
					{
						name: 'Delete an SSH key',
						value: 'deleteSshKeysId',
						action: 'Deletes an SSH key. It cannot be used anymore',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/ssh_keys/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a SSH key',
						value: 'getSshKeysId',
						action: 'Returns a specific SSH key object',
						routing: {
							request: {
								method: 'GET',
								url: '=/ssh_keys/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update an SSH key',
						value: 'putSshKeysId',
						action:
							'Updates an SSH key. You can update an SSH key name and an SSH key labels.  Please note that when updating labels, the SS...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/ssh_keys/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['sshKey'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getVolumes',
				options: [
					{
						name: 'Get all Volumes',
						value: 'getVolumes',
						action: 'Gets all existing Volumes that you have available',
						routing: {
							request: {
								method: 'GET',
								url: '/volumes',
							},
						},
					},
					{
						name: 'Create a Volume',
						value: 'postVolumes',
						action:
							'Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to ...',
						routing: {
							request: {
								method: 'POST',
								url: '/volumes',
							},
						},
					},
					{
						name: 'Delete a Volume',
						value: 'deleteVolumesId',
						action:
							'Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/volumes/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a Volume',
						value: 'getVolumesId',
						action: 'Gets a specific Volume object',
						routing: {
							request: {
								method: 'GET',
								url: '=/volumes/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Volume',
						value: 'putVolumesId',
						action:
							'Updates the Volume properties.  Note that when updating labels, the volume’s current set of labels will be replaced with...',
						routing: {
							request: {
								method: 'PUT',
								url: '=/volumes/{{ $parameter["id"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['volume'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getVolumesIdActions',
				options: [
					{
						name: 'Get all Actions for a Volume',
						value: 'getVolumesIdActions',
						action:
							'Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them wit...',
						routing: {
							request: {
								method: 'GET',
								url: '=/volumes/{{ $parameter["id"] }}/actions',
							},
						},
					},
					{
						name: 'Attach Volume to a Server',
						value: 'postVolumesIdActionsAttach',
						action:
							'Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume',
						routing: {
							request: {
								method: 'POST',
								url: '=/volumes/{{ $parameter["id"] }}/actions/attach',
							},
						},
					},
					{
						name: 'Change Volume Protection',
						value: 'postVolumesIdActionsChangeProtection',
						action: 'Changes the protection configuration of a Volume',
						routing: {
							request: {
								method: 'POST',
								url: '=/volumes/{{ $parameter["id"] }}/actions/change_protection',
							},
						},
					},
					{
						name: 'Detach Volume',
						value: 'postVolumesIdActionsDetach',
						action:
							'Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time',
						routing: {
							request: {
								method: 'POST',
								url: '=/volumes/{{ $parameter["id"] }}/actions/detach',
							},
						},
					},
					{
						name: 'Resize Volume',
						value: 'postVolumesIdActionsResize',
						action: 'Changes the size of a Volume. Note that downsizing a Volume is not possible',
						routing: {
							request: {
								method: 'POST',
								url: '=/volumes/{{ $parameter["id"] }}/actions/resize',
							},
						},
					},
					{
						name: 'Get an Action for a Volume',
						value: 'getVolumesIdActionsActionId',
						action: 'Returns a specific Action for a Volume',
						routing: {
							request: {
								method: 'GET',
								url: '=/volumes/{{ $parameter["id"] }}/actions/{action_id}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['volumeAction'],
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
						resource: ['action'],
						operation: ['getActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'ID',
						name: 'id',
						type: 'number',
						default: 0,
						description:
							'Can be used multiple times, the response will contain only Actions with specified IDs',
						routing: {
							send: {
								type: 'query',
								property: 'id',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Resource',
				displayOptions: {
					show: {
						resource: ['action'],
						operation: ['getActionsId'],
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
						resource: ['certificate'],
						operation: ['getCertificates'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 'uploaded',
						description:
							'Can be used multiple times. The response will only contain Certificates matching the type',
						options: [
							{
								name: 'Uploaded',
								value: 'uploaded',
							},
							{
								name: 'Managed',
								value: 'managed',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'type',
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
				description: 'Name of the Certificate',
				placeholder: 'e.g. my website cert',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['certificate'],
						operation: ['postCertificates'],
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
						resource: ['certificate'],
						operation: ['postCertificates'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Certificate',
						name: 'certificate',
						type: 'string',
						default: '',
						description:
							'Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for typ...',
						placeholder: 'e.g. -----BEGIN CERTIFICATE-----\n...',
						routing: {
							send: {
								type: 'body',
								property: 'certificate',
							},
						},
					},
					{
						displayName: 'Domain Names',
						name: 'domain_names',
						type: 'string',
						default: '',
						description:
							"Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed...",
						routing: {
							send: {
								type: 'body',
								property: 'domain_names',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Private Key',
						name: 'private_key',
						type: 'string',
						default: '',
						description: 'Certificate key in PEM format. Required for type `uploaded` Certificates',
						placeholder: 'e.g. -----BEGIN PRIVATE KEY-----\n...',
						routing: {
							send: {
								type: 'body',
								property: 'private_key',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description:
							"Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted def...",
						placeholder: 'e.g. uploaded',
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
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['certificate'],
						operation: ['deleteCertificatesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['certificate'],
						operation: ['getCertificatesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['certificate'],
						operation: ['putCertificatesId'],
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
						resource: ['certificate'],
						operation: ['putCertificatesId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New Certificate name',
						placeholder: 'e.g. my website cert',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Resource',
				displayOptions: {
					show: {
						resource: ['certificateAction'],
						operation: ['getCertificatesIdActions'],
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
						resource: ['certificateAction'],
						operation: ['getCertificatesIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Certificate',
				displayOptions: {
					show: {
						resource: ['certificateAction'],
						operation: ['postCertificatesIdActionsRetry'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Certificate',
				displayOptions: {
					show: {
						resource: ['certificateAction'],
						operation: ['getCertificatesIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['certificateAction'],
						operation: ['getCertificatesIdActionsActionId'],
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
						resource: ['datacenter'],
						operation: ['getDatacenters'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified na...',
						routing: {
							send: {
								type: 'query',
								property: 'name',
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
				description: 'ID of Datacenter',
				displayOptions: {
					show: {
						resource: ['datacenter'],
						operation: ['getDatacentersId'],
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
						resource: ['firewall'],
						operation: ['getFirewalls'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
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
				description: 'Name of the Firewall',
				placeholder: 'e.g. Corporate Intranet Protection',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['firewall'],
						operation: ['postFirewalls'],
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
						resource: ['firewall'],
						operation: ['postFirewalls'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Apply To',
						name: 'apply_to',
						type: 'json',
						default: '{}',
						description: 'Resources the Firewall should be applied to after creation',
						routing: {
							send: {
								type: 'body',
								property: 'apply_to',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Rules',
						name: 'rules',
						type: 'json',
						default: '{}',
						description: 'Array of rules',
						routing: {
							send: {
								type: 'body',
								property: 'rules',
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
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['firewall'],
						operation: ['deleteFirewallsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['firewall'],
						operation: ['getFirewallsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['firewall'],
						operation: ['putFirewallsId'],
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
						resource: ['firewall'],
						operation: ['putFirewallsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New Firewall name',
						placeholder: 'e.g. new-name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Resource',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['getFirewallsIdActions'],
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
						resource: ['firewallAction'],
						operation: ['getFirewallsIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Firewall',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsApplyToResources'],
					},
				},
			},
			{
				displayName: 'Apply To',
				name: 'apply_to',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Resources the Firewall should be applied to',
				routing: {
					send: {
						type: 'body',
						property: 'apply_to',
					},
				},
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsApplyToResources'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Firewall',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsRemoveFromResources'],
					},
				},
			},
			{
				displayName: 'Remove From',
				name: 'remove_from',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Resources the Firewall should be removed from',
				routing: {
					send: {
						type: 'body',
						property: 'remove_from',
					},
				},
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsRemoveFromResources'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Firewall',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsSetRules'],
					},
				},
			},
			{
				displayName: 'Rules',
				name: 'rules',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Array of rules',
				routing: {
					send: {
						type: 'body',
						property: 'rules',
					},
				},
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['postFirewallsIdActionsSetRules'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Firewall',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['getFirewallsIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['firewallAction'],
						operation: ['getFirewallsIdActionsActionId'],
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
						resource: ['floatingIp'],
						operation: ['getFloatingIps'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Floating IPs by their name. The response will only contain the Floating IP matching the specified ...',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Floating IPs by labels. The response will only contain Floating IPs matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description:
							'Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
				],
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Floating IP type',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['floatingIp'],
						operation: ['postFloatingIps'],
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
						resource: ['floatingIp'],
						operation: ['postFloatingIps'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						placeholder: 'e.g. Web Frontend',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Home Location',
						name: 'home_location',
						type: 'string',
						default: '',
						description:
							'Home Location (routing is optimized for that Location). Only optional if Server argument is passed',
						placeholder: 'e.g. fsn1',
						routing: {
							send: {
								type: 'body',
								property: 'home_location',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						placeholder: 'e.g. Web Frontend',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Server',
						name: 'server',
						type: 'number',
						default: 0,
						description: 'Server to assign the Floating IP to',
						routing: {
							send: {
								type: 'body',
								property: 'server',
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
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIp'],
						operation: ['deleteFloatingIpsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIp'],
						operation: ['getFloatingIpsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIp'],
						operation: ['putFloatingIpsId'],
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
						resource: ['floatingIp'],
						operation: ['putFloatingIpsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'New Description to set',
						placeholder: 'e.g. Web Frontend',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New unique name to set',
						placeholder: 'e.g. Web Frontend',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['getFloatingIpsIdActions'],
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
						resource: ['floatingIpAction'],
						operation: ['getFloatingIpsIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsAssign'],
					},
				},
			},
			{
				displayName: 'Server',
				name: 'server',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server the Floating IP shall be assigned to',
				routing: {
					send: {
						type: 'body',
						property: 'server',
					},
				},
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsAssign'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'Dns Ptr',
				name: 'dns_ptr',
				type: 'string',
				default: '',
				required: true,
				description:
					'Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`',
				placeholder: 'e.g. server02.example.com',
				routing: {
					send: {
						type: 'body',
						property: 'dns_ptr',
					},
				},
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'IP',
				name: 'ip',
				type: 'string',
				default: '',
				required: true,
				description: 'IP address for which to set the reverse DNS entry',
				placeholder: 'e.g. 1.2.3.4',
				routing: {
					send: {
						type: 'body',
						property: 'ip',
					},
				},
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsChangeProtection'],
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
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the Floating IP from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['postFloatingIpsIdActionsUnassign'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Floating IP',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['getFloatingIpsIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['floatingIpAction'],
						operation: ['getFloatingIpsIdActionsActionId'],
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
						resource: ['image'],
						operation: ['getImages'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 'system',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'System',
								value: 'system',
							},
							{
								name: 'Snapshot',
								value: 'snapshot',
							},
							{
								name: 'Backup',
								value: 'backup',
							},
							{
								name: 'App',
								value: 'app',
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
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'available',
						description:
							'Can be used multiple times. The response will only contain Images matching the status',
						options: [
							{
								name: 'Available',
								value: 'available',
							},
							{
								name: 'Creating',
								value: 'creating',
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
						displayName: 'Bound To',
						name: 'bound_to',
						type: 'string',
						default: '',
						description:
							'Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`',
						routing: {
							send: {
								type: 'query',
								property: 'bound_to',
							},
						},
					},
					{
						displayName: 'Include Deprecated',
						name: 'include_deprecated',
						type: 'boolean',
						default: false,
						description: 'Can be used multiple times',
						routing: {
							send: {
								type: 'query',
								property: 'include_deprecated',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
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
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['image'],
						operation: ['deleteImagesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['image'],
						operation: ['getImagesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['image'],
						operation: ['putImagesId'],
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
						resource: ['image'],
						operation: ['putImagesId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'New description of Image',
						placeholder: 'e.g. My new Image description',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description: 'Destination Image type to convert to',
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
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['imageAction'],
						operation: ['getImagesIdActions'],
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
						resource: ['imageAction'],
						operation: ['getImagesIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['imageAction'],
						operation: ['postImagesIdActionsChangeProtection'],
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
						resource: ['imageAction'],
						operation: ['postImagesIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the snapshot from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Image',
				displayOptions: {
					show: {
						resource: ['imageAction'],
						operation: ['getImagesIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['imageAction'],
						operation: ['getImagesIdActionsActionId'],
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
						resource: ['iso'],
						operation: ['getIsos'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter ISOs by their name. The response will only contain the ISO matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
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
				description: 'ID of the ISO',
				displayOptions: {
					show: {
						resource: ['iso'],
						operation: ['getIsosId'],
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
						resource: ['loadBalancerType'],
						operation: ['getLoadBalancerTypes'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Load Balancer types by their name. The response will only contain the Load Balancer type matching ...',
						routing: {
							send: {
								type: 'query',
								property: 'name',
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
				description: 'ID of Load Balancer type',
				displayOptions: {
					show: {
						resource: ['loadBalancerType'],
						operation: ['getLoadBalancerTypesId'],
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
						resource: ['loadBalancer'],
						operation: ['getLoadBalancers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
				],
			},
			{
				displayName: 'Algorithm',
				name: 'algorithm',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Algorithm of the Load Balancer',
				routing: {
					send: {
						type: 'body',
						property: 'algorithm',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['postLoadBalancers'],
					},
				},
			},
			{
				displayName: 'Load Balancer Type',
				name: 'load_balancer_type',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID or name of the Load Balancer type this Load Balancer should be created with',
				placeholder: 'e.g. lb11',
				routing: {
					send: {
						type: 'body',
						property: 'load_balancer_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['postLoadBalancers'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'Name of the Load Balancer',
				placeholder: 'e.g. Web Frontend',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['postLoadBalancers'],
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
						resource: ['loadBalancer'],
						operation: ['postLoadBalancers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Location',
						name: 'location',
						type: 'string',
						default: '',
						description: 'ID or name of Location to create Load Balancer in',
						routing: {
							send: {
								type: 'body',
								property: 'location',
							},
						},
					},
					{
						displayName: 'Network',
						name: 'network',
						type: 'number',
						default: 0,
						description: 'ID of the network the Load Balancer should be attached to on creation',
						routing: {
							send: {
								type: 'body',
								property: 'network',
							},
						},
					},
					{
						displayName: 'Network Zone',
						name: 'network_zone',
						type: 'string',
						default: '',
						description: 'Name of network zone',
						placeholder: 'e.g. eu-central',
						routing: {
							send: {
								type: 'body',
								property: 'network_zone',
							},
						},
					},
					{
						displayName: 'Public Interface',
						name: 'public_interface',
						type: 'boolean',
						default: false,
						description: 'Enable or disable the public interface of the Load Balancer',
						routing: {
							send: {
								type: 'body',
								property: 'public_interface',
							},
						},
					},
					{
						displayName: 'Services',
						name: 'services',
						type: 'json',
						default: '{}',
						description: 'Array of services',
						routing: {
							send: {
								type: 'body',
								property: 'services',
							},
						},
					},
					{
						displayName: 'Targets',
						name: 'targets',
						type: 'json',
						default: '{}',
						description: 'Array of targets',
						routing: {
							send: {
								type: 'body',
								property: 'targets',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['deleteLoadBalancersId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['putLoadBalancersId'],
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
						resource: ['loadBalancer'],
						operation: ['putLoadBalancersId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New Load Balancer name',
						placeholder: 'e.g. new-name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['getLoadBalancersIdActions'],
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
						resource: ['loadBalancerAction'],
						operation: ['getLoadBalancersIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
			},
			{
				displayName: 'Destination Port',
				name: 'destination_port',
				type: 'number',
				default: 0,
				required: true,
				description: 'Port the Load Balancer will balance to',
				routing: {
					send: {
						type: 'body',
						property: 'destination_port',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
			},
			{
				displayName: 'Health Check',
				name: 'health_check',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Service health check',
				routing: {
					send: {
						type: 'body',
						property: 'health_check',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
			},
			{
				displayName: 'Listen Port',
				name: 'listen_port',
				type: 'number',
				default: 0,
				required: true,
				description: 'Port the Load Balancer listens on',
				routing: {
					send: {
						type: 'body',
						property: 'listen_port',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
			},
			{
				displayName: 'Protocol',
				name: 'protocol',
				type: 'string',
				default: '',
				required: true,
				description: 'Protocol of the Load Balancer',
				placeholder: 'e.g. https',
				routing: {
					send: {
						type: 'body',
						property: 'protocol',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
			},
			{
				displayName: 'Proxyprotocol',
				name: 'proxyprotocol',
				type: 'boolean',
				default: false,
				required: true,
				description: 'Is Proxyprotocol enabled or not',
				routing: {
					send: {
						type: 'body',
						property: 'proxyprotocol',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddService'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Http',
						name: 'http',
						type: 'json',
						default: '{}',
						description: 'Configuration option for protocols http and https',
						routing: {
							send: {
								type: 'body',
								property: 'http',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddTarget'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Type of the resource',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddTarget'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAddTarget'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'IP',
						name: 'ip',
						type: 'json',
						default: '{}',
						description:
							'IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner...',
						routing: {
							send: {
								type: 'body',
								property: 'ip',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'json',
						default: '{}',
						description:
							'Configuration for label selector targets, required if type is `label_selector`',
						routing: {
							send: {
								type: 'body',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Server',
						name: 'server',
						type: 'json',
						default: '{}',
						description: 'Configuration for type Server, required if type is `server`',
						routing: {
							send: {
								type: 'body',
								property: 'server',
							},
						},
					},
					{
						displayName: 'Use Private IP',
						name: 'use_private_ip',
						type: 'boolean',
						default: false,
						description:
							'Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the sa...',
						routing: {
							send: {
								type: 'body',
								property: 'use_private_ip',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAttachToNetwork'],
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of an existing network to attach the Load Balancer to',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAttachToNetwork'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsAttachToNetwork'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'IP',
						name: 'ip',
						type: 'string',
						default: '',
						description:
							'IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP addr...',
						placeholder: 'e.g. 10.0.1.1',
						routing: {
							send: {
								type: 'body',
								property: 'ip',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeAlgorithm'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Algorithm of the Load Balancer',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeAlgorithm'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'Dns Ptr',
				name: 'dns_ptr',
				type: 'string',
				default: '',
				required: true,
				description: 'Hostname to set as a reverse DNS PTR entry',
				placeholder: 'e.g. lb1.example.com',
				routing: {
					send: {
						type: 'body',
						property: 'dns_ptr',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'IP',
				name: 'ip',
				type: 'string',
				default: '',
				required: true,
				description: 'Public IP address for which the reverse DNS entry should be set',
				placeholder: 'e.g. 1.2.3.4',
				routing: {
					send: {
						type: 'body',
						property: 'ip',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeProtection'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the Load Balancer from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeType'],
					},
				},
			},
			{
				displayName: 'Load Balancer Type',
				name: 'load_balancer_type',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of Load Balancer type the Load Balancer should migrate to',
				placeholder: 'e.g. lb21',
				routing: {
					send: {
						type: 'body',
						property: 'load_balancer_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsChangeType'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsDeleteService'],
					},
				},
			},
			{
				displayName: 'Listen Port',
				name: 'listen_port',
				type: 'number',
				default: 0,
				required: true,
				description: 'The listen port of the service you want to delete',
				routing: {
					send: {
						type: 'body',
						property: 'listen_port',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsDeleteService'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsDetachFromNetwork'],
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of an existing network to detach the Load Balancer from',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsDetachFromNetwork'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsDisablePublicInterface'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsEnablePublicInterface'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsRemoveTarget'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Type of the resource',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsRemoveTarget'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsRemoveTarget'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'IP',
						name: 'ip',
						type: 'json',
						default: '{}',
						description:
							'IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner...',
						routing: {
							send: {
								type: 'body',
								property: 'ip',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'json',
						default: '{}',
						description:
							'Configuration for label selector targets, required if type is `label_selector`',
						routing: {
							send: {
								type: 'body',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Server',
						name: 'server',
						type: 'json',
						default: '{}',
						description: 'Configuration for type Server, required if type is `server`',
						routing: {
							send: {
								type: 'body',
								property: 'server',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
			},
			{
				displayName: 'Destination Port',
				name: 'destination_port',
				type: 'number',
				default: 0,
				required: true,
				description: 'Port the Load Balancer will balance to',
				routing: {
					send: {
						type: 'body',
						property: 'destination_port',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
			},
			{
				displayName: 'Health Check',
				name: 'health_check',
				type: 'json',
				default: '{}',
				required: true,
				description: 'Service health check',
				routing: {
					send: {
						type: 'body',
						property: 'health_check',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
			},
			{
				displayName: 'Listen Port',
				name: 'listen_port',
				type: 'number',
				default: 0,
				required: true,
				description: 'Port the Load Balancer listens on',
				routing: {
					send: {
						type: 'body',
						property: 'listen_port',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
			},
			{
				displayName: 'Protocol',
				name: 'protocol',
				type: 'string',
				default: '',
				required: true,
				description: 'Protocol of the Load Balancer',
				placeholder: 'e.g. https',
				routing: {
					send: {
						type: 'body',
						property: 'protocol',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
			},
			{
				displayName: 'Proxyprotocol',
				name: 'proxyprotocol',
				type: 'boolean',
				default: false,
				required: true,
				description: 'Is Proxyprotocol enabled or not',
				routing: {
					send: {
						type: 'body',
						property: 'proxyprotocol',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
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
						resource: ['loadBalancerAction'],
						operation: ['postLoadBalancersIdActionsUpdateService'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Http',
						name: 'http',
						type: 'json',
						default: '{}',
						description: 'Configuration option for protocols http and https',
						routing: {
							send: {
								type: 'body',
								property: 'http',
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
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['getLoadBalancersIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['loadBalancerAction'],
						operation: ['getLoadBalancersIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Load Balancer',
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersIdMetrics'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'open_connections',
				required: true,
				description: 'Type of metrics to get',
				options: [
					{
						name: 'Open Connections',
						value: 'open_connections',
					},
					{
						name: 'Connections Per Second',
						value: 'connections_per_second',
					},
					{
						name: 'Requests Per Second',
						value: 'requests_per_second',
					},
					{
						name: 'Bandwidth',
						value: 'bandwidth',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersIdMetrics'],
					},
				},
			},
			{
				displayName: 'Start',
				name: 'start',
				type: 'string',
				default: '',
				required: true,
				description: 'Start of period to get Metrics for (in ISO-8601 format)',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersIdMetrics'],
					},
				},
			},
			{
				displayName: 'End',
				name: 'end',
				type: 'string',
				default: '',
				required: true,
				description: 'End of period to get Metrics for (in ISO-8601 format)',
				routing: {
					send: {
						type: 'query',
						property: 'end',
					},
				},
				displayOptions: {
					show: {
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersIdMetrics'],
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
						resource: ['loadBalancer'],
						operation: ['getLoadBalancersIdMetrics'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Step',
						name: 'step',
						type: 'string',
						default: '',
						description: 'Resolution of results in seconds',
						routing: {
							send: {
								type: 'query',
								property: 'step',
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
						resource: ['location'],
						operation: ['getLocations'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Locations by their name. The response will only contain the Location matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
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
				description: 'ID of Location',
				displayOptions: {
					show: {
						resource: ['location'],
						operation: ['getLocationsId'],
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
						resource: ['network'],
						operation: ['getNetworks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter networks by their name. The response will only contain the networks matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter networks by labels. The response will only contain networks with a matching label selector pattern',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
				],
			},
			{
				displayName: 'IP Range',
				name: 'ip_range',
				type: 'string',
				default: '',
				required: true,
				description:
					'IP range of the whole network which must span all included subnets. Must be one of the private IPv4 ranges of RFC1918. M...',
				placeholder: 'e.g. 10.0.0.0/16',
				routing: {
					send: {
						type: 'body',
						property: 'ip_range',
					},
				},
				displayOptions: {
					show: {
						resource: ['network'],
						operation: ['postNetworks'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'Name of the network',
				placeholder: 'e.g. mynet',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['network'],
						operation: ['postNetworks'],
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
						resource: ['network'],
						operation: ['postNetworks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Routes',
						name: 'routes',
						type: 'json',
						default: '{}',
						description:
							'Array of routes set in this network. The destination of the route must be one of the private IPv4 ranges of RFC1918. The...',
						routing: {
							send: {
								type: 'body',
								property: 'routes',
							},
						},
					},
					{
						displayName: 'Subnets',
						name: 'subnets',
						type: 'json',
						default: '{}',
						description: 'Array of subnets allocated',
						routing: {
							send: {
								type: 'body',
								property: 'subnets',
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
				description: 'ID of the network',
				displayOptions: {
					show: {
						resource: ['network'],
						operation: ['deleteNetworksId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the network',
				displayOptions: {
					show: {
						resource: ['network'],
						operation: ['getNetworksId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the network',
				displayOptions: {
					show: {
						resource: ['network'],
						operation: ['putNetworksId'],
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
						resource: ['network'],
						operation: ['putNetworksId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New network name',
						placeholder: 'e.g. new-name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['getNetworksIdActions'],
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
						resource: ['networkAction'],
						operation: ['getNetworksIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddRoute'],
					},
				},
			},
			{
				displayName: 'Destination',
				name: 'destination',
				type: 'string',
				default: '',
				required: true,
				description:
					'Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destina...',
				placeholder: 'e.g. 10.100.1.0/24',
				routing: {
					send: {
						type: 'body',
						property: 'destination',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddRoute'],
					},
				},
			},
			{
				displayName: 'Gateway',
				name: 'gateway',
				type: 'string',
				default: '',
				required: true,
				description:
					'Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP...',
				placeholder: 'e.g. 10.0.1.1',
				routing: {
					send: {
						type: 'body',
						property: 'gateway',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddRoute'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddSubnet'],
					},
				},
			},
			{
				displayName: 'Network Zone',
				name: 'network_zone',
				type: 'string',
				default: '',
				required: true,
				description:
					'Name of Network zone. The Location object contains the `network_zone` property each Location belongs to',
				placeholder: 'e.g. eu-central',
				routing: {
					send: {
						type: 'body',
						property: 'network_zone',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddSubnet'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Type of Subnetwork',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddSubnet'],
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
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsAddSubnet'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'IP Range',
						name: 'ip_range',
						type: 'string',
						default: '',
						description:
							'Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any ...',
						placeholder: 'e.g. 10.0.1.0/24',
						routing: {
							send: {
								type: 'body',
								property: 'ip_range',
							},
						},
					},
					{
						displayName: 'Vswitch ID',
						name: 'vswitch_id',
						type: 'number',
						default: 0,
						description:
							'ID of the robot vSwitch. Must be supplied if the subnet is of type vswitch',
						routing: {
							send: {
								type: 'body',
								property: 'vswitch_id',
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
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsChangeIpRange'],
					},
				},
			},
			{
				displayName: 'IP Range',
				name: 'ip_range',
				type: 'string',
				default: '',
				required: true,
				description: 'The new prefix for the whole Network',
				placeholder: 'e.g. 10.0.0.0/12',
				routing: {
					send: {
						type: 'body',
						property: 'ip_range',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsChangeIpRange'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsChangeProtection'],
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
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the Network from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsDeleteRoute'],
					},
				},
			},
			{
				displayName: 'Destination',
				name: 'destination',
				type: 'string',
				default: '',
				required: true,
				description:
					'Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destina...',
				placeholder: 'e.g. 10.100.1.0/24',
				routing: {
					send: {
						type: 'body',
						property: 'destination',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsDeleteRoute'],
					},
				},
			},
			{
				displayName: 'Gateway',
				name: 'gateway',
				type: 'string',
				default: '',
				required: true,
				description:
					'Gateway for the route. Cannot be the first IP of the networks ip_range, an IP behind a vSwitch or 172.31.1.1, as this IP...',
				placeholder: 'e.g. 10.0.1.1',
				routing: {
					send: {
						type: 'body',
						property: 'gateway',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsDeleteRoute'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsDeleteSubnet'],
					},
				},
			},
			{
				displayName: 'IP Range',
				name: 'ip_range',
				type: 'string',
				default: '',
				required: true,
				description: 'IP range of subnet to delete',
				placeholder: 'e.g. 10.0.1.0/24',
				routing: {
					send: {
						type: 'body',
						property: 'ip_range',
					},
				},
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['postNetworksIdActionsDeleteSubnet'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Network',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['getNetworksIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['networkAction'],
						operation: ['getNetworksIdActionsActionId'],
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
						resource: ['placementGroup'],
						operation: ['getPlacementGroups'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						default: 'spread',
						description:
							'Can be used multiple times. The response will only contain PlacementGroups matching the type',
						options: [
							{
								name: 'Spread',
								value: 'spread',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'type',
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
				description: 'Name of the PlacementGroup',
				placeholder: 'e.g. my Placement Group',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['placementGroup'],
						operation: ['postPlacementGroups'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Define the Placement Group Type',
				placeholder: 'e.g. spread',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['placementGroup'],
						operation: ['postPlacementGroups'],
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
						resource: ['placementGroup'],
						operation: ['postPlacementGroups'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
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
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['placementGroup'],
						operation: ['deletePlacementGroupsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['placementGroup'],
						operation: ['getPlacementGroupsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['placementGroup'],
						operation: ['putPlacementGroupsId'],
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
						resource: ['placementGroup'],
						operation: ['putPlacementGroupsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New PlacementGroup name',
						placeholder: 'e.g. my Placement Group',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
						resource: ['primaryIp'],
						operation: ['getPrimaryIps'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'IP',
						name: 'ip',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their ip. The response will only contain the resources matching the specified ip',
						placeholder: 'e.g. 127.0.0.1',
						routing: {
							send: {
								type: 'query',
								property: 'ip',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description:
							'Can be used multiple times. Choices id id:asc id:desc created created:asc created:desc',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
				],
			},
			{
				displayName: 'Assignee Type',
				name: 'assignee_type',
				type: 'string',
				default: '',
				required: true,
				description: 'Resource type the Primary IP can be assigned to',
				placeholder: 'e.g. server',
				routing: {
					send: {
						type: 'body',
						property: 'assignee_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['postPrimaryIps'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. my-ip',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['postPrimaryIps'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
				required: true,
				description: 'Primary IP type',
				routing: {
					send: {
						type: 'body',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['postPrimaryIps'],
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
						resource: ['primaryIp'],
						operation: ['postPrimaryIps'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Assignee ID',
						name: 'assignee_id',
						type: 'number',
						default: 0,
						description:
							'ID of the resource the Primary IP should be assigned to. Omitted if it should not be assigned',
						routing: {
							send: {
								type: 'body',
								property: 'assignee_id',
							},
						},
					},
					{
						displayName: 'Auto Delete',
						name: 'auto_delete',
						type: 'boolean',
						default: false,
						description:
							'Delete the Primary IP when the Server it is assigned to is deleted. If omitted defaults to `false`',
						routing: {
							send: {
								type: 'body',
								property: 'auto_delete',
							},
						},
					},
					{
						displayName: 'Datacenter',
						name: 'datacenter',
						type: 'string',
						default: '',
						description:
							'ID or name of Datacenter the Primary IP will be bound to. Needs to be omitted if `assignee_id` is passed',
						placeholder: 'e.g. fsn1-dc8',
						routing: {
							send: {
								type: 'body',
								property: 'datacenter',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
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
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['deletePrimaryIpsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['getPrimaryIpsId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the resource',
				displayOptions: {
					show: {
						resource: ['primaryIp'],
						operation: ['putPrimaryIpsId'],
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
						resource: ['primaryIp'],
						operation: ['putPrimaryIpsId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Auto Delete',
						name: 'auto_delete',
						type: 'boolean',
						default: false,
						description: 'Delete this Primary IP when the resource it is assigned to is deleted',
						routing: {
							send: {
								type: 'body',
								property: 'auto_delete',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New unique name to set',
						placeholder: 'e.g. my-ip',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Primary IP',
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsAssign'],
					},
				},
			},
			{
				displayName: 'Assignee ID',
				name: 'assignee_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of a resource of type `assignee_type`',
				routing: {
					send: {
						type: 'body',
						property: 'assignee_id',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsAssign'],
					},
				},
			},
			{
				displayName: 'Assignee Type',
				name: 'assignee_type',
				type: 'string',
				default: '',
				required: true,
				description: 'Type of resource assigning the Primary IP to',
				placeholder: 'e.g. server',
				routing: {
					send: {
						type: 'body',
						property: 'assignee_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsAssign'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Primary IP',
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'Dns Ptr',
				name: 'dns_ptr',
				type: 'string',
				default: '',
				required: true,
				description:
					'Hostname to set as a reverse DNS PTR entry, will reset to original default value if `null`',
				placeholder: 'e.g. server02.example.com',
				routing: {
					send: {
						type: 'body',
						property: 'dns_ptr',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'IP',
				name: 'ip',
				type: 'string',
				default: '',
				required: true,
				description: 'IP address for which to set the reverse DNS entry',
				placeholder: 'e.g. 1.2.3.4',
				routing: {
					send: {
						type: 'body',
						property: 'ip',
					},
				},
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Primary IP',
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsChangeProtection'],
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
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the Primary IP from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Primary IP',
				displayOptions: {
					show: {
						resource: ['primaryIpAction'],
						operation: ['postPrimaryIpsIdActionsUnassign'],
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
						resource: ['serverType'],
						operation: ['getServerTypes'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter Server types by their name. The response will only contain the Server type matching the specified ...',
						routing: {
							send: {
								type: 'query',
								property: 'name',
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
				description: 'ID of Server Type',
				displayOptions: {
					show: {
						resource: ['serverType'],
						operation: ['getServerTypesId'],
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
						resource: ['server'],
						operation: ['getServers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'initializing',
						description:
							'Can be used multiple times. The response will only contain Server matching the status',
						options: [
							{
								name: 'Initializing',
								value: 'initializing',
							},
							{
								name: 'Starting',
								value: 'starting',
							},
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Stopping',
								value: 'stopping',
							},
							{
								name: 'Off',
								value: 'off',
							},
							{
								name: 'Deleting',
								value: 'deleting',
							},
							{
								name: 'Rebuilding',
								value: 'rebuilding',
							},
							{
								name: 'Migrating',
								value: 'migrating',
							},
							{
								name: 'Unknown',
								value: 'unknown',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
							},
						},
					},
				],
			},
			{
				displayName: 'Image',
				name: 'image',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of the Image the Server is created from',
				placeholder: 'e.g. ubuntu-20.04',
				routing: {
					send: {
						type: 'body',
						property: 'image',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['postServers'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description:
					'Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)',
				placeholder: 'e.g. my-server',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['postServers'],
					},
				},
			},
			{
				displayName: 'Server Type',
				name: 'server_type',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of the Server type this Server should be created with',
				placeholder: 'e.g. cx11',
				routing: {
					send: {
						type: 'body',
						property: 'server_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['postServers'],
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
						resource: ['server'],
						operation: ['postServers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Automount',
						name: 'automount',
						type: 'boolean',
						default: false,
						description: 'Auto-mount Volumes after attach',
						routing: {
							send: {
								type: 'body',
								property: 'automount',
							},
						},
					},
					{
						displayName: 'Datacenter',
						name: 'datacenter',
						type: 'string',
						default: '',
						description:
							'ID or name of Datacenter to create Server in (must not be used together with location)',
						placeholder: 'e.g. nbg1-dc3',
						routing: {
							send: {
								type: 'body',
								property: 'datacenter',
							},
						},
					},
					{
						displayName: 'Firewalls',
						name: 'firewalls',
						type: 'json',
						default: '{}',
						description:
							"Firewalls which should be applied on the Server's public network interface at creation time",
						routing: {
							send: {
								type: 'body',
								property: 'firewalls',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Location',
						name: 'location',
						type: 'string',
						default: '',
						description:
							'ID or name of Location to create Server in (must not be used together with datacenter)',
						placeholder: 'e.g. nbg1',
						routing: {
							send: {
								type: 'body',
								property: 'location',
							},
						},
					},
					{
						displayName: 'Networks',
						name: 'networks',
						type: 'json',
						default: '{}',
						description:
							'Network IDs which should be attached to the Server private network interface at the creation time',
						routing: {
							send: {
								type: 'body',
								property: 'networks',
							},
						},
					},
					{
						displayName: 'Placement Group',
						name: 'placement_group',
						type: 'number',
						default: 0,
						description: 'ID of the Placement Group the server should be in',
						routing: {
							send: {
								type: 'body',
								property: 'placement_group',
							},
						},
					},
					{
						displayName: 'Public Net',
						name: 'public_net',
						type: 'json',
						default: '{}',
						description: 'Public Network options',
						routing: {
							send: {
								type: 'body',
								property: 'public_net',
							},
						},
					},
					{
						displayName: 'Ssh Keys',
						name: 'ssh_keys',
						type: 'string',
						default: '',
						description:
							'SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time',
						routing: {
							send: {
								type: 'body',
								property: 'ssh_keys',
							},
						},
					},
					{
						displayName: 'Start After Create',
						name: 'start_after_create',
						type: 'boolean',
						default: false,
						description: 'Start Server right after creation. Defaults to true',
						routing: {
							send: {
								type: 'body',
								property: 'start_after_create',
							},
						},
					},
					{
						displayName: 'User Data',
						name: 'user_data',
						type: 'string',
						default: '',
						description:
							'Cloud-Init user data to use during Server creation. This field is limited to 32KiB',
						placeholder: 'e.g. #cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n',
						routing: {
							send: {
								type: 'body',
								property: 'user_data',
							},
						},
					},
					{
						displayName: 'Volumes',
						name: 'volumes',
						type: 'json',
						default: '{}',
						description:
							'Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location',
						routing: {
							send: {
								type: 'body',
								property: 'volumes',
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
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['deleteServersId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['getServersId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['putServersId'],
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
						resource: ['server'],
						operation: ['putServersId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New name to set',
						placeholder: 'e.g. my-server',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
				description: 'ID of the Resource',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['getServersIdActions'],
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
						resource: ['serverAction'],
						operation: ['getServersIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAddToPlacementGroup'],
					},
				},
			},
			{
				displayName: 'Placement Group',
				name: 'placement_group',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of Placement Group the Server should be added to',
				routing: {
					send: {
						type: 'body',
						property: 'placement_group',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAddToPlacementGroup'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAttachIso'],
					},
				},
			},
			{
				displayName: 'Iso',
				name: 'iso',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of ISO to attach to the Server as listed in GET `/isos`',
				placeholder: 'e.g. FreeBSD-11.0-RELEASE-amd64-dvd1',
				routing: {
					send: {
						type: 'body',
						property: 'iso',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAttachIso'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAttachToNetwork'],
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of an existing network to attach the Server to',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsAttachToNetwork'],
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
						resource: ['serverAction'],
						operation: ['postServersIdActionsAttachToNetwork'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Alias IPs',
						name: 'alias_ips',
						type: 'string',
						default: '',
						description: 'Additional IPs to be assigned to this Server',
						routing: {
							send: {
								type: 'body',
								property: 'alias_ips',
							},
						},
					},
					{
						displayName: 'IP',
						name: 'ip',
						type: 'string',
						default: '',
						description:
							'IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address',
						placeholder: 'e.g. 10.0.1.1',
						routing: {
							send: {
								type: 'body',
								property: 'ip',
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
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeAliasIps'],
					},
				},
			},
			{
				displayName: 'Alias IPs',
				name: 'alias_ips',
				type: 'string',
				default: '',
				required: true,
				description: 'New alias IPs to set for this Server',
				routing: {
					send: {
						type: 'body',
						property: 'alias_ips',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeAliasIps'],
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of an existing Network already attached to the Server',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeAliasIps'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'Dns Ptr',
				name: 'dns_ptr',
				type: 'string',
				default: '',
				required: true,
				description:
					'Hostname to set as a reverse DNS PTR entry, reset to original value if `null`',
				placeholder: 'e.g. server01.example.com',
				routing: {
					send: {
						type: 'body',
						property: 'dns_ptr',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'IP',
				name: 'ip',
				type: 'string',
				default: '',
				required: true,
				description: 'Primary IP address for which the reverse DNS entry should be set',
				placeholder: 'e.g. 1.2.3.4',
				routing: {
					send: {
						type: 'body',
						property: 'ip',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeDnsPtr'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeProtection'],
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
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description:
							'If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value)',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
							},
						},
					},
					{
						displayName: 'Rebuild',
						name: 'rebuild',
						type: 'boolean',
						default: false,
						description:
							'If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value)',
						routing: {
							send: {
								type: 'body',
								property: 'rebuild',
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
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeType'],
					},
				},
			},
			{
				displayName: 'Server Type',
				name: 'server_type',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of Server type the Server should migrate to',
				placeholder: 'e.g. cx11',
				routing: {
					send: {
						type: 'body',
						property: 'server_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeType'],
					},
				},
			},
			{
				displayName: 'Upgrade Disk',
				name: 'upgrade_disk',
				type: 'boolean',
				default: false,
				required: true,
				description:
					'If false, do not upgrade the disk (this allows downgrading the Server type later)',
				routing: {
					send: {
						type: 'body',
						property: 'upgrade_disk',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsChangeType'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsCreateImage'],
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
						resource: ['serverAction'],
						operation: ['postServersIdActionsCreateImage'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Description of the Image, will be auto-generated if not set',
						placeholder: 'e.g. my image',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description: 'Type of Image to create (default: `snapshot`)',
						placeholder: 'e.g. snapshot',
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
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsDetachFromNetwork'],
					},
				},
			},
			{
				displayName: 'Network',
				name: 'network',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of an existing network to detach the Server from',
				routing: {
					send: {
						type: 'body',
						property: 'network',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsDetachFromNetwork'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsDetachIso'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsDisableBackup'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsDisableRescue'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsEnableBackup'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsEnableRescue'],
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
						resource: ['serverAction'],
						operation: ['postServersIdActionsEnableRescue'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Ssh Keys',
						name: 'ssh_keys',
						type: 'json',
						default: '{}',
						description: 'Array of SSH key IDs which should be injected into the rescue system',
						routing: {
							send: {
								type: 'body',
								property: 'ssh_keys',
							},
						},
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'string',
						default: '',
						description: 'Type of rescue system to boot (default: `linux64`)',
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
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsPoweroff'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsPoweron'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsReboot'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsRebuild'],
					},
				},
			},
			{
				displayName: 'Image',
				name: 'image',
				type: 'string',
				default: '',
				required: true,
				description: 'ID or name of Image to rebuilt from',
				placeholder: 'e.g. ubuntu-20.04',
				routing: {
					send: {
						type: 'body',
						property: 'image',
					},
				},
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsRebuild'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsRemoveFromPlacementGroup'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsRequestConsole'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsReset'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsResetPassword'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['postServersIdActionsShutdown'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['getServersIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['serverAction'],
						operation: ['getServersIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server',
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['getServersIdMetrics'],
					},
				},
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: 'cpu',
				required: true,
				description: 'Type of metrics to get',
				options: [
					{
						name: 'Cpu',
						value: 'cpu',
					},
					{
						name: 'Disk',
						value: 'disk',
					},
					{
						name: 'Network',
						value: 'network',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'type',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['getServersIdMetrics'],
					},
				},
			},
			{
				displayName: 'Start',
				name: 'start',
				type: 'string',
				default: '',
				required: true,
				description: 'Start of period to get Metrics for (in ISO-8601 format)',
				routing: {
					send: {
						type: 'query',
						property: 'start',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['getServersIdMetrics'],
					},
				},
			},
			{
				displayName: 'End',
				name: 'end',
				type: 'string',
				default: '',
				required: true,
				description: 'End of period to get Metrics for (in ISO-8601 format)',
				routing: {
					send: {
						type: 'query',
						property: 'end',
					},
				},
				displayOptions: {
					show: {
						resource: ['server'],
						operation: ['getServersIdMetrics'],
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
						resource: ['server'],
						operation: ['getServersIdMetrics'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Step',
						name: 'step',
						type: 'string',
						default: '',
						description: 'Resolution of results in seconds',
						routing: {
							send: {
								type: 'query',
								property: 'step',
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
						resource: ['sshKey'],
						operation: ['getSshKeys'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Fingerprint',
						name: 'fingerprint',
						type: 'string',
						default: '',
						description:
							'Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified f...',
						routing: {
							send: {
								type: 'query',
								property: 'fingerprint',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
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
				description: 'Name of the SSH key',
				placeholder: 'e.g. My ssh key',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['sshKey'],
						operation: ['postSshKeys'],
					},
				},
			},
			{
				displayName: 'Public Key',
				name: 'public_key',
				type: 'string',
				default: '',
				required: true,
				description: 'Public key',
				placeholder: 'e.g. ssh-rsa AAAjjk76kgf...Xt',
				routing: {
					send: {
						type: 'body',
						property: 'public_key',
					},
				},
				displayOptions: {
					show: {
						resource: ['sshKey'],
						operation: ['postSshKeys'],
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
						resource: ['sshKey'],
						operation: ['postSshKeys'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
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
				description: 'ID of the SSH key',
				displayOptions: {
					show: {
						resource: ['sshKey'],
						operation: ['deleteSshKeysId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the SSH key',
				displayOptions: {
					show: {
						resource: ['sshKey'],
						operation: ['getSshKeysId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the SSH key',
				displayOptions: {
					show: {
						resource: ['sshKey'],
						operation: ['putSshKeysId'],
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
						resource: ['sshKey'],
						operation: ['putSshKeysId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'New name Name to set',
						placeholder: 'e.g. My ssh key',
						routing: {
							send: {
								type: 'body',
								property: 'name',
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
						resource: ['volume'],
						operation: ['getVolumes'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'available',
						description:
							'Can be used multiple times. The response will only contain Volumes matching the status',
						options: [
							{
								name: 'Available',
								value: 'available',
							},
							{
								name: 'Creating',
								value: 'creating',
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
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Name',
								value: 'name',
							},
							{
								name: 'Name Asc',
								value: 'name:asc',
							},
							{
								name: 'Name Desc',
								value: 'name:desc',
							},
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Created Asc',
								value: 'created:asc',
							},
							{
								name: 'Created Desc',
								value: 'created:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by their name. The response will only contain the resources matching the specified name',
						routing: {
							send: {
								type: 'query',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Label Selector',
						name: 'label_selector',
						type: 'string',
						default: '',
						description:
							'Can be used to filter resources by labels. The response will only contain resources matching the label selector',
						routing: {
							send: {
								type: 'query',
								property: 'label_selector',
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
				description: 'Name of the volume',
				placeholder: 'e.g. databases-storage',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['postVolumes'],
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 0,
				required: true,
				description: 'Size of the Volume in GB',
				routing: {
					send: {
						type: 'body',
						property: 'size',
					},
				},
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['postVolumes'],
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
						resource: ['volume'],
						operation: ['postVolumes'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Automount',
						name: 'automount',
						type: 'boolean',
						default: false,
						description: 'Auto-mount Volume after attach. `server` must be provided',
						routing: {
							send: {
								type: 'body',
								property: 'automount',
							},
						},
					},
					{
						displayName: 'Format',
						name: 'format',
						type: 'string',
						default: '',
						description: 'Format Volume after creation. One of: `xfs`, `ext4`',
						placeholder: 'e.g. xfs',
						routing: {
							send: {
								type: 'body',
								property: 'format',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Location',
						name: 'location',
						type: 'string',
						default: '',
						description: 'Location to create the Volume in (can be omitted if Server is specified)',
						placeholder: 'e.g. nbg1',
						routing: {
							send: {
								type: 'body',
								property: 'location',
							},
						},
					},
					{
						displayName: 'Server',
						name: 'server',
						type: 'number',
						default: 0,
						description:
							"Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server)",
						routing: {
							send: {
								type: 'body',
								property: 'server',
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
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['deleteVolumesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['getVolumesId'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the Volume to update',
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['putVolumesId'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'New Volume name',
				placeholder: 'e.g. database-storage',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['volume'],
						operation: ['putVolumesId'],
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
						resource: ['volume'],
						operation: ['putVolumesId'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'json',
						default: '{}',
						description: 'User-defined labels (key-value pairs)',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
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
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['getVolumesIdActions'],
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
						resource: ['volumeAction'],
						operation: ['getVolumesIdActions'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'id',
						description: 'Can be used multiple times',
						options: [
							{
								name: 'ID',
								value: 'id',
							},
							{
								name: 'ID Asc',
								value: 'id:asc',
							},
							{
								name: 'ID Desc',
								value: 'id:desc',
							},
							{
								name: 'Command',
								value: 'command',
							},
							{
								name: 'Command Asc',
								value: 'command:asc',
							},
							{
								name: 'Command Desc',
								value: 'command:desc',
							},
							{
								name: 'Status',
								value: 'status',
							},
							{
								name: 'Status Asc',
								value: 'status:asc',
							},
							{
								name: 'Status Desc',
								value: 'status:desc',
							},
							{
								name: 'Progress',
								value: 'progress',
							},
							{
								name: 'Progress Asc',
								value: 'progress:asc',
							},
							{
								name: 'Progress Desc',
								value: 'progress:desc',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Started Asc',
								value: 'started:asc',
							},
							{
								name: 'Started Desc',
								value: 'started:desc',
							},
							{
								name: 'Finished',
								value: 'finished',
							},
							{
								name: 'Finished Asc',
								value: 'finished:asc',
							},
							{
								name: 'Finished Desc',
								value: 'finished:desc',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'sort',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'running',
						description:
							'Can be used multiple times, the response will contain only Actions with specified statuses',
						options: [
							{
								name: 'Running',
								value: 'running',
							},
							{
								name: 'Success',
								value: 'success',
							},
							{
								name: 'Error',
								value: 'error',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'status',
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
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsAttach'],
					},
				},
			},
			{
				displayName: 'Server',
				name: 'server',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Server the Volume will be attached to',
				routing: {
					send: {
						type: 'body',
						property: 'server',
					},
				},
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsAttach'],
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
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsAttach'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Automount',
						name: 'automount',
						type: 'boolean',
						default: false,
						description: 'Auto-mount the Volume after attaching it',
						routing: {
							send: {
								type: 'body',
								property: 'automount',
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
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsChangeProtection'],
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
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsChangeProtection'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Delete',
						name: 'delete',
						type: 'boolean',
						default: false,
						description: 'If true, prevents the Volume from being deleted',
						routing: {
							send: {
								type: 'body',
								property: 'delete',
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
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsDetach'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsResize'],
					},
				},
			},
			{
				displayName: 'Size',
				name: 'size',
				type: 'number',
				default: 0,
				required: true,
				description: 'New Volume size in GB (must be greater than current size)',
				routing: {
					send: {
						type: 'body',
						property: 'size',
					},
				},
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['postVolumesIdActionsResize'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Volume',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['getVolumesIdActionsActionId'],
					},
				},
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
				required: true,
				description: 'ID of the Action',
				displayOptions: {
					show: {
						resource: ['volumeAction'],
						operation: ['getVolumesIdActionsActionId'],
					},
				},
			},
		],
	};
};