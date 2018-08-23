import React, { Component } from 'react';
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    qa: qa,
    questionNumber: 1,
    answers: []

  }

  incrementQuestion = () => {
    this.state.questionNumber++;
  }

  render() {
    console.log(this.state.qa);
    this.incrementQuestion();
    console.log(this.state.questionNumber);
    console.log(this.state.answers);

    return (
      <div className="App">
        <Title/>
        <Jumbotron/>
      </div>
    );
  }
}

export default App;
