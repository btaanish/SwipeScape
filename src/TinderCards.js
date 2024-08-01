import React, { useState } from "react";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
    },
    {
      name: "Vitalik Butaren",
      url: "https://qph.cf2.quoracdn.net/main-qimg-b556b200fb4aca6b2fe5e5f3dc77f72f-lq",
    },
  ]);

  return (
    <div className="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default TinderCards;
