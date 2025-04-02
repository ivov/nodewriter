exports.Lichess = class Lichess {
	description = {
		displayName: 'Lichess',
		name: 'lichess',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description:
			'# Introduction Welcome to the reference for the Lichess API! Lichess is free/libre, open-source chess server powered by ...',
		defaults: {
			name: 'Lichess',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'lichessOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://lichess.org',
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
				default: 'user',
				options: [
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Puzzle',
						value: 'puzzle',
					},
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Game',
						value: 'game',
					},
					{
						name: 'Tv',
						value: 'tv',
					},
					{
						name: 'Arena Tournament',
						value: 'arenaTournament',
					},
					{
						name: 'Swiss Tournament',
						value: 'swissTournament',
					},
					{
						name: 'Team',
						value: 'team',
					},
					{
						name: 'Study',
						value: 'study',
					},
					{
						name: 'Broadcast',
						value: 'broadcast',
					},
					{
						name: 'Fide',
						value: 'fide',
					},
					{
						name: 'Simul',
						value: 'simul',
					},
					{
						name: 'Relation',
						value: 'relation',
					},
					{
						name: 'Board',
						value: 'board',
					},
					{
						name: 'Bot',
						value: 'bot',
					},
					{
						name: 'Challenge',
						value: 'challenge',
					},
					{
						name: 'Bulk Pairing',
						value: 'bulkPairing',
					},
					{
						name: 'Messaging',
						value: 'messaging',
					},
					{
						name: 'Analysis',
						value: 'analysis',
					},
					{
						name: 'External Engine',
						value: 'externalEngine',
					},
					{
						name: 'OAuth',
						value: 'oAuth',
					},
					{
						name: 'Opening Explorer',
						value: 'openingExplorer',
					},
					{
						name: 'Tablebase',
						value: 'tablebase',
					},
				],
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiUsersStatus',
				options: [
					{
						name: 'Get real-time users status',
						value: 'apiUsersStatus',
						action:
							'Read the `online`, `playing` and `streaming` flags of several users. This API is very fast and cheap on lichess side. So...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/users/status',
							},
						},
					},
					{
						name: 'Get all top 10',
						value: 'player',
						action:
							'Get the top 10 players for each speed and variant. See <https://lichess.org/player>.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/player',
							},
						},
					},
					{
						name: 'Get one leaderboard',
						value: 'playerTopNbPerfType',
						action:
							'Get the leaderboard for a single speed or variant (a.k.a. `perfType`). There is no leaderboard for correspondence or puz...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/player/top/{{ $parameter["nb"] }}/{perfType}',
							},
						},
					},
					{
						name: 'Get user public data',
						value: 'apiUser',
						action: 'Read public data of a user.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Get rating history of a user',
						value: 'apiUserRatingHistory',
						action:
							'Read rating history of a user, for all perf types. There is at most one entry per day. Format of an entry is `[year, mon...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/rating-history',
							},
						},
					},
					{
						name: 'Get performance statistics of a user',
						value: 'apiUserPerf',
						action:
							'Read performance statistics of a user, for a single performance. Similar to the [performance pages on the website](https...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/perf/{perf}',
							},
						},
					},
					{
						name: 'Get user activity',
						value: 'apiUserActivity',
						action: 'Read data to generate the activity feed of a user.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/activity',
							},
						},
					},
					{
						name: 'Get users by ID',
						value: 'apiUsers',
						action:
							'Get up to 300 users by their IDs. Users are returned in the same order as the IDs. The method is `POST` to allow a longe...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/users',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Get live streamers',
						value: 'streamerLive',
						action:
							'Get basic info about currently streaming users. This API is very fast and cheap on lichess side. So you can call it quit...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/streamer/live',
							},
						},
					},
					{
						name: 'Get crosstable',
						value: 'apiCrosstable',
						action:
							'Get total number of games, and current score, of any two users. If the `matchup` flag is provided, and the users are cur...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/crosstable/{{ $parameter["user1"] }}/{user2}',
							},
						},
					},
					{
						name: 'Autocomplete usernames',
						value: 'apiPlayerAutocomplete',
						action: 'Provides autocompletion options for an incomplete username.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/player/autocomplete',
							},
						},
					},
					{
						name: 'Add a note for a user',
						value: 'writeNote',
						action: 'Add a private note available only to you about this account.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/user/{{ $parameter["username"] }}/note',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Get notes for a user',
						value: 'readNote',
						action: 'Get the private notes that you have added for a user.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/note',
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
				default: 'apiPuzzleDaily',
				options: [
					{
						name: 'Get the daily puzzle',
						value: 'apiPuzzleDaily',
						action:
							'Get the daily Lichess puzzle in JSON format. Alternatively, you can [post it in your slack workspace](https://lichess.or...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/puzzle/daily',
							},
						},
					},
					{
						name: 'Get a puzzle by its ID',
						value: 'apiPuzzleId',
						action: 'Get a single Lichess puzzle in JSON format',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/puzzle/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Get a new puzzle',
						value: 'apiPuzzleNext',
						action:
							'Get a random Lichess puzzle in JSON format.  If authenticated, only returns puzzles that the user has never seen before....',
						routing: {
							request: {
								method: 'GET',
								url: '/api/puzzle/next',
							},
						},
					},
					{
						name: 'Get your puzzle activity',
						value: 'apiPuzzleActivity',
						action:
							'Download your puzzle activity in [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Puzzle activity is sorte...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/puzzle/activity',
							},
						},
					},
					{
						name: 'Get puzzles to replay',
						value: 'apiPuzzleReplay',
						action: 'Gets the puzzle IDs of remaining puzzles to re-attempt in JSON format',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/puzzle/replay/{{ $parameter["days"] }}/{theme}',
							},
						},
					},
					{
						name: 'Get your puzzle dashboard',
						value: 'apiPuzzleDashboard',
						action:
							'Download your [puzzle dashboard](https://lichess.org/training/dashboard/30/dashboard) as JSON. Also includes all puzzle ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/puzzle/dashboard/{{ $parameter["days"] }}',
							},
						},
					},
					{
						name: 'Get the storm dashboard of a player',
						value: 'apiStormDashboard',
						action:
							'Download the [storm dashboard](https://lichess.org/storm/dashboard/mrbasso) of any player as JSON. Contains the aggregat...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/storm/dashboard/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Create and join a puzzle race',
						value: 'racerPost',
						action:
							'Create a new private [puzzle race](https://lichess.org/racer). The Lichess user who creates the race must join the race ...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/racer',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['puzzle'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'accountMe',
				options: [
					{
						name: 'Get my profile',
						value: 'accountMe',
						action: 'Public information about the logged in user.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/account',
							},
						},
					},
					{
						name: 'Get my email address',
						value: 'accountEmail',
						action: 'Read the email address of the logged in user.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/account/email',
							},
						},
					},
					{
						name: 'Get my preferences',
						value: 'account',
						action:
							'Read the preferences of the logged in user. - <https://lichess.org/account/preferences/game-display> - <https://github.c...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/account/preferences',
							},
						},
					},
					{
						name: 'Get my kid mode status',
						value: 'accountKid',
						action:
							'Read the kid mode status of the logged in user. - <https://lichess.org/account/kid>',
						routing: {
							request: {
								method: 'GET',
								url: '/api/account/kid',
							},
						},
					},
					{
						name: 'Set my kid mode status',
						value: 'accountKidPost',
						action:
							'Set the kid mode status of the logged in user. - <https://lichess.org/account/kid>',
						routing: {
							request: {
								method: 'POST',
								url: '/api/account/kid',
							},
						},
					},
					{
						name: 'Get my timeline',
						value: 'timeline',
						action: 'Get the timeline events of the logged in user.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/timeline',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['account'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'gamePgn',
				options: [
					{
						name: 'Export one game',
						value: 'gamePgn',
						action:
							'Download one game in either PGN or JSON format. Ongoing games are delayed by a few seconds ranging from 3 to 60 dependin...',
						routing: {
							request: {
								method: 'GET',
								url: '=/game/export/{{ $parameter["gameId"] }}',
							},
						},
					},
					{
						name: 'Export ongoing game of a user',
						value: 'apiUserCurrentGame',
						action:
							'Download the ongoing game, or the last game played, of a user. Available in either PGN or JSON format. Ongoing games are...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/current-game',
							},
						},
					},
					{
						name: 'Export games of a user',
						value: 'apiGamesUser',
						action:
							'Download all games of any user in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/games/user/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Export games by IDs',
						value: 'gamesExportIds',
						action:
							'Download games by IDs in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the request ...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/games/export/_ids',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Stream games of users',
						value: 'gamesByUsers',
						action:
							'Stream the games played between a list of users, in real time. Only games where **both players** are part of the list ar...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/stream/games-by-users',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Stream games by IDs',
						value: 'gamesByIds',
						action:
							'Creates a stream of games from an arbitrary streamId, and a list of game IDs. The stream first outputs the games that al...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/stream/games/{{ $parameter["streamId"] }}',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Add game IDs to stream',
						value: 'gamesByIdsAdd',
						action:
							'Add new game IDs for [an existing stream](#operation/gamesByIds) to watch. The stream will immediately outputs the games...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/stream/games/{{ $parameter["streamId"] }}/add',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Get my ongoing games',
						value: 'apiAccountPlaying',
						action:
							'Get the ongoing games of the current user. Real-time and correspondence games are included. The most urgent games are li...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/account/playing',
							},
						},
					},
					{
						name: 'Stream moves of a game',
						value: 'streamGame',
						action:
							'Stream positions and moves of any ongoing game, in [ndjson](#section/Introduction/Streaming-with-ND-JSON). A description...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/stream/game/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Import one game',
						value: 'gameImport',
						action:
							'Import a game from PGN. See <https://lichess.org/paste>. Rate limiting: 200 games per hour for OAuth requests, 100 games...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/import',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Export your imported games',
						value: 'apiImportedGamesUser',
						action: 'Download all games imported by you. Games are exported in PGN format',
						routing: {
							request: {
								method: 'GET',
								url: '/api/games/export/imports',
							},
						},
					},
					{
						name: 'Export your bookmarked games',
						value: 'apiExportBookmarks',
						action:
							'Download all games bookmarked by you, in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/games/export/bookmarks',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['game'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'tvChannels',
				options: [
					{
						name: 'Get current TV games',
						value: 'tvChannels',
						action:
							'Get basic info about the best games being played for each speed and variant, but also computer games and bot games. See ...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/tv/channels',
							},
						},
					},
					{
						name: 'Stream current TV game',
						value: 'tvFeed',
						action:
							'Stream positions and moves of the current [TV game](https://lichess.org/tv) in [ndjson](#section/Introduction/Streaming-...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/tv/feed',
							},
						},
					},
					{
						name: 'Stream current TV game of a TV channel',
						value: 'tvChannelFeed',
						action:
							"Stream positions and moves of a current [TV channel's game](https://lichess.org/tv/rapid) in [ndjson](#section/Introduct...",
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tv/{{ $parameter["channel"] }}/feed',
							},
						},
					},
					{
						name: 'Get best ongoing games of a TV channel',
						value: 'tvChannelGames',
						action:
							'Get a list of ongoing games for a given TV channel. Similar to [lichess.org/games](https://lichess.org/games). Available...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tv/{{ $parameter["channel"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['tv'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiTournament',
				options: [
					{
						name: 'Get current tournaments',
						value: 'apiTournament',
						action:
							'Get recently active and finished tournaments. This API is used to display the [Lichess tournament schedule](https://lich...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/tournament',
							},
						},
					},
					{
						name: 'Create a new Arena tournament',
						value: 'apiTournamentPost',
						action:
							'Create a public or private Arena tournament. This endpoint mirrors the form on <https://lichess.org/tournament/new>. You...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/tournament',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Get info about an Arena tournament',
						value: 'tournament',
						action:
							"Get detailed info about recently finished, current, or upcoming tournament's duels, player standings, and other info.",
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tournament/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update an Arena tournament',
						value: 'apiTournamentUpdate',
						action:
							'Update an Arena tournament. Be mindful not to make important changes to ongoing tournaments. Can be used to update a tea...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/tournament/{{ $parameter["id"] }}',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Join an Arena tournament',
						value: 'apiTournamentJoin',
						action:
							'Join an Arena tournament, possibly with a password and/or a team. Also unpauses if you had previously [paused](#operatio...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/tournament/{{ $parameter["id"] }}/join',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Pause or leave an Arena tournament',
						value: 'apiTournamentWithdraw',
						action:
							"Leave a future Arena tournament, or take a break on an ongoing Arena tournament. It's possible to join again later. Poin...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/tournament/{{ $parameter["id"] }}/withdraw',
							},
						},
					},
					{
						name: 'Terminate an Arena tournament',
						value: 'apiTournamentTerminate',
						action: 'Terminate an Arena tournament',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/tournament/{{ $parameter["id"] }}/terminate',
							},
						},
					},
					{
						name: 'Update a team battle',
						value: 'apiTournamentTeamBattlePost',
						action:
							'Set the teams and number of leaders of a team battle. To update the other attributes of a team battle, use the [tourname...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/tournament/team-battle/{{ $parameter["id"] }}',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Export games of an Arena tournament',
						value: 'gamesByTournament',
						action:
							'Download games of a tournament in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are sorted...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tournament/{{ $parameter["id"] }}/games',
							},
						},
					},
					{
						name: 'Get results of an Arena tournament',
						value: 'resultsByTournament',
						action:
							'Players of an Arena tournament, with their score and performance, sorted by rank (best first). **Players are streamed as...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tournament/{{ $parameter["id"] }}/results',
							},
						},
					},
					{
						name: 'Get team standing of a team battle',
						value: 'teamsByTournament',
						action:
							'Teams of a team battle tournament, with top players, sorted by rank (best first).',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/tournament/{{ $parameter["id"] }}/teams',
							},
						},
					},
					{
						name: 'Get tournaments created by a user',
						value: 'apiUserNameTournamentCreated',
						action:
							'Get all tournaments created by a given user. Tournaments are sorted by reverse chronological order of start date (last s...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/tournament/created',
							},
						},
					},
					{
						name: 'Get tournaments played by a user',
						value: 'apiUserNameTournamentPlayed',
						action:
							'Get all tournaments played by a given user. Tournaments are sorted by reverse chronological order of start date (last pl...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/user/{{ $parameter["username"] }}/tournament/played',
							},
						},
					},
					{
						name: 'Get team Arena tournaments',
						value: 'apiTeamArena',
						action:
							'Get all Arena tournaments relevant to a team. Tournaments are sorted by reverse chronological order of start date (last ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/arena',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiSwissNew',
				options: [
					{
						name: 'Create a new Swiss tournament',
						value: 'apiSwissNew',
						action:
							'Create a Swiss tournament for your team. This endpoint mirrors the Swiss tournament form from your team pagee. You can c...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/new/{{ $parameter["teamId"] }}',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Get info about a Swiss tournament',
						value: 'swiss',
						action: 'Get detailed info about a Swiss tournament.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/swiss/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update a Swiss tournament',
						value: 'apiSwissUpdate',
						action:
							'Update a Swiss tournament. Be mindful not to make important changes to ongoing tournaments. Additional restrictions:   -...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/{{ $parameter["id"] }}/edit',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Manually schedule the next round',
						value: 'apiSwissScheduleNextRound',
						action:
							'Manually schedule the next round date and time of a Swiss tournament. This sets the `roundInterval` field to `99999999`,...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/{{ $parameter["id"] }}/schedule-next-round',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Join a Swiss tournament',
						value: 'apiSwissJoin',
						action: 'Join a Swiss tournament, possibly with a password.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/{{ $parameter["id"] }}/join',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Pause or leave a swiss tournament',
						value: 'apiSwissWithdraw',
						action:
							"Leave a future Swiss tournament, or take a break on an ongoing Swiss tournament. It's possible to join again later. Poin...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/{{ $parameter["id"] }}/withdraw',
							},
						},
					},
					{
						name: 'Terminate a Swiss tournament',
						value: 'apiSwissTerminate',
						action: 'Terminate a Swiss tournament',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/swiss/{{ $parameter["id"] }}/terminate',
							},
						},
					},
					{
						name: 'Export TRF of a Swiss tournament',
						value: 'swissTrf',
						action:
							'Download a tournament in the Tournament Report File format, the FIDE standard. Documentation: <https://www.fide.com/FIDE...',
						routing: {
							request: {
								method: 'GET',
								url: '=/swiss/{{ $parameter["id"] }}.trf',
							},
						},
					},
					{
						name: 'Export games of a Swiss tournament',
						value: 'gamesBySwiss',
						action:
							'Download games of a swiss tournament in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format. Games are ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/swiss/{{ $parameter["id"] }}/games',
							},
						},
					},
					{
						name: 'Get results of a swiss tournament',
						value: 'resultsBySwiss',
						action:
							'Players of a swiss tournament, with their score and performance, sorted by rank (best first). Players are streamed as [n...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/swiss/{{ $parameter["id"] }}/results',
							},
						},
					},
					{
						name: 'Get team swiss tournaments',
						value: 'apiTeamSwiss',
						action:
							'Get all swiss tournaments of a team. Tournaments are sorted by reverse chronological order of start date (last starting ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/swiss',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['swissTournament'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiTeamSwiss',
				options: [
					{
						name: 'Get team swiss tournaments',
						value: 'apiTeamSwiss',
						action:
							'Get all swiss tournaments of a team. Tournaments are sorted by reverse chronological order of start date (last starting ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/swiss',
							},
						},
					},
					{
						name: 'Get a single team',
						value: 'teamShow',
						action: 'Public info about a team. Includes the list of publicly visible leaders',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}',
							},
						},
					},
					{
						name: 'Get popular teams',
						value: 'teamAll',
						action: 'Paginator of the most popular teams.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/team/all',
							},
						},
					},
					{
						name: 'Teams of a player',
						value: 'teamOfUsername',
						action: 'All the teams a player is a member of.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/of/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Search teams',
						value: 'teamSearch',
						action: 'Paginator of team search results for a keyword.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/team/search',
							},
						},
					},
					{
						name: 'Get members of a team',
						value: 'teamIdUsers',
						action:
							'Members are sorted by reverse chronological order of joining the team (most recent first). OAuth is only required if the...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/users',
							},
						},
					},
					{
						name: 'Get team Arena tournaments',
						value: 'apiTeamArena',
						action:
							'Get all Arena tournaments relevant to a team. Tournaments are sorted by reverse chronological order of start date (last ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/arena',
							},
						},
					},
					{
						name: 'Join a team',
						value: 'teamIdJoin',
						action:
							'Join a team. If the team requires a password but the `password` field is incorrect, then the call fails with `403 Forbid...',
						routing: {
							request: {
								method: 'POST',
								url: '=/team/{{ $parameter["teamId"] }}/join',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Leave a team',
						value: 'teamIdQuit',
						action: 'Leave a team. - <https://lichess.org/team>',
						routing: {
							request: {
								method: 'POST',
								url: '=/team/{{ $parameter["teamId"] }}/quit',
							},
						},
					},
					{
						name: 'Get join requests',
						value: 'teamRequests',
						action: 'Get pending join requests of your team',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/team/{{ $parameter["teamId"] }}/requests',
							},
						},
					},
					{
						name: 'Accept join request',
						value: 'teamRequestAccept',
						action: "Accept someone's request to join your team",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/team/{{ $parameter["teamId"] }}/request/{userId}/accept',
							},
						},
					},
					{
						name: 'Decline join request',
						value: 'teamRequestDecline',
						action: "Decline someone's request to join your team",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/team/{{ $parameter["teamId"] }}/request/{userId}/decline',
							},
						},
					},
					{
						name: 'Kick a user from your team',
						value: 'teamIdKickUserId',
						action: 'Kick a member out of one of your teams. - <https://lichess.org/team>',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/team/{{ $parameter["teamId"] }}/kick/{userId}',
							},
						},
					},
					{
						name: 'Message all members',
						value: 'teamIdPmAll',
						action:
							'Send a private message to all members of a team. You must be a team leader with the "Messages" permission.',
						routing: {
							request: {
								method: 'POST',
								url: '=/team/{{ $parameter["teamId"] }}/pm-all',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
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
				default: 'studyChapterPgn',
				options: [
					{
						name: 'Export one study chapter',
						value: 'studyChapterPgn',
						action: 'Download one study chapter in PGN format.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/study/{{ $parameter["studyId"] }}/{chapterId}.pgn',
							},
						},
					},
					{
						name: 'Export all chapters',
						value: 'studyAllChaptersPgn',
						action: 'Download all chapters of a study in PGN format.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/study/{{ $parameter["studyId"] }}.pgn',
							},
						},
					},
					{
						name: 'Study metadata',
						value: 'studyAllChaptersHead',
						action: 'Only get the study headers, including `Last-Modified`.',
						routing: {
							request: {
								method: 'HEAD',
								url: '=/api/study/{{ $parameter["studyId"] }}.pgn',
							},
						},
					},
					{
						name: 'Import PGN into a study',
						value: 'apiStudyImportPGN',
						action:
							'Imports arbitrary PGN into an existing [study](https://lichess.org/study). Creates a new chapter in the study. If the PG...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/study/{{ $parameter["studyId"] }}/import-pgn',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Export all studies of a user',
						value: 'studyExportAllPgn',
						action:
							'Download all chapters of all studies of a user in PGN format. If authenticated, then all public, unlisted, and private s...',
						routing: {
							request: {
								method: 'GET',
								url: '=/study/by/{{ $parameter["username"] }}/export.pgn',
							},
						},
					},
					{
						name: 'List studies of a user',
						value: 'studyListMetadata',
						action:
							'Get metadata (name and dates) of all studies of a user. If authenticated, then all public, unlisted, and private studies...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/study/by/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Delete a study chapter',
						value: 'apiStudyStudyIdChapterIdDelete',
						action:
							'Delete a chapter of a study you own. This is definitive. A study must have at least one chapter; so if you delete the la...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/api/study/{{ $parameter["studyId"] }}/{chapterId}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['study'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'broadcastsOfficial',
				options: [
					{
						name: 'Get official broadcasts',
						value: 'broadcastsOfficial',
						action:
							'Get all incoming, ongoing, and finished official broadcasts. The broadcasts are sorted by start date, most recent first....',
						routing: {
							request: {
								method: 'GET',
								url: '/api/broadcast',
							},
						},
					},
					{
						name: 'Get paginated top broadcast previews',
						value: 'broadcastsTop',
						action:
							'The same data, in the same order, as can be seen on [https://lichess.org/broadcast](/broadcast).',
						routing: {
							request: {
								method: 'GET',
								url: '/api/broadcast/top',
							},
						},
					},
					{
						name: 'Get broadcasts created by a user',
						value: 'broadcastsByUser',
						action:
							'Get all incoming, ongoing, and finished official broadcasts. The broadcasts are sorted by created date, most recent firs...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/broadcast/by/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Create a broadcast tournament',
						value: 'broadcastTourCreate',
						action:
							'Create a new broadcast tournament to relay external games. This endpoint accepts the same form data as the [web form](ht...',
						routing: {
							request: {
								method: 'POST',
								url: '/broadcast/new',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Get a broadcast tournament',
						value: 'broadcastTourGet',
						action: 'Get information about a broadcast tournament.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/broadcast/{{ $parameter["broadcastTournamentId"] }}',
							},
						},
					},
					{
						name: 'Get players of a broadcast',
						value: 'broadcastPlayersGet',
						action: 'Get the list of players of a broadcast tournament, if available.',
						routing: {
							request: {
								method: 'GET',
								url: '=/broadcast/{{ $parameter["broadcastTournamentId"] }}/players',
							},
						},
					},
					{
						name: 'Update your broadcast tournament',
						value: 'broadcastTourUpdate',
						action:
							'Update information about a broadcast tournament that you created. This endpoint accepts the same form data as the web fo...',
						routing: {
							request: {
								method: 'POST',
								url: '=/broadcast/{{ $parameter["broadcastTournamentId"] }}/edit',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Create a broadcast round',
						value: 'broadcastRoundCreate',
						action:
							'Create a new broadcast round to relay external games. This endpoint accepts the same form data as the web form.  Choose ...',
						routing: {
							request: {
								method: 'POST',
								url: '=/broadcast/{{ $parameter["broadcastTournamentId"] }}/new',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Get a broadcast round',
						value: 'broadcastRoundGet',
						action: 'Get information about a broadcast round.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/broadcast/{{ $parameter["broadcastTournamentSlug"] }}/{broadcastRoundSlug}/{broadcastRoundId}',
							},
						},
					},
					{
						name: 'Update a broadcast round',
						value: 'broadcastRoundUpdate',
						action:
							'Update information about a broadcast round. This endpoint accepts the same form data as the web form. All fields must be...',
						routing: {
							request: {
								method: 'POST',
								url: '=/broadcast/round/{{ $parameter["broadcastRoundId"] }}/edit',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Reset a broadcast round',
						value: 'broadcastRoundReset',
						action: 'Remove any games from the broadcast round and reset it to its initial state.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/broadcast/round/{{ $parameter["broadcastRoundId"] }}/reset',
							},
						},
					},
					{
						name: 'Push PGN to a broadcast round',
						value: 'broadcastPush',
						action: 'Update a broadcast with new PGN. Only for broadcasts without a source URL.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/broadcast/round/{{ $parameter["broadcastRoundId"] }}/push',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
					{
						name: 'Stream an ongoing broadcast tournament as PGN',
						value: 'broadcastStreamRoundPgn',
						action:
							'This streaming endpoint first sends all games of a broadcast tournament in PGN format. Then, it waits for new moves to b...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/stream/broadcast/round/{{ $parameter["broadcastRoundId"] }}.pgn',
							},
						},
					},
					{
						name: 'Export one round as PGN',
						value: 'broadcastRoundPgn',
						action:
							'Download all games of a single round of a broadcast tournament in PGN format. You *could* poll this endpoint to get upda...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/broadcast/round/{{ $parameter["broadcastRoundId"] }}.pgn',
							},
						},
					},
					{
						name: 'Export all rounds as PGN',
						value: 'broadcastAllRoundsPgn',
						action:
							'Download all games of all rounds of a broadcast in PGN format. If a `study:read` [OAuth token](#tag/OAuth) is provided, ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/broadcast/{{ $parameter["broadcastTournamentId"] }}.pgn',
							},
						},
					},
					{
						name: 'Get your broadcast rounds',
						value: 'broadcastMyRoundsGet',
						action:
							'Stream all broadcast rounds you are a member of. Also includes broadcasts rounds you did not create, but were invited to...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/broadcast/my-rounds',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['broadcast'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'fidePlayerGet',
				options: [
					{
						name: 'Get a FIDE player',
						value: 'fidePlayerGet',
						action: 'Get information about a FIDE player.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/fide/player/{{ $parameter["playerId"] }}',
							},
						},
					},
					{
						name: 'Search FIDE players',
						value: 'fidePlayerSearch',
						action: 'List of FIDE players search results for a query.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/fide/player',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['fide'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiSimul',
				options: [
					{
						name: 'Get current simuls',
						value: 'apiSimul',
						action:
							'Get recently created, started, finished, simuls. Created and finished simul lists are not exhaustives, only those with s...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/simul',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['simul'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiUserFollowing',
				options: [
					{
						name: 'Get users followed by the logged in user',
						value: 'apiUserFollowing',
						action: 'Users are streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON).',
						routing: {
							request: {
								method: 'GET',
								url: '/api/rel/following',
							},
						},
					},
					{
						name: 'Follow a player',
						value: 'followUser',
						action: 'Follow a player, adding them to your list of Lichess friends.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/rel/follow/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Unfollow a player',
						value: 'unfollowUser',
						action: 'Unfollow a player, removing them from your list of Lichess friends.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/rel/unfollow/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Block a player',
						value: 'blockUser',
						action: 'Block a player, adding them to your list of blocked Lichess users.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/rel/block/{{ $parameter["username"] }}',
							},
						},
					},
					{
						name: 'Unblock a player',
						value: 'unblockUser',
						action: 'Unblock a player, removing them from your list of blocked Lichess users.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/rel/unblock/{{ $parameter["username"] }}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['relation'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiStreamEvent',
				options: [
					{
						name: 'Stream incoming events',
						value: 'apiStreamEvent',
						action:
							'Stream the events reaching a lichess user in real time as [ndjson](#section/Introduction/Streaming-with-ND-JSON).  An em...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/stream/event',
							},
						},
					},
					{
						name: 'Create a seek',
						value: 'apiBoardSeek',
						action:
							'Create a public seek, to start a game with a random player.  ### Real-time seek  Specify the `time` and `increment` cloc...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/board/seek',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Stream Board game state',
						value: 'boardGameStream',
						action:
							'Stream the state of a game being played with the Board API, as [ndjson](#section/Introduction/Streaming-with-ND-JSON).  ...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/board/game/stream/{{ $parameter["gameId"] }}',
							},
						},
					},
					{
						name: 'Make a Board move',
						value: 'boardGameMove',
						action:
							'Make a move in a game being played with the Board API. The move can also contain a draw offer/agreement.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/move/{move}',
							},
						},
					},
					{
						name: 'Write in the chat',
						value: 'boardGameChatPost',
						action:
							'Post a message to the player or spectator chat, in a game being played with the Board API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/chat',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Fetch the game chat',
						value: 'boardGameChatGet',
						action: 'Get the messages posted in the game chat',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/chat',
							},
						},
					},
					{
						name: 'Abort a game',
						value: 'boardGameAbort',
						action: 'Abort a game being played with the Board API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/abort',
							},
						},
					},
					{
						name: 'Resign a game',
						value: 'boardGameResign',
						action: 'Resign a game being played with the Board API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/resign',
							},
						},
					},
					{
						name: 'Handle draw offers',
						value: 'boardGameDraw',
						action:
							"Create/accept/decline draw offers. - `yes`: Offer a draw, or accept the opponent's draw offer. - `no`: Decline a draw of...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/draw/{accept}',
							},
						},
					},
					{
						name: 'Handle takeback offers',
						value: 'boardGameTakeback',
						action:
							"Create/accept/decline takebacks. - `yes`: Propose a takeback, or accept the opponent's takeback offer. - `no`: Decline a...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/takeback/{accept}',
							},
						},
					},
					{
						name: 'Claim victory of a game',
						value: 'boardGameClaimVictory',
						action: 'Claim victory when the opponent has left the game for a while.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/claim-victory',
							},
						},
					},
					{
						name: 'Berserk a tournament game',
						value: 'boardGameBerserk',
						action:
							'Go berserk on an arena tournament game. Halves the clock time, grants an extra point upon winning. Only available in are...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/board/game/{{ $parameter["gameId"] }}/berserk',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['board'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiStreamEvent',
				options: [
					{
						name: 'Stream incoming events',
						value: 'apiStreamEvent',
						action:
							'Stream the events reaching a lichess user in real time as [ndjson](#section/Introduction/Streaming-with-ND-JSON).  An em...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/stream/event',
							},
						},
					},
					{
						name: 'Get online bots',
						value: 'apiBotOnline',
						action:
							'Stream the [online bot users](https://lichess.org/player/bots), as [ndjson](#section/Introduction/Streaming-with-ND-JSON...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/bot/online',
							},
						},
					},
					{
						name: 'Upgrade to Bot account',
						value: 'botAccountUpgrade',
						action:
							'Upgrade a lichess player account into a Bot account. Only Bot accounts can use the Bot API. The account **cannot have pl...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/bot/account/upgrade',
							},
						},
					},
					{
						name: 'Stream Bot game state',
						value: 'botGameStream',
						action:
							'Stream the state of a game being played with the Bot API, as [ndjson](#section/Introduction/Streaming-with-ND-JSON). Use...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/bot/game/stream/{{ $parameter["gameId"] }}',
							},
						},
					},
					{
						name: 'Make a Bot move',
						value: 'botGameMove',
						action:
							'Make a move in a game being played with the Bot API. The move can also contain a draw offer/agreement.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/move/{move}',
							},
						},
					},
					{
						name: 'Write in the chat',
						value: 'botGameChat',
						action:
							'Post a message to the player or spectator chat, in a game being played with the Bot API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/chat',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Fetch the game chat',
						value: 'botGameChatGet',
						action: 'Get the messages posted in the game chat',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/chat',
							},
						},
					},
					{
						name: 'Abort a game',
						value: 'botGameAbort',
						action: 'Abort a game being played with the Bot API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/abort',
							},
						},
					},
					{
						name: 'Resign a game',
						value: 'botGameResign',
						action: 'Resign a game being played with the Bot API.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/resign',
							},
						},
					},
					{
						name: 'Handle draw offers',
						value: 'botGameDraw',
						action:
							"Create/accept/decline draw offers with the Bot API. - `yes`: Offer a draw, or accept the opponent's draw offer. - `no`: ...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/draw/{accept}',
							},
						},
					},
					{
						name: 'Handle takeback offers',
						value: 'botGameTakeback',
						action:
							"Create/accept/decline takebacks with the Bot API. - `yes`: Propose a takeback, or accept the opponent's takeback offer. ...",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bot/game/{{ $parameter["gameId"] }}/takeback/{accept}',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['bot'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'challengeList',
				options: [
					{
						name: 'List your challenges',
						value: 'challengeList',
						action: 'Get a list of challenges created by or targeted at you.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/challenge',
							},
						},
					},
					{
						name: 'Create a challenge',
						value: 'challengeCreate',
						action:
							'Challenge someone to play. The targeted player can choose to accept or decline. If the challenge is accepted, you will b...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/challenge/{{ $parameter["username"] }}',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Show one challenge',
						value: 'challengeShow',
						action:
							'Get details about a challenge, even if it has been recently accepted, canceled or declined.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/challenge/{{ $parameter["challengeId"] }}/show',
							},
						},
					},
					{
						name: 'Accept a challenge',
						value: 'challengeAccept',
						action:
							'Accept an incoming challenge. You should receive a `gameStart` event on the [incoming events stream](#operation/apiStrea...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/challenge/{{ $parameter["challengeId"] }}/accept',
							},
						},
					},
					{
						name: 'Decline a challenge',
						value: 'challengeDecline',
						action: 'Decline an incoming challenge.',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/challenge/{{ $parameter["challengeId"] }}/decline',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Cancel a challenge',
						value: 'challengeCancel',
						action:
							'Cancel a challenge you sent, or aborts the game if the challenge was accepted, but the game was not yet played. Note tha...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/challenge/{{ $parameter["challengeId"] }}/cancel',
							},
						},
					},
					{
						name: 'Challenge the AI',
						value: 'challengeAi',
						action:
							'Start a game with Lichess AI. You will be notified on the [event stream](#operation/apiStreamEvent) that a new game has ...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/challenge/ai',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Open-ended challenge',
						value: 'challengeOpen',
						action:
							'Create a challenge that any 2 players can join. Share the URL of the challenge. the first 2 players to click it will be ...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/challenge/open',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Start clocks of a game',
						value: 'challengeStartClocks',
						action:
							'Start the clocks of a game immediately, even if a player has not yet made a move. Requires the OAuth tokens of both play...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/challenge/{{ $parameter["gameId"] }}/start-clocks',
							},
						},
					},
					{
						name: 'Add time to the opponent clock',
						value: 'roundAddTime',
						action:
							"Add seconds to the opponent's clock. Can be used to create games with time odds.",
						routing: {
							request: {
								method: 'POST',
								url: '=/api/round/{{ $parameter["gameId"] }}/add-time/{seconds}',
							},
						},
					},
					{
						name: 'Admin challenge tokens',
						value: 'adminChallengeTokens',
						action:
							'**This endpoint can only be used by Lichess administrators. It will not work if you do not have the appropriate permissi...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/token/admin-challenge',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['challenge'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'bulkPairingList',
				options: [
					{
						name: 'View your bulk pairings',
						value: 'bulkPairingList',
						action: 'Get a list of bulk pairings you created.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/bulk-pairing',
							},
						},
					},
					{
						name: 'Create a bulk pairing',
						value: 'bulkPairingCreate',
						action:
							'Schedule many games at once, up to 24h in advance. OAuth tokens are required for all paired players, with the `challenge...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/bulk-pairing',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Manually start clocks',
						value: 'bulkPairingStartClocks',
						action:
							'Immediately start all clocks of the games of a bulk pairing. This overrides the `startClocksAt` value of an existing bul...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/bulk-pairing/{{ $parameter["id"] }}/start-clocks',
							},
						},
					},
					{
						name: 'Show a bulk pairing',
						value: 'bulkPairingGet',
						action: 'Get a single bulk pairing by its ID.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/bulk-pairing/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Cancel a bulk pairing',
						value: 'bulkPairingDelete',
						action:
							'Cancel and delete a bulk pairing that is scheduled in the future. If the games have already been created, then this does...',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/api/bulk-pairing/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Export games of a bulk pairing',
						value: 'bulkPairingIdGamesGet',
						action:
							'Download games of a bulk in PGN or [ndjson](#section/Introduction/Streaming-with-ND-JSON) format, depending on the reque...',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/bulk-pairing/{{ $parameter["id"] }}/games',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['bulkPairing'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'inboxUsername',
				options: [
					{
						name: 'Send a private message',
						value: 'inboxUsername',
						action: 'Send a private message to another player.',
						routing: {
							request: {
								method: 'POST',
								url: '=/inbox/{{ $parameter["username"] }}',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['messaging'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiCloudEval',
				options: [
					{
						name: 'Get cloud evaluation of a position',
						value: 'apiCloudEval',
						action:
							'Get the cached evaluation of a position, if available. Opening positions have more chances of being available. There are...',
						routing: {
							request: {
								method: 'GET',
								url: '/api/cloud-eval',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['analysis'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'apiExternalEngineList',
				options: [
					{
						name: 'List external engines',
						value: 'apiExternalEngineList',
						action:
							'Lists all external engines that have been registered for the user, and the credentials required to use them.',
						routing: {
							request: {
								method: 'GET',
								url: '/api/external-engine',
							},
						},
					},
					{
						name: 'Create external engine',
						value: 'apiExternalEngineCreate',
						action:
							'Registers a new external engine for the user. It can then be selected and used on the analysis board. After registering,...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/external-engine',
							},
						},
					},
					{
						name: 'Get external engine',
						value: 'apiExternalEngineGet',
						action: 'Get properties and credentials of an external engine.',
						routing: {
							request: {
								method: 'GET',
								url: '=/api/external-engine/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Update external engine',
						value: 'apiExternalEnginePut',
						action: 'Updates the properties of an external engine.',
						routing: {
							request: {
								method: 'PUT',
								url: '=/api/external-engine/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Delete external engine',
						value: 'apiExternalEngineDelete',
						action: 'Unregisters an external engine.',
						routing: {
							request: {
								method: 'DELETE',
								url: '=/api/external-engine/{{ $parameter["id"] }}',
							},
						},
					},
					{
						name: 'Analyse with external engine',
						value: 'apiExternalEngineAnalyse',
						action:
							'**Endpoint: `https://engine.lichess.ovh/api/external-engine/{id}/analyse`** Request analysis from an external engine. Re...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/external-engine/{{ $parameter["id"] }}/analyse',
								baseURL: 'https://engine.lichess.ovh',
							},
						},
					},
					{
						name: 'Acquire analysis request',
						value: 'apiExternalEngineAcquire',
						action:
							'**Endpoint: `https://engine.lichess.ovh/api/external-engine/work`** Wait for an analysis requests to any of the external...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/external-engine/work',
								baseURL: 'https://engine.lichess.ovh',
							},
						},
					},
					{
						name: 'Answer analysis request',
						value: 'apiExternalEngineSubmit',
						action:
							'**Endpoint: `https://engine.lichess.ovh/api/external-engine/work/{id}`** Submit a stream of analysis as [UCI output](htt...',
						routing: {
							request: {
								method: 'POST',
								url: '=/api/external-engine/work/{{ $parameter["id"] }}',
								baseURL: 'https://engine.lichess.ovh',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['externalEngine'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'oauth',
				options: [
					{
						name: 'Request authorization code',
						value: 'oauth',
						action:
							'OAuth2 authorization endpoint. Start the OAuth2 Authorization Code Flow with PKCE by securely generating two random stri...',
						routing: {
							request: {
								method: 'GET',
								url: '/oauth',
							},
						},
					},
					{
						name: 'Obtain access token',
						value: 'apiToken',
						action: 'OAuth2 token endpoint. Exchanges an authorization code for an access token.',
						routing: {
							request: {
								method: 'POST',
								url: '/api/token',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
							},
						},
					},
					{
						name: 'Revoke access token',
						value: 'apiTokenDelete',
						action: 'Revokes the access token sent as Bearer for this request',
						routing: {
							request: {
								method: 'DELETE',
								url: '/api/token',
							},
						},
					},
					{
						name: 'Test multiple OAuth tokens',
						value: 'tokenTest',
						action:
							'For up to 1000 OAuth tokens, returns their associated user ID and scopes, or `null` if the token is invalid. The method ...',
						routing: {
							request: {
								method: 'POST',
								url: '/api/token/test',
								headers: {
									'Content-Type': 'text/plain',
								},
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['oAuth'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'openingExplorerMaster',
				options: [
					{
						name: 'Masters database',
						value: 'openingExplorerMaster',
						action:
							'**Endpoint: <https://explorer.lichess.ovh/masters>**  Example: `curl https://explorer.lichess.ovh/masters?play=d2d4,d7d5...',
						routing: {
							request: {
								method: 'GET',
								url: '/masters',
								baseURL: 'https://explorer.lichess.ovh',
							},
						},
					},
					{
						name: 'Lichess games',
						value: 'openingExplorerLichess',
						action:
							'**Endpoint: <https://explorer.lichess.ovh/lichess>**  Games sampled from all Lichess players.  Example: `curl https://ex...',
						routing: {
							request: {
								method: 'GET',
								url: '/lichess',
								baseURL: 'https://explorer.lichess.ovh',
							},
						},
					},
					{
						name: 'Player games',
						value: 'openingExplorerPlayer',
						action:
							'**Endpoint: <https://explorer.lichess.ovh/player>**  Games of a Lichess player.  Responds with a stream of [newline deli...',
						routing: {
							request: {
								method: 'GET',
								url: '/player',
								baseURL: 'https://explorer.lichess.ovh',
							},
						},
					},
					{
						name: 'OTB master game',
						value: 'openingExplorerMasterGame',
						action:
							'**Endpoint: `https://explorer.lichess.ovh/masters/pgn/{gameId}`**  Example: `curl https://explorer.lichess.ovh/masters/p...',
						routing: {
							request: {
								method: 'GET',
								url: '=/master/pgn/{{ $parameter["gameId"] }}',
								baseURL: 'https://explorer.lichess.ovh',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['openingExplorer'],
					},
				},
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'tablebaseStandard',
				options: [
					{
						name: 'Tablebase lookup',
						value: 'tablebaseStandard',
						action:
							'**Endpoint: <https://tablebase.lichess.ovh>** Example: `curl http://tablebase.lichess.ovh/standard?fen=4k3/6KP/8/8/8/8/7...',
						routing: {
							request: {
								method: 'GET',
								url: '/standard',
								baseURL: 'https://tablebase.lichess.ovh',
							},
						},
					},
					{
						name: 'Tablebase lookup for Atomic chess',
						value: 'tablebaseAtomic',
						action: '**Endpoint: <https://tablebase.lichess.ovh>**',
						routing: {
							request: {
								method: 'GET',
								url: '/atomic',
								baseURL: 'https://tablebase.lichess.ovh',
							},
						},
					},
					{
						name: 'Tablebase lookup for Antichess',
						value: 'antichessAtomic',
						action: '**Endpoint: <https://tablebase.lichess.ovh>**',
						routing: {
							request: {
								method: 'GET',
								url: '/antichess',
								baseURL: 'https://tablebase.lichess.ovh',
							},
						},
					},
				],
				displayOptions: {
					show: {
						resource: ['tablebase'],
					},
				},
			},
			{
				displayName: 'IDs',
				name: 'ids',
				type: 'string',
				default: '',
				required: true,
				description: 'User IDs separated by commas. Up to 100 IDs',
				placeholder: 'e.g. thibault,maia1,maia5',
				routing: {
					send: {
						type: 'query',
						property: 'ids',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUsersStatus'],
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
						operation: ['apiUsersStatus'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'With Signal',
						name: 'withSignal',
						type: 'boolean',
						default: false,
						description:
							'Also return the network signal of the player, when available. It ranges from 1 (poor connection, lag > 500ms) to 4 (grea...',
						routing: {
							send: {
								type: 'query',
								property: 'withSignal',
							},
						},
					},
					{
						displayName: 'With Game IDs',
						name: 'withGameIds',
						type: 'boolean',
						default: false,
						description:
							'Also return the ID of the game being played, if any, for each player, in a `playingId` field. Defaults to `false` to pre...',
						routing: {
							send: {
								type: 'query',
								property: 'withGameIds',
							},
						},
					},
					{
						displayName: 'With Game Metas',
						name: 'withGameMetas',
						type: 'boolean',
						default: false,
						description:
							'Also return the id, time control and variant of the game being played, if any, for each player, in a `playing` field. De...',
						routing: {
							send: {
								type: 'query',
								property: 'withGameMetas',
							},
						},
					},
				],
			},
			{
				displayName: 'Nb',
				name: 'nb',
				type: 'number',
				default: 0,
				required: true,
				description: 'How many users to fetch',
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['playerTopNbPerfType'],
					},
				},
			},
			{
				displayName: 'Perf Type',
				name: 'perfType',
				type: 'options',
				default: 'ultraBullet',
				required: true,
				description: 'The speed or variant',
				options: [
					{
						name: 'Ultra Bullet',
						value: 'ultraBullet',
					},
					{
						name: 'Bullet',
						value: 'bullet',
					},
					{
						name: 'Blitz',
						value: 'blitz',
					},
					{
						name: 'Rapid',
						value: 'rapid',
					},
					{
						name: 'Classical',
						value: 'classical',
					},
					{
						name: 'Chess960',
						value: 'chess960',
					},
					{
						name: 'Crazyhouse',
						value: 'crazyhouse',
					},
					{
						name: 'Antichess',
						value: 'antichess',
					},
					{
						name: 'Atomic',
						value: 'atomic',
					},
					{
						name: 'Horde',
						value: 'horde',
					},
					{
						name: 'King Of The Hill',
						value: 'kingOfTheHill',
					},
					{
						name: 'Racing Kings',
						value: 'racingKings',
					},
					{
						name: 'Three Check',
						value: 'threeCheck',
					},
				],
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['playerTopNbPerfType'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUser'],
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
						operation: ['apiUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Trophies',
						name: 'trophies',
						type: 'boolean',
						default: false,
						description: 'Include user trophies',
						routing: {
							send: {
								type: 'query',
								property: 'trophies',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUserRatingHistory'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUserPerf'],
					},
				},
			},
			{
				displayName: 'Perf',
				name: 'perf',
				type: 'options',
				default: 'ultraBullet',
				required: true,
				options: [
					{
						name: 'Ultra Bullet',
						value: 'ultraBullet',
					},
					{
						name: 'Bullet',
						value: 'bullet',
					},
					{
						name: 'Blitz',
						value: 'blitz',
					},
					{
						name: 'Rapid',
						value: 'rapid',
					},
					{
						name: 'Classical',
						value: 'classical',
					},
					{
						name: 'Correspondence',
						value: 'correspondence',
					},
					{
						name: 'Chess960',
						value: 'chess960',
					},
					{
						name: 'Crazyhouse',
						value: 'crazyhouse',
					},
					{
						name: 'Antichess',
						value: 'antichess',
					},
					{
						name: 'Atomic',
						value: 'atomic',
					},
					{
						name: 'Horde',
						value: 'horde',
					},
					{
						name: 'King Of The Hill',
						value: 'kingOfTheHill',
					},
					{
						name: 'Racing Kings',
						value: 'racingKings',
					},
					{
						name: 'Three Check',
						value: 'threeCheck',
					},
				],
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUserPerf'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUserActivity'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The puzzle ID',
				displayOptions: {
					show: {
						resource: ['puzzle'],
						operation: ['apiPuzzleId'],
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
						resource: ['puzzle'],
						operation: ['apiPuzzleNext'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Angle',
						name: 'angle',
						type: 'string',
						default: '',
						description:
							'The theme or opening to filter puzzles with.  Available themes are listed in [the lichess source code](https://github.co...',
						routing: {
							send: {
								type: 'query',
								property: 'angle',
							},
						},
					},
					{
						displayName: 'Difficulty',
						name: 'difficulty',
						type: 'options',
						default: 'easiest',
						description:
							'The desired puzzle difficulty, relative to the authenticated user puzzle rating, or 1500 if anonymous',
						options: [
							{
								name: 'Easiest',
								value: 'easiest',
							},
							{
								name: 'Easier',
								value: 'easier',
							},
							{
								name: 'Normal',
								value: 'normal',
							},
							{
								name: 'Harder',
								value: 'harder',
							},
							{
								name: 'Hardest',
								value: 'hardest',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'difficulty',
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
						resource: ['puzzle'],
						operation: ['apiPuzzleActivity'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 0,
						description: 'How many entries to download. Leave empty to download all activity',
						routing: {
							send: {
								type: 'query',
								property: 'max',
							},
						},
					},
					{
						displayName: 'Before',
						name: 'before',
						type: 'number',
						default: 0,
						description:
							'Download entries before this timestamp. Defaults to now. Use `before` and `max` for pagination',
						routing: {
							send: {
								type: 'query',
								property: 'before',
							},
						},
					},
				],
			},
			{
				displayName: 'Days',
				name: 'days',
				type: 'number',
				default: 0,
				required: true,
				description: 'How many days to look back when aggregating puzzle results. 30 is sensible',
				displayOptions: {
					show: {
						resource: ['puzzle'],
						operation: ['apiPuzzleReplay'],
					},
				},
			},
			{
				displayName: 'Theme',
				name: 'theme',
				type: 'string',
				default: '',
				required: true,
				description: 'The theme or opening to filter puzzles with',
				displayOptions: {
					show: {
						resource: ['puzzle'],
						operation: ['apiPuzzleReplay'],
					},
				},
			},
			{
				displayName: 'Days',
				name: 'days',
				type: 'number',
				default: 0,
				required: true,
				description: 'How many days to look back when aggregating puzzle results. 30 is sensible',
				displayOptions: {
					show: {
						resource: ['puzzle'],
						operation: ['apiPuzzleDashboard'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'Username of the player',
				displayOptions: {
					show: {
						resource: ['puzzle'],
						operation: ['apiStormDashboard'],
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
						resource: ['puzzle'],
						operation: ['apiStormDashboard'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Days',
						name: 'days',
						type: 'number',
						default: 30,
						description: 'How many days of history to return',
						routing: {
							send: {
								type: 'query',
								property: 'days',
							},
						},
					},
				],
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'User IDs separated by commas',
				placeholder: 'e.g. thibault,maia1,maia5',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiUsers'],
					},
				},
			},
			{
				displayName: 'V',
				name: 'v',
				type: 'boolean',
				default: false,
				required: true,
				description: 'Kid mode status',
				routing: {
					send: {
						type: 'query',
						property: 'v',
					},
				},
				displayOptions: {
					show: {
						resource: ['account'],
						operation: ['accountKidPost'],
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
						resource: ['account'],
						operation: ['timeline'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Since',
						name: 'since',
						type: 'number',
						default: 0,
						description: 'Show events since this timestamp',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 15,
						description: 'Max number of events to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				description: 'The game ID',
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamePgn'],
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
						resource: ['game'],
						operation: ['gamePgn'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: true,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: true,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: true,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: true,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
					{
						displayName: 'With Bookmarked',
						name: 'withBookmarked',
						type: 'boolean',
						default: false,
						description:
							'Add a `bookmarked: true` JSON field when the logged in user has bookmarked the game. The response type must be set to `a...',
						routing: {
							send: {
								type: 'query',
								property: 'withBookmarked',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'URL of a text file containing real names and ratings, to replace Lichess usernames and ratings in the PGN. Example: <htt...',
						routing: {
							send: {
								type: 'query',
								property: 'players',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['apiUserCurrentGame'],
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
						resource: ['game'],
						operation: ['apiUserCurrentGame'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: true,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: true,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: true,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'URL of a text file containing real names and ratings, to replace Lichess usernames and ratings in the PGN. Example: <htt...',
						routing: {
							send: {
								type: 'query',
								property: 'players',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'The user name',
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['apiGamesUser'],
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
						resource: ['game'],
						operation: ['apiGamesUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Since',
						name: 'since',
						type: 'number',
						default: 0,
						description:
							'Download games played since this timestamp. Defaults to account creation date',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Until',
						name: 'until',
						type: 'number',
						default: 0,
						description: 'Download games played until this timestamp. Defaults to now',
						routing: {
							send: {
								type: 'query',
								property: 'until',
							},
						},
					},
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 0,
						description: 'How many games to download. Leave empty to download all games',
						routing: {
							send: {
								type: 'query',
								property: 'max',
							},
						},
					},
					{
						displayName: 'Vs',
						name: 'vs',
						type: 'string',
						default: '',
						description: '[Filter] Only games played against this opponent',
						routing: {
							send: {
								type: 'query',
								property: 'vs',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: '[Filter] Only rated (`true`) or casual (`false`) games',
						routing: {
							send: {
								type: 'query',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Perf Type',
						name: 'perfType',
						type: 'options',
						default: 'ultraBullet',
						description:
							'[Filter] Only games in these speeds or variants. Multiple perf types can be specified, separated by a comma. Example: bl...',
						options: [
							{
								name: 'Ultra Bullet',
								value: 'ultraBullet',
							},
							{
								name: 'Bullet',
								value: 'bullet',
							},
							{
								name: 'Blitz',
								value: 'blitz',
							},
							{
								name: 'Rapid',
								value: 'rapid',
							},
							{
								name: 'Classical',
								value: 'classical',
							},
							{
								name: 'Correspondence',
								value: 'correspondence',
							},
							{
								name: 'Chess960',
								value: 'chess960',
							},
							{
								name: 'Crazyhouse',
								value: 'crazyhouse',
							},
							{
								name: 'Antichess',
								value: 'antichess',
							},
							{
								name: 'Atomic',
								value: 'atomic',
							},
							{
								name: 'Horde',
								value: 'horde',
							},
							{
								name: 'King Of The Hill',
								value: 'kingOfTheHill',
							},
							{
								name: 'Racing Kings',
								value: 'racingKings',
							},
							{
								name: 'Three Check',
								value: 'threeCheck',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'perfType',
							},
						},
					},
					{
						displayName: 'Color',
						name: 'color',
						type: 'options',
						default: 'white',
						description: '[Filter] Only games played as this color',
						options: [
							{
								name: 'White',
								value: 'white',
							},
							{
								name: 'Black',
								value: 'black',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'color',
							},
						},
					},
					{
						displayName: 'Analysed',
						name: 'analysed',
						type: 'boolean',
						default: false,
						description: '[Filter] Only games with or without a computer analysis available',
						routing: {
							send: {
								type: 'query',
								property: 'analysed',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description:
							'Include the full PGN within the JSON response, in a `pgn` field. The response type must be set to `application/x-ndjson`...',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Ongoing',
						name: 'ongoing',
						type: 'boolean',
						default: false,
						description:
							'Ongoing games are delayed by a few seconds ranging from 3 to 60 depending on the time control, as to prevent cheat bots ...',
						routing: {
							send: {
								type: 'query',
								property: 'ongoing',
							},
						},
					},
					{
						displayName: 'Finished',
						name: 'finished',
						type: 'boolean',
						default: true,
						description: 'Include finished games. Set to `false` to only get ongoing games',
						routing: {
							send: {
								type: 'query',
								property: 'finished',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
					{
						displayName: 'Last Fen',
						name: 'lastFen',
						type: 'boolean',
						default: false,
						description:
							'Include the FEN notation of the last position of the game. The response type must be set to `application/x-ndjson` by th...',
						routing: {
							send: {
								type: 'query',
								property: 'lastFen',
							},
						},
					},
					{
						displayName: 'With Bookmarked',
						name: 'withBookmarked',
						type: 'boolean',
						default: false,
						description:
							'Add a `bookmarked: true` JSON field when the logged in user has bookmarked the game. The response type must be set to `a...',
						routing: {
							send: {
								type: 'query',
								property: 'withBookmarked',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'URL of a text file containing real names and ratings, to replace Lichess usernames and ratings in the PGN. Example: <htt...',
						routing: {
							send: {
								type: 'query',
								property: 'players',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'dateDesc',
						description: 'Sort order of the games',
						options: [
							{
								name: 'Date Asc',
								value: 'dateAsc',
							},
							{
								name: 'Date Desc',
								value: 'dateDesc',
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
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'Game IDs separated by commas. Up to 300',
				placeholder: 'e.g. TJxUmbWK,4OtIh2oh,ILwozzRZ',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesExportIds'],
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
						resource: ['game'],
						operation: ['gamesExportIds'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'URL of a text file containing real names and ratings, to replace Lichess usernames and ratings in the PGN. Example: <htt...',
						routing: {
							send: {
								type: 'query',
								property: 'players',
							},
						},
					},
				],
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'Up to 300 user IDs separated by commas. Example: `thibault,maia1,maia5`',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesByUsers'],
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
						resource: ['game'],
						operation: ['gamesByUsers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'With Current Games',
						name: 'withCurrentGames',
						type: 'boolean',
						default: false,
						description: 'Include the already started games at the beginning of the stream',
						routing: {
							send: {
								type: 'query',
								property: 'withCurrentGames',
							},
						},
					},
				],
			},
			{
				displayName: 'Stream ID',
				name: 'streamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesByIds'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description:
					'Up to 500 or 1000 game IDs separated by commas. Example: `gameId01,gameId02,gameId03`',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesByIds'],
					},
				},
			},
			{
				displayName: 'Stream ID',
				name: 'streamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesByIdsAdd'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description:
					'Up to 500 or 1000 game IDs separated by commas. Example: `gameId04,gameId05,gameId06`',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['gamesByIdsAdd'],
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
						resource: ['game'],
						operation: ['apiAccountPlaying'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 9,
						description: 'Max number of games to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
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
				displayOptions: {
					show: {
						resource: ['game'],
						operation: ['streamGame'],
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
						resource: ['game'],
						operation: ['gameImport'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Pgn',
						name: 'pgn',
						type: 'string',
						default: '',
						description: 'The PGN. It can contain only one game. Most standard tags are supported',
						routing: {
							send: {
								type: 'body',
								property: 'pgn',
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
						resource: ['game'],
						operation: ['apiExportBookmarks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Since',
						name: 'since',
						type: 'number',
						default: 0,
						description:
							'Download games bookmarked since this timestamp. Defaults to account creation date',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Until',
						name: 'until',
						type: 'number',
						default: 0,
						description: 'Download games bookmarked until this timestamp. Defaults to now',
						routing: {
							send: {
								type: 'query',
								property: 'until',
							},
						},
					},
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 0,
						description:
							'How many bookmarked games to download. Leave empty to download all bookmarked games',
						routing: {
							send: {
								type: 'query',
								property: 'max',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description:
							'Include the full PGN within the JSON response, in a `pgn` field. The response type must be set to `application/x-ndjson`...',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
					{
						displayName: 'Last Fen',
						name: 'lastFen',
						type: 'boolean',
						default: false,
						description:
							'Include the FEN notation of the last position of the game. The response type must be set to `application/x-ndjson` by th...',
						routing: {
							send: {
								type: 'query',
								property: 'lastFen',
							},
						},
					},
					{
						displayName: 'Sort',
						name: 'sort',
						type: 'options',
						default: 'dateDesc',
						description: 'Sort order of the bookmarks',
						options: [
							{
								name: 'Date Asc',
								value: 'dateAsc',
							},
							{
								name: 'Date Desc',
								value: 'dateDesc',
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
				displayName: 'Channel',
				name: 'channel',
				type: 'string',
				default: '',
				required: true,
				description: 'The name of the channel in camel case',
				displayOptions: {
					show: {
						resource: ['tv'],
						operation: ['tvChannelFeed'],
					},
				},
			},
			{
				displayName: 'Channel',
				name: 'channel',
				type: 'string',
				default: '',
				required: true,
				description: 'The name of the channel in camel case',
				displayOptions: {
					show: {
						resource: ['tv'],
						operation: ['tvChannelGames'],
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
						resource: ['tv'],
						operation: ['tvChannelGames'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 10,
						description: 'Number of games to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
				],
			},
			{
				displayName: 'Clock Time',
				name: 'clockTime',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock initial time in minutes',
				routing: {
					send: {
						type: 'body',
						property: 'clockTime',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentPost'],
					},
				},
			},
			{
				displayName: 'Clock Increment',
				name: 'clockIncrement',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock increment in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clockIncrement',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentPost'],
					},
				},
			},
			{
				displayName: 'Minutes',
				name: 'minutes',
				type: 'number',
				default: 0,
				required: true,
				description: 'How long the tournament lasts, in minutes',
				routing: {
					send: {
						type: 'body',
						property: 'minutes',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentPost'],
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
						resource: ['arenaTournament'],
						operation: ['apiTournamentPost'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The tournament name. Leave empty to get a random Grandmaster name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Wait Minutes',
						name: 'waitMinutes',
						type: 'number',
						default: 0,
						description: 'How long to wait before starting the tournament, from now, in minutes',
						routing: {
							send: {
								type: 'body',
								property: 'waitMinutes',
							},
						},
					},
					{
						displayName: 'Start Date',
						name: 'startDate',
						type: 'number',
						default: 0,
						description:
							'Timestamp (in milliseconds) to start the tournament at a given date and time. Overrides the `waitMinutes` setting',
						routing: {
							send: {
								type: 'body',
								property: 'startDate',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Games are rated and impact players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Position',
						name: 'position',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'position',
							},
						},
					},
					{
						displayName: 'Berserkable',
						name: 'berserkable',
						type: 'boolean',
						default: false,
						description:
							'Whether the players can use berserk. Only allowed if clockIncrement <= clockTime * 2',
						routing: {
							send: {
								type: 'body',
								property: 'berserkable',
							},
						},
					},
					{
						displayName: 'Streakable',
						name: 'streakable',
						type: 'boolean',
						default: false,
						description: 'After 2 wins, consecutive wins grant 4 points instead of 2',
						routing: {
							send: {
								type: 'body',
								property: 'streakable',
							},
						},
					},
					{
						displayName: 'Has Chat',
						name: 'hasChat',
						type: 'boolean',
						default: false,
						description: 'Whether the players can discuss in a chat',
						routing: {
							send: {
								type: 'body',
								property: 'hasChat',
							},
						},
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Anything you want to tell players about the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description:
							'Make the tournament private, and restrict access with a password. You can also [generate user-specific entry codes](http...',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
					{
						displayName: 'Team Battle By Team',
						name: 'teamBattleByTeam',
						type: 'string',
						default: '',
						description:
							'Set the ID of a team you lead to create a team battle. The other teams can be added using the [team battle edit endpoint...',
						routing: {
							send: {
								type: 'body',
								property: 'teamBattleByTeam',
							},
						},
					},
					{
						displayName: 'Conditions Team Member Team ID',
						name: 'conditions.teamMember.teamId',
						type: 'string',
						default: '',
						description:
							'Restrict entry to members of a team. The teamId is the last part of a team URL, e.g. `https://lichess.org/team/coders` h...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.teamMember.teamId',
							},
						},
					},
					{
						displayName: 'Conditions Min Rating Rating',
						name: 'conditions.minRating.rating',
						type: 'number',
						default: 0,
						description: 'Minimum rating to join. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.minRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Max Rating Rating',
						name: 'conditions.maxRating.rating',
						type: 'number',
						default: 0,
						description:
							'Maximum rating to join. Based on best rating reached in the last 7 days. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.maxRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Nb Rated Game Nb',
						name: 'conditions.nbRatedGame.nb',
						type: 'number',
						default: 0,
						description: 'Minimum number of rated games required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.nbRatedGame.nb',
							},
						},
					},
					{
						displayName: 'Conditions Allow List',
						name: 'conditions.allowList',
						type: 'string',
						default: '',
						description:
							'Predefined list of usernames that are allowed to join, separated by commas. If this list is non-empty, then usernames ab...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.allowList',
							},
						},
					},
					{
						displayName: 'Conditions Bots',
						name: 'conditions.bots',
						type: 'boolean',
						default: false,
						description: 'Whether bots are allowed to join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.bots',
							},
						},
					},
					{
						displayName: 'Conditions Account Age',
						name: 'conditions.accountAge',
						type: 'number',
						default: 0,
						description: 'Minium account age in days required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.accountAge',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['tournament'],
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
						resource: ['arenaTournament'],
						operation: ['tournament'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						description: 'Specify which page of player standings to view',
						routing: {
							send: {
								type: 'query',
								property: 'page',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentUpdate'],
					},
				},
			},
			{
				displayName: 'Clock Time',
				name: 'clockTime',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock initial time in minutes',
				routing: {
					send: {
						type: 'body',
						property: 'clockTime',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentUpdate'],
					},
				},
			},
			{
				displayName: 'Clock Increment',
				name: 'clockIncrement',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock increment in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clockIncrement',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentUpdate'],
					},
				},
			},
			{
				displayName: 'Minutes',
				name: 'minutes',
				type: 'number',
				default: 0,
				required: true,
				description: 'How long the tournament lasts, in minutes',
				routing: {
					send: {
						type: 'body',
						property: 'minutes',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentUpdate'],
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
						resource: ['arenaTournament'],
						operation: ['apiTournamentUpdate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The tournament name. Leave empty to get a random Grandmaster name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Wait Minutes',
						name: 'waitMinutes',
						type: 'number',
						default: 0,
						description: 'How long to wait before starting the tournament, from now, in minutes',
						routing: {
							send: {
								type: 'body',
								property: 'waitMinutes',
							},
						},
					},
					{
						displayName: 'Start Date',
						name: 'startDate',
						type: 'number',
						default: 0,
						description:
							'Timestamp (in milliseconds) to start the tournament at a given date and time. Overrides the `waitMinutes` setting',
						routing: {
							send: {
								type: 'body',
								property: 'startDate',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Games are rated and impact players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Position',
						name: 'position',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'position',
							},
						},
					},
					{
						displayName: 'Berserkable',
						name: 'berserkable',
						type: 'boolean',
						default: false,
						description:
							'Whether the players can use berserk. Only allowed if clockIncrement <= clockTime * 2',
						routing: {
							send: {
								type: 'body',
								property: 'berserkable',
							},
						},
					},
					{
						displayName: 'Streakable',
						name: 'streakable',
						type: 'boolean',
						default: false,
						description: 'After 2 wins, consecutive wins grant 4 points instead of 2',
						routing: {
							send: {
								type: 'body',
								property: 'streakable',
							},
						},
					},
					{
						displayName: 'Has Chat',
						name: 'hasChat',
						type: 'boolean',
						default: false,
						description: 'Whether the players can discuss in a chat',
						routing: {
							send: {
								type: 'body',
								property: 'hasChat',
							},
						},
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Anything you want to tell players about the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description: 'Make the tournament private, and restrict access with a password',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
					{
						displayName: 'Conditions Min Rating Rating',
						name: 'conditions.minRating.rating',
						type: 'number',
						default: 0,
						description: 'Minimum rating to join. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.minRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Max Rating Rating',
						name: 'conditions.maxRating.rating',
						type: 'number',
						default: 0,
						description:
							'Maximum rating to join. Based on best rating reached in the last 7 days. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.maxRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Nb Rated Game Nb',
						name: 'conditions.nbRatedGame.nb',
						type: 'number',
						default: 0,
						description: 'Minimum number of rated games required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.nbRatedGame.nb',
							},
						},
					},
					{
						displayName: 'Conditions Allow List',
						name: 'conditions.allowList',
						type: 'string',
						default: '',
						description:
							'Predefined list of usernames that are allowed to join, separated by commas. If this list is non-empty, then usernames ab...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.allowList',
							},
						},
					},
					{
						displayName: 'Conditions Bots',
						name: 'conditions.bots',
						type: 'boolean',
						default: false,
						description: 'Whether bots are allowed to join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.bots',
							},
						},
					},
					{
						displayName: 'Conditions Account Age',
						name: 'conditions.accountAge',
						type: 'number',
						default: 0,
						description: 'Minium account age in days required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.accountAge',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentJoin'],
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
						resource: ['arenaTournament'],
						operation: ['apiTournamentJoin'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description:
							'The tournament password, if one is required. Can also be a [user-specific entry code](https://github.com/lichess-org/api...',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
					{
						displayName: 'Team',
						name: 'team',
						type: 'string',
						default: '',
						description: 'The team to join the tournament with, for team battle tournaments',
						routing: {
							send: {
								type: 'body',
								property: 'team',
							},
						},
					},
					{
						displayName: 'Pair Me Asap',
						name: 'pairMeAsap',
						type: 'boolean',
						default: false,
						description:
							'If the tournament is started, attempt to pair the user, even if they are not connected to the tournament page. This expi...',
						routing: {
							send: {
								type: 'body',
								property: 'pairMeAsap',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentWithdraw'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentTerminate'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentTeamBattlePost'],
					},
				},
			},
			{
				displayName: 'Teams',
				name: 'teams',
				type: 'string',
				default: '',
				required: true,
				description:
					'All team IDs of the team battle, separated by commas. Make sure to always send the full list. Teams that are not in the ...',
				routing: {
					send: {
						type: 'body',
						property: 'teams',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentTeamBattlePost'],
					},
				},
			},
			{
				displayName: 'Nb Leaders',
				name: 'nbLeaders',
				type: 'number',
				default: 0,
				required: true,
				description: 'Number team leaders per team',
				routing: {
					send: {
						type: 'body',
						property: 'nbLeaders',
					},
				},
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiTournamentTeamBattlePost'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['gamesByTournament'],
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
						resource: ['arenaTournament'],
						operation: ['gamesByTournament'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Player',
						name: 'player',
						type: 'string',
						default: '',
						description:
							'Only games of a particular player. Leave empty to fetch games of all players',
						routing: {
							send: {
								type: 'query',
								property: 'player',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['resultsByTournament'],
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
						resource: ['arenaTournament'],
						operation: ['resultsByTournament'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'Max number of players to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
					{
						displayName: 'Sheet',
						name: 'sheet',
						type: 'boolean',
						default: false,
						description:
							"Add a `sheet` field to the player document. It's an expensive server computation that slows down the stream.",
						routing: {
							send: {
								type: 'query',
								property: 'sheet',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['teamsByTournament'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'The user whose created tournaments to fetch',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiUserNameTournamentCreated'],
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
						resource: ['arenaTournament'],
						operation: ['apiUserNameTournamentCreated'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'Max number of tournaments to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'number',
						default: 0,
						description:
							'Include tournaments in the given status: "Created" (10), "Started" (20), "Finished" (30) You can add this parameter more...',
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
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'The user whose played tournaments to fetch',
				displayOptions: {
					show: {
						resource: ['arenaTournament'],
						operation: ['apiUserNameTournamentPlayed'],
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
						resource: ['arenaTournament'],
						operation: ['apiUserNameTournamentPlayed'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'Max number of tournaments to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
					{
						displayName: 'Performance',
						name: 'performance',
						type: 'boolean',
						default: false,
						description:
							'Include the player performance rating in the response, at some cost for the server.',
						routing: {
							send: {
								type: 'query',
								property: 'performance',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the team',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissNew'],
					},
				},
			},
			{
				displayName: 'Clock Limit',
				name: 'clock.limit',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock initial time in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clock.limit',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissNew'],
					},
				},
			},
			{
				displayName: 'Clock Increment',
				name: 'clock.increment',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock increment in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clock.increment',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissNew'],
					},
				},
			},
			{
				displayName: 'Nb Rounds',
				name: 'nbRounds',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum number of rounds to play',
				routing: {
					send: {
						type: 'body',
						property: 'nbRounds',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissNew'],
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
						resource: ['swissTournament'],
						operation: ['apiSwissNew'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The tournament name. Leave empty to get a random Grandmaster name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Starts At',
						name: 'startsAt',
						type: 'number',
						default: 0,
						description:
							'Timestamp in milliseconds to start the tournament at a given date and time. By default, it starts 10 minutes after creat...',
						routing: {
							send: {
								type: 'body',
								property: 'startsAt',
							},
						},
					},
					{
						displayName: 'Round Interval',
						name: 'roundInterval',
						type: 'number',
						default: 0,
						description:
							'How long to wait between each round, in seconds. Set to 99999999 to manually schedule each round from the tournament UI....',
						routing: {
							send: {
								type: 'body',
								property: 'roundInterval',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Position',
						name: 'position',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard and the game cannot be rated',
						routing: {
							send: {
								type: 'body',
								property: 'position',
							},
						},
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Anything you want to tell players about the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Games are rated and impact players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description: 'Make the tournament private and restrict access with a password',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
					{
						displayName: 'Forbidden Pairings',
						name: 'forbiddenPairings',
						type: 'string',
						default: '',
						description:
							'Usernames of players that must not play together. Two usernames per line, separated by a space',
						routing: {
							send: {
								type: 'body',
								property: 'forbiddenPairings',
							},
						},
					},
					{
						displayName: 'Manual Pairings',
						name: 'manualPairings',
						type: 'string',
						default: '',
						description:
							'Manual pairings for the next round. Two usernames per line, separated by a space. Example: ``` PlayerA PlayerB PlayerC P...',
						routing: {
							send: {
								type: 'body',
								property: 'manualPairings',
							},
						},
					},
					{
						displayName: 'Chat For',
						name: 'chatFor',
						type: 'number',
						default: 0,
						description:
							'Who can read and write in the chat. - 0  = No-one - 10 = Only team leaders - 20 = Only team members - 30 = All Lichess p...',
						routing: {
							send: {
								type: 'body',
								property: 'chatFor',
							},
						},
					},
					{
						displayName: 'Conditions Min Rating Rating',
						name: 'conditions.minRating.rating',
						type: 'number',
						default: 0,
						description: 'Minimum rating to join. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.minRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Max Rating Rating',
						name: 'conditions.maxRating.rating',
						type: 'number',
						default: 0,
						description:
							'Maximum rating to join. Based on best rating reached in the last 7 days. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.maxRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Nb Rated Game Nb',
						name: 'conditions.nbRatedGame.nb',
						type: 'number',
						default: 0,
						description: 'Minimum number of rated games required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.nbRatedGame.nb',
							},
						},
					},
					{
						displayName: 'Conditions Play Your Games',
						name: 'conditions.playYourGames',
						type: 'boolean',
						default: false,
						description:
							'Only let players join if they have played their last swiss game. If they failed to show up in a recent swiss event, they...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.playYourGames',
							},
						},
					},
					{
						displayName: 'Conditions Allow List',
						name: 'conditions.allowList',
						type: 'string',
						default: '',
						description:
							'Predefined list of usernames that are allowed to join, separated by commas. If this list is non-empty, then usernames ab...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.allowList',
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
				description: 'The Swiss tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['swiss'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissUpdate'],
					},
				},
			},
			{
				displayName: 'Clock Limit',
				name: 'clock.limit',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock initial time in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clock.limit',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissUpdate'],
					},
				},
			},
			{
				displayName: 'Clock Increment',
				name: 'clock.increment',
				type: 'number',
				default: 0,
				required: true,
				description: 'Clock increment in seconds',
				routing: {
					send: {
						type: 'body',
						property: 'clock.increment',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissUpdate'],
					},
				},
			},
			{
				displayName: 'Nb Rounds',
				name: 'nbRounds',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum number of rounds to play',
				routing: {
					send: {
						type: 'body',
						property: 'nbRounds',
					},
				},
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissUpdate'],
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
						resource: ['swissTournament'],
						operation: ['apiSwissUpdate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'The tournament name. Leave empty to get a random Grandmaster name',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Starts At',
						name: 'startsAt',
						type: 'number',
						default: 0,
						description:
							'Timestamp in milliseconds to start the tournament at a given date and time. By default, it starts 10 minutes after creat...',
						routing: {
							send: {
								type: 'body',
								property: 'startsAt',
							},
						},
					},
					{
						displayName: 'Round Interval',
						name: 'roundInterval',
						type: 'number',
						default: 0,
						description:
							'How long to wait between each round, in seconds. Set to 99999999 to manually schedule each round from the tournament UI,...',
						routing: {
							send: {
								type: 'body',
								property: 'roundInterval',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Position',
						name: 'position',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard and the game cannot be rated',
						routing: {
							send: {
								type: 'body',
								property: 'position',
							},
						},
					},
					{
						displayName: 'Description',
						name: 'description',
						type: 'string',
						default: '',
						description: 'Anything you want to tell players about the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'description',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Games are rated and impact players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description: 'Make the tournament private and restrict access with a password',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
					{
						displayName: 'Forbidden Pairings',
						name: 'forbiddenPairings',
						type: 'string',
						default: '',
						description:
							'Usernames of players that must not play together. Two usernames per line, separated by a space',
						routing: {
							send: {
								type: 'body',
								property: 'forbiddenPairings',
							},
						},
					},
					{
						displayName: 'Manual Pairings',
						name: 'manualPairings',
						type: 'string',
						default: '',
						description:
							'Manual pairings for the next round. Two usernames per line, separated by a space. Present players without a valid pairin...',
						routing: {
							send: {
								type: 'body',
								property: 'manualPairings',
							},
						},
					},
					{
						displayName: 'Chat For',
						name: 'chatFor',
						type: 'number',
						default: 0,
						description:
							'Who can read and write in the chat. - 0  = No-one - 10 = Only team leaders - 20 = Only team members - 30 = All Lichess p...',
						routing: {
							send: {
								type: 'body',
								property: 'chatFor',
							},
						},
					},
					{
						displayName: 'Conditions Min Rating Rating',
						name: 'conditions.minRating.rating',
						type: 'number',
						default: 0,
						description: 'Minimum rating to join. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.minRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Max Rating Rating',
						name: 'conditions.maxRating.rating',
						type: 'number',
						default: 0,
						description:
							'Maximum rating to join. Based on best rating reached in the last 7 days. Leave empty to let everyone join the tournament',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.maxRating.rating',
							},
						},
					},
					{
						displayName: 'Conditions Nb Rated Game Nb',
						name: 'conditions.nbRatedGame.nb',
						type: 'number',
						default: 0,
						description: 'Minimum number of rated games required to join',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.nbRatedGame.nb',
							},
						},
					},
					{
						displayName: 'Conditions Play Your Games',
						name: 'conditions.playYourGames',
						type: 'boolean',
						default: false,
						description:
							'Only let players join if they have played their last swiss game. If they failed to show up in a recent swiss event, they...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.playYourGames',
							},
						},
					},
					{
						displayName: 'Conditions Allow List',
						name: 'conditions.allowList',
						type: 'string',
						default: '',
						description:
							'Predefined list of usernames that are allowed to join, separated by commas. If this list is non-empty, then usernames ab...',
						routing: {
							send: {
								type: 'body',
								property: 'conditions.allowList',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissScheduleNextRound'],
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
						resource: ['swissTournament'],
						operation: ['apiSwissScheduleNextRound'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Date',
						name: 'date',
						type: 'number',
						default: 0,
						description:
							'Timestamp in milliseconds to start the next round at a given date and time',
						routing: {
							send: {
								type: 'body',
								property: 'date',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissJoin'],
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
						resource: ['swissTournament'],
						operation: ['apiSwissJoin'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description: 'The tournament password, if one is required',
						routing: {
							send: {
								type: 'body',
								property: 'password',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissWithdraw'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The Swiss tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['apiSwissTerminate'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['swissTrf'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['gamesBySwiss'],
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
						resource: ['swissTournament'],
						operation: ['gamesBySwiss'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Player',
						name: 'player',
						type: 'string',
						default: '',
						description: 'Only the games played by a given player',
						routing: {
							send: {
								type: 'query',
								property: 'player',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
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
				description: 'The tournament ID',
				displayOptions: {
					show: {
						resource: ['swissTournament'],
						operation: ['resultsBySwiss'],
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
						resource: ['swissTournament'],
						operation: ['resultsBySwiss'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'Max number of players to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. coders',
				displayOptions: {
					show: {
						resource: ['team', 'swissTournament'],
						operation: ['apiTeamSwiss'],
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
						resource: ['team', 'swissTournament'],
						operation: ['apiTeamSwiss'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 100,
						description: 'How many tournaments to download',
						routing: {
							send: {
								type: 'query',
								property: 'max',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'options',
						default: 'created',
						description: '[Filter] Only swiss tournaments in this current state.',
						options: [
							{
								name: 'Created',
								value: 'created',
							},
							{
								name: 'Started',
								value: 'started',
							},
							{
								name: 'Finished',
								value: 'finished',
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
						displayName: 'Created By',
						name: 'createdBy',
						type: 'string',
						default: '',
						description: '[Filter] Only swiss tournaments created by a given user.',
						routing: {
							send: {
								type: 'query',
								property: 'createdBy',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: '[Filter] Only swiss tournaments with a given name.',
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
				displayName: 'Study ID',
				name: 'studyId',
				type: 'string',
				default: '',
				required: true,
				description: 'The study ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyChapterPgn'],
					},
				},
			},
			{
				displayName: 'Chapter ID',
				name: 'chapterId',
				type: 'string',
				default: '',
				required: true,
				description: 'The chapter ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyChapterPgn'],
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
						resource: ['study'],
						operation: ['studyChapterPgn'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: true,
						description:
							'Include clock comments in the PGN moves, when available. Example: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }`',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Comments',
						name: 'comments',
						type: 'boolean',
						default: true,
						description:
							'Include analysis and annotator comments in the PGN moves, when available. Example: `12. Bxf6 { [%eval 0.23] } a3 { White...',
						routing: {
							send: {
								type: 'query',
								property: 'comments',
							},
						},
					},
					{
						displayName: 'Variations',
						name: 'variations',
						type: 'boolean',
						default: true,
						description:
							'Include non-mainline moves, when available. Example: `4. d4 Bb4+ (4... Nc6 5. Nf3 Bb4+ 6. Bd2 (6. Nbd2 O-O 7. O-O) 6... ...',
						routing: {
							send: {
								type: 'query',
								property: 'variations',
							},
						},
					},
					{
						displayName: 'Source',
						name: 'source',
						type: 'boolean',
						default: false,
						description:
							'Add a `Source` PGN tag with the study chapter URL. Example: `[Source "https://lichess.org/study/4NBHImfM/1Tk4IyTz"]`',
						routing: {
							send: {
								type: 'query',
								property: 'source',
							},
						},
					},
					{
						displayName: 'Orientation',
						name: 'orientation',
						type: 'boolean',
						default: false,
						description:
							'Add a `Orientation` PGN tag with the chapter predefined orientation. Example: `[Orientation "white"]`',
						routing: {
							send: {
								type: 'query',
								property: 'orientation',
							},
						},
					},
				],
			},
			{
				displayName: 'Study ID',
				name: 'studyId',
				type: 'string',
				default: '',
				required: true,
				description: 'The study ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyAllChaptersPgn'],
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
						resource: ['study'],
						operation: ['studyAllChaptersPgn'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: true,
						description:
							'Include clock comments in the PGN moves, when available. Example: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }`',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Comments',
						name: 'comments',
						type: 'boolean',
						default: true,
						description:
							'Include analysis and annotator comments in the PGN moves, when available. Example: `12. Bxf6 { [%eval 0.23] } a3 { White...',
						routing: {
							send: {
								type: 'query',
								property: 'comments',
							},
						},
					},
					{
						displayName: 'Variations',
						name: 'variations',
						type: 'boolean',
						default: true,
						description:
							'Include non-mainline moves, when available. Example: `4. d4 Bb4+ (4... Nc6 5. Nf3 Bb4+ 6. Bd2 (6. Nbd2 O-O 7. O-O) 6... ...',
						routing: {
							send: {
								type: 'query',
								property: 'variations',
							},
						},
					},
					{
						displayName: 'Source',
						name: 'source',
						type: 'boolean',
						default: false,
						description:
							'Add a `Source` PGN tag with the study chapter URL. Example: `[Source "https://lichess.org/study/4NBHImfM/1Tk4IyTz"]`',
						routing: {
							send: {
								type: 'query',
								property: 'source',
							},
						},
					},
					{
						displayName: 'Orientation',
						name: 'orientation',
						type: 'boolean',
						default: false,
						description:
							'Add a `Orientation` PGN tag with the chapter predefined orientation. Example: `[Orientation "white"]`',
						routing: {
							send: {
								type: 'query',
								property: 'orientation',
							},
						},
					},
				],
			},
			{
				displayName: 'Study ID',
				name: 'studyId',
				type: 'string',
				default: '',
				required: true,
				description: 'The study ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyAllChaptersHead'],
					},
				},
			},
			{
				displayName: 'Study ID',
				name: 'studyId',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the study',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['apiStudyImportPGN'],
					},
				},
			},
			{
				displayName: 'Pgn',
				name: 'pgn',
				type: 'string',
				default: '',
				required: true,
				description: 'PGN to import. Can contain multiple games separated by 2 or more newlines',
				routing: {
					send: {
						type: 'body',
						property: 'pgn',
					},
				},
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['apiStudyImportPGN'],
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
						resource: ['study'],
						operation: ['apiStudyImportPGN'],
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
							'Name of the new chapter. If not specified, or if multiple chapters are created, the names will be inferred from the PGN ...',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Orientation',
						name: 'orientation',
						type: 'string',
						default: '',
						description: 'Default board orientation',
						routing: {
							send: {
								type: 'body',
								property: 'orientation',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'The user whose studies we export',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyExportAllPgn'],
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
						resource: ['study'],
						operation: ['studyExportAllPgn'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: true,
						description:
							'Include clock comments in the PGN moves, when available. Example: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }`',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Comments',
						name: 'comments',
						type: 'boolean',
						default: true,
						description:
							'Include analysis and annotator comments in the PGN moves, when available. Example: `12. Bxf6 { [%eval 0.23] } a3 { White...',
						routing: {
							send: {
								type: 'query',
								property: 'comments',
							},
						},
					},
					{
						displayName: 'Variations',
						name: 'variations',
						type: 'boolean',
						default: true,
						description:
							'Include non-mainline moves, when available. Example: `4. d4 Bb4+ (4... Nc6 5. Nf3 Bb4+ 6. Bd2 (6. Nbd2 O-O 7. O-O) 6... ...',
						routing: {
							send: {
								type: 'query',
								property: 'variations',
							},
						},
					},
					{
						displayName: 'Source',
						name: 'source',
						type: 'boolean',
						default: false,
						description:
							'Add a `Source` PGN tag with the study chapter URL. Example: `[Source "https://lichess.org/study/4NBHImfM/1Tk4IyTz"]`',
						routing: {
							send: {
								type: 'query',
								property: 'source',
							},
						},
					},
					{
						displayName: 'Orientation',
						name: 'orientation',
						type: 'boolean',
						default: false,
						description:
							'Add a `Orientation` PGN tag with the chapter predefined orientation. Example: `[Orientation "white"]`',
						routing: {
							send: {
								type: 'query',
								property: 'orientation',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				description: 'The user whose studies we list',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['studyListMetadata'],
					},
				},
			},
			{
				displayName: 'Study ID',
				name: 'studyId',
				type: 'string',
				default: '',
				required: true,
				description: 'The study ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['apiStudyStudyIdChapterIdDelete'],
					},
				},
			},
			{
				displayName: 'Chapter ID',
				name: 'chapterId',
				type: 'string',
				default: '',
				required: true,
				description: 'The chapter ID',
				displayOptions: {
					show: {
						resource: ['study'],
						operation: ['apiStudyStudyIdChapterIdDelete'],
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
						resource: ['broadcast'],
						operation: ['broadcastsOfficial'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 20,
						description: 'Max number of broadcasts to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
					{
						displayName: 'Html',
						name: 'html',
						type: 'boolean',
						default: false,
						description: 'Convert the "description" field from markdown to HTML',
						routing: {
							send: {
								type: 'query',
								property: 'html',
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
						resource: ['broadcast'],
						operation: ['broadcastsTop'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						description: 'Which page to fetch. Only page 1 has "active" broadcasts',
						routing: {
							send: {
								type: 'query',
								property: 'page',
							},
						},
					},
					{
						displayName: 'Html',
						name: 'html',
						type: 'boolean',
						default: false,
						description: 'Convert the "description" field from markdown to HTML',
						routing: {
							send: {
								type: 'query',
								property: 'html',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastsByUser'],
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
						resource: ['broadcast'],
						operation: ['broadcastsByUser'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						routing: {
							send: {
								type: 'query',
								property: 'page',
							},
						},
					},
					{
						displayName: 'Html',
						name: 'html',
						type: 'boolean',
						default: false,
						description: 'Convert the "description" field from markdown to HTML',
						routing: {
							send: {
								type: 'query',
								property: 'html',
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
				description: 'Name of the broadcast tournament.  Example: `Sinquefield Cup`',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastTourCreate'],
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
						resource: ['broadcast'],
						operation: ['broadcastTourCreate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Info Format',
						name: 'info.format',
						type: 'string',
						default: '',
						description: 'Tournament format. Example: `"8-player round-robin" or "5-round Swiss"`',
						routing: {
							send: {
								type: 'body',
								property: 'info.format',
							},
						},
					},
					{
						displayName: 'Info Location',
						name: 'info.location',
						type: 'string',
						default: '',
						description: 'Tournament Location',
						routing: {
							send: {
								type: 'body',
								property: 'info.location',
							},
						},
					},
					{
						displayName: 'Info Tc',
						name: 'info.tc',
						type: 'string',
						default: '',
						description: 'Time control. Example: `"Classical" or "Rapid" or "Rapid & Blitz"`',
						routing: {
							send: {
								type: 'body',
								property: 'info.tc',
							},
						},
					},
					{
						displayName: 'Info Fide Tc',
						name: 'info.fideTc',
						type: 'string',
						default: '',
						description: 'FIDE rating category. Which FIDE ratings to use',
						routing: {
							send: {
								type: 'body',
								property: 'info.fideTc',
							},
						},
					},
					{
						displayName: 'Info Time Zone',
						name: 'info.timeZone',
						type: 'string',
						default: '',
						description:
							'Timezone of the tournament. Example: `America/New_York`. See [list of possible timezone identifiers](https://en.wikipedi...',
						routing: {
							send: {
								type: 'body',
								property: 'info.timeZone',
							},
						},
					},
					{
						displayName: 'Info Players',
						name: 'info.players',
						type: 'string',
						default: '',
						description: 'Mention up to 4 of the best players participating',
						routing: {
							send: {
								type: 'body',
								property: 'info.players',
							},
						},
					},
					{
						displayName: 'Info Website',
						name: 'info.website',
						type: 'string',
						default: '',
						description: 'Official website. External website URL',
						routing: {
							send: {
								type: 'body',
								property: 'info.website',
							},
						},
					},
					{
						displayName: 'Info Standings',
						name: 'info.standings',
						type: 'string',
						default: '',
						description:
							'Official Standings. External website URL, e.g. chess-results.com, info64.org',
						routing: {
							send: {
								type: 'body',
								property: 'info.standings',
							},
						},
					},
					{
						displayName: 'Markdown',
						name: 'markdown',
						type: 'string',
						default: '',
						description: 'Optional long description of the broadcast. Markdown is supported',
						routing: {
							send: {
								type: 'body',
								property: 'markdown',
							},
						},
					},
					{
						displayName: 'Show Scores',
						name: 'showScores',
						type: 'boolean',
						default: false,
						description: 'Show players scores based on game results',
						routing: {
							send: {
								type: 'body',
								property: 'showScores',
							},
						},
					},
					{
						displayName: 'Show Rating Diffs',
						name: 'showRatingDiffs',
						type: 'boolean',
						default: false,
						description: "Show player's rating diffs",
						routing: {
							send: {
								type: 'body',
								property: 'showRatingDiffs',
							},
						},
					},
					{
						displayName: 'Team Table',
						name: 'teamTable',
						type: 'boolean',
						default: false,
						description: 'Show a team leaderboard. Requires WhiteTeam and BlackTeam PGN tags',
						routing: {
							send: {
								type: 'body',
								property: 'teamTable',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'Optional replace player names, ratings and titles.  One line per player, formatted as such:  ```txt player name = FIDE I...',
						routing: {
							send: {
								type: 'body',
								property: 'players',
							},
						},
					},
					{
						displayName: 'Teams',
						name: 'teams',
						type: 'string',
						default: '',
						description:
							'Optional: assign players to teams  One line per player, formatted as such: ```txt Team name; Fide Id or Player name ``` ...',
						routing: {
							send: {
								type: 'body',
								property: 'teams',
							},
						},
					},
					{
						displayName: 'Tier',
						name: 'tier',
						type: 'number',
						default: 0,
						description:
							'Optional, for Lichess admins only, used to feature on /broadcast.  * `3` for Official: normal tier * `4` for Official: h...',
						routing: {
							send: {
								type: 'body',
								property: 'tier',
							},
						},
					},
				],
			},
			{
				displayName: 'Broadcast Tournament ID',
				name: 'broadcastTournamentId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast tournament ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastTourGet'],
					},
				},
			},
			{
				displayName: 'Broadcast Tournament ID',
				name: 'broadcastTournamentId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast tournament ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastPlayersGet'],
					},
				},
			},
			{
				displayName: 'Broadcast Tournament ID',
				name: 'broadcastTournamentId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastTourUpdate'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'Name of the broadcast tournament.  Example: `Sinquefield Cup`',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastTourUpdate'],
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
						resource: ['broadcast'],
						operation: ['broadcastTourUpdate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Info Format',
						name: 'info.format',
						type: 'string',
						default: '',
						description: 'Tournament format. Example: `"8-player round-robin" or "5-round Swiss"`',
						routing: {
							send: {
								type: 'body',
								property: 'info.format',
							},
						},
					},
					{
						displayName: 'Info Location',
						name: 'info.location',
						type: 'string',
						default: '',
						description: 'Tournament Location',
						routing: {
							send: {
								type: 'body',
								property: 'info.location',
							},
						},
					},
					{
						displayName: 'Info Tc',
						name: 'info.tc',
						type: 'string',
						default: '',
						description: 'Time control. Example: `"Classical" or "Rapid" or "Rapid & Blitz"`',
						routing: {
							send: {
								type: 'body',
								property: 'info.tc',
							},
						},
					},
					{
						displayName: 'Info Fide Tc',
						name: 'info.fideTc',
						type: 'string',
						default: '',
						description: 'FIDE rating category. Which FIDE ratings to use',
						routing: {
							send: {
								type: 'body',
								property: 'info.fideTc',
							},
						},
					},
					{
						displayName: 'Info Time Zone',
						name: 'info.timeZone',
						type: 'string',
						default: '',
						description:
							'Timezone of the tournament. Example: `America/New_York`. See [list of possible timezone identifiers](https://en.wikipedi...',
						routing: {
							send: {
								type: 'body',
								property: 'info.timeZone',
							},
						},
					},
					{
						displayName: 'Info Players',
						name: 'info.players',
						type: 'string',
						default: '',
						description: 'Mention up to 4 of the best players participating',
						routing: {
							send: {
								type: 'body',
								property: 'info.players',
							},
						},
					},
					{
						displayName: 'Info Website',
						name: 'info.website',
						type: 'string',
						default: '',
						description: 'Official website. External website URL',
						routing: {
							send: {
								type: 'body',
								property: 'info.website',
							},
						},
					},
					{
						displayName: 'Info Standings',
						name: 'info.standings',
						type: 'string',
						default: '',
						description:
							'Official Standings. External website URL, e.g. chess-results.com, info64.org',
						routing: {
							send: {
								type: 'body',
								property: 'info.standings',
							},
						},
					},
					{
						displayName: 'Markdown',
						name: 'markdown',
						type: 'string',
						default: '',
						description: 'Optional long description of the broadcast. Markdown is supported',
						routing: {
							send: {
								type: 'body',
								property: 'markdown',
							},
						},
					},
					{
						displayName: 'Show Scores',
						name: 'showScores',
						type: 'boolean',
						default: false,
						description: 'Show players scores based on game results',
						routing: {
							send: {
								type: 'body',
								property: 'showScores',
							},
						},
					},
					{
						displayName: 'Show Rating Diffs',
						name: 'showRatingDiffs',
						type: 'boolean',
						default: false,
						description: "Show player's rating diffs",
						routing: {
							send: {
								type: 'body',
								property: 'showRatingDiffs',
							},
						},
					},
					{
						displayName: 'Team Table',
						name: 'teamTable',
						type: 'boolean',
						default: false,
						description: 'Show a team leaderboard. Requires WhiteTeam and BlackTeam PGN tags',
						routing: {
							send: {
								type: 'body',
								property: 'teamTable',
							},
						},
					},
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'Optional replace player names, ratings and titles.  One line per player, formatted as such:  ```txt player name = FIDE I...',
						routing: {
							send: {
								type: 'body',
								property: 'players',
							},
						},
					},
					{
						displayName: 'Teams',
						name: 'teams',
						type: 'string',
						default: '',
						description:
							'Optional: assign players to teams  One line per player, formatted as such: ```txt Team name; Fide Id or Player name ``` ...',
						routing: {
							send: {
								type: 'body',
								property: 'teams',
							},
						},
					},
					{
						displayName: 'Tier',
						name: 'tier',
						type: 'number',
						default: 0,
						description:
							'Optional, for Lichess admins only, used to feature on /broadcast.  * `3` for Official: normal tier * `4` for Official: h...',
						routing: {
							send: {
								type: 'body',
								property: 'tier',
							},
						},
					},
				],
			},
			{
				displayName: 'Broadcast Tournament ID',
				name: 'broadcastTournamentId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast tournament ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundCreate'],
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
						resource: ['broadcast'],
						operation: ['broadcastRoundCreate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Starts At',
						name: 'startsAt',
						type: 'number',
						default: 0,
						description:
							'Timestamp in milliseconds of broadcast round start. Leave empty to manually start the broadcast round. Example: `1356998...',
						routing: {
							send: {
								type: 'body',
								property: 'startsAt',
							},
						},
					},
					{
						displayName: 'Starts After Previous',
						name: 'startsAfterPrevious',
						type: 'boolean',
						default: false,
						description:
							'The start date is unknown, and the round will start automatically when the previous round completes',
						routing: {
							send: {
								type: 'body',
								property: 'startsAfterPrevious',
							},
						},
					},
					{
						displayName: 'Delay',
						name: 'delay',
						type: 'number',
						default: 0,
						description:
							"Delay in seconds for movements to appear on the broadcast. Leave it empty if you don't need it. Example: `900` (15 min)",
						routing: {
							send: {
								type: 'body',
								property: 'delay',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'string',
						default: '',
						description:
							'Lichess can usually detect the round status, but you can also set it manually if needed',
						routing: {
							send: {
								type: 'body',
								property: 'status',
							},
						},
					},
					{
						displayName: 'Period',
						name: 'period',
						type: 'number',
						default: 0,
						description: '(Only for Admins) Waiting time for each poll',
						routing: {
							send: {
								type: 'body',
								property: 'period',
							},
						},
					},
				],
			},
			{
				displayName: 'Broadcast Tournament Slug',
				name: 'broadcastTournamentSlug',
				type: 'string',
				default: '',
				required: true,
				description:
					'The broadcast tournament slug. Only used for SEO, the slug can be safely replaced by `-`. Only the `broadcastRoundId` is...',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundGet'],
					},
				},
			},
			{
				displayName: 'Broadcast Round Slug',
				name: 'broadcastRoundSlug',
				type: 'string',
				default: '',
				required: true,
				description:
					'The broadcast round slug. Only used for SEO, the slug can be safely replaced by `-`. Only the `broadcastRoundId` is actu...',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundGet'],
					},
				},
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast Round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundGet'],
					},
				},
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundUpdate'],
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
						resource: ['broadcast'],
						operation: ['broadcastRoundUpdate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Starts At',
						name: 'startsAt',
						type: 'number',
						default: 0,
						description:
							'Timestamp in milliseconds of broadcast round start. Leave empty to manually start the broadcast round. Example: `1356998...',
						routing: {
							send: {
								type: 'body',
								property: 'startsAt',
							},
						},
					},
					{
						displayName: 'Starts After Previous',
						name: 'startsAfterPrevious',
						type: 'boolean',
						default: false,
						description:
							'The start date is unknown, and the round will start automatically when the previous round completes',
						routing: {
							send: {
								type: 'body',
								property: 'startsAfterPrevious',
							},
						},
					},
					{
						displayName: 'Delay',
						name: 'delay',
						type: 'number',
						default: 0,
						description:
							"Delay in seconds for movements to appear on the broadcast. Leave it empty if you don't need it. Example: `900` (15 min)",
						routing: {
							send: {
								type: 'body',
								property: 'delay',
							},
						},
					},
					{
						displayName: 'Status',
						name: 'status',
						type: 'string',
						default: '',
						description:
							'Lichess can usually detect the round status, but you can also set it manually if needed',
						routing: {
							send: {
								type: 'body',
								property: 'status',
							},
						},
					},
					{
						displayName: 'Period',
						name: 'period',
						type: 'number',
						default: 0,
						description: '(Only for Admins) Waiting time for each poll',
						routing: {
							send: {
								type: 'body',
								property: 'period',
							},
						},
					},
				],
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundReset'],
					},
				},
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastPush'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'The PGN. It can contain up to 64 games, separated by a double new line',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastPush'],
					},
				},
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastStreamRoundPgn'],
					},
				},
			},
			{
				displayName: 'Broadcast Round ID',
				name: 'broadcastRoundId',
				type: 'string',
				default: '',
				required: true,
				description: 'The round ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastRoundPgn'],
					},
				},
			},
			{
				displayName: 'Broadcast Tournament ID',
				name: 'broadcastTournamentId',
				type: 'string',
				default: '',
				required: true,
				description: 'The broadcast tournament ID',
				displayOptions: {
					show: {
						resource: ['broadcast'],
						operation: ['broadcastAllRoundsPgn'],
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
						resource: ['broadcast'],
						operation: ['broadcastMyRoundsGet'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'How many rounds to get',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
				],
			},
			{
				displayName: 'Player ID',
				name: 'playerId',
				type: 'number',
				default: 0,
				required: true,
				description: 'The FIDE player ID',
				displayOptions: {
					show: {
						resource: ['fide'],
						operation: ['fidePlayerGet'],
					},
				},
			},
			{
				displayName: 'Q',
				name: 'q',
				type: 'string',
				default: '',
				required: true,
				description: 'The search query',
				routing: {
					send: {
						type: 'query',
						property: 'q',
					},
				},
				displayOptions: {
					show: {
						resource: ['fide'],
						operation: ['fidePlayerSearch'],
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamShow'],
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
						operation: ['teamAll'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						routing: {
							send: {
								type: 'query',
								property: 'page',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamOfUsername'],
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
						operation: ['teamSearch'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						default: '',
						routing: {
							send: {
								type: 'query',
								property: 'text',
							},
						},
					},
					{
						displayName: 'Page',
						name: 'page',
						type: 'number',
						default: 1,
						routing: {
							send: {
								type: 'query',
								property: 'page',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdUsers'],
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
						operation: ['teamIdUsers'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Full',
						name: 'full',
						type: 'boolean',
						default: false,
						description:
							'Full user documents with performance ratings. This limits the response to 1,000 users.',
						routing: {
							send: {
								type: 'query',
								property: 'full',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				description: 'ID of the team',
				displayOptions: {
					show: {
						resource: ['team', 'arenaTournament'],
						operation: ['apiTeamArena'],
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
						resource: ['team', 'arenaTournament'],
						operation: ['apiTeamArena'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Max',
						name: 'max',
						type: 'number',
						default: 100,
						description: 'How many tournaments to download',
						routing: {
							send: {
								type: 'query',
								property: 'max',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdJoin'],
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
						operation: ['teamIdJoin'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						default: '',
						description: 'Required if team manually reviews admission requests',
						routing: {
							send: {
								type: 'body',
								property: 'message',
							},
						},
					},
					{
						displayName: 'Password',
						name: 'password',
						type: 'string',
						default: '',
						description: 'Optional password, if the team requires one',
						routing: {
							send: {
								type: 'body',
								property: 'password',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdQuit'],
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamRequests'],
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
						operation: ['teamRequests'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Declined',
						name: 'declined',
						type: 'boolean',
						default: false,
						description: 'Get the declined join requests',
						routing: {
							send: {
								type: 'query',
								property: 'declined',
							},
						},
					},
				],
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamRequestAccept'],
					},
				},
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamRequestAccept'],
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamRequestDecline'],
					},
				},
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamRequestDecline'],
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdKickUserId'],
					},
				},
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdKickUserId'],
					},
				},
			},
			{
				displayName: 'Team ID',
				name: 'teamId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['team'],
						operation: ['teamIdPmAll'],
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
						operation: ['teamIdPmAll'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						default: '',
						description: 'The message to send to all your team members',
						routing: {
							send: {
								type: 'body',
								property: 'message',
							},
						},
					},
				],
			},
			{
				displayName: 'User1',
				name: 'user1',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiCrosstable'],
					},
				},
			},
			{
				displayName: 'User2',
				name: 'user2',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiCrosstable'],
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
						operation: ['apiCrosstable'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Matchup',
						name: 'matchup',
						type: 'boolean',
						default: false,
						description: 'Whether to get the current match data, if any',
						routing: {
							send: {
								type: 'query',
								property: 'matchup',
							},
						},
					},
				],
			},
			{
				displayName: 'Term',
				name: 'term',
				type: 'string',
				default: '',
				required: true,
				description: 'The beginning of a username',
				routing: {
					send: {
						type: 'query',
						property: 'term',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['apiPlayerAutocomplete'],
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
						operation: ['apiPlayerAutocomplete'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Object',
						name: 'object',
						type: 'boolean',
						default: false,
						description:
							'- `false` returns an array of usernames - `true` returns an object with matching users',
						routing: {
							send: {
								type: 'query',
								property: 'object',
							},
						},
					},
					{
						displayName: 'Friend',
						name: 'friend',
						type: 'boolean',
						default: false,
						description:
							'Returns followed players matching `term` if any, else returns other players. Requires [OAuth](#tag/OAuth).',
						routing: {
							send: {
								type: 'query',
								property: 'friend',
							},
						},
					},
				],
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['writeNote'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'The contents of the note',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['writeNote'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['user'],
						operation: ['readNote'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['relation'],
						operation: ['followUser'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['relation'],
						operation: ['unfollowUser'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['relation'],
						operation: ['blockUser'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['relation'],
						operation: ['unblockUser'],
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
						resource: ['board'],
						operation: ['apiBoardSeek'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Whether the game is rated and impacts players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Rating Range',
						name: 'ratingRange',
						type: 'string',
						default: '',
						description:
							'The rating range of potential opponents. Better left empty. Example: 1500-1800',
						routing: {
							send: {
								type: 'body',
								property: 'ratingRange',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameStream'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameMove'],
					},
				},
			},
			{
				displayName: 'Move',
				name: 'move',
				type: 'string',
				default: '',
				required: true,
				description: 'The move to play, in UCI format',
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameMove'],
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
						resource: ['board'],
						operation: ['boardGameMove'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Offering Draw',
						name: 'offeringDraw',
						type: 'boolean',
						default: false,
						description: 'Whether to offer (or agree to) a draw',
						routing: {
							send: {
								type: 'query',
								property: 'offeringDraw',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameChatPost'],
					},
				},
			},
			{
				displayName: 'Room',
				name: 'room',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'room',
					},
				},
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameChatPost'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Thank you for the game!',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameChatPost'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameChatGet'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameAbort'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameResign'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameDraw'],
					},
				},
			},
			{
				displayName: 'Accept',
				name: 'accept',
				type: 'boolean',
				default: false,
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameDraw'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameTakeback'],
					},
				},
			},
			{
				displayName: 'Accept',
				name: 'accept',
				type: 'boolean',
				default: false,
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameTakeback'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameClaimVictory'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['board'],
						operation: ['boardGameBerserk'],
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
						resource: ['bot'],
						operation: ['apiBotOnline'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Nb',
						name: 'nb',
						type: 'number',
						default: 0,
						description: 'How many bot users to fetch',
						routing: {
							send: {
								type: 'query',
								property: 'nb',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameStream'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameMove'],
					},
				},
			},
			{
				displayName: 'Move',
				name: 'move',
				type: 'string',
				default: '',
				required: true,
				description: 'The move to play, in UCI format',
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameMove'],
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
						resource: ['bot'],
						operation: ['botGameMove'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Offering Draw',
						name: 'offeringDraw',
						type: 'boolean',
						default: false,
						description: 'Whether to offer (or agree to) a draw',
						routing: {
							send: {
								type: 'query',
								property: 'offeringDraw',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameChat'],
					},
				},
			},
			{
				displayName: 'Room',
				name: 'room',
				type: 'string',
				default: '',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'room',
					},
				},
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameChat'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Thank you for the game!',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameChat'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameChatGet'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameAbort'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameResign'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameDraw'],
					},
				},
			},
			{
				displayName: 'Accept',
				name: 'accept',
				type: 'boolean',
				default: false,
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameDraw'],
					},
				},
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameTakeback'],
					},
				},
			},
			{
				displayName: 'Accept',
				name: 'accept',
				type: 'boolean',
				default: false,
				required: true,
				displayOptions: {
					show: {
						resource: ['bot'],
						operation: ['botGameTakeback'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeCreate'],
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
						resource: ['challenge'],
						operation: ['challengeCreate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Game is rated and impacts players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Clock Limit',
						name: 'clock.limit',
						type: 'number',
						default: 0,
						description:
							'Clock initial time in seconds. If empty, a correspondence game is created. Valid values are 0, 15, 30, 45, 60, 90, and a...',
						routing: {
							send: {
								type: 'body',
								property: 'clock.limit',
							},
						},
					},
					{
						displayName: 'Clock Increment',
						name: 'clock.increment',
						type: 'number',
						default: 0,
						description: 'Clock increment in seconds. If empty, a correspondence game is created',
						routing: {
							send: {
								type: 'body',
								property: 'clock.increment',
							},
						},
					},
					{
						displayName: 'Days',
						name: 'days',
						type: 'number',
						default: 0,
						description: 'Days per move, for correspondence games. Clock settings must be omitted',
						routing: {
							send: {
								type: 'body',
								property: 'days',
							},
						},
					},
					{
						displayName: 'Color',
						name: 'color',
						type: 'string',
						default: '',
						description: 'Which color you get to play',
						routing: {
							send: {
								type: 'body',
								property: 'color',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Keep Alive Stream',
						name: 'keepAliveStream',
						type: 'boolean',
						default: false,
						description:
							'If set, the response is streamed as [ndjson](#section/Introduction/Streaming-with-ND-JSON). The challenge is kept alive ...',
						routing: {
							send: {
								type: 'body',
								property: 'keepAliveStream',
							},
						},
					},
					{
						displayName: 'Rules',
						name: 'rules',
						type: 'string',
						default: '',
						description: 'Extra game rules separated by commas. Example: `noAbort,noRematch`',
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
				displayName: 'Challenge ID',
				name: 'challengeId',
				type: 'string',
				default: '',
				required: true,
				description: 'The challenge ID',
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeShow'],
					},
				},
			},
			{
				displayName: 'Challenge ID',
				name: 'challengeId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeAccept'],
					},
				},
			},
			{
				displayName: 'Challenge ID',
				name: 'challengeId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeDecline'],
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
						resource: ['challenge'],
						operation: ['challengeDecline'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Reason',
						name: 'reason',
						type: 'string',
						default: '',
						description:
							"Reason challenge was declined. It will be translated to the player's language. See [the full list in the translation fil...",
						routing: {
							send: {
								type: 'body',
								property: 'reason',
							},
						},
					},
				],
			},
			{
				displayName: 'Challenge ID',
				name: 'challengeId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeCancel'],
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
						resource: ['challenge'],
						operation: ['challengeCancel'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Opponent Token',
						name: 'opponentToken',
						type: 'string',
						default: '',
						description:
							'Optional `challenge:write` token of the opponent. If set, the game can be canceled even if both players have moved',
						routing: {
							send: {
								type: 'query',
								property: 'opponentToken',
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
						resource: ['challenge'],
						operation: ['challengeAi'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Level',
						name: 'level',
						type: 'number',
						default: 0,
						description: 'AI strength',
						routing: {
							send: {
								type: 'body',
								property: 'level',
							},
						},
					},
					{
						displayName: 'Clock Limit',
						name: 'clock.limit',
						type: 'number',
						default: 0,
						description:
							'Clock initial time in seconds. If empty, a correspondence game is created',
						routing: {
							send: {
								type: 'body',
								property: 'clock.limit',
							},
						},
					},
					{
						displayName: 'Clock Increment',
						name: 'clock.increment',
						type: 'number',
						default: 0,
						description: 'Clock increment in seconds. If empty, a correspondence game is created',
						routing: {
							send: {
								type: 'body',
								property: 'clock.increment',
							},
						},
					},
					{
						displayName: 'Days',
						name: 'days',
						type: 'number',
						default: 0,
						description: 'Days per move, for correspondence games. Clock settings must be omitted',
						routing: {
							send: {
								type: 'body',
								property: 'days',
							},
						},
					},
					{
						displayName: 'Color',
						name: 'color',
						type: 'string',
						default: '',
						description: 'Which color you get to play',
						routing: {
							send: {
								type: 'body',
								property: 'color',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'fen',
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
						resource: ['challenge'],
						operation: ['challengeOpen'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Game is rated and impacts players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Clock Limit',
						name: 'clock.limit',
						type: 'number',
						default: 0,
						description:
							'Clock initial time in seconds. If empty, a correspondence game is created',
						routing: {
							send: {
								type: 'body',
								property: 'clock.limit',
							},
						},
					},
					{
						displayName: 'Clock Increment',
						name: 'clock.increment',
						type: 'number',
						default: 0,
						description: 'Clock increment in seconds. If empty, a correspondence game is created',
						routing: {
							send: {
								type: 'body',
								property: 'clock.increment',
							},
						},
					},
					{
						displayName: 'Days',
						name: 'days',
						type: 'number',
						default: 0,
						description: 'Days per turn. For correspondence challenges',
						routing: {
							send: {
								type: 'body',
								property: 'days',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description:
							'Optional name for the challenge, that players will see on the challenge page',
						routing: {
							send: {
								type: 'body',
								property: 'name',
							},
						},
					},
					{
						displayName: 'Rules',
						name: 'rules',
						type: 'string',
						default: '',
						description:
							'Extra game rules separated by commas. Example: `noRematch,noGiveTime` The `noAbort` rule is available for Lichess admins...',
						routing: {
							send: {
								type: 'body',
								property: 'rules',
							},
						},
					},
					{
						displayName: 'Users',
						name: 'users',
						type: 'string',
						default: '',
						description:
							'Optional pair of usernames, separated by a comma. If set, only these users will be allowed to join the game. The first u...',
						routing: {
							send: {
								type: 'body',
								property: 'users',
							},
						},
					},
					{
						displayName: 'Expires At',
						name: 'expiresAt',
						type: 'number',
						default: 0,
						description:
							"Timestamp in milliseconds to expire the challenge. Defaults to 24h after creation. Can't be more than 2 weeks after crea...",
						routing: {
							send: {
								type: 'body',
								property: 'expiresAt',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeStartClocks'],
					},
				},
			},
			{
				displayName: 'Token1',
				name: 'token1',
				type: 'string',
				default: '',
				required: true,
				description: 'OAuth token of a player',
				routing: {
					send: {
						type: 'query',
						property: 'token1',
					},
				},
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['challengeStartClocks'],
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
						resource: ['challenge'],
						operation: ['challengeStartClocks'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Token2',
						name: 'token2',
						type: 'string',
						default: '',
						description:
							'OAuth token of the other player. Omit for AI games that have only one player',
						routing: {
							send: {
								type: 'query',
								property: 'token2',
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
						resource: ['bulkPairing'],
						operation: ['bulkPairingCreate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Players',
						name: 'players',
						type: 'string',
						default: '',
						description:
							'OAuth tokens of all the players to pair, with the syntax `tokenOfWhitePlayerInGame1:tokenOfBlackPlayerInGame1,tokenOfWhi...',
						routing: {
							send: {
								type: 'body',
								property: 'players',
							},
						},
					},
					{
						displayName: 'Clock Limit',
						name: 'clock.limit',
						type: 'number',
						default: 0,
						description: 'Clock initial time in seconds. Example: `600`',
						routing: {
							send: {
								type: 'body',
								property: 'clock.limit',
							},
						},
					},
					{
						displayName: 'Clock Increment',
						name: 'clock.increment',
						type: 'number',
						default: 0,
						description: 'Clock increment in seconds. Example: `2`',
						routing: {
							send: {
								type: 'body',
								property: 'clock.increment',
							},
						},
					},
					{
						displayName: 'Days',
						name: 'days',
						type: 'number',
						default: 0,
						description: 'Days per turn. For correspondence games only',
						routing: {
							send: {
								type: 'body',
								property: 'days',
							},
						},
					},
					{
						displayName: 'Pair At',
						name: 'pairAt',
						type: 'number',
						default: 0,
						description:
							'Date at which the games will be created as a Unix timestamp in milliseconds. Up to 7 days in the future. Omit, or set to...',
						routing: {
							send: {
								type: 'body',
								property: 'pairAt',
							},
						},
					},
					{
						displayName: 'Start Clocks At',
						name: 'startClocksAt',
						type: 'number',
						default: 0,
						description:
							'Date at which the clocks will be automatically started as a Unix timestamp in milliseconds. Up to 7 days in the future. ...',
						routing: {
							send: {
								type: 'body',
								property: 'startClocksAt',
							},
						},
					},
					{
						displayName: 'Rated',
						name: 'rated',
						type: 'boolean',
						default: false,
						description: 'Game is rated and impacts players ratings',
						routing: {
							send: {
								type: 'body',
								property: 'rated',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'string',
						default: '',
						placeholder: 'e.g. standard',
						routing: {
							send: {
								type: 'body',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description:
							'Custom initial position (in FEN). Variant must be standard, fromPosition, or chess960 (if a valid 960 starting position)...',
						routing: {
							send: {
								type: 'body',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Message',
						name: 'message',
						type: 'string',
						default: '',
						description:
							'Message that will be sent to each player, when the game is created.  It is sent from your user account. `{opponent}` and...',
						routing: {
							send: {
								type: 'body',
								property: 'message',
							},
						},
					},
					{
						displayName: 'Rules',
						name: 'rules',
						type: 'string',
						default: '',
						description: 'Extra game rules separated by commas. Example: `noAbort,noRematch`',
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
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bulkPairing'],
						operation: ['bulkPairingStartClocks'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bulkPairing'],
						operation: ['bulkPairingGet'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bulkPairing'],
						operation: ['bulkPairingDelete'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['bulkPairing'],
						operation: ['bulkPairingIdGamesGet'],
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
						resource: ['bulkPairing'],
						operation: ['bulkPairingIdGamesGet'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'boolean',
						default: true,
						description: 'Include the PGN moves',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Pgn In Json',
						name: 'pgnInJson',
						type: 'boolean',
						default: false,
						description: 'Include the full PGN within the JSON response, in a `pgn` field',
						routing: {
							send: {
								type: 'query',
								property: 'pgnInJson',
							},
						},
					},
					{
						displayName: 'Tags',
						name: 'tags',
						type: 'boolean',
						default: true,
						description: 'Include the PGN tags',
						routing: {
							send: {
								type: 'query',
								property: 'tags',
							},
						},
					},
					{
						displayName: 'Clocks',
						name: 'clocks',
						type: 'boolean',
						default: false,
						description:
							'Include clock status when available. Either as PGN comments: `2. exd5 { [%clk 1:01:27] } e5 { [%clk 1:01:28] }` Or in a ...',
						routing: {
							send: {
								type: 'query',
								property: 'clocks',
							},
						},
					},
					{
						displayName: 'Evals',
						name: 'evals',
						type: 'boolean',
						default: false,
						description:
							'Include analysis evaluations and comments, when available. Either as PGN comments: `12. Bxf6 { [%eval 0.23] } a3 { [%eva...',
						routing: {
							send: {
								type: 'query',
								property: 'evals',
							},
						},
					},
					{
						displayName: 'Accuracy',
						name: 'accuracy',
						type: 'boolean',
						default: false,
						description:
							'Include [accuracy percent](https://lichess.org/page/accuracy) of each player, when available. Only available in JSON.',
						routing: {
							send: {
								type: 'query',
								property: 'accuracy',
							},
						},
					},
					{
						displayName: 'Opening',
						name: 'opening',
						type: 'boolean',
						default: false,
						description:
							'Include the opening name. Example: `[Opening "King\'s Gambit Accepted, King\'s Knight Gambit"]`',
						routing: {
							send: {
								type: 'query',
								property: 'opening',
							},
						},
					},
					{
						displayName: 'Division',
						name: 'division',
						type: 'boolean',
						default: false,
						description:
							'Plies which mark the beginning of the middlegame and endgame. Only available in JSON',
						routing: {
							send: {
								type: 'query',
								property: 'division',
							},
						},
					},
					{
						displayName: 'Literate',
						name: 'literate',
						type: 'boolean',
						default: false,
						description:
							'Insert textual annotations in the PGN about the opening, analysis variations, mistakes, and game termination. Example: `...',
						routing: {
							send: {
								type: 'query',
								property: 'literate',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['roundAddTime'],
					},
				},
			},
			{
				displayName: 'Seconds',
				name: 'seconds',
				type: 'string',
				default: '',
				required: true,
				description: 'How many seconds to give',
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['roundAddTime'],
					},
				},
			},
			{
				displayName: 'Users',
				name: 'users',
				type: 'string',
				default: '',
				required: true,
				description: 'Usernames separated with commas',
				placeholder: 'e.g. thibault,neio,lizen2,lizen3',
				routing: {
					send: {
						type: 'body',
						property: 'users',
					},
				},
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['adminChallengeTokens'],
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				required: true,
				description: 'User visible description of the token',
				placeholder: 'e.g. FIDE tournament XYZ',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
				displayOptions: {
					show: {
						resource: ['challenge'],
						operation: ['adminChallengeTokens'],
					},
				},
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['messaging'],
						operation: ['inboxUsername'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. Thank you for the game!',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['messaging'],
						operation: ['inboxUsername'],
					},
				},
			},
			{
				displayName: 'Fen',
				name: 'fen',
				type: 'string',
				default: '',
				required: true,
				description: 'FEN of the position',
				placeholder: 'e.g. r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3',
				routing: {
					send: {
						type: 'query',
						property: 'fen',
					},
				},
				displayOptions: {
					show: {
						resource: ['analysis'],
						operation: ['apiCloudEval'],
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
						resource: ['analysis'],
						operation: ['apiCloudEval'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Multi Pv',
						name: 'multiPv',
						type: 'number',
						default: 1,
						description: 'Number of variations',
						routing: {
							send: {
								type: 'query',
								property: 'multiPv',
							},
						},
					},
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'options',
						default: 'standard',
						description: 'Variant',
						options: [
							{
								name: 'Standard',
								value: 'standard',
							},
							{
								name: 'Chess960',
								value: 'chess960',
							},
							{
								name: 'Crazyhouse',
								value: 'crazyhouse',
							},
							{
								name: 'Antichess',
								value: 'antichess',
							},
							{
								name: 'Atomic',
								value: 'atomic',
							},
							{
								name: 'Horde',
								value: 'horde',
							},
							{
								name: 'King Of The Hill',
								value: 'kingOfTheHill',
							},
							{
								name: 'Racing Kings',
								value: 'racingKings',
							},
							{
								name: 'Three Check',
								value: 'threeCheck',
							},
							{
								name: 'From Position',
								value: 'fromPosition',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'variant',
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
				description: 'Display name of the engine',
				placeholder: 'e.g. Stockfish 15',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineCreate'],
					},
				},
			},
			{
				displayName: 'Max Threads',
				name: 'maxThreads',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum number of available threads',
				routing: {
					send: {
						type: 'body',
						property: 'maxThreads',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineCreate'],
					},
				},
			},
			{
				displayName: 'Max Hash',
				name: 'maxHash',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum available hash table size, in MiB',
				routing: {
					send: {
						type: 'body',
						property: 'maxHash',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineCreate'],
					},
				},
			},
			{
				displayName: 'Provider Secret',
				name: 'providerSecret',
				type: 'string',
				default: '',
				required: true,
				description:
					'A random token that can be used to [wait for analysis requests](#tag/External-engine/operation/apiExternalEngineAcquire)...',
				placeholder: 'e.g. Dee3uwieZei9ahpaici9bee2yahsai0K',
				routing: {
					send: {
						type: 'body',
						property: 'providerSecret',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineCreate'],
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
						resource: ['externalEngine'],
						operation: ['apiExternalEngineCreate'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Variants',
						name: 'variants',
						type: 'string',
						default: '',
						description: 'Optional list of supported chess variants',
						routing: {
							send: {
								type: 'body',
								property: 'variants',
							},
						},
					},
					{
						displayName: 'Provider Data',
						name: 'providerData',
						type: 'string',
						default: '',
						description:
							'Arbitrary data that the engine provider can use for identification or bookkeeping.  Users can read this information, but...',
						routing: {
							send: {
								type: 'body',
								property: 'providerData',
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
				description: 'The external engine id',
				placeholder: 'e.g. eei_aTKImBJOnv6j',
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineGet'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The external engine id',
				placeholder: 'e.g. eei_aTKImBJOnv6j',
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
					},
				},
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
				description: 'Display name of the engine',
				placeholder: 'e.g. Stockfish 15',
				routing: {
					send: {
						type: 'body',
						property: 'name',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
					},
				},
			},
			{
				displayName: 'Max Threads',
				name: 'maxThreads',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum number of available threads',
				routing: {
					send: {
						type: 'body',
						property: 'maxThreads',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
					},
				},
			},
			{
				displayName: 'Max Hash',
				name: 'maxHash',
				type: 'number',
				default: 0,
				required: true,
				description: 'Maximum available hash table size, in MiB',
				routing: {
					send: {
						type: 'body',
						property: 'maxHash',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
					},
				},
			},
			{
				displayName: 'Provider Secret',
				name: 'providerSecret',
				type: 'string',
				default: '',
				required: true,
				description:
					'A random token that can be used to [wait for analysis requests](#tag/External-engine/operation/apiExternalEngineAcquire)...',
				placeholder: 'e.g. Dee3uwieZei9ahpaici9bee2yahsai0K',
				routing: {
					send: {
						type: 'body',
						property: 'providerSecret',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
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
						resource: ['externalEngine'],
						operation: ['apiExternalEnginePut'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Variants',
						name: 'variants',
						type: 'string',
						default: '',
						description: 'Optional list of supported chess variants',
						routing: {
							send: {
								type: 'body',
								property: 'variants',
							},
						},
					},
					{
						displayName: 'Provider Data',
						name: 'providerData',
						type: 'string',
						default: '',
						description:
							'Arbitrary data that the engine provider can use for identification or bookkeeping.  Users can read this information, but...',
						routing: {
							send: {
								type: 'body',
								property: 'providerData',
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
				description: 'The external engine id',
				placeholder: 'e.g. eei_aTKImBJOnv6j',
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineDelete'],
					},
				},
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'string',
				default: '',
				required: true,
				description: 'The external engine id',
				placeholder: 'e.g. eei_aTKImBJOnv6j',
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineAnalyse'],
					},
				},
			},
			{
				displayName: 'Client Secret',
				name: 'clientSecret',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'e.g. ees_mdF2hK0hlKGSPeC6',
				routing: {
					send: {
						type: 'body',
						property: 'clientSecret',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineAnalyse'],
					},
				},
			},
			{
				displayName: 'Work',
				name: 'work',
				type: 'json',
				default: '{}',
				required: true,
				routing: {
					send: {
						type: 'body',
						property: 'work',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineAnalyse'],
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
						resource: ['externalEngine'],
						operation: ['apiExternalEngineAcquire'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Provider Secret',
						name: 'providerSecret',
						type: 'string',
						default: '',
						placeholder: 'e.g. Dee3uwieZei9ahpaici9bee2yahsai0K',
						routing: {
							send: {
								type: 'body',
								property: 'providerSecret',
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
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineSubmit'],
					},
				},
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'Analysis results',
				placeholder:
					'e.g. info multipv 1 depth 20 seldepth 30 time 1373 nodes 1494341 score cp 47 hashfull 594 nps 1088376 tbhits 0 pv d2d4 d7d5 c2c4 e7e6 b1c3 f8b4 c4d5 e6d5 g1f3 g8f6 c1g5 h7h6 g5f6 d8f6 d1b3 c7c5 e2e3 b8c6 d4c5 e8g8 f1d3',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['externalEngine'],
						operation: ['apiExternalEngineSubmit'],
					},
				},
			},
			{
				displayName: 'Response Type',
				name: 'response_type',
				type: 'string',
				default: '',
				required: true,
				description: 'Must be `code`',
				routing: {
					send: {
						type: 'query',
						property: 'response_type',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['oauth'],
					},
				},
			},
			{
				displayName: 'Client ID',
				name: 'client_id',
				type: 'string',
				default: '',
				required: true,
				description: 'Arbitrary identifier that uniquely identifies your application',
				placeholder: 'e.g. example.com',
				routing: {
					send: {
						type: 'query',
						property: 'client_id',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['oauth'],
					},
				},
			},
			{
				displayName: 'Redirect Uri',
				name: 'redirect_uri',
				type: 'string',
				default: '',
				required: true,
				description:
					'The absolute URL that the user should be redirected to with the authorization result',
				routing: {
					send: {
						type: 'query',
						property: 'redirect_uri',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['oauth'],
					},
				},
			},
			{
				displayName: 'Code Challenge Method',
				name: 'code_challenge_method',
				type: 'string',
				default: '',
				required: true,
				description: 'Must be `S256`',
				routing: {
					send: {
						type: 'query',
						property: 'code_challenge_method',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['oauth'],
					},
				},
			},
			{
				displayName: 'Code Challenge',
				name: 'code_challenge',
				type: 'string',
				default: '',
				required: true,
				description: 'Compute `BASE64URL(SHA256(code_verifier))`',
				routing: {
					send: {
						type: 'query',
						property: 'code_challenge',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['oauth'],
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
						resource: ['oAuth'],
						operation: ['oauth'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Scope',
						name: 'scope',
						type: 'string',
						default: '',
						description: 'Space separated list of requested OAuth scopes, if any',
						routing: {
							send: {
								type: 'query',
								property: 'scope',
							},
						},
					},
					{
						displayName: 'Username',
						name: 'username',
						type: 'string',
						default: '',
						description: 'Hint that you want the user to log in with a specific Lichess username',
						routing: {
							send: {
								type: 'query',
								property: 'username',
							},
						},
					},
					{
						displayName: 'State',
						name: 'state',
						type: 'string',
						default: '',
						description:
							'Arbitrary state that will be returned verbatim with the authorization result',
						routing: {
							send: {
								type: 'query',
								property: 'state',
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
						resource: ['oAuth'],
						operation: ['apiToken'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Grant Type',
						name: 'grant_type',
						type: 'string',
						default: '',
						description: 'Must be `authorization_code`',
						placeholder: 'e.g. authorization_code',
						routing: {
							send: {
								type: 'body',
								property: 'grant_type',
							},
						},
					},
					{
						displayName: 'Code',
						name: 'code',
						type: 'string',
						default: '',
						description:
							'The authorization code that was sent in the `code` parameter to your `redirect_uri`',
						placeholder: 'e.g. liu_iS1uOZg99Htmo58ex2jKgYziUfzsnAl0',
						routing: {
							send: {
								type: 'body',
								property: 'code',
							},
						},
					},
					{
						displayName: 'Code Verifier',
						name: 'code_verifier',
						type: 'string',
						default: '',
						description:
							'A `code_challenge` was used to request the authorization code. This must be the `code_verifier` it was derived from',
						placeholder:
							'e.g. Ry1rbGdOMTQtUjhOc0lmTnFKak1LTHV0NjlRMll2aXYtTThkQnlJRkRpaGwyQjh0ZDNFdzFPSG9KUlY4M1NrRzJ5ZHhUdjVZR08zLTZOT3dCN2xLfjZOXzU2WHk4SENP',
						routing: {
							send: {
								type: 'body',
								property: 'code_verifier',
							},
						},
					},
					{
						displayName: 'Redirect Uri',
						name: 'redirect_uri',
						type: 'string',
						default: '',
						description: 'Must match the `redirect_uri` used to request the authorization code',
						placeholder: 'e.g. http://example.com/',
						routing: {
							send: {
								type: 'body',
								property: 'redirect_uri',
							},
						},
					},
					{
						displayName: 'Client ID',
						name: 'client_id',
						type: 'string',
						default: '',
						description: 'Must match the `client_id` used to request the authorization code',
						placeholder: 'e.g. example.com',
						routing: {
							send: {
								type: 'body',
								property: 'client_id',
							},
						},
					},
				],
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				required: true,
				description: 'OAuth tokens separated by commas. Up to 1000',
				placeholder: 'e.g. lip_AvsS88TozFeSMEaoLN5c,lip_badToken',
				routing: {
					send: {
						type: 'body',
						property: 'text',
					},
				},
				displayOptions: {
					show: {
						resource: ['oAuth'],
						operation: ['tokenTest'],
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
						resource: ['openingExplorer'],
						operation: ['openingExplorerMaster'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description: 'FEN of the root position',
						placeholder: 'e.g. rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
						routing: {
							send: {
								type: 'query',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Play',
						name: 'play',
						type: 'string',
						default: '',
						description:
							'Comma separated sequence of legal moves in UCI notation. Play additional moves starting from `fen`. Required to find an ...',
						placeholder: 'e.g. d2d4,d7d5,c2c4,c7c6,c4d5',
						routing: {
							send: {
								type: 'query',
								property: 'play',
							},
						},
					},
					{
						displayName: 'Since',
						name: 'since',
						type: 'number',
						default: 1952,
						description: 'Include only games from this year or later',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Until',
						name: 'until',
						type: 'number',
						default: 0,
						description: 'Include only games from this year or earlier',
						routing: {
							send: {
								type: 'query',
								property: 'until',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'number',
						default: 12,
						description: 'Number of most common moves to display',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Top Games',
						name: 'topGames',
						type: 'number',
						default: 15,
						description: 'Number of top games to display',
						routing: {
							send: {
								type: 'query',
								property: 'topGames',
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
						resource: ['openingExplorer'],
						operation: ['openingExplorerLichess'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'options',
						default: 'standard',
						description: 'Variant',
						options: [
							{
								name: 'Standard',
								value: 'standard',
							},
							{
								name: 'Chess960',
								value: 'chess960',
							},
							{
								name: 'Crazyhouse',
								value: 'crazyhouse',
							},
							{
								name: 'Antichess',
								value: 'antichess',
							},
							{
								name: 'Atomic',
								value: 'atomic',
							},
							{
								name: 'Horde',
								value: 'horde',
							},
							{
								name: 'King Of The Hill',
								value: 'kingOfTheHill',
							},
							{
								name: 'Racing Kings',
								value: 'racingKings',
							},
							{
								name: 'Three Check',
								value: 'threeCheck',
							},
							{
								name: 'From Position',
								value: 'fromPosition',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description: 'FEN or EPD of the root position',
						placeholder: 'e.g. rnbqkbnr/ppp1pppp/8/3pP3/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2',
						routing: {
							send: {
								type: 'query',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Play',
						name: 'play',
						type: 'string',
						default: '',
						description:
							'Comma separated sequence of legal moves in UCI notation. Play additional moves starting from `fen`. Required to find an ...',
						placeholder: 'e.g. d2d4,d7d5,c2c4,c7c6,c4d5',
						routing: {
							send: {
								type: 'query',
								property: 'play',
							},
						},
					},
					{
						displayName: 'Speeds',
						name: 'speeds',
						type: 'string',
						default: '',
						description: 'Comma separated list of game speeds to filter by',
						routing: {
							send: {
								type: 'query',
								property: 'speeds',
							},
						},
					},
					{
						displayName: 'Ratings',
						name: 'ratings',
						type: 'json',
						default: '{}',
						description:
							'Comma separated list of ratings groups to filter by. Each group ranges from its value to the next higher group in the en...',
						routing: {
							send: {
								type: 'query',
								property: 'ratings',
							},
						},
					},
					{
						displayName: 'Since',
						name: 'since',
						type: 'string',
						default: '1952-01',
						description: 'Include only games from this month or later',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Until',
						name: 'until',
						type: 'string',
						default: '3000-12',
						description: 'Include only games from this month or earlier',
						routing: {
							send: {
								type: 'query',
								property: 'until',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'number',
						default: 12,
						description: 'Number of most common moves to display',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Top Games',
						name: 'topGames',
						type: 'number',
						default: 4,
						description: 'Number of top games to display',
						routing: {
							send: {
								type: 'query',
								property: 'topGames',
							},
						},
					},
					{
						displayName: 'Recent Games',
						name: 'recentGames',
						type: 'number',
						default: 4,
						description: 'Number of recent games to display',
						routing: {
							send: {
								type: 'query',
								property: 'recentGames',
							},
						},
					},
					{
						displayName: 'History',
						name: 'history',
						type: 'boolean',
						default: false,
						description: 'Optionally retrieve history',
						routing: {
							send: {
								type: 'query',
								property: 'history',
							},
						},
					},
				],
			},
			{
				displayName: 'Player',
				name: 'player',
				type: 'string',
				default: '',
				required: true,
				description: 'Username or ID of the player',
				placeholder: 'e.g. revoof',
				routing: {
					send: {
						type: 'query',
						property: 'player',
					},
				},
				displayOptions: {
					show: {
						resource: ['openingExplorer'],
						operation: ['openingExplorerPlayer'],
					},
				},
			},
			{
				displayName: 'Color',
				name: 'color',
				type: 'options',
				default: 'white',
				required: true,
				description: 'Look for games with *player* on the given side',
				options: [
					{
						name: 'White',
						value: 'white',
					},
					{
						name: 'Black',
						value: 'black',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'color',
					},
				},
				displayOptions: {
					show: {
						resource: ['openingExplorer'],
						operation: ['openingExplorerPlayer'],
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
						resource: ['openingExplorer'],
						operation: ['openingExplorerPlayer'],
					},
				},
				default: {},
				options: [
					{
						displayName: 'Variant',
						name: 'variant',
						type: 'options',
						default: 'standard',
						description: 'Variant',
						options: [
							{
								name: 'Standard',
								value: 'standard',
							},
							{
								name: 'Chess960',
								value: 'chess960',
							},
							{
								name: 'Crazyhouse',
								value: 'crazyhouse',
							},
							{
								name: 'Antichess',
								value: 'antichess',
							},
							{
								name: 'Atomic',
								value: 'atomic',
							},
							{
								name: 'Horde',
								value: 'horde',
							},
							{
								name: 'King Of The Hill',
								value: 'kingOfTheHill',
							},
							{
								name: 'Racing Kings',
								value: 'racingKings',
							},
							{
								name: 'Three Check',
								value: 'threeCheck',
							},
							{
								name: 'From Position',
								value: 'fromPosition',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'variant',
							},
						},
					},
					{
						displayName: 'Fen',
						name: 'fen',
						type: 'string',
						default: '',
						description: 'FEN of the root position',
						placeholder: 'e.g. rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
						routing: {
							send: {
								type: 'query',
								property: 'fen',
							},
						},
					},
					{
						displayName: 'Play',
						name: 'play',
						type: 'string',
						default: '',
						description:
							'Comma separated sequence of legal moves in UCI notation. Play additional moves starting from `fen`. Required to find an ...',
						placeholder: 'e.g. d2d4,d7d5',
						routing: {
							send: {
								type: 'query',
								property: 'play',
							},
						},
					},
					{
						displayName: 'Speeds',
						name: 'speeds',
						type: 'string',
						default: '',
						description: 'Comma separated list of game speeds to look for',
						routing: {
							send: {
								type: 'query',
								property: 'speeds',
							},
						},
					},
					{
						displayName: 'Modes',
						name: 'modes',
						type: 'string',
						default: '',
						description: 'Comma separated list of modes',
						routing: {
							send: {
								type: 'query',
								property: 'modes',
							},
						},
					},
					{
						displayName: 'Since',
						name: 'since',
						type: 'string',
						default: '1952-01',
						description: 'Include only games from this month or later',
						routing: {
							send: {
								type: 'query',
								property: 'since',
							},
						},
					},
					{
						displayName: 'Until',
						name: 'until',
						type: 'string',
						default: '3000-12',
						description: 'Include only games from this month or earlier',
						routing: {
							send: {
								type: 'query',
								property: 'until',
							},
						},
					},
					{
						displayName: 'Moves',
						name: 'moves',
						type: 'number',
						default: 0,
						description: 'Number of most common moves to display',
						routing: {
							send: {
								type: 'query',
								property: 'moves',
							},
						},
					},
					{
						displayName: 'Recent Games',
						name: 'recentGames',
						type: 'number',
						default: 8,
						description: 'Number of recent games to display',
						routing: {
							send: {
								type: 'query',
								property: 'recentGames',
							},
						},
					},
				],
			},
			{
				displayName: 'Game ID',
				name: 'gameId',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						resource: ['openingExplorer'],
						operation: ['openingExplorerMasterGame'],
					},
				},
			},
			{
				displayName: 'Fen',
				name: 'fen',
				type: 'string',
				default: '',
				required: true,
				description: 'FEN of the position. Underscores allowed',
				routing: {
					send: {
						type: 'query',
						property: 'fen',
					},
				},
				displayOptions: {
					show: {
						resource: ['tablebase'],
						operation: ['tablebaseStandard'],
					},
				},
			},
		],
	};
};