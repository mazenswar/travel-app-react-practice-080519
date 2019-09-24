import React from 'react';
import Components from './Components';
import './App.css';

class App extends React.Component {
  state = {
    countries: [],
    placesToVisit: [],
    showCountry: {}
  };

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(r => r.json())
      .then(countriesArr => this.setState({ countries: countriesArr }));
  }

  setShowCountry = country => this.setState({ showCountry: country });

  addPlaceToVisit = country =>
    this.state.placesToVisit.includes(country)
      ? null
      : this.setState({
          placesToVisit: [country, ...this.state.placesToVisit]
        });

  removePlaceToVisit = countryName => {
    const updatedList = this.state.placesToVisit.filter(
      c => c.name !== countryName
    );
    this.setState({ placesToVisit: updatedList });
  };

  render() {
    return (
      <>
        <Components.CountryList
          countries={this.state.countries}
          setShowCountry={this.setShowCountry}
        />
        <Components.Main
          country={this.state.showCountry}
          addPlaceToVisit={this.addPlaceToVisit}
        />
        <Components.PlacesToVisit
          countries={this.state.placesToVisit}
          removePlaceToVisit={this.removePlaceToVisit}
        />
      </>
    );
  }
}

export default App;
