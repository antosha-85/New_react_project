import React from "react";
import classes from "./Person.module.css";
// import styled from 'styled-components';
// import Radium from 'radium';

const person = (props) => {
  // const StyledDiv = styled.div`
  // width: 60%;
  // margin: 16px auto;
  // border: 1px solid #eee;
  // box-shadow: 0 2px 3px #ccc;
  // padding: 16px;
  // text-align: center ;

  // @media (min-width: 500px) {
  //     width: 450px;
  // }
  // `;

  // const style = {
  //     '@media (min-width: 500px)': {
  //         width: '450px'
  //     }
  // }
  // const rnd = Math.random();

  // if (rnd > 0.7) {
  //   throw new Error('Something went wrong!')
  // }
  return (
    <div className={classes.Person}>
      <h2 onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </h2>
      <div>{props.children}</div>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Radium(person)
export default person;
