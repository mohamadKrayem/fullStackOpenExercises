import React, { useState, useEffect, StrictMode } from 'react';
import Persons from './components/Persons'
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const eachPerson = persons.map((person) => person.name);
  const [filterValue, setFilterValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [myArray, setMyArray] = useState(filtered);
  const baseUrl = 'http://localhost:3001/persons';

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => setPersons(response.data))
  }, [])

  const add = (event) => {
    event.preventDefault();
    if (eachPerson.indexOf(newName) >= 0) {

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

        const toBeReplaced = persons.find(person => person.name === newName)

        axios.put(`${baseUrl}/${toBeReplaced.id}`, { 'name': toBeReplaced.name, 'number': newNumber, 'id': toBeReplaced.id })
          .then(
            response => {
              console.log('response1', response.data.id)
              setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
              setNewName('');
              setNewNumber("");
            }
          )
      }
    } else {
      axios.post(baseUrl, { 'name': newName, 'number': newNumber }).then(
        response => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber("");
        }
      )
    }
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

      <StrictMode>
        <Persons persons={persons} setPersons={setPersons} />
      </StrictMode>

    </div>
  )
}

export default App;
