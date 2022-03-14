import React, { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { Countries } from './components/Countries';
import { Country } from './components/Country';

import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredNames, setFilteredNames] = useState(countries);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleFilterNames = ({ target }) => {
    const value = target.value;
    setFilter(value);

    const filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredNames(filteredCountries);
  };

  return (
    <div>
      <Filter value={filter} handler={handleFilterNames} />
      {filteredNames.length > 10 ?
        'Too many matches, specify another filter' :
        filteredNames.length === 1 ?
          <Country countries={filteredNames} /> :
          <Countries countries={filteredNames} countrySelector={setFilteredNames} />
      }
    </div>
  );
}

export default App;
