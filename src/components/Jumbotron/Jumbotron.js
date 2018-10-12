import React from "react";
import { Arrow } from "../Arrow";
import { Button } from "../Button";

export const Jumbotron = props => {

  return (
    <div className="jumbotron" style={{backgroundColor: "Lightcoral" }}>
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
      </div>

    </div>
  );
};
