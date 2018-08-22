import React, { Component } from 'react';
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import "./App.css";

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
