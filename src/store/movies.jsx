//#region Imports

import React, { useReducer, createContext } from 'react';

//#endregion

const CONTEXT_TYPES = {
    ADD_CHECKED_MOVIE: 'movies/ADD_CHECKED_MOVIE',
    REMOVE_CHECKED_MOVIE: 'movies/REMOVE_CHECKED_MOVIE',
};

const INITIAL_STATE = {
    checkedMovies: [],
};

export const MovieContext = createContext(INITIAL_STATE);

export const useMovieReducer = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return { state, ...Creators(dispatch) };
};

export const MovieContextProvider = (props) => {
    const value = useMovieReducer();
    return <MovieContext.Provider value={value}>{props.children}</MovieContext.Provider>;
};

const reducer = (state, action) => {
    switch (action.type) {
        case CONTEXT_TYPES.ADD_CHECKED_MOVIE:
            return { ...state, checkedMovies: state.checkedMovies.concat(action.payload) };
        case CONTEXT_TYPES.REMOVE_CHECKED_MOVIE:
            return { ...state, checkedMovies: state.checkedMovies.filter((value) => value.id !== action.payload) };
        default:
            return state;
    }
};

const Creators = (dispatch) => ({
    addCheckedMovie: (movie) =>
        dispatch({
            type: CONTEXT_TYPES.ADD_CHECKED_MOVIE,
            payload: movie,
        }),
    removeCheckedMovie: (idMovie) =>
        dispatch({
            type: CONTEXT_TYPES.REMOVE_CHECKED_MOVIE,
            payload: idMovie,
        }),
});

export default MovieContext;
