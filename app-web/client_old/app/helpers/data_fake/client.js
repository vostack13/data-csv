/* eslint-disable sort-keys */
export const client = {
    statusError      : false,
    delayFetchResolve: 2000,

    post: {
        response: {
            status: 200,

            // data: [],

            data: [
                {
                    name           : 'Додо',
                    tariff_id      : 1,
                    phone          : '+7 800 999 8909',
                    email          : 'boss@company.ru',
                    comments       : 'Il buono, il brutto, il cattivo',
                    id             : 12344,
                    active         : true,
                    count_accounts : 3,
                    count_places   : 302,
                    last_login_time: 1522540800,
                    days_left      : 11,
                },

                {
                    name           : 'OneMore Pub',
                    tariff_id      : 2,
                    phone          : '+7 800 999 8909',
                    email          : 'boss@company.ru',
                    comments       : '',
                    id             : 12345,
                    active         : false,
                    count_accounts : 2,
                    count_places   : 29,
                    last_login_time: 1522540800,
                    days_left      : 1,
                },

                {
                    name           : 'Toweco',
                    tariff_id      : 3,
                    phone          : '+7 800 999 8909',
                    email          : 'boss@company.ru',
                    comments       : 'Для внутренних нужд',
                    id             : 12346,
                    active         : true,
                    count_accounts : 100,
                    count_places   : 2000,
                    last_login_time: 1522540800,
                    days_left      : 500,
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
