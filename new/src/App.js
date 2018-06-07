import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 'Yez1',
        name: 'Yez',
        age: 25
      },
      {
        id: 'Karen2',
        name: 'Karen',
        age: 25
      }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          id: `${ newName }1`,
          name: newName,
          age: 30
        },
        {
          id: 'Karen2',
          name: 'Karen',
          age: 25
        }
      ]
    });
  }

  nameChangeedHandler = (event) => {
    this.setState({
      persons: [
        {
          id: 'Yez1',
          name: 'Yez',
          age: 25
        },
        {
          id: `${ event.target.value }2`,
          name: event.target.value,
          age: 25
        }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={ style }
          onClick={ this.switchNameHandler.bind(this, 'Yezua') }
        >
          Switch Name
        </button>
        { this.state.persons.map(
          (person, index) => {
            return <Person
              key={ person.id }
              name={ person.name }
              age={ person.age }
              click={ this.switchNameHandler.bind(this, 'Yezua') }
              changed={ this.nameChangeedHandler }
            />
          }
        ) }
      </div>
    );
  }
}

export default App;
