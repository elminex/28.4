export const GET__COUNTRIES = 'GET__COUNTRIES';
export const GET__COUNTRY = 'GET__COUNTRY';
export const DELETE__COUNTRY = 'DELETE__COUNTRY';
export const SEARCH__COUNTRIES = 'SEARCH__COUNTRIES';
export const SET__CONTINENT = 'SET__CONTINENT';

export function getCountries() {
    return {
        type: GET__COUNTRIES
    }
}

export function getCountry(id) {
    return {
        type: GET__COUNTRY,
        id
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE__COUNTRY,
        id
    }
}
export function searchCountries(searchText) {
    return {
        type: SEARCH__COUNTRIES,
        searchText
    }
}
export function setContinent(contName) {
    return {
        type: SET__CONTINENT,
        contName
    }
}