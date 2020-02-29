import _orderBy from 'lodash/orderBy';

export default (arrList, key, isDesc) => {
    return _orderBy(
        arrList,

        o => {
            const value = parseInt(o[key], 10);

            const r = isNaN(value)
                ? typeof o[key] === 'string' ? o[key].toLowerCase() : o[key]
                : value;

            return [r];
        },

        isDesc ? ['desc'] : ['asc']);
};
