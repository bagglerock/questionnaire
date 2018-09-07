import React from "react";

function handleClick(e, props) {
    e.preventDefault();
    props.action(props.parameter)
}

export const Button = props => {
    return (
        <div>
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={(e) => handleClick(e, props)}
            >
            {props.children}
            </button>
        </div>
    )
}