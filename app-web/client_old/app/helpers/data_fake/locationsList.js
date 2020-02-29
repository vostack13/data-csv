export default [
    {
        id     : '23001',
        name   : 'Чайхона №1',
        address: 'Москва, Остоженка. д.42/2',
        status : false,

        accounts         : [
            {id: '12001', name: 'ШЕФ Чайхона'},
            {id: '12002', name: 'Петров Чайхона'},
            {id: '12003', name: 'Иванов Чайхона'},
        ],

        logo_link: 'https://static.sovest.com/chaihona/chaihona420x300.png',

        providers: [
            {id: '34001', class: 'TO', name: 'Toweco'},
            {id: '34002', class: '2G', name: '2GIS'},
            {id: '34003', class: 'GL', name: 'Google'},
            {id: '34004', class: 'YA', name: 'Yandex'},
            {id: '34005', class: 'AF', name: 'Афиша.Еда'},
            {id: '34006', class: 'TR', name: 'Tripadvisor'},
            {id: '34007', class: 'ZN', name: 'Zoon'},
            {id: '34008', class: 'RC', name: 'Restoclub'},
            {id: '34009', class: 'TM', name: 'ToMesto'},
            {id: '34010', class: 'AC', name: 'Allcafe'},
            {id: '34011', class: 'FL', name: 'Flamp'},
            {id: '34012', class: 'YL', name: 'Yell'},
            {id: '34013', class: 'VD', name: 'Vashdosug'},
            {id: '34014', class: 'KG', name: 'KudaGo'},
            {id: '34015', class: 'FC', name: 'Foursquare'},
        ],
    },
    {
        id     : '23002',
        name   : 'Додо Пицца, соцсети',
        address: 'Воронеж, Карла Маркса, 67/1',
        status : false,

        accounts         : [
            {id: '12001', name: 'ШЕФ Чайхона'},
        ],

        logo_link: 'https://media-cdn.tripadvisor.com/media/photo-s/13/2a/f1/cd/caption.jpg',

        providers: [
            {id: '34016', class: 'FBM', name: 'Facebook'},
            {id: '34017', class: 'VKH', name: 'Вконтакте'},
            {id: '34018', class: 'IG', name: 'Instagram'},
        ],
    },
];
