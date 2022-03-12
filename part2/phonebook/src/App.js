import React, { useState, useEffect } from 'react';
import { Header2 } from './components/Helpers';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

import axios from 'axios';

const App = () => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredNames, setFilteredNames] = useState(persons);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map(({ name }) => name);

    if (names.indexOf(newName) >= 0) {
      window.alert(`${newName} already exists in phonebook!`);
      return;
    } else if (!newName) {
      window.alert(`"name" cannot be blank!`);
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

  const handleFilterNames = ({ target }) => {
    const value = target.value;
    setFilter(value);

    const names = persons.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredNames(names);
  };

  const handleNewName = ({ target }) => {
    setNewName(target.value);
  };

  const handleNewNumber = ({ target }) => {
    setNewNumber(target.value);
  };

  return (
    <div>
      <Header2 text='Phonebook' />
      <Filter value={filter} handler={handleFilterNames}/>
      <PersonForm 
        submitHandler={addPerson} 
        name={newName}
        nameHandler={handleNewName}
        number={newNumber}
        numberHandler={handleNewNumber}
      />
      <Header2 text='Numbers' />
      <Persons names={filteredNames} />
    </div>
  );
};

export default App;
