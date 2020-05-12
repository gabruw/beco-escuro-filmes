//#region Imports

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import AppRoutes from './AppRoutes';

import './assets/styles/global.css';

//#endregion

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </Fragment>
    );
}

export default App;
