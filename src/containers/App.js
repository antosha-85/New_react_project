import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import Validation from "../components/ValidationComponent/Validation";
import Char from "../components/Char/Char";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Clock from "../components/Clock/Clock";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";
// import styled from 'styled-components';

// import Radium, { StyleRoot } from "radium";
// const StyledButton = styled.button`
// background-color: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//     &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "1", name: "Anton", age: 35 },
        { id: "2", name: "Max", age: 29 },
        { id: "3", name: "Stephanie", age: 28 },
      ],
      username: "Super Anton",
      showPersons: false,
      userInput: "",
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }
  componentDidMount() {
    console.log("[App.js] componentDidMouunt");
  }

  shouldComponentUpdate(nestProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
  // state = {
  //   persons: [
  //     { id: "1", name: "Anton", age: 35 },
  //     { id: "2", name: "Max", age: 29 },
  //     { id: "3", name: "Stephanie", age: 28 },
  //   ],
  //   username: "Super Anton",
  //   showPersons: false,
  //   userInput: "",
  // };
  inputChangedHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    console.log("App -> deleteCharHandler -> updatedText", updatedText);
    this.setState({ userInput: updatedText });
  };

  usernameChangedHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // const person = Object.assign({}, this.state.persons[personIndex])
    this.setState((prevState, props) => {
      return {
        // persons: [
        //   { name: "Anton", age: 35 },
        //   { name: e.target.value, age: 29 },
        //   { name: "Oksana", age: 28 },
        // ],
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };
  render() {
    console.log("[App.js] render");
    // const style = {
    //   backgroundColor: "green",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };
    // let btnClass = [classes.Button]
    // let btnClass = "";

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        // <div>
        <Persons
          persons={this.state.persons}
          clicked={() => this.deletePersonHandler()}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
      /* {this.state.persons.map((person, index) => {
            return (
              // <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              // </ErrorBoundary>
            );
          })} */
      // </div>

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
      // btnClass = classes.Red;
    }

    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={this.deleteCharHandler.bind(this, index)}
        />
      );
    });

    return (
      // <StyleRoot>
      <Aux>
        {/* <h1>Hi, I'm a React App1</h1>
        <p className={assignedClasses.join(" ")}>This is working!</p>
        <button
          className={btnClass}
          // alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button> */}
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={() => this.togglePersonsHandler()}
              // login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
        <Clock />
      </Aux>
      // </StyleRoot>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}

// export default Radium(App);
export default withClass(App, classes.App);
