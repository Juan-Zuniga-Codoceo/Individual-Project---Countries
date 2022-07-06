import serverFinder from "../api/serverFinder";
import { ADD_ACTIVITY, COUNTRY_SELECTED, FILTER_COUNTRIES_BY_CONTINENT, FILTER_COUNTRIES_ORD_NAME, FILTER_COUNTRIES_ORD_POPULATION, GET_ACTIVITIES, GET_COUNTRIES, SEARCH_COUNTRY_BY_ACTIVITY, SEARCH_COUNTRY_BY_NAME, VISUAL } from "./constants";

const axios = require('axios');


export const getCountries = () => {
    return async function (dispatch) {
        return axios.get(serverFinder('countries'))
            .then((data) => {
                dispatch({
                type: GET_COUNTRIES,
                payload: data.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const filterCountriesByContinent = (continent) => {
    return {
        type: FILTER_COUNTRIES_BY_CONTINENT,
        payload: continent
    }
}

export const filterCountriesOrdName = (orden) => {
    return {
        type: FILTER_COUNTRIES_ORD_NAME,
        payload: orden
    }
}

export const filterCountriesOrdPopulation = (orden) => {
    return {
        type: FILTER_COUNTRIES_ORD_POPULATION,
        payload: orden
    }
}

export const searchCountry = (name) => {
    return function (dispatch){
        return axios.get(serverFinder(`countries?name=${name}`))
            .then((data)=>{
                dispatch({
                    type: SEARCH_COUNTRY_BY_NAME,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const countrySelected = (id) => {
    return function (dispatch){
        return axios.get(serverFinder(`countries/${id}`))
            .then((data)=>{
                dispatch({
                    type: COUNTRY_SELECTED,
                    payload: data.data[0]
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const addActivity = (form) => {
    return function (dispatch) {
        console.log(form)
        return axios.post(serverFinder('activity'),form)
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const getActivities = () => {
    return function (dispatch) {
        return axios.get(serverFinder('activity'))
        .then((data) => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: data.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const searchCountryByActivity = (activity)=>{
    return function (dispatch) {
        return axios.get(serverFinder(`activity?name=${activity}`))
            .then((data) => {
                console.log(data.data[0].countries)
                dispatch({
                    type: SEARCH_COUNTRY_BY_ACTIVITY,
                    payload: data.data[0].countries
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export const visual = (value) => {
    return {
        type: VISUAL,
        payload: value
    }
}