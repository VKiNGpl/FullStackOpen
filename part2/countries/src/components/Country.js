export const Country = ({ countries }) => {
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
            style={{borderColor: 'black', borderWidth: '1px', borderStyle: 'solid'}} 
          />
        </div>
      ))}
    </div>
  )
}
