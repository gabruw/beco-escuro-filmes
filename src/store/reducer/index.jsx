//#region Imports

import { combineReducers } from 'redux';

//#endregion

const reducers = combineReducers({
    moviesReducer: require('../movies/index').moviesReducer,
});

export default reducers;
