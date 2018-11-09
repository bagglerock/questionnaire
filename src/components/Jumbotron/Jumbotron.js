import React from "react";
import { Button } from "../Button";

import "./Jumbotron.css";

export const Jumbotron = props => {

    let question = props.game.qa[props.game.questionIndex];
    // let answers = props.shuffle(question.answers);
    let answers = question.answers;
    // let content;

    // if(props.game.gameRunning){
    //     content = <h1>test</h1>;
    // } else {
    //     content = <h1>not a test </h1>;
    // }

    return (
        <div className="jumbotron" style={{backgroundColor: "Lightcoral" }}>
            {
                props.game.gameRunning ? 

                (
                    <div className="container" >
                        <div>
                            <h3>{props.game.countdown}</h3>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h1 className="display-5">Question {props.game.questionIndex} of {props.game.qa.length}</h1>
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
                    </div>)

            : 

            (
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
            )

            
            
            }



        </div>
    );
};
