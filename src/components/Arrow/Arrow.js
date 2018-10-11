import React from "react";

export const Arrow = (props) => {

    const _action = () => {
        props.action();
        
    } 

    return (
        <div>
            <h1
                onClick={_action}
            >
                {props.direction === "right" ? ">" : "<"}
            </h1>
        </div>

    )  

}