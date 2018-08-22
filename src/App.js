import React, { Component } from 'react';
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

console.log(qa);

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
