import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import service from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 

  //fetches data from server
  useEffect(() => {service
    .getAll()
    .then(initialList => {
        setPersons(initialList)
      })
  }, [])

  //Adds new person (name and number) to the phonebook
  const addPerson = (event) => {
    event.preventDefault()
    const newPersons = {name: newName, number: newNumber}
    if (persons.some((element)=>element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{service
      .create(newPersons)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })}
      setNewName('')
      setNewNumber('')
  }

  const [newName, setNewName] = useState('')

  // Takes new name's value from the form
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const [newNumber, setNewNumber] = useState('')

  // Takes new name's value from the form
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const [newSearch, setNewSearch] = useState('')  

  //Takes value from searchbar and sets showAll's state to false 
  const handleSearch = (event) => {
    setNewSearch(event.target.value.toLowerCase());
    if (newSearch !== ''){return setShowAll(false)}
  }

  const [showAll, setShowAll] = useState(true)

  //Show only persons from searchbar
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