import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Anton', age: 35
      },
      {
        name: 'Max', age: 29
      },
      {
        name: 'Stephanie', age: 28
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App1</h1>
        <p>This is working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing <ul><li>1</li><li>2</li><li>3</li></ul></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
