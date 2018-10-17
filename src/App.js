import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    game: {
      gameRunning: false,
      qa: qa,
      questionIndex: 0,
      answers: [],
      correctAnswers: 0
    },
    gameTimers: {
      questionTimer: 1000,
      questionTimeout: 15000
    },
  };

  componentDidMount() {
    //shuffle the questions
    const shuffled = this._shuffle(this.state.game.qa);
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
    let {game} = this.state;
    const newGame = {
      ...game,
      gameRunning: true
    }
    this.setState({
      game: newGame
    })
  }

  _next = () => {
    let numberOfQuestions = this.state.game.qa.length;
    numberOfQuestions--;
    if(this.state.game.questionIndex < numberOfQuestions){
      let {game} = this.state;
      let q = this.state.game.questionIndex;
      q++;
      this.setState({
        game: {
          ...game,
          questionIndex: q
        }
      })
    }
  }

  _chooseAnswer = (status) => {
    this._next();
    console.log("test");
    if(status){
      let score = this.state.game.correctAnswers;
      let {game} = this.state;
      score++;
      this.setState({
        game: {
          ...game,
          correctAnswers: score
        }
      })
    }
    
  }

  render() {

    return (
      <div className="App">
        <Title/>
        <Jumbotron
          game={this.state.game}
          startGame={this._startGame}
          chooseAnswer={this._chooseAnswer}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
