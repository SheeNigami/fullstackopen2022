const PersonForm = ({handles, inputs}) => {
    const [handleAdd, handleNoteChange, handleNumberChange] = handles
    const [newName, newNumber] = inputs

    return (
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
    )
}

export default PersonForm