import React, { useState, useEffect } from 'react';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("")
  const eachPerson = persons.map((person) => person.name)
  const [filterValue, setFilterValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [myArray, setMyArray] = useState(filtered)

  useEffect(() => {
    axios
      .get('http://localhost:3003/persons')
      .then(response => setPersons(response.data))
  }, [])

  const add = (event) => {
    event.preventDefault();
    if (eachPerson.indexOf(newName) >= 0) return window.alert(`${newName} is already added to phonebook`)
    const array = persons.concat({ 'name': newName, 'number': newNumber });
    setPersons(array);
    setNewName('');
    setNewNumber("");
  }

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilterValue(event.target.value);
    let result;
    if (event.target.value === "") result = []
    else result = persons.filter(person => person.name.toUpperCase() === event.target.value.toUpperCase())
    setFiltered(result)
    setMyArray(result)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterValue} array={myArray} onChange={handleFilter} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={add}
        nameValue={newName}
        handleNewName={handleNewName}
        numberValue={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} />

    </div>
  )
}

export default App;
