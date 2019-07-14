import { GET__COUNTRIES, GET__COUNTRY, DELETE__COUNTY, SEARCH__COUNTRIES, SET__CONTINENT } from '../actions/actions';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData
}

const countriesReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET__COUNTRIES: 
            return Object.assign({}, state, {countries: state.countries})
        default: 
        return state
        }
}
export default countriesReducer;
