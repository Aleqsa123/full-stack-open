import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';


const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPersons = [ {name: newName, number: newNumber, id: persons.length + 1} ]
    if (persons.some((element)=>element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{setPersons(persons.concat(newPersons))}  
    setNewName('')
    setNewNumber('')
  }

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const [newSearch, setNewSearch] = useState('')  
  const [showAll, setShowAll] = useState(true)

  const handleSearch = (event) => {
    setNewSearch(event.target.value.toLowerCase());
    if (newSearch !== ''){return setShowAll(false)}
  }

    const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(newSearch));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={newSearch} onChange={handleSearch}/>


      <h2>add a new </h2>
      <PersonForm newName={newName} 
                  handleNameChange={handleNameChange} 
                  newNumber={newNumber} 
                  handleNumberChange={handleNumberChange} 
                  addPerson={addPerson} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App