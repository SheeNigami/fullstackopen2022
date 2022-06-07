import { useState } from 'react'

const Number = ({name}) => {
  return (
    <p>{name}</p>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()

    const dupe = persons.find(ele => ele.name === newName) 
    if (dupe === undefined) {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
    } else {
      window.alert(`${newName} is already added to phonebook`)   
      setNewName('')
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAdd}>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Number key={person.name} name={person.name} />
      )}
    </div>
  )
}

export default App