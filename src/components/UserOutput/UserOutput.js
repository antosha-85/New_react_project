import React from 'react'
import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>lorem 1 {props.userName}             
            </p>
            <p>lorem 2              
            </p>
        </div>
    )
}

export default userOutput