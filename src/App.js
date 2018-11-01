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
      correctAnswers: 0,
      highScore: 0,
      coundownInterval: {},
      countdown: 10
    }
  };

  componentDidMount() {
    let {game} = this.state;
    //shuffle the questions
    const shuffled = this._shuffle(this.state.game.qa);
    //start the timer
    const countdownInterval = setInterval(this._countdown, 1000);

    const newGame = {
      ...game,
      qa: shuffled,
      countdownInterval: countdownInterval
    }
    this.setState({
      game: newGame     
    })

    //move the timer to the start button
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

  _chooseAnswer = (status) => {
    let {game} = this.state;
    let score = this.state.game.correctAnswers;
    let numberOfQuestions = this.state.game.qa.length;
    let q = this.state.game.questionIndex;
    let gr = this.state.game.gameRunning;
    let hs = this.state.game.highScore;

    if(status){
      score++;
    }

    if(this.state.game.questionIndex < (numberOfQuestions - 1)){
      q++;
    } else  {
      gr = false;
      if(score > hs){
        hs = score;
      }
    }

    this.setState({
      game: {
        ...game,
        questionIndex: q,
        correctAnswers: score,
        gameRunning: gr,
        highScore: hs
      }
    })
    
  }

  _countdown = () => {
    let {game} = this.state;
    let newCountdown = this.state.game.countdown;
    newCountdown--;

    let newGame = {
      ...game,
      countdown: newCountdown
    }
    this.setState({
      game: newGame
    })
    if(this.state.game.countdown < 1){
      clearInterval(this.state.game.countdownInterval);
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
          shuffle={this._shuffle}
          countdown={this.state.game.countdown}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
