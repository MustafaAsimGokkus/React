import React from "react";

function Note(props){
    console.log(props)
    return <div className="note">
        <h1>This is the {props.name}</h1>
        <p>This is the paragraph</p>
    </div>
}

export default Note;