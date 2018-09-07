import React from "react";
import { Button } from  "../Button";

export const Jumbotron = props => {

    return (

        <div className="jumbotron">
            <h1 className="display-4">Question X</h1>
            <p className="lead">What is this question going to be?</p>
            <hr className="my-4"/>
            <Button
                action={props.incrementNumber}
            >
            Button 1
            </Button>
            <Button
                action={props.decrementNumber}
            >Button 2</Button>
        </div>
    )
}