import React from "react";
import { Button } from "../Button";

import "./Jumbotron.css";

export const Jumbotron = props => {

    console.log(props.game);
    let question = props.game.qa[props.game.questionIndex];

  return (
    <div className="jumbotron" style={{backgroundColor: "Lightcoral" }}>

        {
            props.game.gameRunning ? 

            (
                <div className="container" >
                    <div className="row">
                        <div className="col-6">
                            <h1 className="display-5">Question {props.game.questionIndex + 1} of {props.game.qa.length}</h1>
                            <p className="lead">{question.question}</p>
                            <hr className="my-4" />

                            <div className="answers-container">
                                {question.answers.map((answer, i) => (
                                    <Button
                                        key={i} 
                                        action={props.chooseAnswer}
                                        status={answer.status}
                                        answer={answer.choice}
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
