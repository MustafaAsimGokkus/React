import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
function createCard(eachContact){
  return <Card 
    key = {eachContact.id}
    name = {eachContact.name}
    img={eachContact.imgURL}
    tel={eachContact.phone}
    email={eachContact.email}
  />
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.wfaa.com/assets/WFAA/images/6ccb7e54-8529-4c8f-98f8-5a9ce6592482/6ccb7e54-8529-4c8f-98f8-5a9ce6592482_1920x1080.jpg"/>
      {/* <Avatar 
        img={contacts[3].imgURL}
      /> */}
      <br/>
      {/* <Avatar img="https://i.pinimg.com/originals/b2/3e/a3/b23ea34c18999b1bddb2f49199cfd871.jpg"/> */}
      {contacts.map(createCard)}
      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}
export default App;