import React from "react";

export const Button = props => {

    console.log(props);

    function handleClick() {
        props.action(props.index)
    }

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handleClick}
            >
            {props.children}
            </button>
        </div>
    )
}