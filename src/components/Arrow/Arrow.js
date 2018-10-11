import React from "react";

export const Arrow = (props) => {

    const action = (e) => {
        e.preventDefault();
        props.action();
        
    } 

    return (
        <div>
            <h1
                onClick={action}
            >
                {props.direction === "right" ? ">" : "<"}
            </h1>
        </div>

    )  

}