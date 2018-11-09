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
      questionTime: 10000,
      questionTimer: "",
      answerTime: 5000,
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
    //called this because this is the amount of time the quesion is displayed... seems weird but I suck at naming
    const QuestionTime = this.state.game.questionTime;

    //clear intervals in case
    clearInterval(this.state.game.answerTimer);
    clearInterval(this.state.game.questionTimer);
    clearInterval(this.state.game.countdownTimer);

    if(this.state.game.questionIndex + 1 !== this.state.game.questionsLength){
      let {game} = this.state;
      //set the time for the answer to show
      const answerTimer = setTimeout(() => {
        this._setQuestionTimer();
      }, QuestionTime)
      //set the interval timer
      const intervalTimer = setInterval(() => {
        let {game} = this.state;
        let countdown = this.state.game.countdown - 1;
        let updatedGame = {
          ...game,
          countdown: countdown
        };
        this.setState({
          game: updatedGame
        })
      }, 1000)
      //check if the game is running and set the questionIndex accordingly
      let questionIndex;
      //this part not only increments the question index but only does it when the game has been running, that way it doesn't skip the first question upon start
      if(this.state.game.gameRunning){
        questionIndex = this.state.game.questionIndex + 1;
      } else {
        questionIndex = this.state.game.questionIndex;
      }
      //temporary state
      const updatedGame = {
        ...game,
        gameRunning: true,
        questionIndex: questionIndex,
        showAnswer: false,
        answerTimer: answerTimer,
        countdownTimer: intervalTimer
      }
      //setState
      this.setState({
        game: updatedGame
      })
    } else {
      this._endGame();
    }
  }

  _setQuestionTimer = () => {
    //once again weird because it seems like it should be called question timer but this is the amount of time the answer is displayed
    const AnswerTime = this.state.game.answerTime;

    //clear intervals in case
    clearInterval(this.state.game.answerTimer);
    clearInterval(this.state.game.questionTimer);
    clearInterval(this.state.game.countdownTimer);

    //endGame if question max is reached
    let {game} = this.state;
    const questionTimer = setTimeout(() => {
      this._setAnswerTimer();
    }, AnswerTime)
    const countdown = 9;
    const updatedGame = {
      ...game,
      showAnswer: true,
      countdown: countdown,
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
  }


}

export default App;
