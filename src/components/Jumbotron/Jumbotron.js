import React from "react";
import { Arrow } from "../Arrow";
import { Button } from "../Button";

export const Jumbotron = props => {

  return (
    <div className="jumbotron">
      <div className="navigator">
        <Arrow 
            direction="left"
            action={props.decrementNumber}
        />
        <Arrow 
            direction="right"
            action={props.incrementNumber}
        />
      </div>
      <div className="body">
        <h1 className="display-4">Question {props.questionNumber}</h1>
        <p className="lead">{props.question.question}</p>
        <hr className="my-4" />

        {props.question.answers.map((answer, i) => (
          <Button 
            key={i} 
            action={props.chooseAnswer}
            index={i}
          >{answer.a}
          </Button>
        ))}

      </div>
    </div>
  );
};
