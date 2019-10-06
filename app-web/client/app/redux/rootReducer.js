import doSorting from 'app/helpers/doSorting';
import accounts from './accounts/reducers';
import account from './account/reducers';
import layout from './layout/reducers';
import auth from './auth/reducers';
import clients from './clients/reducers';
import tariffs from './tariffs/reducers';
import place from './place/reducers';
import places from './places/reducers';
import client from './client/reducers';
import entry from './entry/reducers';
import prepare from './prepare/reducers';
import {combineReducers} from 'redux';
import {createSelector} from 'reselect';

import _keyBy from 'lodash/keyBy';
import _findIndex from 'lodash/findIndex';
import _map from 'lodash/map';
import _some from 'lodash/some';
import _filter from 'lodash/filter';
import _includes from 'lodash/includes';

export default combineReducers({
    account,
    accounts,
    auth,
    client,
    clients,
    entry,
    layout,
    place,
    places,
    prepare,
    tariffs,
});

// --------- prepare

export const _prepareData = state => state.prepare.data;
export const _prepareLoading = state => state.prepare.loading;
export const _prepareError = state => state.prepare.error;

export const _layoutIsShowSidebar = state => state.layout.isShowSidebar;
export const _layoutNotificationsList = state => state.layout.notifications_list;

// --------- auth

export const _authIsAuthorized = state => state.auth.isAuthorized;
export const _authLoading = state => state.auth.loading;
export const _authError = state => state.auth.error;
export const _authClient = state => state.auth.authClient;

// --------- clients

export const _clientsDataList = state => state.clients.data;
export const _clientsLoading = state => state.clients.loading;
export const _clientsError = state => state.clients.error;
export const _clientsCurrentClientId = state => state.clients.currentClientId;
export const _clientsSortBy = state => state.clients.sortBy;
export const _clientsSearchString = state => state.clients.searchString;

export const _clientsSortedList = createSelector(
    _clientsDataList,
    _clientsSortBy,
    (clientsList, sortBy) => doSorting(clientsList, sortBy),
);

export const _clientsSearchList = createSelector(
    _clientsSortedList,
    _clientsSearchString,
    (clientsSortedList, searchString) => searchString
        ? (_filter(clientsSortedList, clientItem => (
            _includes(clientItem.name.toLowerCase(), searchString.toLowerCase())
        )))

        : clientsSortedList,
);

export const _currentClient = createSelector(
    _clientsDataList,
    _clientsCurrentClientId,

    (clientsList, currentsId) => {
        return clientsList[_findIndex(clientsList, o => String(o.id) === String(currentsId))]
    },
);

// --------- client

export const _clientPostAddNewData = state => state.client.add.data;
export const _clientPostAddNewLoading = state => state.client.add.loading;
export const _clientPostAddNewError = state => state.client.add.error;

export const _clientPutItemData = state => state.client.update.data;
export const _clientPutItemLoading = state => state.client.update.loading;
export const _clientPutItemError = state => state.client.update.error;

export const _clientDeleteItemData = state => state.client.deleteItem.data;
export const _clientDeleteItemLoading = state => state.client.deleteItem.loading;
export const _clientDeleteItemError = state => state.client.deleteItem.error;

// --------- tariffs

export const _tariffsData = state => state.tariffs.data;
export const _tariffsLoading = state => state.tariffs.loading;
export const _tariffsError = state => state.tariffs.error;

export const _tariffsSelectorsList = createSelector(
    _tariffsData,
    tariffsData => tariffsData.map(tariff => ({caption: tariff.name, value: tariff.id})),
);

export const _tariffsList = createSelector(
    _tariffsData,
    tariffsData => _keyBy(tariffsData, 'id'),
);

// --------- accounts

export const _accountsDataList = state => state.accounts.data;
export const _accountsLoading = state => state.accounts.loading;
export const _accountsError = state => state.accounts.error;
export const _accountsListSortBy = state => state.accounts.sortBy;

export const _accountsSortedList = createSelector(
    _accountsDataList,
    _accountsListSortBy,
    (accountsList, sortBy) => doSorting(accountsList, sortBy),
);

// --------- account

export const _accountGetItemData = state => state.account.getItem.data;
export const _accountGetItemLoading = state => state.account.getItem.loading;
export const _accountGetItemError = state => state.account.getItem.error;

export const _accountItemPlacesList = createSelector(
    _currentClient,
    _accountGetItemData,

    (placesClient, placesAccount) => {
        return _map(placesClient.places, placeItem => (
            {...placeItem, isLinked: _some(placesAccount.places, placeItem)}),
        )
    },
);

export const _accountPostAddNewData = state => state.account.add.data;
export const _accountPostAddNewLoading = state => state.account.add.loading;
export const _accountPostAddNewError = state => state.account.add.error;

export const _accountPutItemData = state => state.account.update.data;
export const _accountPutItemLoading = state => state.account.update.loading;
export const _accountPutItemError = state => state.account.update.error;

export const _accountDeleteItemData = state => state.account.deleteItem.data;
export const _accountDeleteItemLoading = state => state.account.deleteItem.loading;
export const _accountDeleteItemError = state => state.account.deleteItem.error;

// --------- places

export const _placesDataList = state => state.places.data;
export const _placesLoading = state => state.places.loading;
export const _placesError = state => state.places.error;
export const _placesListSortBy = state => state.places.sortBy;
export const _placesCurrentPlaceId = state => state.places.currentId;

export const _placesSortedList = createSelector(
    _placesDataList,
    _placesListSortBy,
    (placesList, sortBy) => doSorting(placesList, sortBy),
);

export const _currentPlace = createSelector(
    _placesDataList,
    _placesCurrentPlaceId,

    (placesList, currentId) => {
        return placesList[_findIndex(placesList, o => String(o.id) === String(currentId))]
    },
);

// --------- place

export const _placePostAddNewData = state => state.place.add.data;
export const _placePostAddNewLoading = state => state.place.add.loading;
export const _placePostAddNewError = state => state.place.add.error;

// --------- entry

export const _entryPostLinkToPlaceData = state => state.entry.link.data;
export const _entryPostLinkToPlaceLoading = state => state.entry.link.loading;
export const _entryPostLinkToPlaceError = state => state.entry.link.error;

export const _entryPostUnlinkToPlaceData = state => state.entry.unlink.data;
export const _entryPostUnlinkToPlaceLoading = state => state.entry.unlink.loading;
export const _entryPostUnlinkToPlaceError = state => state.entry.unlink.error;
