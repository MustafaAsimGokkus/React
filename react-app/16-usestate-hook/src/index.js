import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


var count =0;
function Increase(){
  count++;
  console.log(count);
 
}

ReactDOM.render(
 <App />,
  document.getElementById("root")
);
