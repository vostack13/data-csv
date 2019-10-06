import moment from "moment";

export default [
    {
        id               : '1201',
        name             : 'Кулинарная Лавка Братья Караваевы',
        is_admin         : true,
        last_entrance    : moment(),
        login            : 'karavaevi@mail.ru',
        connect_locations: 4,
        count_locations  : 4,
        email            : 'karavaevi@mail.ru',
        email_report     : 'wednesday',
        email_feed       : '3,4,5',
        telegram         : '-1001416437947',
        telegram_feed    : '0,1,2,3,4,5',

        locations        : [
            {id: '41001', name: 'Чайхона №1', address: 'Россия, Москва'},
            {id: '41002', name: 'Ресторан Piazza', address: 'Россия, Москва'},
            {id: '41003', name: 'Чайхона', address: 'Россия, Москва'},
            {id: '41004', name: 'Чайхона №1', address: 'Россия, Москва'},
            {id: '41005', name: 'Ресторан Piazza', address: 'Россия, Москва'},
        ],
    },
    {
        id               : '1202',
        name             : 'Чайхона №1',
        is_admin         : false,
        last_entrance    : moment(),
        login            : 'chai@mail.ru',
        connect_locations: 29999,
        count_locations  : 29999,
        email            : 'karavaevi@mail.ru',
        email_report     : false,
        email_feed       : '0,4,5',
        telegram         : '@chainomerone',
        telegram_feed    : '0,1,2,3,4,5',

        locations        : [
            {id: '41001', name: 'Чайхона №1', address: 'Россия, Москва'},
            {id: '41001', name: 'Ресторан Piazza', address: 'Россия, Москва'},
            {id: '41001', name: 'Чайхона', address: 'Россия, Москва'},
            {id: '41001', name: 'Чайхона №1', address: 'Россия, Москва'},
            {id: '41001', name: 'Ресторан Piazza', address: 'Россия, Москва'},
        ],
    },
];
