import React, { Component } from 'react';
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    qa: qa,
    questionIndex: 0,
    answers: [],
    score: 0

  }

  // for the increment and decrememnt check to see the length of the array of questions and limit the functionality of this function to just within the range of the number of questions

  incrementNumber = () => {
    if (this.state.questionIndex < this.state.qa.length - 1){
      const questionIndex = this.state.questionIndex + 1;
      this.setState({ questionIndex });
    } else {
      console.log("you are at the last question.");
    }
    
  }

  decrementNumber = () => {
    if(this.state.questionIndex > 0){
      const questionIndex = this.state.questionIndex - 1;
      this.setState({ questionIndex });
    } else {
      console.log("you are at the first question.")
    }
    
    
  }

  handleAnswer = (e) => {
    console.log(e);
  }
  
  render() {

    return (
      <div className="App">
        <Title/>
        <Jumbotron
          question={this.state.qa[this.state.questionIndex]}
          questionNumber={this.state.questionIndex + 1}
          incrementNumber={this.incrementNumber}
          decrementNumber={this.decrementNumber}
          choose={this.handleAnswer}
        />
      </div>
    );
  }
}

export default App;
