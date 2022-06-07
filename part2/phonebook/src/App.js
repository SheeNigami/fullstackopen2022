import { useState } from 'react'

const Person = ({person}) => (
    <p>{person.name}: {person.number}</p>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setsearch] = useState('')

  const handleNoteChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setsearch(event.target.value)

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
      <div>
        filter shown with a <input value={search} onChange={handleSearch}/>
      </div>
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
      {persons.filter(person => 
        person.name.includes(search)
      ).map(person => 
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default App