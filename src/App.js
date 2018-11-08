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
      showNextTimer: "",
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
    const QuestionTime = this.state.game.questionTime;
    const AnswerTime = this.state.game.AnswerTime;
    //Check if questions exist
    if(this.state.game.qa.length > 0){
      
      //save the old state so we don't overwrite it
      let {game} = this.state;
      
      //make a temporary variable for changes
      
      //start a timer and something else
      const questionTimer = setTimeout(() => {
        //same old save the old state
        console.log("showing the answer")
        let {game} = this.state;
        const showNextTimer = setTimeout(() => {
          console.log("show the next question");
        }, AnswerTime)
        //same old take a temp variable for the changes
        const updatedGame = {
          ...game,
          showAnswer: true,
          showNextTimer: showNextTimer
        }
        //update the game so the answer shows
        this.setState({
          game: updatedGame
        })

      }, QuestionTime);

      //the game is set to running, the questionTimer Timeout is activated, and the showAnswer is set to false
      const updatedGame = {
        ...game,
        gameRunning: true,
        questionTimer: questionTimer,
        showAnswer: false
      }
      //change the state
      this.setState({
        game: updatedGame
      })
      //this does nothing but just say something...
    } else {
      console.log("no questions, sorry");
    }
    
  }

  //this does a few things but ultimately sets the state with a new question and or ends game
  _nextQuestion = () => {
    //MAKE SOMETHING TO CLEAR INTERVALS
    // clearInterval(interval);
    //hold the state in a variable
    let {game} = this.state;
    //gameRunning state
    let gr = this.state.game.gr;
    //questionIndex state
    let qi = this.state.game.questionIndex;
    let countdownInterval;
    //if the next question is the same as the questions array length then end the game
    if((qi + 1) === this.state.game.questionsLength){
      gr = false;
      
    } else {
      //increment the question index
      qi++;
      //gameRunning is set to true
      gr = true;
      //set a countdown timer with a callback function
      countdownInterval = this._setCountdown(3000, this._showAnswer);
    }

    //make a temporary variable to hold the new state
    const newGame = {
      ...game,
      gameRunning: gr,
      questionIndex: qi,
      countdownInterval: countdownInterval

    }

    // set the state
    this.setState({
      game: newGame
    })
    
  }

  //set the countdown function.. takes in a time and a callback function
  _setCountdown = (time, cb) => {
    let {game} = this.state;
    const countdownInterval = setInterval(() => {
      let updateCountdown = {
        ...game,
        countdown: this.state.game.countdown - 1
      }
      console.log(updateCountdown);
      console.log(this.state.game.gameRunning);

      this.setState({
        game: updateCountdown
      });

    }, 1000)

    //countdown to show the question... when its done, it will show the answer
    const questionTimer = setTimeout(() => {
      cb();
    }, time)

    let updatedGame = {
      ...game,
      questionTimer: questionTimer,
      countdownInterval: countdownInterval
    }
    this.setState({
      game: updatedGame
    });
  }

  //this has to show the answer and set a new timer for this and when its done show the next question
  _showAnswer = () => {
    let {game} = this.state;
    let sa = {
      ...game,
      timesUp: true
    }
    this.setState({
      game: sa
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
