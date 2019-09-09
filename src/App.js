import React from "react";
import "./App.css";
import Home from "./Components/home";
import Login from "./Components/login";

function App() {
  return (
    <div>
      <div className="home-title">
        <Home />
        <Login />
        <div />

        <div className="header">{/* <header>Charity-Chat</header> */}</div>
      </div>
    </div>
  );
}

export default App;
