import React from 'react';

const CountryCard = ({ country, setShowCountry, removePlaceToVisit }) => {
  return (
    <div
      className="country-card"
      onClick={() =>
        setShowCountry
          ? setShowCountry(country)
          : removePlaceToVisit(country.name)
      }
    >
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
    </div>
  );
};

export default CountryCard;
