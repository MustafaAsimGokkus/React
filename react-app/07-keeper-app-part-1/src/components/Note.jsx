import React from "react";
function Note(props){
    console.log('MY PROPERTIES:'+props)
    return<div className="note">
       <h1>This is the {props.name}</h1> 
       <p>I am {props.age} years old</p>
       <p>I am from {props.city}</p>
    </div>
}
export default Note;