//#region Imports

import { createStore } from 'redux';
import reducers from './reducer';

//#endregion

const store = createStore(reducers);

export default store;
