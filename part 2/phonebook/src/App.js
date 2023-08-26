import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

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
        <div>
          filter shown with: <input 
            value={newSearch}
            onChange={handleSearch}
            />
        </div>


      <h2>add a new </h2>
      <form>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { personsToShow.map((person)=> {return <p key={person.id}>{person.name} {person.number}</p>})}
    </div>
  )
}

export default App