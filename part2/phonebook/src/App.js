import { useState } from 'react'

const Person = ({person}) => {
  return (
    <p>{person.name}: {person.number}</p>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNoteChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleAdd = (event) => {
    event.preventDefault()

    const dupe = persons.find(ele => ele.name === newName) 
    if (dupe === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    } else {
      window.alert(`${newName} is already added to phonebook`)   
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App