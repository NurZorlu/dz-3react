import React from "react"
import './Input.css'
export function Input({value, setValue}) {
    return (
        <div>
            <input className='input' value={value} onChange={(event) => setValue(event.target.value)} placeholder="Add task"/>
        </div>
    )
}