import React from "react";
import "./Button.css";

export const Button = props => {

    function _handleClick() {
        props.action(props.status)
    }

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-secondary button"
                onClick={_handleClick}
            >
            {props.children}
            </button>
        </div>
    )
}