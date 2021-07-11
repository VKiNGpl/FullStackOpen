import React, { useState } from 'react';

const App = () => {
  const [newName, setNewName] = useState('');
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);

  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map(({ name }) => name);
    
    if (names.indexOf(newName) >= 0) {
      window.alert(`${newName} already exists in phonebook!`);
      return;
    }

    const newPerson = {
      name: newName,
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <div key={person.name}>{person.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
