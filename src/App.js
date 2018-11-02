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
      questionsLength: qa.length,
      answers: [],
      correctAnswers: 0,
      highScore: 0,
      coundownInterval: {},
      countdown: 10,
      timesUp: false
    }
  };

  componentDidMount() {
    let {game} = this.state;
    //shuffle the questions
    const shuffled = this._shuffle(this.state.game.qa);

    const newGame = {
      ...game,
      qa: shuffled
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

  //this is what happens when the start button is pressed
  _startGame = () => {
    this._nextQuestion();
  }

  //this does a few things but ultimately sets the state with a new question and or ends game
  _nextQuestion = () => {
    //hold the state in a variable
    let {game} = this.state;
    //gameRunning state
    let gr = this.state.game.gr;
    //questionIndeex state
    let qi = this.state.game.questionIndex;
    let timer;
    //if the next question is the same as the questions array length then end the game
    if((qi + 1) === this.state.questionsLength){
      gr = false;
    } else {
      //increment the question index
      qi++;
      //gameRunning is set to true
      gr = true;
      //set a countdown timer with a callback function
      timer = this._setCountdown(1000, this._nextQuestion);
      
    }

    //make a temporary variable to hold the new state
    const newGame = {
      ...game,
      gameRunning: gr,
      questionIndex: qi,
      countdownInterval: timer

    }

    // set the state
    this.setState({
      game: newGame
    })
    
  }

  //set the countdown function.. takes in a time and a callback function
  _setCountdown = (time, cb) => {
    setTimeout(() => {
      //do this...
      cb();
      //after this many seconds...
    }, time);
  }


  //this has to show the answer and set a new timer for this and when its done show the next question
  _showAnswer = () => {
    let {game} = this.state;
    let sa = true;
    this.setState({
      timesUp: sa
    });
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
