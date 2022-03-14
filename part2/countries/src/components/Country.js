import React, { useState, useEffect } from 'react';

import { Weather } from './Weather';

import axios from 'axios';

export const Country = ({ countries }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const latitude = countries[0].latlng[0];
    const longitude = countries[0].latlng[1];
    const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
      .then(response => {
        setWeather(response.data);
      });
  }, [countries]);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          capital {country.capital}<br />
          area {country.area}
          <h3>languages:</h3>
          <ul>
            {Object.values(country.languages).map(language =>
              <li key={language}>
                {language}
              </li>
            )}
          </ul>
          <img src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            style={{
              borderColor: 'black',
              borderWidth: '1px',
              borderStyle: 'solid',
              height: 100
            }}
          />
          <Weather weather={weather} country={country} />
        </div>
      ))}
    </div>
  )
}
