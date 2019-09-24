import React from 'react';

const Main = ({ country, addPlaceToVisit }) => {
  const renderCurrencies = () =>
    country.currencies.map(c => <li key={c.name}>{c.name}</li>);
  const renderLanguages = () =>
    country.languages.map(l => <li key={l.name}>{l.name}</li>);

  return country.name ? (
    <div className="main">
      <button onClick={() => addPlaceToVisit(country)}>Add to my places</button>
      <img src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
      <h3>Native Name</h3>
      <span>{country.nativeName}</span>
      <h3>Capital</h3>
      <span>{country.capital}</span>
      <h3>Population</h3>
      <span>{country.population}</span>
      <ul>
        <h3>Currencies</h3>
        {renderCurrencies()}
      </ul>
      <ul>
        <h3>Languages</h3>
        {renderLanguages()}
      </ul>
    </div>
  ) : (
    <div className="main-placeholder">
      <h1>Click on a country to see it's details!</h1>
    </div>
  );
};

export default Main;
