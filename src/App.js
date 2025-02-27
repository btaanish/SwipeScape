import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <h1>Let's build the MERN TINDER clone guys!!</h1>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
