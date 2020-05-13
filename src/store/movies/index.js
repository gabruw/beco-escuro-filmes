export const Types = {
    ADD_MOVIE: 'movies/ADD_MOVIE',
};

const INITIAL_STATE = {};

export function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_MOVIE:
            return { ...state };
        default:
            return state;
    }
}

export const Creators = {
    adicionaBeneficiario: (movie) => ({
        type: Types.ADD_MOVIE,
        payload: movie,
    }),
};
