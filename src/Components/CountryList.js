import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, setShowCountry }) => {
  const renderCountries = () => {
    return countries.map(country => (
      <CountryCard
        key={country.name}
        country={country}
        setShowCountry={setShowCountry}
      />
    ));
  };

  return (
    <div className="countries-list">
      <h1>Countries</h1>
      {renderCountries()}
    </div>
  );
};

export default CountryList;
