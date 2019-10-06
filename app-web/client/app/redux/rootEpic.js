import {combineEpics} from 'redux-observable';
import {getSignInEpic, getSignOutEpic} from 'app/redux/auth/epics';
import {getClientsListEpic} from 'app/redux/clients/epics';
import {getTariffsListEpic} from 'app/redux/tariffs/epics';
import {getAccountsListEpic} from 'app/redux/accounts/epics';
import {getPlacesListEpic} from 'app/redux/places/epics';
import {postPlaceAddNewEpic} from 'app/redux/place/add/epics';
import {postClientAddNewEpic} from 'app/redux/client/add/epics';
import {deleteClientItemEpic} from 'app/redux/client/delete/epics';
import {putClientItemEpic} from 'app/redux/client/update/epics';
import {getAccountItemEpic} from 'app/redux/account/getItem/epics';
import {postAccountAddNewEpic} from 'app/redux/account/add/epics';
import {deleteAccountItemEpic} from 'app/redux/account/delete/epics';
import {putAccountItemEpic} from 'app/redux/account/update/epics';
import {postEntryLinkToPlaceEpic} from 'app/redux/entry/link/epics';
import {postEntryUnlinkToPlaceEpic} from 'app/redux/entry/unlink/epics';
import {getPrepareEpic} from 'app/redux/prepare/epics';

export default combineEpics(
    deleteClientItemEpic,
    postClientAddNewEpic,
    postEntryLinkToPlaceEpic,
    postEntryUnlinkToPlaceEpic,
    getClientsListEpic,
    getSignInEpic,
    getSignOutEpic,
    getTariffsListEpic,
    getAccountsListEpic,
    getPlacesListEpic,
    postPlaceAddNewEpic,
    getPrepareEpic,
    putClientItemEpic,
    getAccountItemEpic,
    postAccountAddNewEpic,
    deleteAccountItemEpic,
    putAccountItemEpic,
);
