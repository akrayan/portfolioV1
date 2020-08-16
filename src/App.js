import React from "react";
import gear from "./gear.svg";
import "./App.css";
import "./palette.css";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>In development ...</code>
        </p>
        <img src={gear} className="App-logo" alt="gear" />
      </header>
    </div>
  );
}

export default App;
