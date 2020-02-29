/* eslint-disable sort-keys */
export const login = {
    statusError      : false,
    delayFetchResolve: 1000,

    post: {
        response: {
            status: 200,
            data  : {access_key: 'VsZkKur2CTGB9MezzzzzOXtK7tvVJgdUEMSwqwgY='},
        },

        error: {
            '403': {
                response: {
                    status: 403,
                    data  : {error: 'invalid login/password'},
                },
            },
            '418': {
                response: {
                    status: 418,
                    data  : {error: 'more coffee!'},
                },
            },
            '429': {
                response: {
                    status: 429,
                    data  : {error: 'too many sessions'},
                },
            },
        },
    },
};
