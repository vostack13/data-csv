/* eslint-disable sort-keys */
export const places = {
    statusError      : false,
    delayFetchResolve: 1000,

    get: {
        response: {
            status: 200,

            // data: [],

            data: [
                {
                    id       : 192266,
                    name     : 'Шаверма на все',
                    address  : 'Нижний Тупик, д.13, корп. 42 стр 52',
                    logo_link: 'https://static.sovest.com/chaihona/chaihona420x300.png',

                    providers: [
                        'YA',
                        'FL',
                        '2G',
                    ],

                    account: [
                        4554,
                        1124,
                        4542,
                    ],

                    latitude       : 55.7902,
                    longitude      : 37.679,
                    owner_client_id: 13,
                    closed         : false,
                },

                {
                    id       : 192267,
                    name     : 'Додо Пицца, соцсети',
                    address  : 'Нижний Тупик, д.13, корп. 42 стр 52',
                    logo_link: 'https://media-cdn.tripadvisor.com/media/photo-s/13/2a/f1/cd/caption.jpg',

                    providers: [
                        'FBH',
                        'VKH',
                        'IG',
                    ],

                    account: [
                        4554,
                    ],

                    latitude       : 55.7902,
                    longitude      : 37.679,
                    owner_client_id: 13,
                    closed         : true,
                },
            ],
        },

        error: {
            '401': {
                response: {
                    status: 401,
                    data  : {error: 'Invalid access key'},
                },
            },
            '403': {
                response: {
                    status: 403,
                    data  : {error: 'invalid login/password'},
                },
            },
            '409': {
                response: {
                    status: 409,
                    data  : {error: 'record already exists'},
                },
            },
            '412': {
                response: {
                    status: 412,
                    data  : {error: 'The requested object does not exist'},
                },
            },
            '415': {
                response: {
                    status: 415,
                    data  : {error: 'invalid in json'},
                },
            },
            '418': {
                response: {
                    status: 418,
                    data  : {error: 'more coffee!'},
                },
            },
            '423': {
                response: {
                    status: 423,
                    data  : {error: 'Locked'},
                },
            },
            '424': {
                response: {
                    status: 424,
                    data  : {error: 'No data required'},
                },
            },
            '503': {
                response: {
                    status: 503,
                    data  : {error: 'DB error'},
                },
            },
        },
    },
};
