/* eslint-disable sort-keys */
export const tariffs = {
    statusError      : false,
    delayFetchResolve: 1000,

    get: {
        response: {
            status: 200,

            data: [
                {
                    id               : 1,
                    name             : 'Дешево и сердито',
                    free_time        : 604800,
                    max_account      : 2,
                    max_place        : 3,
                    price_base       : 999.9,
                    price_add_account: 100,
                    price_add_place  : 50,
                    price_one_account: 100,
                    price_one_place  : 50,
                },

                {
                    id               : 2,
                    name             : 'Огонь',
                    free_time        : 604800,
                    max_account      : 2,
                    max_place        : 3,
                    price_base       : 999.9,
                    price_add_account: 100,
                    price_add_place  : 50,
                    price_one_account: 100,
                    price_one_place  : 50,
                },

                {
                    id               : 3,
                    name             : 'Пушка',
                    free_time        : 604800,
                    max_account      : 2,
                    max_place        : 3,
                    price_base       : 999.9,
                    price_add_account: 100,
                    price_add_place  : 50,
                    price_one_account: 100,
                    price_one_place  : 50,
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
