import React from "react";

export const Button = props => {

    function _handleClick() {
        props.action(props.index)
    }

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={_handleClick}
            >
            {props.children}
            </button>
        </div>
    )
}