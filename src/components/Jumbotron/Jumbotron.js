import React from "react";
import { Button } from "../Button";

import "./Jumbotron.css";

export const Jumbotron = props => {

    let question = props.game.qa[props.game.questionIndex];
    // let answers = props.shuffle(question.answers);
    let answers = question.answers;
    let correctAnswer = question.answers.filter(answer => answer.status);
    let content;

    //set up different templates depending on what the status of the game is...
    if(props.game.gameRunning){
        if(props.game.showAnswer){
            //probably not the most elegant way but I filtered the original array and returned the first element of the array
            content = <h1>The correct answer is:  {correctAnswer[0].choice}</h1>

        } else {
            content = 
            <div className="container" >
                <div>
                    <h3>{props.game.countdown}</h3>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h1 className="display-5">Question {props.game.questionIndex + 1} of {props.game.qa.length}</h1>
                        <p className="lead">{question.question}</p>
                        <hr className="my-4" />

                        <div className="answers-container">
                            {answers.map((answer, i) => (
                                <Button
                                    key={i} 
                                    action={props.chooseAnswer}
                                    status={answer.status}
                                    answer={answer}
                                >{answer.choice}
                                </Button>
                            ))}
                        </div>
    
                    </div>
                </div>
            </div>
        }
    } else {
        content = 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Welcome to this game, hit the start button.</h2>
                        <hr className="my-4"/>
                        <p>High Score: {props.game.highScore}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Button
                            action={props.startGame}
                        >Start Game
                        </Button>
                    </div>
                </div>
            </div>
        ;
    }

    return (
        <div className="jumbotron" style={{backgroundColor: "Lightcoral" }}>
            {content}
        </div>
    );
};
