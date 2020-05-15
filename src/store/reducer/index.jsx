//#region Imports

import { combineReducers } from 'redux';

//#endregion

const reducers = combineReducers({
    moviesReducer: require('./movies').moviesReducer,
});

export default reducers;
