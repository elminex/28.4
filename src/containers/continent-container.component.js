import React from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions';
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCountry = this.deleteCountry.bind(this);
  }

  chooseContinent(e) {
    this.props.dispatch(setContinent(e.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }

  render() {
    return (
      <div>
        <div className="search text-center">
          <label>
            Select continent:
            <select onChange={(e) => this.chooseContinent(e)}>
              <option value="Europa">Europe</option>
              <option value="Afryka">Africa</option>
            </select>
          </label>
        </div>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    visibleCountries: state.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(ContinentsContainer);
