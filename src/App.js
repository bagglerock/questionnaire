import React, { Component } from 'react';
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    qa: qa,
    questionNumber: 0,
    answers: []

  }

  incrementNumber = () => {
    const questionNumber = this.state.questionNumber + 1;
    this.setState({ questionNumber });
    console.log("increment");
    
  }

  decrementNumber = () => {
    const questionNumber = this.state.questionNumber - 1;
    this.setState({ questionNumber });
    console.log("decrement");
    
  }
  
  render() {
    //console.log(this.state.qa[0].question);
    //this.incrementQuestion();
    console.log(this.state.questionNumber);
    // console.log(this.state.answers);

    return (
      <div className="App">
        <Title/>
        <Jumbotron
          question={this.state.qa[this.state.questionNumber]}
          incrementNumber={this.incrementNumber}
          decrementNumber={this.decrementNumber}
        />
      </div>
    );
  }
}

export default App;
