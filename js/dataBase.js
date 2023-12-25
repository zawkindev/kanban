const boardData = {
    boards: [
        {
            id: '1',
            name: 'Platform Launch',
            columns: [
                {
                    name: 'Todo',
                    tasks: [
                        {
                            id: '13ba62ad-8896-4951-b233-ab7439c0896c',
                            title: 'Build UI for search',
                            description: '',
                            status: 'Todo',
                            subtasks: [{title: 'Search page', isCompleted: false}],
                        },
                        {
                            id: '165b6b33-c592-4adc-9475-538d038c01d0',
                            title: 'Build settings UI',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Account page', isCompleted: false},
                                {title: 'Billing page', isCompleted: false},
                            ],
                        },
                        {
                            id: '0065b203-f4de-46c8-ac19-0accc7e85a58',
                            title: 'QA and test all major user journeys',
                            description:
                                'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Internal testing', isCompleted: false},
                                {title: 'External testing', isCompleted: false},
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                }, {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Doing',
                    tasks: [
                        {
                            id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
                            title: 'Design settings and search pages',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Settings - Account page', isCompleted: true},
                                {title: 'Settings - Billing page', isCompleted: true},
                                {title: 'Search page', isCompleted: false},
                            ],
                        },
                        {
                            id: '4a934216-0b96-475d-8284-d027e8657df3',
                            title: 'Build UI for onboarding flow',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
                            title: 'Add account management endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Upgrade plan', isCompleted: true},
                                {title: 'Cancel plan', isCompleted: true},
                                {title: 'Update payment method', isCompleted: false},
                            ],
                        },
                        {
                            id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
                            title: 'Design onboarding flow',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Sign up page', isCompleted: true},
                                {title: 'Sign in page', isCompleted: false},
                                {title: 'Welcome page', isCompleted: false},
                            ],
                        },
                        {
                            id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
                            title: 'Add search enpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Add search endpoint', isCompleted: true},
                                {title: 'Define search filters', isCompleted: false},
                            ],
                        },
                        {
                            id: '790c810b-e300-4f7c-9359-f44b73184baa',
                            title: 'Add authentication endpoints',
                            description: '',
                            status: 'Doing',
                            subtasks: [
                                {title: 'Define user model', isCompleted: true},
                                {title: 'Add auth endpoints', isCompleted: false},
                            ],
                        },
                        {
                            id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
                            title:
                                'Research pricing points of various competitors and trial different business models',
                            description:
                                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            status: 'Doing',
                            subtasks: [
                                {
                                    title: 'Research competitor pricing and business models',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Outline a business model that works for our solution',
                                    isCompleted: false,
                                },
                                {
                                    title:
                                        'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'Done',
                    tasks: [
                        {
                            id: 'c1af8e06-e7e8-49c7-9851-f7ea1fdb73b9',
                            title: 'Conduct 5 wireframe tests',
                            description:
                                'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
                            status: 'Done',
                            subtasks: [
                                {
                                    title: 'Complete 5 wireframe prototype tests',
                                    isCompleted: true,
                                },
                            ],
                        },
                        {
                            id: '51c18214-dbd6-4baf-99e8-f94fbdef0814',
                            title: 'Create wireframe prototype',
                            description:
                                'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
                            status: 'Done',
                            subtasks: [
                                {
                                    title: 'Create clickable wireframe prototype in Balsamiq',
                                    isCompleted: true,
                                },
                            ],
                        },
                        {
                            id: 'd408b2f5-1238-4ebf-a159-4ef1d2dafa3b',
                            title: 'Review results of usability tests and iterate',
                            description:
                                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                            status: 'Done',
                            subtasks: [
                                {
                                    title:
                                        'Meet to review notes from previous tests and plan changes',
                                    isCompleted: true,
                                },
                                {
                                    title: 'Make changes to paper prototypes',
                                    isCompleted: true,
                                },
                                {title: 'Conduct 5 usability tests', isCompleted: true},
                            ],
                        },
                        {
                            id: 'b02f04ff-b50e-41a2-bf16-af05e8da83ec',
                            title:
                                'Create paper prototypes and conduct 10 usability tests with potential customers',
                            description: '',
                            status: 'Done',
                            subtasks: [
                                {
                                    title: 'Create paper prototypes for version one',
                                    isCompleted: true,
                                },
                                {title: 'Complete 10 usability tests', isCompleted: true},
                            ],
                        },
                        {
                            id: '05f68021-21ee-4368-9972-7cdd426785c8',
                            title: 'Market discovery',
                            description:
                                'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
                            status: 'Done',
                            subtasks: [
                                {
                                    title: 'Interview 10 prospective customers',
                                    isCompleted: true,
                                },
                            ],
                        },
                        {
                            id: '6fa0ac4e-1f4e-4975-bc78-ecae9e19ce5b',
                            title: 'Competitor analysis',
                            description: '',
                            status: 'Done',
                            subtasks: [
                                {
                                    title: 'Find direct and indirect competitors',
                                    isCompleted: true,
                                },
                                {
                                    title: 'SWOT analysis for each competitor',
                                    isCompleted: true,
                                },
                            ],
                        },
                        {
                            id: '42013358-5841-4fac-9138-6bdff385d643',
                            title: 'Research the market',
                            description:
                                'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
                            status: 'Done',
                            subtasks: [
                                {title: 'Write up research analysis', isCompleted: true},
                                {title: 'Calculate TAM', isCompleted: true},
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: '2',
            name: 'Marketing Plan',
            columns: [
                {
                    name: 'Todo',
                    tasks: [
                        {
                            id: '2dbea4db-61c2-44bd-930c-d00e9f43e3fe',
                            title: 'Plan Product Hunt launch',
                            description: '',
                            status: 'Todo',
                            subtasks: [
                                {title: 'Find hunter', isCompleted: false},
                                {title: 'Gather assets', isCompleted: false},
                                {title: 'Draft product page', isCompleted: false},
                                {title: 'Notify customers', isCompleted: false},
                                {title: 'Notify network', isCompleted: false},
                                {title: 'Launch!', isCompleted: false},
                            ],
                        },
                        {
                            id: 'b3e6034a-55b2-443c-8c47-2d83b0a82ec7',
                            title: 'Share on Show HN',
                            description: '',
                            status: '',
                            subtasks: [
                                {title: 'Draft out HN post', isCompleted: false},
                                {title: 'Get feedback and refine', isCompleted: false},
                                {title: 'Publish post', isCompleted: false},
                            ],
                        },
                        {
                            id: '2a1b61bf-0092-483a-b6e8-1a75b73cf185',
                            title: 'Write launch article to publish on multiple channels',
                            description: '',
                            status: '',
                            subtasks: [
                                {title: 'Write article', isCompleted: false},
                                {title: 'Publish on LinkedIn', isCompleted: false},
                                {title: 'Publish on Inndie Hackers', isCompleted: false},
                                {title: 'Publish on Medium', isCompleted: false},
                            ],
                        },
                    ],
                },
                {name: 'Doing', tasks: []},
                {name: 'Done', tasks: []},
            ],
        },
        {
            id: '3',
            name: 'Roadmap',
            columns: [
                {
                    name: 'Now',
                    tasks: [
                        {
                            id: 'ac713791-b937-440a-8caf-0b178fc45720',
                            title: 'Launch version one',
                            description: '',
                            status: '',
                            subtasks: [
                                {
                                    title: 'Launch privately to our waitlist',
                                    isCompleted: false,
                                },
                                {
                                    title: 'Launch publicly on PH, HN, etc.',
                                    isCompleted: false,
                                },
                            ],
                        },
                        {
                            id: '260d9248-4f73-459f-93e4-10e975fc9929',
                            title: 'Review early feedback and plan next steps for roadmap',
                            description:
                                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                            status: '',
                            subtasks: [
                                {title: 'Interview 10 customers', isCompleted: false},
                                {
                                    title: 'Review common customer pain points and suggestions',
                                    isCompleted: false,
                                },
                                {
                                    title: 'Outline next steps for our roadmap',
                                    isCompleted: false,
                                },
                            ],
                        },
                    ],
                },
                {name: 'Next', tasks: []},
                {name: 'Later', tasks: []},
            ],
        },
    ],
    selectedBoard: 0,
    selectedColumn: 0,
    selectedTask: 0,
};

const boardList = document.querySelector(".board-list")


function renderBoard(boardId) {
    // Check if boardData.boards is an array
    if (!Array.isArray(boardData.boards)) {
        console.error('Invalid boardData.boards:', boardData.boards)
        return
    }

    // Find the board by ID
    const board = boardData.boards.find((board) => board.id === boardId)

    // Check if the board is found
    if (!board) {
        console.error(`Board with id ${boardId} not found.`)
        return
    }

    // Check if board.id is defined and not null
    if (board.id === undefined || board.id === null) {
        console.error('Invalid board ID:', board.id)
        return
    }

    const isBoardRendered = document.getElementById(board.id) !== null

    // Update the board list (assuming boardList is a valid reference)
    boardList.innerHTML = generateKanbanBoardNames(boardData)

    // Render the selected board only if it's not already rendered
    if (!isBoardRendered) {
        // Assuming playGround is a valid reference
        playGround.innerHTML = generateKanbanBoard(board)

        // Update the selected board in boardData
        boardData.selectedBoard = board.id
        boardData.selectedColumn = board.columns[0].id
        // Highlight the active link in the board list
        const boardLinks = document.querySelectorAll('.board__link')
        boardLinks.forEach((link) => {
            link.classList.remove('active')
            if (link.getAttribute('data-board-id') === board.id) {
                link.classList.add('active')
            }
        })
    }

    console.log(boardData.selectedBoard)
}

function generateUniqueId() {
    return Date.now().toString(36)
}

function generateStatusToDropdown(status) {
    return `
  <li class="dropdown-option cursor-pointer p-3 hover:bg-content-color duration-200">
    <span class="option-text font-medium text-[13px] leading-[23px] text-[#828FA3]">
      ${status}
    </span>
  </li>
  `
}

function generateTaskCard(task) {
    return `
    <div
      modal-id="${task.id}"
      class="card duration-200 shadow-lg bg-content-color w-[280px] py-6 px-4 rounded-lg font-bold hover:shadow-md hover:cursor-pointer subpixel-antialiased"
      onclick="openTaskModal('${task.id}')"
    >
      <p class="card__title text-color capitalize">${task.title}</p>
      <p class="card__status text-slate-500">${
        task.subtasks.filter((subtask) => !subtask.isCompleted).length
    } of ${task.subtasks.length} substasks</p>
    </div>
  `
}

function openTaskModal(taskId) {
    // Find the task with the given ID from boardData
    const task = findTaskById(taskId)
    selectedBoard = boardData.selectedBoard

    const statusValues = extractStatusValues(boardData, selectedBoard)
    const dropdownOptions = statusValues.map(generateStatusToDropdown).join('')

    // Update the HTML content of the dropdown
    const dropdownElement = document?.querySelector('.dropdown-options')

    if (dropdownElement) {
        dropdownElement.innerHTML = dropdownOptions
    }

    // Ensure sBtnText is properly defined here (modify as needed)
    const sBtnText = document.querySelector('.dBtn-text')

    // Open the modal with the task data
    if (task) {
        // Generate the modal HTML
        const modalHtml = generateTaskModal(task, dropdownElement, statusValues)

        // Open the modal with the generated HTML
        openModal('open-task-modal', boardData.selectedBoard)

        // Update the HTML content of the task modal
        const taskModal = document.getElementById('open-task-modal')
        taskModal.innerHTML = modalHtml

        // Setup the dropdown for the task modal
        setupDropdown(taskModal.querySelector('.dropdown-menu'), task)
    }
}

function deleteTask(taskId) {
    console.log(taskId)
    // Find the board and column that contain the task
    for (const board of boardData.boards) {
        console.log(board)
        for (const column of board.columns) {
            console.log(column)
            const taskIndex = column.tasks.findIndex((task) => task.id === taskId)
            console.log(taskIndex)
            if (taskIndex !== -1) {
                // Remove the task from the column
                column.tasks.splice(taskIndex, 1)

                // If the column becomes empty, remove the column
                if (column.tasks.length === 0) {
                    const columnIndex = board.columns.indexOf(column)
                    board.columns.splice(columnIndex, 1)
                }

                // If the board becomes empty, remove the board
                if (board.columns.length === 0) {
                    const boardIndex = boardData.boards.indexOf(board)
                    boardData.boards.splice(boardIndex, 1)
                }

                // Assuming you have a function to update the UI after deletion
                renderBoard(renderBoard.selectedBoard)

                // Exit the function once the task is deleted
                return
            }
        }

        closeModal('open-modal-button')
    }

    // Log a message if the task is not found (for debugging purposes)
    console.warn(`Task with ID ${taskId} not found.`)
}

function populateEditModal(task) {
    // This is a generic example, you should replace it with your actual logic
    const titleInput = document.getElementById('edit-task-title')
    const descriptionInput = document.getElementById('edit-task-description')

    // Populate the modal inputs with task details
    titleInput.value = task.title
    descriptionInput.value = task.description
    // ... (populate other fields as needed)
}


function editTask(taskId) {
    // Find the task by ID
    const task = findTaskById(taskId)

    // Populate the edit modal with task details
    populateEditModal(task)
    closeModal('open-task-modal')
    // Open the edit modal
    openModal('edit-task-modal')

    // Handle the "Save Changes" button click
    const saveChangesButton = document.getElementById('save-changes-button')
    saveChangesButton.addEventListener('click', () => {
        saveChanges(taskId)
    })
}

function saveChanges(taskId) {
    // Get the updated values from the modal inputs
    const titleInput = document.getElementById('edit-task-title')
    const descriptionInput = document.getElementById('edit-task-description')

    // Validate the inputs if needed
    // ...

    // Update the task in the data structure
    const task = findTaskById(taskId)
    task.title = titleInput.value
    task.description = descriptionInput.value
    // ...

    // Optionally, trigger a function to update the UI with the modified data
    updateUI()

    // Close the edit modal
    closeModal('edit-task-modal')
}

// Function to find a task by ID

// Function to update the UI with the modified data
function updateUI() {
    // Implement your logic to update the UI with the modified data
    renderBoard(boardData.selectedBoard)
}

function generateTaskModal(task, dropdownElement, statusValues) {
    // Extract task details
    const taskName = task.title
    const taskDescription = task.description || 'No description available'
    const subtasksCount = task.subtasks.length
    const completedSubtasksCount = task.subtasks.filter(
        (subtask) => subtask.isCompleted,
    ).length

    // Generate unique IDs for subtasks and update boardData
    const subtasksWithIds = task.subtasks.map((subtask) => {
        subtask.id = generateUniqueIdFromTitle(subtask.title) // Update subtask ID in boardData
        return subtask
    })

    // Update boardData with modified subtasks
    const board = boardData.boards.find((board) =>
        board.columns
            .flatMap((column) => column.tasks)
            .flatMap((t) => t.subtasks)
            .some((s) => s.id === task.subtasks[0].id),
    )

    if (board) {
        const column = board.columns.find((column) =>
            column.tasks.some((t) => t.subtasks[0].id === task.subtasks[0].id),
        )

        if (column) {
            const taskToUpdate = column.tasks.find(
                (t) => t.subtasks[0].id === task.subtasks[0].id,
            )

            if (taskToUpdate) {
                taskToUpdate.subtasks = subtasksWithIds
            }
        }
    }

    // Generate subtasks HTML
    const subtasksHtml = subtasksWithIds
        .map((subtask) => generateSubtaskItem(subtask))
        .join('')

    // Modal HTML
    const modalHtml = `
  <div class="h-full">
    <div class="flex items-center gap-4 justify-between mb-6">
      <button class="edit-task text-white font-bold w-full hover:opacity-80 bg-primary-color duration-100 rounded-full p-4" onclick="editTask('${
        task.id
    }')">Edit Board</button>
      <button class="delete-task font-bold bg-danger-color hover:opacity-80 duration-100 rounded-full w-full p-4" onclick="deleteTask('${
        task.id
    }')">Delete Board</button>
    </div>

    <div>
      <h3 class="text-color text-[18px] font-bold">${taskName}</h3>
    </div>
    <div class="mt-6 text-[#828FA3] font-bold tracking-wide text-[13px]">${taskDescription}</div>
    <div class="relative form-label flex flex-col gap-2 text-gray-color font-plus-jakarta-sans font-bold text-[12px] leading-5">
      <h3>Subtasks (${completedSubtasksCount} of ${subtasksCount})</h3>
      <div class="subtasks mt-6 flex flex-col bg-page-color">
        ${subtasksHtml}
      </div>

      <div class="dropdown">
        <div class="dropdown-menu relative w-full">
          <div class="dropdown-btn status min-w-full w-full justify-between flex items-center px-4 py-2 rounded border focus:outline-none active:border-[#635FC7] group">
            <span class="dBtn-text m-0 text-gray-color cursor-pointer transition duration-400 ease-in-out text-[13px] leading-6">${
        task.status
    }</span>
            <span class="dropdown-sign">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path d="M0.79834 1.54858L5.49682 6.24707L10.1953 1.54858" stroke="#635FC7" stroke-width="2"/>
              </svg>
            </span>
          </div>
          ${dropdownElement ? dropdownElement.outerHTML : ''}
        </div>
      </div>
    </div>
  </div>
`
    // Get the dropdown options
    const dropdownOptions = statusValues.map(generateStatusToDropdown).join('')

    // Set up the dropdown for the task modal
    const dropdownMenu = dropdownElement.querySelector('.dropdown-menu')
    if (dropdownMenu) {
        dropdownMenu.innerHTML = dropdownOptions
        setupDropdown(dropdownMenu, task)
    }

    return modalHtml
}

function updateTaskStatus(task, newStatus) {
    // Update the task status in boardData
    const board = boardData.boards.find((board) =>
        board.columns
            .flatMap((column) => column.tasks)
            .some((t) => t.subtasks[0].id === task.subtasks[0].id),
    )

    if (board) {
        const column = board.columns.find((column) =>
            column.tasks.some((t) => t.subtasks[0].id === task.subtasks[0].id),
        )

        if (column) {
            const taskToUpdate = column.tasks.find(
                (t) => t.subtasks[0].id === task.subtasks[0].id,
            )

            if (taskToUpdate) {
                console.log(
                    `Updating task status from ${taskToUpdate.status} to ${newStatus}`,
                )
                taskToUpdate.status = newStatus
            }
        }
    }

    // Log the current state of the boardData for debugging
    console.log('Updated boardData:', boardData)

    // Render the updated board
    renderBoard(boardData.selectedBoard)
}

function toggleSubtaskCompleted(subtaskId) {
    // Find the corresponding subtask in the data structure
    const subtask = findSubtaskById(subtaskId)

    // Toggle the isCompleted property
    if (subtask) {
        subtask.isCompleted = !subtask.isCompleted

        // Find the task containing the subtask in the data structure
        const taskContainingSubtask = findTaskContainingSubtask(subtask)

        if (taskContainingSubtask) {
            // Find the column containing the task in the data structure
            const columnContainingTask = findColumnContainingTask(
                taskContainingSubtask,
            )

            if (columnContainingTask) {
                // Find the board containing the column in the data structure
                const boardContainingColumn =
                    findBoardContainingColumn(columnContainingTask)

                if (boardContainingColumn) {
                    // Update the boardData with the modified structure
                    const boardIndex = boardData.boards.findIndex(
                        (board) => board === boardContainingColumn,
                    )
                    const columnIndex = boardContainingColumn.columns.findIndex(
                        (column) => column === columnContainingTask,
                    )
                    const taskIndex = columnContainingTask.tasks.findIndex(
                        (task) => task === taskContainingSubtask,
                    )

                    boardData.boards[boardIndex].columns[columnIndex].tasks[taskIndex] =
                        taskContainingSubtask

                    // Update the UI
                    updateSubtaskUI(subtask)
                }
            }
        }
    }

    // Update the UI to reflect the new state
    updateSubtaskUI(subtask)

    // Render the board to reflect the changes
    renderBoard(boardData.selectedBoard)
}

// Function to find the task containing a subtask
function findTaskContainingSubtask(subtask) {
    for (const board of boardData.boards) {
        for (const column of board.columns) {
            for (const task of column.tasks) {
                if (task.subtasks.includes(subtask)) {
                    return task
                }
            }
        }
    }
    return null
}

// Function to find the column containing a task
function findColumnContainingTask(task) {
    for (const board of boardData.boards) {
        for (const column of board.columns) {
            if (column.tasks.includes(task)) {
                return column
            }
        }
    }
    return null
}

// Function to find the board containing a column
function findBoardContainingColumn(column) {
    for (const board of boardData.boards) {
        if (board.columns.includes(column)) {
            return board
        }
    }
    return null
}

// Update the updateSubtaskUI function
function updateSubtaskUI(subtask) {
    const checkbox = document.getElementById(subtask.id)
    console.log(subtask)
    // Update the checkbox state
    if (checkbox) {
        checkbox.checked = subtask.isCompleted
    }

    // You can add additional UI updates here as needed
}

// Assume you have a function to find a subtask by title
function findSubtaskById(subtaskId) {
    // Implement your logic to find the subtask by ID in your data structure
    // For example, you can use boardData to find the subtask
    // Replace this with your actual implementation

    return boardData.boards
        .flatMap((board) => board.columns)
        .flatMap((column) => column.tasks)
        .flatMap((task) => task.subtasks)
        .find((subtask) => subtask.id === subtaskId)
}

function findTaskById(taskId) {
    // Loop through boards to find the task with the given ID
    for (const board of boardData.boards) {
        for (const column of board.columns) {
            const task = column.tasks.find((task) => task.id === taskId)
            if (task) {
                return task
            }
        }
    }
    return null // Task not found
}

function generateUniqueIdFromTitle(title) {
    // Use a hash function or any unique ID generation method based on the title
    // For simplicity, let's use a basic hash function for illustration
    const hash = title
        .split('')
        .reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) | 0, 0)
    return `subtask-${hash}`
}

function generateSubtaskItem(subtask) {
    // Generate HTML for each subtask
    return `
    <div class="flex items-center p-3 gap-4 cursor-pointer relative hover:bg-[635fc740] hover:transition duration-200 active:ease-in" onclick="toggleSubtaskCompleted('${
        subtask.id
    }')">
      <i class="icon-tick checkbox-icon absolute top-4 text-white left-4 scale-1 duration-150"></i>
      <input
        type="checkbox"
        id="${subtask.id}"
        class="checkbox-input relative h-4 w-4 bg-white bg-text-color rounded-[2px] appearance-none border-[1px] border-solid border-[rgba(130, 143, 163, 0.25)] cursor-pointer checked:bg-primary-color rounded-[2px]"
        ${subtask.isCompleted ? 'checked' : ''}
      />
      <label
        for="${subtask.id}"
        class="text-color pointer-events-none cursor-pointer w-full font-bold text-[12px] leading-normal"
      >${subtask.title}</label>
    </div>
  `
}

function generateStatusDropdown(task) {
    const columnNames = boardData.boards[boardData.selectedBoard].columns.map(
        (column) => column.name,
    )
    console.log()
    const statusOptionsHtml = columnNames
        .map((status) => {
            const isActive = task.status === status ? 'active' : ''
            return `
        <li class="dropdown-option cursor-pointer p-3 hover:bg-content-color duration-200 ${isActive}">
          <span class="option-text font-medium text-[13px] leading-[23px] text-[#828FA3]">
            ${status}
          </span>
        </li>
      `
        })
        .join('')

    return `
    <div class="dropdown">
      <div class="dropdown-menu relative w-full">
        <div class="dropdown-btn status min-w-full w-full justify-between flex items-center px-4 py-2 rounded border focus:outline-none active:border-[#635FC7] group">
          <span class="dBtn-text m-0 text-gray-color cursor-pointer transition duration-400 ease-in-out text-[13px] leading-6">
            ${task.status}
          </span>
          <span class="dropdown-sign">
            <svg
              class="ml-10"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
            >
              <path
                d="M0.79834 1.54858L5.49682 6.24707L10.1953 1.54858"
                stroke="#635FC7"
                stroke-width="2"
              />
            </svg>
          </span>
        </div>
        <ul class="dropdown-options active w-full hidden mt-2 rounded bg-page-color">
          ${statusOptionsHtml}
        </ul>
      </div>
    </div>
  `
}

function generateColumn(column) {
    const tasksHtml = column.tasks.map((task) => generateTaskCard(task)).join('')
    return `
    <ul class="column w-[280px] h-full">
      <h3 class="column__header mb-6 text-[#828fa3] flex items-center gap-3">
        <span class="w-4 h-4 bg-primary-color rounded-full"></span>
        <span class="tracking-widest text-sm font-bold">${column.name} (${column.tasks.length})</span>
      </h3>
      <div class="flex items-center flex-col gap-5">
        ${tasksHtml}
      </div>
    </ul>
  `
}

function generateKanbanBoardName(board) {
    return `
    <li>
      <button 
        data-board-id="${board.id}"
        class="btn board__link w-full flex items-center gap-4 text-[#828fa3] rounded-r-full text-left font-plus-jakarta-sans font-bold cursor-pointer transition duration-200 ease-in-out text-[15px] focus:outline-none hover:bg-btn-hover-color hover:text-primary-color md:mr-6 p-[10px] md:py-4 px-6"
        role="button"
      >
        <i class="icon-layout"></i>
        <span>${board.name}</span>
      </button>
    </li>
  `
}

function generateKanbanBoardNames(boardData) {
    return boardData.boards
        .map((board) => generateKanbanBoardName(board))
        .join('')
}

function generateKanbanBoard(board) {
    if (!board || !board.columns) {
        console.error('Invalid board data:', board)
        return '' // Return an empty string or handle the error appropriately
    }

    const columnsHtml = board.columns
        .map((column) => generateColumn(column))
        .join('')

    return `
    <ul id="${board.id}" class="kanban-board flex p-6 gap-6 h-full mb-14" role="list">
      ${columnsHtml}
    </ul>
  `
}

boardList.addEventListener('click', (event) => {
    event.preventDefault()
    const targetLink = event.target.closest('.board__link')
    if (targetLink) {
        const boardId = targetLink.getAttribute('data-board-id')
        renderBoard(boardId)
    }
})

boardList.innerHTML = generateKanbanBoardNames(boardData)

const numberOfCreatedBoards = document.querySelector('.numberOfCreatedBoards')
numberOfCreatedBoards.textContent = `All boards (${boardData.boards.length})`

if (boardData && boardData.boards.length > 0) {
    const initialBoardId = boardData.boards[0].id
    renderBoard(initialBoardId)
}

