/* eslint-disable sort-keys */
import {accounts, login, clients, tariffs, places, logout} from './data_fake';

const getData = (model, method) => {
    return {
        response         : model[method].response,
        error            : model[method].error[model['statusError']],
        delayFetchResolve: model['delayFetchResolve'],
        isFetchError     : model['statusError'],
    }
};

export default ({url, method}) => {
    return new Promise((resolve, reject) => {
        let result;

        if (url === '/login')
            result = getData(login, method);

        if (url === '/logout')
            result = getData(logout, method);

        if (url === '/clients')
            result = getData(clients, method);

        if (url === '/tariffs')
            result = getData(tariffs, method);

        if (url.slice(0, 9) === '/accounts')
            result = getData(accounts, method);

        if (url.slice(0, 7) === '/places')
            result = getData(places, method);


        setTimeout(() => {
            return result.isFetchError ? reject(result.error) : resolve(result.response);
        }, result.delayFetchResolve || 1000)
    })
}
