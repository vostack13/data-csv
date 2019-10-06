import 'core-js';
import 'regenerator-runtime/runtime';
import 'app/assets/variables.css';
import './style.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'app/redux/store';

ReactDOM['render'](
    <Provider store={store()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root'),
);
