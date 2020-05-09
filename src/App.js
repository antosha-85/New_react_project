import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Anton", age: 35 },
      { id: '2', name: "Max", age: 29 },
      { id: '3', name: "Stephanie", age: 28 },
    ],
    username: "Super Anton",
    showPersons: false,
  };

  usernameChangedHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
   
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
 
  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: "Anton", age: 35 },
        { name: e.target.value, age: 29 },
        { name: "Oksana", age: 28 },
      ],
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age}
            click={this.deletePersonHandler.bind(this, index)}/>
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Hello")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing{" "}
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App1</h1>
        <p>This is working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
      </div>
    );
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
