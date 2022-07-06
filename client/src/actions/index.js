import axios from "axios";

const API_URL = "http://localhost:3001";

export const getCountries = () => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}countries`);
        dispatch({
            type: "GET_COUNTRIES",
            payload: response.data,
        });
    };
};

export const filterCountries = (payload, isSearch) => {
    console.log(isSearch);
    return {
        type: "FILTER_COUNTRIES",
        payload,
        isSearch,
    };
};

export const sortCountries = (payload, isSearch) => {
    return {
        type: "SORT_COUNTRIES",
        payload,
        isSearch,
    };
};

export const searchCountries = (payload, isSearch) => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}countries?name=${payload}`);
        dispatch ({
            type: "SEARCH_COUNTRIES",
            payload: response.data,
            isSearch,
        });
    };
};

export const create = (payload) => {
    console.log("action", payload);
    let activity = {
        activity: {
            name: payload.name,
            difficulty: payload.difficulty,
            duration: payload.duration,
            season: Array.from(payload.season),
        },
        countries: Array.from(payload.countries),
    };

    return async (dispatch) => {
        const response = await axios.post(`${API_URL}activity`,activity);
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: response.data,
        });
    };
};

export const resetSearch = () => {
    return {
        type: "RESET_SEARCH",
    };
};

export const getCountry = (payload) => {
    return async (dispatch) => {
        const response = await axios.get(`${API_URL}countries/${payload}`);
        dispatch({
            type: "GET_COUNTRY",
            payload: response.data,
        });
    };
};