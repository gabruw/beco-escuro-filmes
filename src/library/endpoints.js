import KEYS from './keys';

const ENDPOINTS = {
    BASE_URL: 'http://localhost:8080/',
    TMDB: 'https://api.themoviedb.org/3/',
    TMDB_MOVIES_BY_ID: (id) => `https://api.themoviedb.org/3/movie/${id}?api_key=${KEYS.TMDB}&language=pt-BR`,
    TMDB_MOVIES_BY_TITLE: (title, language = 'pt-BR', adult = true) =>
        `https://api.themoviedb.org/3/search/movie?api_key=${KEYS.TMDB}&language=${language}&query=${title}&page=1&include_adult=${adult}`,
};

export default ENDPOINTS;
