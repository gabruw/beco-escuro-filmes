//#region Imports

import { createContext } from 'react';

//#endregion

const INITIAL_STATE = {
    checkedMovies: [],
};

export const MoviesContext = createContext(INITIAL_STATE);

export const setCheckedInMovieContext = (newCheckedMovies) => {
    return (INITIAL_STATE.checkedMovies = newCheckedMovies);
};

export default MoviesContext;
