import React, { Component, Fragment } from "react";
import classes from "./Person.module.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass'
// import styled from 'styled-components';
// import Radium from 'radium';
class Person extends Component {
  render() {

    console.log('[Person.js] rendering ... ')
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
      // <div className={classes.Person}>
      // <Aux>
      <Fragment>
        <h2 onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </h2>
        <div>{this.props.children}</div>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Fragment>
      // </Aux>
      // </div>
    );
  }
};

// export default Radium(person)
export default withClass(Person, classes.Person);
