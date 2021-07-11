import React, { useState } from 'react';

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [filter, setFilter] = useState('');
  const [filteredNames, setFilteredNames] = useState(persons);

  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map(({ name }) => name);

    if (names.indexOf(newName) >= 0) {
      window.alert(`${newName} already exists in phonebook!`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const newNames = persons.concat(newPerson);
    setPersons(newNames);
    setFilteredNames(newNames);
    setFilter('');
    setNewName('');
    setNewNumber('');
  };

  const filterNames = ({ target }) => {
    const value = target.value;
    setFilter(value);

    const names = persons.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredNames(names);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={filterNames} />
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredNames.map((person) => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
