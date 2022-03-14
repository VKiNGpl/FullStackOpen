export const Countries = ({ countries, countrySelector }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.official}>
          Official Name: {country.name.official} | Common Name: {country.name.common}
          <button onClick={() => countrySelector([country])}>show</button>
        </div>
      ))}
    </div>
  )
}
