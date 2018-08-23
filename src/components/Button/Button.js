import React from "react";

export const Button = props => (
    <div>
        <button type="button" class="btn btn-secondary">{props.children}</button>
    </div>
)