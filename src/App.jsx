//#region Imports

import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './AppRoutes';

//#endregion

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </React.Fragment>
    );
}

export default App;
