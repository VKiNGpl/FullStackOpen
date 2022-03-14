export const Weather = ({ weather, country }) => {
  const isWeatherLoaded = Object.keys(weather).length > 0

  if (!isWeatherLoaded) {
    return null;
  }
  
  return (
    <div>
      <h3>
        Weather in {country.capital}
      </h3>
      temperature {weather.main.temp} Celsius
      <div>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={`Weather icon for ${country.name.common}`}
        />
      </div>
      wind {weather.wind.speed} m/s
    </div>
  )
}
