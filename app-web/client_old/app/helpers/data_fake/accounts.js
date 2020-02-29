/* eslint-disable sort-keys */
export const accounts = {
    statusError      : false,
    delayFetchResolve: 1000,

    get: {
        response: {
            status: 200,

            // data: [],

            data: [
                {
                    login                : 'karavaevi@mail.ru',
                    id_client            : 1,
                    name                 : 'Кулинарная Лавка Братья Караваевы',
                    admin                : true,
                    day_for_weekly_report: 0,

                    email_send_rating: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                    ],

                    telegram: '12323012-322',

                    telegram_send_rating: [
                        1,
                        2,
                        3,
                    ],

                    id             : 22342,
                    last_login_time: 1557154808604,
                    current_ip     : '127.0.0.1',
                    count_places   : 22,
                },

                {
                    login                : 'vasya@company.net',
                    id_client            : 1,
                    name                 : 'Василий Макарыч',
                    admin                : true,
                    day_for_weekly_report: 1,

                    email_send_rating: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                    ],

                    telegram: '12323012-322',

                    telegram_send_rating: [
                        1,
                        2,
                        3,
                    ],

                    id             : 22343,
                    last_login_time: 1557154808604,
                    current_ip     : '127.0.0.1',
                    count_places   : 22,
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
