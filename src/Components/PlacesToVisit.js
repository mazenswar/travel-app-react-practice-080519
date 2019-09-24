import React from 'react';
import CountryCard from './CountryCard';

const PlacesToVisit = ({ countries, removePlaceToVisit }) => {
  const renderCountries = () => {
    return countries.map(country => (
      <CountryCard
        key={country.name}
        country={country}
        removePlaceToVisit={removePlaceToVisit}
      />
    ));
  };
  return (
    <div className="places-list">
      <h1>Places To Visit</h1>
      {renderCountries()}
    </div>
  );
};

export default PlacesToVisit;
