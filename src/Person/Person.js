import React from 'react'

const person = props => {
    return (
        <div>
            <h2 onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</h2>
            <div>{props.children}</div>
            <input type="text" 
            onChange={props.changed}
            
            value={props.name}/>
        </div>
    )
}

export default person