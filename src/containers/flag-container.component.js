import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.deleteCountry = this.deleteCountry.bind(this);
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    search(e) {
        let searchText = e.target.value;
        this.props.dispatch(searchCountries(searchText));
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    render() {
        return (
            <>
            <div className="search text-center">
                <label>Search for a country: <input type="text" onChange={this.search}/></label>
            </div>
            <div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
            </>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);