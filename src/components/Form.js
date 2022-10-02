import React, { useState } from 'react'

function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)

    // firstName("");
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)

    // lastName("");
  }

  return (
    <form>
      <input type='text' value={firstName} onChange={handleFirstNameChange} />
      <input type='text' value={lastName} onChange={handleLastNameChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;