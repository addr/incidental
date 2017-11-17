import React from "react";

import logo from "./logo.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <WelcomeMessage
      message={
        " To get started, edit <code>src/App.js</code> and save to reload."
      }
    />
  </div>
);

export default App;
