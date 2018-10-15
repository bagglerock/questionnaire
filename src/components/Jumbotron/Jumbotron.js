import React from "react";
import { Arrow } from "../Arrow";
import { Button } from "../Button";

import "./Jumbotron.css";

export const Jumbotron = props => {

  return (
    <div className="jumbotron" style={{backgroundColor: "Lightcoral" }}>

        {
            props.gameRunning ? 

            (
                <div className="container" >
                    <div className="row">
                        <div className="col-3">
                            <Arrow 
                                direction="left"
                                action={props.decrementNumber}
                            />
                        </div>
                        <div className="col-6">
                            <h1 className="display-5">Question {props.questionNumber}</h1>
                            <p className="lead">{props.question.question}</p>
                            <hr className="my-4" />
    
                            {props.question.answers.map((answer, i) => (
                                <Button 
                                    key={i} 
                                    action={props.chooseAnswer}
                                    index={i}
                                    answer={answer}
                                >{answer.choice}
                                </Button>
                            ))}
                        </div>
                        <div className="col-3">
                            <Arrow 
                                direction="right"
                                action={props.incrementNumber}
                            />
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
