import React from "react";
import { Button } from "../Button";

export const Jumbotron = props => {

  return (
    <div className="jumbotron">
      <div className="navigator">
        <Button 
            action={props.incrementNumber}
        >Next
        </Button>
        <Button 
            action={props.decrementNumber}
        >Prev
        </Button>
      </div>
      <div className="body">
        <h1 className="display-4">Question {props.questionNumber}</h1>
        <p className="lead">{props.question.question}</p>
        <hr className="my-4" />

        {props.question.answers.map((answer, i) => (
          <Button 
            key={i} 
            action={props.choose}
          >{answer.a}
          </Button>
        ))}

      </div>
    </div>
  );
};
