import React from "react";
import './Button.css'


export function Button({onClick, query}){
    return (
        <div>
            <button className="button" onClick={() => onClick(query)}>Add</button>
        </div>
    )
}