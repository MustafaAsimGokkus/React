import React, { useState } from "react";
function App() {
  const [name, setName] = useState('')
  const [lName, setLName] = useState('')
  function handleChange(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }

  function handleClick(event) {
    setLName(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {name} {lName} </h1>
      <form onSubmit ={handleClick}>
        <input type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
      </form>

      <button onClick={handleClick}>Submit</button>


    </div>
  );
}
export default App;
// Part 2: create a var lName, show it ONLY AFTER USER CLICKS SUBMIT BUTTON.
// detect the change on when button click: onClick
// Part 3: input and button are form elements
// we can use onSubmit to submit form elements
// but when you click on the submit button, the page refreshes automatically, that is a problme
// use event.preventDefault(); to cancel that default behaviour