export const Persons = ({ names }) => {
  return (
    <div>
      {names.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}
