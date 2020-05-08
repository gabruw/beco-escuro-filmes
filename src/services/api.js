//#region Imports

import axios from 'axios';
import ENDPOINTS from '../library/endpoints';

//#endregion

const API = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
});

export default API;
