import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    qa: qa,
    questionIndex: 0,
    answers: [],
    gameStats: {},
    gameRunning: false,
    questionTimer: "",
    questionTimeout: ""

  }

  componentDidMount() {
    let qt = setTimeout(() => {
      console.log("the answer to the question should be displayed");
    }
    ,15000);

    this.setState({
      questionTimeout: qt
    })

  }

  // for the increment and decrememnt check to see the length of the array of questions and limit the functionality of this function to just within the range of the number of questions

  _incrementNumber = () => {
    if (this.state.questionIndex < this.state.qa.length - 1){
      const questionIndex = this.state.questionIndex + 1;
      this.setState({ questionIndex });
    } else {
      console.log("you are at the last question!.");
    }
    
  }

  _decrementNumber = () => {
    if(this.state.questionIndex > 0){
      const questionIndex = this.state.questionIndex - 1;
      this.setState({ questionIndex });
    } else {
      console.log("you are at the first question.")
    }
    
    
  }

  _chooseAnswer = (answerIndex) => {
    this.state.answers.splice(this.state.questionIndex, 1, answerIndex);
    this._incrementNumber();
    console.log(this.state.answers);
  }

  _score = (array) => {
    //do something 
    // do some kind of loop for each in qa.json
    // if the index at answer has a true in the status then the count goes up by one... do this for the whole array
    // check to see if the array length matches... otherwise, not all the questions have been amswered.
    // try to make it so that if an answer is skipped then place a 0 at its index.
    
  }

  _startGame = () => {
    this.setState({
      gameRunning: true
    }) 
  }
  
  render() {

    return (
      <div className="App">
        <Title/>
        {
          this.state.gameRunning ? 
          (<Jumbotron
            gameRunning={this.state.gameRunning}
            question={this.state.qa[this.state.questionIndex]}
            questionNumber={this.state.questionIndex + 1}
            incrementNumber={this._incrementNumber}
            decrementNumber={this._decrementNumber}
            chooseAnswer={this._chooseAnswer}
          />)
          :
          (<Jumbotron
            gameRunning={this.state.gameRunning}
            gameStats={this.state.gameStats}
            startGame={this._startGame}
          />)
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
