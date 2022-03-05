import React, { useState } from "react";
import DigitalClock from "./DigitalClock";

function App() {
  //const count = 5
  let [count, setCount] = useState(0)
  //setCount is used to update the value of the count
  //  () =>{
  //    setCount(count+1);
  //   }
  function decrease() {
    setCount(count - 1)
  }

  return <div className="container">
    <h1>{count}</h1>
    <button onClick={() => { setCount(count + 1 ) }}>+</button>
    <button onClick={decrease}>-</button>
    <button className="reset-button" onClick={() => { setCount(0) }}>Reset</button>
    <br />
    <br />
    <DigitalClock />


  </div>
}

export default App;
