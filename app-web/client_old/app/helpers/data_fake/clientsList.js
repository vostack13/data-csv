import moment from "moment";

export default [
    {
        id             : '0001',
        name           : 'Додо',
        last_entrance  : moment(),
        count_accounts : 2,
        count_locations: 29,
        end_of_account : moment(),
        type           : 'full',
        status         : true,
        phone          : '+7 (980) 999 - 99 - 99',
        email          : 'dodo@test.com',
        comments       : 'додо пицца',
    },

    {
        id             : '0002',
        name           : 'OneMore Pub',
        last_entrance  : moment(),
        count_accounts : 2,
        count_locations: 29,
        end_of_account : moment(),
        type           : 'demo',
        status         : false,
        phone          : '+7 (980) 999 - 99 - 99',
        email          : 'dodo@test.com',
        comments       : 'Для внутренних нужд',
    },

    {
        id             : '0003',
        name           : 'Toweco',
        last_entrance  : moment(),
        count_accounts : 100,
        count_locations: 2000,
        end_of_account : moment(),
        type           : 'demo',
        status         : false,
        phone          : '+7 (980) 999 - 99 - 99',
        email          : 'dodo@test.com',
        comments       : 'Для внутренних нужд',
    },
];
