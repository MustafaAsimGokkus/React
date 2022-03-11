import React, { useState } from 'react'


const ToDoItems = (props) => {
    const [isDone, setisDone] = useState(false);



    return (
        <div onClick={() => { { props.onChecked(props.id) }}}>
        
            <li  >{props.text}</li>
        
        </div>
    )
}

export default ToDoItems;