export const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.official}>
          Official Name: {country.name.official} | Common Name: {country.name.common}
        </div>
      ))}
    </div>
  )
}
