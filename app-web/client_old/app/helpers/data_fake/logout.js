/* eslint-disable sort-keys */
export const logout = {
    statusError      : false,
    delayFetchResolve: 2000,

    post: {
        response: {
            status: 200,
            data  : {error: 'no'},
        },

        error: {
            '401': {
                response: {
                    status: 403,
                    data  : {error: 'invalid access key'},
                },
            },
            '415': {
                response: {
                    status: 418,
                    data  : {error: 'invalid json'},
                },
            },
            '418': {
                response: {
                    status: 418,
                    data  : {error: 'more coffee!'},
                },
            },
            '426': {
                response: {
                    status: 418,
                    data  : {error: 'key update', new_access_key: '649629874098213'},
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
