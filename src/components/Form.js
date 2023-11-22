import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(e) {
    e.preventDefault()
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    e.preventDefault()
    setLastName(e.target.value)
  }

  console.log(firstName, lastName);

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
