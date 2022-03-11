import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItems from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
  
  const [items, setItems] = useState([]);

  function handleChange(event) {
    console.log(event.target.value)
    const newValue = event.target.value;
    setInputText(newValue)
  }

  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText]
    });
    setInputText('');
  }
  
  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter(
        (w,index)=>{
          return index !== id; //id = item that we click
        }
      )
    })
  }
  

  return (
    <div className="container">
      <div className="heading">
        <h1>Wish List</h1>
      </div>
      <div className="form">
       <InputArea />
 
      </div>
      <div>
        <ul>
         
          {items.map((w,index) => {
            return <ToDoItems text= {w}
           
            onChecked={deleteItem}
            key={index}
            id={index}
             />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
