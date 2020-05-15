const MOVIE_TYPES = {
    ADD_MOVIE_: 'movies/ADD_MOVIE',
    REMOVE_MOVIE: 'movies/REMOVE_MOVIE',
    ADD_CHECKED_MOVIE: 'movies/ADD_CHECKED_MOVIE',
    REMOVE_CHECKED_MOVIE: 'movies/REMOVE_CHECKED_MOVIE',
};

export const MOVIE_INITIAL_STATE = {
    movies: [],
    checkedMovies: [],
};

export function MOVIE_REDUCER(state = MOVIE_INITIAL_STATE, action) {
    switch (action.type) {
        case MOVIE_TYPES.ADD_MOVIE:
            return { ...state, movies: state.movies.concat(action.payload) };
        case MOVIE_TYPES.REMOVE_MOVIE:
            return { ...state, movies: state.movies.filter((value) => value.id !== action.payload) };
        case MOVIE_TYPES.ADD_CHECKED_MOVIE:
            return { ...state, checkedMovies: state.checkedMovies.concat(action.payload) };
        case MOVIE_TYPES.REMOVE_CHECKED_MOVIE:
            return { ...state, checkedMovies: state.checkedMovies.filter((value) => value.id !== action.payload) };
        default:
            return state;
    }
}

export const MOVIE_CREATORS = {
    addMovie: (movie) => ({
        type: MOVIE_TYPES.ADD_MOVIE,
        payload: movie,
    }),
    removeMovie: (idMovie) => ({
        type: MOVIE_TYPES.REMOVE_MOVIE,
        payload: idMovie,
    }),
    addCheckedMovie: (checkedMovie) => ({
        type: MOVIE_TYPES.ADD_CHECKED_MOVIE,
        payload: checkedMovie,
    }),
    removeCheckedMovie: (idMovie) => ({
        type: MOVIE_TYPES.REMOVE_CHECKED_MOVIE,
        payload: idMovie,
    }),
};
