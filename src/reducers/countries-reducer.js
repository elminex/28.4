import { GET__COUNTRIES, GET__COUNTRY, DELETE__COUNTRY, SEARCH__COUNTRIES, SET__CONTINENT } from '../actions/actions';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
}

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET__COUNTRIES:
            return Object.assign({}, state, { countries: state.countries })
        case GET__COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return Object.assign({}, state, { selectedCountry });
        case SEARCH__COUNTRIES:
            const visibleCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, { visibleCountries });
        case DELETE__COUNTRY:
            const filtered = state.countries.filter(country => country.id !== action.id);
            const filteredVisible = state.visibleCountries.filter(country => country.id !== action.id);
            return Object.assign({}, state, { countries: filtered, visibleCountries: filteredVisible });
        case SET__CONTINENT:
            const continentFiltered = state.countries.filter(country => country.continent === action.contName);
            return Object.assign({}, state, { visibleCountries: continentFiltered });
        default:
            return state
    }
}
export default countriesReducer;
