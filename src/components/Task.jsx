import React from "react"
import './Task.css'
export function Task({name}) {
    return(
        <div className="task-container">
            <div className="task">{name}</div>
        </div>
    )
}