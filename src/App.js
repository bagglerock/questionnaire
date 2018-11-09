import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import { Jumbotron } from "./components/Jumbotron"; 
import { Title } from "./components/Title";

import qa from "./qa.json";

import "./App.css";

class App extends Component {

  state = {
    game: {
      answers: [],
      correctAnswers: 0,
      gameRunning: false,
      highScore: 0,
      qa: qa,
      questionIndex: 0,
      questionsLength: qa.length,
      countdown: 10,
      countdownTimer: "",
      questionTime: 3000,
      questionTimer: "",
      answerTime: 6000,
      answerTimer: "",
      showAnswer: false
      
    }
  };

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
    if(!this.state.game.gameRunning){
      this._setAnswerTimer();
    } else {
    console.log("game is already running");
    }
  }

  _setAnswerTimer = () => {
    let {game} = this.state;
    const answerTimer = setTimeout(() => {
      this._setQuestionTimer();
    }, 10000)
    const updatedGame = {
      ...game,
      gameRunning: true,
      showAnswer: false,
      answerTimer: answerTimer
    }
    this.setState({
      game: updatedGame
    })
  }

  _setQuestionTimer = () => {

    //endGame if question max is reached
    let {game} = this.state;
    const questionTimer = setTimeout(() => {
      this._setAnswerTimer();
    }, 5000)
    const updatedGame = {
      ...game,
      showAnswer: true,
      questionTimer: questionTimer
    }
    this.setState({
      game: updatedGame
    }); 
  }

  _endGame = () => {
    let {game} = this.state;
    const updatedGame = {
      ...game,
      gameRunning: false
    }
    this.setState({
      game: updatedGame
    })
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
        />
        <Footer/>
      </div>
    );
  }

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


  componentDidUpdate() {
    if (this.state.game.gameRunning){
      console.log("this game is running now");
      console.log(this.state.game.qa.length);
      console.log(this.state.game.questionIndex);
    }
  }


}

export default App;
