import React, { useState } from "react";
function App() {
  // const [fName,setFirstName]=useState('')
  // const [lName,setLName]=useState('')
  const [fullName,setFullName]=useState({fName:'',lName:''})
  // fName =>  fullName.fName
  // lName =>  fullName.lName
  function handleChange(event){
    const newValue = event.target.value
    const inputName=event.target.name
    console.log('New Value : ' +newValue)
    // console.log(inputName)
    // if user is typing in fName input then assign that new value to fName
    // AND KEEP THE lName AS IT WAS using previous value
    // else if there is a change in the lName, then assign the new value to lName
    // AND KEEP the fName as it was usign previous value
    setFullName((previousValue)=>{
      console.log(previousValue)
      console.log(previousValue.fName)
      console.log(previousValue.lName)
      if(inputName==='fName'){
        return {
          fName:newValue,
          lName:previousValue.lName
        }
      }else if(inputName=='lName'){
        return {
          lName:newValue,
          fName:previousValue.fName
        }
      }
    })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form onSubmit={(event)=>{
              event.preventDefault();
            }}>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName}/>
        <input onChange ={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;