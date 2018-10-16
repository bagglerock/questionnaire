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
    gameStats: {
      correct: 0
    },
    gameRunning: false,
    gameTimers: {
      questionTimer: 1000,
      questionTimeout: 15000
    },
    gameComplete: false
  };

  componentDidMount() {
    //shuffle the questions
    const shuffled = this._shuffle(this.state.qa);
;    this.setState({
      qa: shuffled
    })
  }

  _shuffle = (array) => {
    //shuffle using the fisher-Yates algorithm to randomize the order
    // basically, save the last element in a temp, replace the last element with a random element, replace the random element with the saved element.. decrease the length of the array so we dont go forever
    let currentIndex = array.length;
    let temporaryValue;

    while (0 !== currentIndex){
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  _startGame = () => {
    this.setState({
      gameRunning: true
    })
  }

  _next = () => {
    let numberOfQuestions = this.state.qa.length;
    numberOfQuestions--;
    if(this.state.questionIndex < numberOfQuestions){
      let q = this.state.questionIndex;
      q++;
      this.setState({
        questionIndex: q
      })
    } else {
      this.setState({
        gameComplete: true
      })
    }
  }

  _chooseAnswer = (status) => {
    this._next();
    if(status){
      let score = this.state.gameStats.correct;
      score++;
      this.setState({
        gameStats: {
          correct: score
        }
      })
    }
    
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
            totalQuestions={this.state.qa.length}
            next={this._next}
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
