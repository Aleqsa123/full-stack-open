import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const addPerson = (event) => {
    event.preventDefault()
    const newPersons = [ {name: newName} ]
    if (persons.some((element)=>element.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{setPersons(persons.concat(newPersons))}  
    setNewName('')
  }

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map((person, i)=> {return <p key={i}>{person.name}</p>})}
    </div>
  )
}

export default App