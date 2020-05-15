const MOVIE_TYPES = {
    ADD_MOVIE_: 'movies/ADD_MOVIE',
    REMOVE_MOVIE: 'movies/REMOVE_MOVIE',
};

export const MOVIE_INITIAL_STATE = {
    movies: [],
};

export const MOVIE_REDUCER = (state = MOVIE_INITIAL_STATE, action) => {
    switch (action.type) {
        case MOVIE_TYPES.ADD_MOVIE:
            return { ...state, movies: state.movies.push(action.payload) };
        case MOVIE_TYPES.REMOVE_MOVIE:
            return { ...state, movies: state.movies.filter((value) => value.id !== action.payload) };
        default:
            return state;
    }
};

export const MOVIE_CREATORS = {
    addMovie: (movie) => ({
        type: MOVIE_TYPES.ADD_MOVIE,
        payload: movie,
    }),
    removeMovie: (idMovie) => ({
        type: MOVIE_TYPES.REMOVE_MOVIE,
        payload: idMovie,
    }),
};
