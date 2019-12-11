import React from "react";
import { Card } from "./Card";
import { contacts } from "../contacts";

// function AllCards() {
//   var allCards = null;
//   console.log(contacts);
//   contacts.forEach(function(e) {
//     allCards += (
//       <Card name={e.name} image={e.imgURL} tel={e.phone} email={e.email} />
//     );
//   });
//   return allCards;
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
