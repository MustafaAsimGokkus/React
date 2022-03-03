import React, {useState} from "react";

function App() {
  const [headingText,setHeadingText] = useState("Hello User");
  
  function handleClick(){
    setHeadingText("Submitted")
  }
  const [isMouseOver,setMouseOver] = useState(false)
function handleMouseOver(){
  setMouseOver(true)
  console.log(isMouseOver)
}
function handleMouseOut(){
  setMouseOver(false)
 
}
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={handleClick}
      style={{backgroundColor:isMouseOver?'black':'white'}}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
     
    </div>
  );
}

export default App;
