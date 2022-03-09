import React, { useState, useEffect } from 'react'
import Card from './Card';

const UserCards = () => {
    //2. Create a variable as users
    const [users, setUsers] = useState([]);


    //1. fetch the  data

    //3. use useEfect() to control the render

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then((resp) => resp.json())
            .then((data) => {
                setUsers(data)
                console.log(data)
            })
    }, [])
     //5. show the user info on the UI :api is return of a function in return of whole component
     //6. use key value pairs to style the data
     return <>
     {/* 5. show the user info on the UI 
     6. */}
         {users.map((eachUser)=>{
             return <Card 
             id={eachUser.id} 
             avatar_url={eachUser.avatar_url} 
             html_url={eachUser.html_url}
             login={eachUser.log}
             />
         })}
     </>
}

export default UserCards;