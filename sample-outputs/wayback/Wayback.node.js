exports.Wayback = class Wayback {
	description = {
		displayName: 'Wayback',
		name: 'wayback',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: "API for Internet Archive's Wayback Machine",
		defaults: {
			name: 'Wayback',
		},
		inputs: ['main'],
		outputs: ['main'],
		requestDefaults: {
			baseURL: 'https://api.archive.org',
			headers: {
				'Content-Type': 'application/json',
			},
			returnFullResponse: true,
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'getWaybackV1Available',
				options: [
					{
						name: 'GET /wayback/v1/available',
						value: 'getWaybackV1Available',
						action: 'GET /wayback/v1/available',
						routing: {
							request: {
								method: 'GET',
								url: '/wayback/v1/available',
							},
						},
					},
					{
						name: 'POST /wayback/v1/available',
						value: 'postWaybackV1Available',
						action: 'POST /wayback/v1/available',
						routing: {
							request: {
								method: 'POST',
								url: '/wayback/v1/available',
							},
						},
					},
				],
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				required: true,
				description: 'A single URL to query',
				routing: {
					send: {
						type: 'query',
						property: 'url',
					},
				},
				displayOptions: {
					show: {
						operation: ['getWaybackV1Available'],
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
						operation: ['getWaybackV1Available'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Timestamp',
						name: 'timestamp',
						type: 'string',
						default: '',
						description:
							'Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-M...',
						routing: {
							send: {
								type: 'query',
								property: 'timestamp',
							},
						},
					},
					{
						displayName: 'Callback',
						name: 'callback',
						type: 'string',
						default: '',
						description:
							'Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and...',
						routing: {
							send: {
								type: 'query',
								property: 'callback',
							},
						},
					},
					{
						displayName: 'Timeout',
						name: 'timeout',
						type: 'number',
						default: 5,
						description:
							'Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX ser...',
						routing: {
							send: {
								type: 'query',
								property: 'timeout',
							},
						},
					},
					{
						displayName: 'Closest',
						name: 'closest',
						type: 'options',
						default: 'either',
						description:
							'The direction specifies whether to match archived timestamps that are before the provided one, after, or the default eit...',
						options: [
							{
								name: 'Either',
								value: 'either',
							},
							{
								name: 'Before',
								value: 'before',
							},
							{
								name: 'After',
								value: 'after',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'closest',
							},
						},
					},
					{
						displayName: 'Status Code',
						name: 'status_code',
						type: 'number',
						default: 0,
						description:
							'HTTP status codes to filter by. Only results with these codes will be returned',
						routing: {
							send: {
								type: 'query',
								property: 'status_code',
							},
						},
					},
					{
						displayName: 'Tag',
						name: 'tag',
						type: 'string',
						default: '',
						description:
							'The optional tag can have any value, and is returned with the results; it can be used to help collate input and output v...',
						routing: {
							send: {
								type: 'query',
								property: 'tag',
							},
						},
					},
				],
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				required: true,
				description: 'A single URL to query',
				routing: {
					send: {
						type: 'query',
						property: 'url',
					},
				},
				displayOptions: {
					show: {
						operation: ['postWaybackV1Available'],
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
						operation: ['postWaybackV1Available'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Timestamp',
						name: 'timestamp',
						type: 'string',
						default: '',
						description:
							'Timestamp requested in ISO 8601 format. The following formats are acceptable:  - YYYY  - YYYY-MM  - YYYY-MM-DD  - YYYY-M...',
						routing: {
							send: {
								type: 'query',
								property: 'timestamp',
							},
						},
					},
					{
						displayName: 'Callback',
						name: 'callback',
						type: 'string',
						default: '',
						description:
							'Specifies a JavaScript function func, for a JSON-P response. When provided, results are wrapped as `callback(data)`, and...',
						routing: {
							send: {
								type: 'query',
								property: 'callback',
							},
						},
					},
					{
						displayName: 'Timeout',
						name: 'timeout',
						type: 'number',
						default: 5,
						description:
							'Timeout is the maximum number of seconds to wait for the availability API to get its underlying results from the CDX ser...',
						routing: {
							send: {
								type: 'query',
								property: 'timeout',
							},
						},
					},
					{
						displayName: 'Closest',
						name: 'closest',
						type: 'options',
						default: 'either',
						description:
							'The direction specifies whether to match archived timestamps that are before the provided one, after, or the default eit...',
						options: [
							{
								name: 'Either',
								value: 'either',
							},
							{
								name: 'Before',
								value: 'before',
							},
							{
								name: 'After',
								value: 'after',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'closest',
							},
						},
					},
					{
						displayName: 'Status Code',
						name: 'status_code',
						type: 'number',
						default: 0,
						description:
							'HTTP status codes to filter by. Only results with these codes will be returned',
						routing: {
							send: {
								type: 'query',
								property: 'status_code',
							},
						},
					},
					{
						displayName: 'Tag',
						name: 'tag',
						type: 'string',
						default: '',
						description:
							'The optional tag can have any value, and is returned with the results; it can be used to help collate input and output v...',
						routing: {
							send: {
								type: 'query',
								property: 'tag',
							},
						},
					},
				],
			},
		],
	};
};