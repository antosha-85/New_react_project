import React from 'react'
import './Person.css'
import styled from 'styled-components';
console.log("styled", styled)
// import Radium from 'radium';

const person = props => {
const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center ;


@media (min-width: 500px) {
    width: 450px;
}
`;

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        // <div className="Person" style={style}>
        <StyledDiv>

            <h2 onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</h2>
            <div>{props.children}</div>
            <input type="text" 
            onChange={props.changed}
            value={props.name}/>
        </StyledDiv>
        //  </div> 
    )
}

// export default Radium(person)
export default person