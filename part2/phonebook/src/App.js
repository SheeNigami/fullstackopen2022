import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // Dummy data
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // Input States
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleNoteChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)

  // For submit button
  const handleAdd = (event) => {
      event.preventDefault()

      // Only add if name does not already exist
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

      // Reset Inputs
      setNewName('')
      setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm 
        handles={[handleAdd, handleNoteChange, handleNumberChange]} inputs={[newName, newNumber]} 
      />
      <h3>Numbers</h3>
       {persons.filter(person => 
         person.name.includes(search)
       ).map(person => 
         <Persons key={person.name} person={person} />
       )}
    </div>
  )
}

export default App