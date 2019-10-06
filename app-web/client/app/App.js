import {getPrepareFailure, getPrepareRequest} from 'app/redux/actions';
import Cookies from 'js-cookie';
import {Route, Switch} from 'react-router-dom';
import Login from 'app/Login';
import Main from 'app/Main';
import React from 'react';
import {Notification, Progress} from 'ui/index';
import {useDispatch, useSelector} from 'react-redux';
import {_prepareLoading} from 'app/redux/rootReducer';

const App = () => {
    const dispatch = useDispatch();
    const prepareLoading = useSelector(_prepareLoading);

    React.useEffect(() => {
        if (!prepareLoading.isLoaded)
            if (Cookies.get('access_key'))
                dispatch(getPrepareRequest());
            else
                dispatch(getPrepareFailure());

        return () => {}
    }, []);

    if (!prepareLoading.isLoaded)
        return prepareLoading.isLoading && <Progress variant='line' />;

    return <>
        <Notification />

        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={Main} />
        </Switch>
    </>
};

export default App;
