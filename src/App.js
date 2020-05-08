import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    persons: [
      { name: 'Anton', age: 35      },
      { name: 'Max', age: 29     },
      {        name: 'Stephanie', age: 28     }
    ], 
    username: 'Super Anton'
  }

  usernameChangedHandler = e => {
    this.setState(
      {
        username: e.target.value
      }
    )
  }
  switchNameHandler = (newName) => {
    // console.log('was clicked')
    this.setState({
      persons: [
      {
        name: newName, age: 35
      },
      {
        name: 'Maximilian', age: 29
      },
      {
        name: 'Stephanie', age: 30
      }
    ]
  })
  }


  nameChangedHandler = e => {
    this.setState ({
      persons: [
        { name: 'Anton', age: 35      },
        { name: e.target.value, age: 29     },
        { name: 'Oksana', age: 28     }
      ]
    })
  }

  
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App1</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('hello')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Hello')}
        changed={this.nameChangedHandler}
        >My Hobbies: Racing <ul><li>1</li><li>2</li><li>3</li></ul></Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        <UserInput changed={this.usernameChangedHandler}
        currentName={this.state.username}/>
        <UserOutput userName={this.state.username} />
      </div>
    )
    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
