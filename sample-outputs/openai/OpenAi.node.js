exports.OpenAi = class OpenAi {
	description = {
		displayName: 'Open Ai',
		name: 'openAi',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'APIs for sampling from and fine-tuning language models',
		defaults: {
			name: 'Open Ai',
		},
		inputs: ['main'],
		outputs: ['main'],
		requestDefaults: {
			baseURL: 'https://api.openai.com/v1',
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
				default: 'createAnswer',
				options: [
					{
						name: 'Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-refer...',
						value: 'createAnswer',
						action:
							'Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-refer...',
						routing: {
							request: {
								method: 'POST',
								url: '/answers',
							},
						},
					},
					{
						name: 'Transcribes audio into the input language',
						value: 'createTranscription',
						action: 'Transcribes audio into the input language',
						routing: {
							request: {
								method: 'POST',
								url: '/audio/transcriptions',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Translates audio into into English',
						value: 'createTranslation',
						action: 'Translates audio into into English',
						routing: {
							request: {
								method: 'POST',
								url: '/audio/translations',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Creates a completion for the chat message',
						value: 'createChatCompletion',
						action: 'Creates a completion for the chat message',
						routing: {
							request: {
								method: 'POST',
								url: '/chat/completions',
							},
						},
					},
					{
						name: 'Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) o...',
						value: 'createClassification',
						action:
							'Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) o...',
						routing: {
							request: {
								method: 'POST',
								url: '/classifications',
							},
						},
					},
					{
						name: 'Creates a completion for the provided prompt and parameters',
						value: 'createCompletion',
						action: 'Creates a completion for the provided prompt and parameters',
						routing: {
							request: {
								method: 'POST',
								url: '/completions',
							},
						},
					},
					{
						name: 'Creates a new edit for the provided input, instruction, and parameters',
						value: 'createEdit',
						action: 'Creates a new edit for the provided input, instruction, and parameters',
						routing: {
							request: {
								method: 'POST',
								url: '/edits',
							},
						},
					},
					{
						name: 'Creates an embedding vector representing the input text',
						value: 'createEmbedding',
						action: 'Creates an embedding vector representing the input text',
						routing: {
							request: {
								method: 'POST',
								url: '/embeddings',
							},
						},
					},
					{
						name: 'Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner an...',
						value: 'listEngines',
						action:
							'Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner an...',
						routing: {
							request: {
								method: 'GET',
								url: '/engines',
							},
						},
					},
					{
						name: 'Retrieves a model instance, providing basic information about it such as the owner and availability',
						value: 'retrieveEngine',
						action:
							'Retrieves a model instance, providing basic information about it such as the owner and availability',
						routing: {
							request: {
								method: 'GET',
								url: '=/engines/{{ $parameter["engine_id"] }}',
							},
						},
					},
					{
						name: 'The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to...',
						value: 'createSearch',
						action:
							'The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to...',
						routing: {
							request: {
								method: 'POST',
								url: '=/engines/{{ $parameter["engine_id"] }}/search',
							},
						},
					},
					{
						name: "Returns a list of files that belong to the user's organization",
						value: 'listFiles',
						action: "Returns a list of files that belong to the user's organization",
						routing: {
							request: {
								method: 'GET',
								url: '/files',
							},
						},
					},
					{
						name: 'Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the fil...',
						value: 'createFile',
						action:
							'Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the fil...',
						routing: {
							request: {
								method: 'POST',
								url: '/files',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Delete a file',
						value: 'deleteFile',
						action: 'Delete a file',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/files/{{ $parameter["file_id"] }}',
							},
						},
					},
					{
						name: 'Returns information about a specific file',
						value: 'retrieveFile',
						action: 'Returns information about a specific file',
						routing: {
							request: {
								method: 'GET',
								url: '=/files/{{ $parameter["file_id"] }}',
							},
						},
					},
					{
						name: 'Returns the contents of the specified file',
						value: 'downloadFile',
						action: 'Returns the contents of the specified file',
						routing: {
							request: {
								method: 'GET',
								url: '=/files/{{ $parameter["file_id"] }}/content',
							},
						},
					},
					{
						name: "List your organization's fine-tuning jobs",
						value: 'listFineTunes',
						action: "List your organization's fine-tuning jobs",
						routing: {
							request: {
								method: 'GET',
								url: '/fine-tunes',
							},
						},
					},
					{
						name: 'Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job inc...',
						value: 'createFineTune',
						action:
							'Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job inc...',
						routing: {
							request: {
								method: 'POST',
								url: '/fine-tunes',
							},
						},
					},
					{
						name: 'Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)',
						value: 'retrieveFineTune',
						action:
							'Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning)',
						routing: {
							request: {
								method: 'GET',
								url: '=/fine-tunes/{{ $parameter["fine_tune_id"] }}',
							},
						},
					},
					{
						name: 'Immediately cancel a fine-tune job.',
						value: 'cancelFineTune',
						action: 'Immediately cancel a fine-tune job.',
						routing: {
							request: {
								method: 'POST',
								url: '=/fine-tunes/{{ $parameter["fine_tune_id"] }}/cancel',
							},
						},
					},
					{
						name: 'Get fine-grained status updates for a fine-tune job.',
						value: 'listFineTuneEvents',
						action: 'Get fine-grained status updates for a fine-tune job.',
						routing: {
							request: {
								method: 'GET',
								url: '=/fine-tunes/{{ $parameter["fine_tune_id"] }}/events',
							},
						},
					},
					{
						name: 'Creates an edited or extended image given an original image and a prompt',
						value: 'createImageEdit',
						action: 'Creates an edited or extended image given an original image and a prompt',
						routing: {
							request: {
								method: 'POST',
								url: '/images/edits',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Creates an image given a prompt',
						value: 'createImage',
						action: 'Creates an image given a prompt',
						routing: {
							request: {
								method: 'POST',
								url: '/images/generations',
							},
						},
					},
					{
						name: 'Creates a variation of a given image',
						value: 'createImageVariation',
						action: 'Creates a variation of a given image',
						routing: {
							request: {
								method: 'POST',
								url: '/images/variations',
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							},
						},
					},
					{
						name: 'Lists the currently available models, and provides basic information about each one such as the owner and availability',
						value: 'listModels',
						action:
							'Lists the currently available models, and provides basic information about each one such as the owner and availability',
						routing: {
							request: {
								method: 'GET',
								url: '/models',
							},
						},
					},
					{
						name: 'Delete a fine-tuned model. You must have the Owner role in your organization',
						value: 'deleteModel',
						action: 'Delete a fine-tuned model. You must have the Owner role in your organization',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/models/{{ $parameter["model"] }}',
							},
						},
					},
					{
						name: 'Retrieves a model instance, providing basic information about the model such as the owner and permissioning',
						value: 'retrieveModel',
						action:
							'Retrieves a model instance, providing basic information about the model such as the owner and permissioning',
						routing: {
							request: {
								method: 'GET',
								url: '=/models/{{ $parameter["model"] }}',
							},
						},
					},
					{
						name: "Classifies if text violates OpenAI's Content Policy",
						value: 'createModeration',
						action: "Classifies if text violates OpenAI's Content Policy",
						routing: {
							request: {
								method: 'POST',
								url: '/moderations',
							},
						},
					},
				],
			},
			{
				displayName: 'Examples',
				name: 'examples',
				type: 'json',
				default: '{}',
				required: true,
				description:
					"List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recomm...",
				routing: {
					send: {
						type: 'body',
						property: 'examples',
					},
				},
				displayOptions: {
					show: {
						operation: ['createAnswer'],
					},
				},
			},
			{
				displayName: 'Examples Context',
				name: 'examples_context',
				type: 'string',
				default: '',
				required: true,
				description:
					'A text snippet containing the contextual information used to generate the answers for the `examples` you provide',
				placeholder:
					"e.g. Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.",
				routing: {
					send: {
						type: 'body',
						property: 'examples_context',
					},
				},
				displayOptions: {
					show: {
						operation: ['createAnswer'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use for completion. You can select one of `ada`, `babbage`, `curie`, or `davinci`',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createAnswer'],
					},
				},
			},
			{
				displayName: 'Question',
				name: 'question',
				type: 'string',
				default: '',
				required: true,
				description: 'Question to get answered',
				placeholder: 'e.g. What is the capital of Japan?',
				routing: {
					send: {
						type: 'body',
						property: 'question',
					},
				},
				displayOptions: {
					show: {
						operation: ['createAnswer'],
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
						operation: ['createAnswer'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Documents',
						name: 'documents',
						type: 'string',
						default: '',
						description:
							'List of documents from which the answer for the input `question` should be derived. If this is an empty list, the questi...',
						routing: {
							send: {
								type: 'body',
								property: 'documents',
							},
						},
					},
					{
						displayName: 'Expand',
						name: 'expand',
						type: 'json',
						default: '{}',
						description:
							'If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object I...',
						routing: {
							send: {
								type: 'body',
								property: 'expand',
							},
						},
					},
					{
						displayName: 'File',
						name: 'file',
						type: 'string',
						default: '',
						description:
							'The ID of an uploaded file that contains documents to search over. See [upload file](/docs/api-reference/files/upload) f...',
						routing: {
							send: {
								type: 'body',
								property: 'file',
							},
						},
					},
					{
						displayName: 'Logit Bias',
						name: 'logit_bias',
						type: 'json',
						default: '{}',
						description:
							'Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specifie...',
						routing: {
							send: {
								type: 'body',
								property: 'logit_bias',
							},
						},
					},
					{
						displayName: 'Logprobs',
						name: 'logprobs',
						type: 'number',
						default: 0,
						description:
							'Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs...',
						routing: {
							send: {
								type: 'body',
								property: 'logprobs',
							},
						},
					},
					{
						displayName: 'Max Rerank',
						name: 'max_rerank',
						type: 'number',
						default: 0,
						description:
							'The maximum number of documents to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting...',
						routing: {
							send: {
								type: 'body',
								property: 'max_rerank',
							},
						},
					},
					{
						displayName: 'Max Tokens',
						name: 'max_tokens',
						type: 'number',
						default: 0,
						description: 'The maximum number of tokens allowed for the generated answer',
						routing: {
							send: {
								type: 'body',
								property: 'max_tokens',
							},
						},
					},
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'How many answers to generate for each question',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Return Metadata',
						name: 'return_metadata',
						type: 'boolean',
						default: false,
						description:
							'A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "...',
						routing: {
							send: {
								type: 'body',
								property: 'return_metadata',
							},
						},
					},
					{
						displayName: 'Return Prompt',
						name: 'return_prompt',
						type: 'boolean',
						default: false,
						description:
							'If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a...',
						routing: {
							send: {
								type: 'body',
								property: 'return_prompt',
							},
						},
					},
					{
						displayName: 'Search Model',
						name: 'search_model',
						type: 'string',
						default: '',
						description:
							'ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie...',
						routing: {
							send: {
								type: 'body',
								property: 'search_model',
							},
						},
					},
					{
						displayName: 'Stop',
						name: 'stop',
						type: 'string',
						default: '',
						description:
							'Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequenc...',
						placeholder: 'e.g. \n',
						routing: {
							send: {
								type: 'body',
								property: 'stop',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower ...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'File',
				name: 'file',
				type: 'string',
				default: '',
				required: true,
				description:
					'The audio file to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm',
				routing: {
					send: {
						type: 'body',
						property: 'file',
					},
				},
				displayOptions: {
					show: {
						operation: ['createTranscription'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the model to use. Only `whisper-1` is currently available',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createTranscription'],
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
						operation: ['createTranscription'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Language',
						name: 'language',
						type: 'string',
						default: '',
						description:
							'The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_6...',
						routing: {
							send: {
								type: 'body',
								property: 'language',
							},
						},
					},
					{
						displayName: 'Prompt',
						name: 'prompt',
						type: 'string',
						default: '',
						description:
							"An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-te...",
						routing: {
							send: {
								type: 'body',
								property: 'prompt',
							},
						},
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'string',
						default: '',
						description:
							'The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt',
						routing: {
							send: {
								type: 'body',
								property: 'response_format',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values l...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
				],
			},
			{
				displayName: 'File',
				name: 'file',
				type: 'string',
				default: '',
				required: true,
				description:
					'The audio file to translate, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm',
				routing: {
					send: {
						type: 'body',
						property: 'file',
					},
				},
				displayOptions: {
					show: {
						operation: ['createTranslation'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the model to use. Only `whisper-1` is currently available',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createTranslation'],
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
						operation: ['createTranslation'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Prompt',
						name: 'prompt',
						type: 'string',
						default: '',
						description:
							"An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-te...",
						routing: {
							send: {
								type: 'body',
								property: 'prompt',
							},
						},
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'string',
						default: '',
						description:
							'The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt',
						routing: {
							send: {
								type: 'body',
								property: 'response_format',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values l...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
				],
			},
			{
				displayName: 'Messages',
				name: 'messages',
				type: 'json',
				default: '{}',
				required: true,
				description:
					'The messages to generate chat completions for, in the [chat format](/docs/guides/chat/introduction)',
				routing: {
					send: {
						type: 'body',
						property: 'messages',
					},
				},
				displayOptions: {
					show: {
						operation: ['createChatCompletion'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use. Currently, only `gpt-3.5-turbo` and `gpt-3.5-turbo-0301` are supported',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createChatCompletion'],
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
						operation: ['createChatCompletion'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Frequency Penalty',
						name: 'frequency_penalty',
						type: 'number',
						default: 0,
						description:
							'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, d...',
						routing: {
							send: {
								type: 'body',
								property: 'frequency_penalty',
							},
						},
					},
					{
						displayName: 'Logit Bias',
						name: 'logit_bias',
						type: 'json',
						default: '{}',
						description:
							'Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specifie...',
						routing: {
							send: {
								type: 'body',
								property: 'logit_bias',
							},
						},
					},
					{
						displayName: 'Max Tokens',
						name: 'max_tokens',
						type: 'number',
						default: 0,
						description:
							'The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return wil...',
						routing: {
							send: {
								type: 'body',
								property: 'max_tokens',
							},
						},
					},
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'How many chat completion choices to generate for each input message',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Presence Penalty',
						name: 'presence_penalty',
						type: 'number',
						default: 0,
						description:
							'Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increa...',
						routing: {
							send: {
								type: 'body',
								property: 'presence_penalty',
							},
						},
					},
					{
						displayName: 'Stop',
						name: 'stop',
						type: 'string',
						default: '',
						description: 'Up to 4 sequences where the API will stop generating further tokens',
						routing: {
							send: {
								type: 'body',
								property: 'stop',
							},
						},
					},
					{
						displayName: 'Stream',
						name: 'stream',
						type: 'boolean',
						default: false,
						description:
							'If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](http...',
						routing: {
							send: {
								type: 'body',
								property: 'stream',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower ...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
					{
						displayName: 'Top P',
						name: 'top_p',
						type: 'number',
						default: 0,
						description:
							'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the token...',
						routing: {
							send: {
								type: 'body',
								property: 'top_p',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available ...',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createClassification'],
					},
				},
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				required: true,
				description: 'Query to be classified',
				placeholder: 'e.g. The plot is not very attractive.',
				routing: {
					send: {
						type: 'body',
						property: 'query',
					},
				},
				displayOptions: {
					show: {
						operation: ['createClassification'],
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
						operation: ['createClassification'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Examples',
						name: 'examples',
						type: 'json',
						default: '{}',
						description:
							'A list of examples with labels, in the following format:  `[["The movie is so interesting.", "Positive"], ["It is quite ...',
						routing: {
							send: {
								type: 'body',
								property: 'examples',
							},
						},
					},
					{
						displayName: 'Expand',
						name: 'expand',
						type: 'json',
						default: '{}',
						description:
							'If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object I...',
						routing: {
							send: {
								type: 'body',
								property: 'expand',
							},
						},
					},
					{
						displayName: 'File',
						name: 'file',
						type: 'string',
						default: '',
						description:
							'The ID of the uploaded file that contains training examples. See [upload file](/docs/api-reference/files/upload) for how...',
						routing: {
							send: {
								type: 'body',
								property: 'file',
							},
						},
					},
					{
						displayName: 'Labels',
						name: 'labels',
						type: 'string',
						default: '',
						description:
							'The set of categories being classified. If not specified, candidate labels will be automatically collected from the exam...',
						routing: {
							send: {
								type: 'body',
								property: 'labels',
							},
						},
					},
					{
						displayName: 'Logit Bias',
						name: 'logit_bias',
						type: 'json',
						default: '{}',
						description:
							'Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specifie...',
						routing: {
							send: {
								type: 'body',
								property: 'logit_bias',
							},
						},
					},
					{
						displayName: 'Logprobs',
						name: 'logprobs',
						type: 'number',
						default: 0,
						description:
							'Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs...',
						routing: {
							send: {
								type: 'body',
								property: 'logprobs',
							},
						},
					},
					{
						displayName: 'Max Examples',
						name: 'max_examples',
						type: 'number',
						default: 0,
						description:
							'The maximum number of examples to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting ...',
						routing: {
							send: {
								type: 'body',
								property: 'max_examples',
							},
						},
					},
					{
						displayName: 'Return Metadata',
						name: 'return_metadata',
						type: 'boolean',
						default: false,
						description:
							'A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "...',
						routing: {
							send: {
								type: 'body',
								property: 'return_metadata',
							},
						},
					},
					{
						displayName: 'Return Prompt',
						name: 'return_prompt',
						type: 'boolean',
						default: false,
						description:
							'If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a...',
						routing: {
							send: {
								type: 'body',
								property: 'return_prompt',
							},
						},
					},
					{
						displayName: 'Search Model',
						name: 'search_model',
						type: 'string',
						default: '',
						description:
							'ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie...',
						routing: {
							send: {
								type: 'body',
								property: 'search_model',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower ...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available ...',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createCompletion'],
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
						operation: ['createCompletion'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Best Of',
						name: 'best_of',
						type: 'number',
						default: 0,
						description:
							'Generates `best_of` completions server-side and returns the "best" (the one with the highest log probability per token)....',
						routing: {
							send: {
								type: 'body',
								property: 'best_of',
							},
						},
					},
					{
						displayName: 'Echo',
						name: 'echo',
						type: 'boolean',
						default: false,
						description: 'Echo back the prompt in addition to the completion',
						routing: {
							send: {
								type: 'body',
								property: 'echo',
							},
						},
					},
					{
						displayName: 'Frequency Penalty',
						name: 'frequency_penalty',
						type: 'number',
						default: 0,
						description:
							'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, d...',
						routing: {
							send: {
								type: 'body',
								property: 'frequency_penalty',
							},
						},
					},
					{
						displayName: 'Logit Bias',
						name: 'logit_bias',
						type: 'json',
						default: '{}',
						description:
							'Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specifie...',
						routing: {
							send: {
								type: 'body',
								property: 'logit_bias',
							},
						},
					},
					{
						displayName: 'Logprobs',
						name: 'logprobs',
						type: 'number',
						default: 0,
						description:
							'Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs...',
						routing: {
							send: {
								type: 'body',
								property: 'logprobs',
							},
						},
					},
					{
						displayName: 'Max Tokens',
						name: 'max_tokens',
						type: 'number',
						default: 0,
						description:
							'The maximum number of [tokens](/tokenizer) to generate in the completion.  The token count of your prompt plus `max_toke...',
						routing: {
							send: {
								type: 'body',
								property: 'max_tokens',
							},
						},
					},
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description:
							'How many completions to generate for each prompt.  **Note:** Because this parameter generates many completions, it can q...',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Presence Penalty',
						name: 'presence_penalty',
						type: 'number',
						default: 0,
						description:
							'Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increa...',
						routing: {
							send: {
								type: 'body',
								property: 'presence_penalty',
							},
						},
					},
					{
						displayName: 'Prompt',
						name: 'prompt',
						type: 'string',
						default: '',
						description:
							'The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arr...',
						placeholder: 'e.g. This is a test.',
						routing: {
							send: {
								type: 'body',
								property: 'prompt',
							},
						},
					},
					{
						displayName: 'Stop',
						name: 'stop',
						type: 'string',
						default: '',
						description:
							'Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequenc...',
						placeholder: 'e.g. \n',
						routing: {
							send: {
								type: 'body',
								property: 'stop',
							},
						},
					},
					{
						displayName: 'Stream',
						name: 'stream',
						type: 'boolean',
						default: false,
						description:
							'Whether to stream back partial progress. If set, tokens will be sent as data-only [server-sent events](https://developer...',
						routing: {
							send: {
								type: 'body',
								property: 'stream',
							},
						},
					},
					{
						displayName: 'Suffix',
						name: 'suffix',
						type: 'string',
						default: '',
						description: 'The suffix that comes after a completion of inserted text',
						placeholder: 'e.g. test.',
						routing: {
							send: {
								type: 'body',
								property: 'suffix',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower ...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
					{
						displayName: 'Top P',
						name: 'top_p',
						type: 'number',
						default: 0,
						description:
							'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the token...',
						routing: {
							send: {
								type: 'body',
								property: 'top_p',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Instruction',
				name: 'instruction',
				type: 'string',
				default: '',
				required: true,
				description: 'The instruction that tells the model how to edit the prompt',
				placeholder: 'e.g. Fix the spelling mistakes.',
				routing: {
					send: {
						type: 'body',
						property: 'instruction',
					},
				},
				displayOptions: {
					show: {
						operation: ['createEdit'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use. You can use the `text-davinci-edit-001` or `code-davinci-edit-001` model with this endpoint',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createEdit'],
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
						operation: ['createEdit'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Input',
						name: 'input',
						type: 'string',
						default: '',
						description: 'The input text to use as a starting point for the edit',
						placeholder: 'e.g. What day of the wek is it?',
						routing: {
							send: {
								type: 'body',
								property: 'input',
							},
						},
					},
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'How many edits to generate for the input and instruction',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Temperature',
						name: 'temperature',
						type: 'number',
						default: 0,
						description:
							'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower ...',
						routing: {
							send: {
								type: 'body',
								property: 'temperature',
							},
						},
					},
					{
						displayName: 'Top P',
						name: 'top_p',
						type: 'number',
						default: 0,
						description:
							'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the token...',
						routing: {
							send: {
								type: 'body',
								property: 'top_p',
							},
						},
					},
				],
			},
			{
				displayName: 'Input',
				name: 'input',
				type: 'string',
				default: '',
				required: true,
				description:
					'Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a sin...',
				placeholder: 'e.g. This is a test.',
				routing: {
					send: {
						type: 'body',
						property: 'input',
					},
				},
				displayOptions: {
					show: {
						operation: ['createEmbedding'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description:
					'ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available ...',
				routing: {
					send: {
						type: 'body',
						property: 'model',
					},
				},
				displayOptions: {
					show: {
						operation: ['createEmbedding'],
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
						operation: ['createEmbedding'],
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
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Engine ID',
				name: 'engine_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the engine to use for this request',
				displayOptions: {
					show: {
						operation: ['retrieveEngine'],
					},
				},
			},
			{
				displayName: 'Engine ID',
				name: 'engine_id',
				type: 'string',
				default: '',
				required: true,
				description:
					'The ID of the engine to use for this request.  You can select one of `ada`, `babbage`, `curie`, or `davinci`',
				displayOptions: {
					show: {
						operation: ['createSearch'],
					},
				},
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				required: true,
				description: 'Query to search against the documents',
				placeholder: 'e.g. the president',
				routing: {
					send: {
						type: 'body',
						property: 'query',
					},
				},
				displayOptions: {
					show: {
						operation: ['createSearch'],
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
						operation: ['createSearch'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Documents',
						name: 'documents',
						type: 'string',
						default: '',
						description:
							'Up to 200 documents to search over, provided as a list of strings.  The maximum document length (in tokens) is 2034 minu...',
						routing: {
							send: {
								type: 'body',
								property: 'documents',
							},
						},
					},
					{
						displayName: 'File',
						name: 'file',
						type: 'string',
						default: '',
						description:
							'The ID of an uploaded file that contains documents to search over.  You should specify either `documents` or a `file`, b...',
						routing: {
							send: {
								type: 'body',
								property: 'file',
							},
						},
					},
					{
						displayName: 'Max Rerank',
						name: 'max_rerank',
						type: 'number',
						default: 0,
						description:
							'The maximum number of documents to be re-ranked and returned by search.  This flag only takes effect when `file` is set',
						routing: {
							send: {
								type: 'body',
								property: 'max_rerank',
							},
						},
					},
					{
						displayName: 'Return Metadata',
						name: 'return_metadata',
						type: 'boolean',
						default: false,
						description:
							'A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "...',
						routing: {
							send: {
								type: 'body',
								property: 'return_metadata',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'File',
				name: 'file',
				type: 'string',
				default: '',
				required: true,
				description:
					'Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the `purpose` is set to "...',
				routing: {
					send: {
						type: 'body',
						property: 'file',
					},
				},
				displayOptions: {
					show: {
						operation: ['createFile'],
					},
				},
			},
			{
				displayName: 'Purpose',
				name: 'purpose',
				type: 'string',
				default: '',
				required: true,
				description:
					'The intended purpose of the uploaded documents.  Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tunes). This...',
				routing: {
					send: {
						type: 'body',
						property: 'purpose',
					},
				},
				displayOptions: {
					show: {
						operation: ['createFile'],
					},
				},
			},
			{
				displayName: 'File ID',
				name: 'file_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the file to use for this request',
				displayOptions: {
					show: {
						operation: ['deleteFile'],
					},
				},
			},
			{
				displayName: 'File ID',
				name: 'file_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the file to use for this request',
				displayOptions: {
					show: {
						operation: ['retrieveFile'],
					},
				},
			},
			{
				displayName: 'File ID',
				name: 'file_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the file to use for this request',
				displayOptions: {
					show: {
						operation: ['downloadFile'],
					},
				},
			},
			{
				displayName: 'Training File',
				name: 'training_file',
				type: 'string',
				default: '',
				required: true,
				description:
					'The ID of an uploaded file that contains training data.  See [upload file](/docs/api-reference/files/upload) for how to ...',
				placeholder: 'e.g. file-ajSREls59WBbvgSzJSVWxMCB',
				routing: {
					send: {
						type: 'body',
						property: 'training_file',
					},
				},
				displayOptions: {
					show: {
						operation: ['createFineTune'],
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
						operation: ['createFineTune'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Batch Size',
						name: 'batch_size',
						type: 'number',
						default: 0,
						description:
							'The batch size to use for training. The batch size is the number of training examples used to train a single forward and...',
						routing: {
							send: {
								type: 'body',
								property: 'batch_size',
							},
						},
					},
					{
						displayName: 'Classification Betas',
						name: 'classification_betas',
						type: 'json',
						default: '{}',
						description:
							'If this is provided, we calculate F-beta scores at the specified beta values. The F-beta score is a generalization of F-...',
						routing: {
							send: {
								type: 'body',
								property: 'classification_betas',
							},
						},
					},
					{
						displayName: 'Classification N Classes',
						name: 'classification_n_classes',
						type: 'number',
						default: 0,
						description:
							'The number of classes in a classification task.  This parameter is required for multiclass classification',
						routing: {
							send: {
								type: 'body',
								property: 'classification_n_classes',
							},
						},
					},
					{
						displayName: 'Classification Positive Class',
						name: 'classification_positive_class',
						type: 'string',
						default: '',
						description:
							'The positive class in binary classification.  This parameter is needed to generate precision, recall, and F1 metrics whe...',
						routing: {
							send: {
								type: 'body',
								property: 'classification_positive_class',
							},
						},
					},
					{
						displayName: 'Compute Classification Metrics',
						name: 'compute_classification_metrics',
						type: 'boolean',
						default: false,
						description:
							'If set, we calculate classification-specific metrics such as accuracy and F-1 score using the validation set at the end ...',
						routing: {
							send: {
								type: 'body',
								property: 'compute_classification_metrics',
							},
						},
					},
					{
						displayName: 'Learning Rate Multiplier',
						name: 'learning_rate_multiplier',
						type: 'number',
						default: 0,
						description:
							'The learning rate multiplier to use for training. The fine-tuning learning rate is the original learning rate used for p...',
						routing: {
							send: {
								type: 'body',
								property: 'learning_rate_multiplier',
							},
						},
					},
					{
						displayName: 'Model',
						name: 'model',
						type: 'string',
						default: '',
						description:
							'The name of the base model to fine-tune. You can select one of "ada", "babbage", "curie", "davinci", or a fine-tuned mod...',
						routing: {
							send: {
								type: 'body',
								property: 'model',
							},
						},
					},
					{
						displayName: 'N Epochs',
						name: 'n_epochs',
						type: 'number',
						default: 0,
						description:
							'The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset',
						routing: {
							send: {
								type: 'body',
								property: 'n_epochs',
							},
						},
					},
					{
						displayName: 'Prompt Loss Weight',
						name: 'prompt_loss_weight',
						type: 'number',
						default: 0,
						description:
							'The weight to use for loss on the prompt tokens. This controls how much the model tries to learn to generate the prompt ...',
						routing: {
							send: {
								type: 'body',
								property: 'prompt_loss_weight',
							},
						},
					},
					{
						displayName: 'Suffix',
						name: 'suffix',
						type: 'string',
						default: '',
						description:
							'A string of up to 40 characters that will be added to your fine-tuned model name.  For example, a `suffix` of "custom-mo...',
						routing: {
							send: {
								type: 'body',
								property: 'suffix',
							},
						},
					},
					{
						displayName: 'Validation File',
						name: 'validation_file',
						type: 'string',
						default: '',
						description:
							'The ID of an uploaded file that contains validation data.  If you provide this file, the data is used to generate valida...',
						placeholder: 'e.g. file-XjSREls59WBbvgSzJSVWxMCa',
						routing: {
							send: {
								type: 'body',
								property: 'validation_file',
							},
						},
					},
				],
			},
			{
				displayName: 'Fine Tune ID',
				name: 'fine_tune_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the fine-tune job',
				displayOptions: {
					show: {
						operation: ['retrieveFineTune'],
					},
				},
			},
			{
				displayName: 'Fine Tune ID',
				name: 'fine_tune_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the fine-tune job to cancel',
				displayOptions: {
					show: {
						operation: ['cancelFineTune'],
					},
				},
			},
			{
				displayName: 'Fine Tune ID',
				name: 'fine_tune_id',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the fine-tune job to get events for.',
				displayOptions: {
					show: {
						operation: ['listFineTuneEvents'],
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
						operation: ['listFineTuneEvents'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Stream',
						name: 'stream',
						type: 'boolean',
						default: false,
						description:
							'Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](ht...',
						routing: {
							send: {
								type: 'query',
								property: 'stream',
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
				description:
					'The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transpa...',
				routing: {
					send: {
						type: 'body',
						property: 'image',
					},
				},
				displayOptions: {
					show: {
						operation: ['createImageEdit'],
					},
				},
			},
			{
				displayName: 'Prompt',
				name: 'prompt',
				type: 'string',
				default: '',
				required: true,
				description:
					'A text description of the desired image(s). The maximum length is 1000 characters',
				placeholder: 'e.g. A cute baby sea otter wearing a beret',
				routing: {
					send: {
						type: 'body',
						property: 'prompt',
					},
				},
				displayOptions: {
					show: {
						operation: ['createImageEdit'],
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
						operation: ['createImageEdit'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Mask',
						name: 'mask',
						type: 'string',
						default: '',
						description:
							'An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Mu...',
						routing: {
							send: {
								type: 'body',
								property: 'mask',
							},
						},
					},
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'The number of images to generate. Must be between 1 and 10',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'string',
						default: '',
						description:
							'The format in which the generated images are returned. Must be one of `url` or `b64_json`',
						placeholder: 'e.g. url',
						routing: {
							send: {
								type: 'body',
								property: 'response_format',
							},
						},
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'string',
						default: '',
						description:
							'The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`',
						placeholder: 'e.g. 1024x1024',
						routing: {
							send: {
								type: 'body',
								property: 'size',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Prompt',
				name: 'prompt',
				type: 'string',
				default: '',
				required: true,
				description:
					'A text description of the desired image(s). The maximum length is 1000 characters',
				placeholder: 'e.g. A cute baby sea otter',
				routing: {
					send: {
						type: 'body',
						property: 'prompt',
					},
				},
				displayOptions: {
					show: {
						operation: ['createImage'],
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
						operation: ['createImage'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'The number of images to generate. Must be between 1 and 10',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'string',
						default: '',
						description:
							'The format in which the generated images are returned. Must be one of `url` or `b64_json`',
						placeholder: 'e.g. url',
						routing: {
							send: {
								type: 'body',
								property: 'response_format',
							},
						},
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'string',
						default: '',
						description:
							'The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`',
						placeholder: 'e.g. 1024x1024',
						routing: {
							send: {
								type: 'body',
								property: 'size',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
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
				description:
					'The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square',
				routing: {
					send: {
						type: 'body',
						property: 'image',
					},
				},
				displayOptions: {
					show: {
						operation: ['createImageVariation'],
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
						operation: ['createImageVariation'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'N',
						name: 'n',
						type: 'number',
						default: 0,
						description: 'The number of images to generate. Must be between 1 and 10',
						routing: {
							send: {
								type: 'body',
								property: 'n',
							},
						},
					},
					{
						displayName: 'Response Format',
						name: 'response_format',
						type: 'string',
						default: '',
						description:
							'The format in which the generated images are returned. Must be one of `url` or `b64_json`',
						placeholder: 'e.g. url',
						routing: {
							send: {
								type: 'body',
								property: 'response_format',
							},
						},
					},
					{
						displayName: 'Size',
						name: 'size',
						type: 'string',
						default: '',
						description:
							'The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`',
						placeholder: 'e.g. 1024x1024',
						routing: {
							send: {
								type: 'body',
								property: 'size',
							},
						},
					},
					{
						displayName: 'User',
						name: 'user',
						type: 'string',
						default: '',
						description:
							'A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/gu...',
						placeholder: 'e.g. user-1234',
						routing: {
							send: {
								type: 'body',
								property: 'user',
							},
						},
					},
				],
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description: 'The model to delete',
				displayOptions: {
					show: {
						operation: ['deleteModel'],
					},
				},
			},
			{
				displayName: 'Model',
				name: 'model',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the model to use for this request',
				displayOptions: {
					show: {
						operation: ['retrieveModel'],
					},
				},
			},
			{
				displayName: 'Input',
				name: 'input',
				type: 'string',
				default: '',
				required: true,
				description: 'The input text to classify',
				placeholder: 'e.g. I want to kill them.',
				routing: {
					send: {
						type: 'body',
						property: 'input',
					},
				},
				displayOptions: {
					show: {
						operation: ['createModeration'],
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
						operation: ['createModeration'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Model',
						name: 'model',
						type: 'string',
						default: '',
						description:
							'Two content moderations models are available: `text-moderation-stable` and `text-moderation-latest`.  The default is `te...',
						placeholder: 'e.g. text-moderation-stable',
						routing: {
							send: {
								type: 'body',
								property: 'model',
							},
						},
					},
				],
			},
		],
	};
};