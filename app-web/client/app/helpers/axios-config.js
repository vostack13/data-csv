import axios from 'axios';

export const config = {
    baseURL: 'https://apiv3.toweco.ru',

    // baseURL: 'https://admin-api.toweco.ru',
    // baseURL: 'http://192.168.1.10:3333',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
};

export const axiosInstanceGlobal = axios.create(config);
