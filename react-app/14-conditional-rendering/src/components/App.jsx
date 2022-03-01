import React from "react";
import Login from "./Login";
const isLoggedIn = false;
// function renderConditionally(){
//   if(isLoggedIn===true){
//     return <h1>Hello! You successfully Logged in!</h1>
//   }else{
//     return <Login />
//   }
// }
const currentHour=new Date().getHours();
function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
      {isLoggedIn===true?<h1>Hello! You successfully Logged in!</h1>:
        <Login />}
        {currentHour>15 && <h1>Why u still wrking</h1>}
    </div>
  );
}
export default App;