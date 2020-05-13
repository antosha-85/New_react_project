import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import Validation from "../components/ValidationComponent/Validation";
import Char from "../components/Char/Char";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
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
  state = {
    persons: [
      { id: "1", name: "Anton", age: 35 },
      { id: "2", name: "Max", age: 29 },
      { id: "3", name: "Stephanie", age: 28 },
    ],
    username: "Super Anton",
    showPersons: false,
    userInput: "",
  };
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
    this.setState({
      // persons: [
      //   { name: "Anton", age: 35 },
      //   { name: e.target.value, age: 29 },
      //   { name: "Oksana", age: 28 },
      // ],
      persons: persons,
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
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
    let btnClass = "";

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black",
      // };
      btnClass = classes.Red;
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

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi, I'm a React App1</h1>
        <p className={assignedClasses.join(" ")}>This is working!</p>
        <button
          className={btnClass}
          // alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
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
      </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}

// export default Radium(App);
export default App;