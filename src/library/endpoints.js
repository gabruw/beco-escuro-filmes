import KEYS from './keys';

const ENDPOINTS = {
    BASE_URL: 'http://localhost:8080/',
    TMDB: 'https://api.themoviedb.org/3/',
    TMDB_MOVIES: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${KEYS.TMDB}&language=pt-BR`,
};

export default ENDPOINTS;
