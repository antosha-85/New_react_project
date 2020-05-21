import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import classes from "./Person.module.css";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
// import styled from 'styled-components';
// import Radium from 'radium';
class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.current.focus();
    console.log(this.context.authenticated)
  }
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
        {/* <AuthContext.Consumer>
          {(context)=> context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        {/* {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>} */}
        {/* </AuthContext.Consumer> */} 
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
        <h2 onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </h2>
        <div>{this.props.children}</div>
        <input 
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElement}
        type="text" 
        onChange={this.props.changed}
        value={this.props.name} />
      </Fragment>
      // </Aux>
      // </div>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

// export default Radium(person)
export default withClass(Person, classes.Person);
