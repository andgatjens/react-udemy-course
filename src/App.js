import React, { Component } from 'react';

import Person from './Person/Person';

import classes from './App.css';

class App extends Component {
	state = {
		persons: [
			{ id: 'yez-1', name: 'Yez', age: 25 },
			{ id: 'karen-2', name: 'Karen', age: 25 },
			{ id: 'test-3', name: 'Test', age: 25 }
		],
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		// const personIndex = this.state.persons.findIndex(p => p.id === id);

		// const person = {
		// 	...this.state.persons[personIndex]
		// };

		// person.name = event.target.value;

		// const persons = [...this.state.persons];
		// persons[personIndex] = person;

		// this.setState({ persons: persons });

		const personIndex = this.state.persons.findIndex(p => p.id === id);

		const persons = [...this.state.persons];

		persons[personIndex].name = event.target.value;

		this.setState({ persons: persons });
	}

	addPersonHandler = (name, age) => {
		const persons = [...this.state.persons];

		persons.push({
			id: `${name}-${persons.length + 1}`,
			name,
			age
		});
		
		this.setState({ persons: persons });
	}

	deletePersonHandler = personIndex => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	}

  render() {
  	let persons = null;

  	let btnClass = '';

  	if( this.state.showPersons ) {
  		persons = (
  			<div>
  				{
  					this.state.persons.map((person, index) => {
							return (
								<Person
									key={ person.id }
				        	name={ person.name }
				        	age={ person.age }
				        	click={ () => this.deletePersonHandler(index) }
				        	changed={ (event) => this.nameChangedHandler(event, person.id) }
				        />
				      );
						})
  				}
        </div>
  		);

  		btnClass = classes['Red'];
  	}

  	const assignedClasses = [];
  	if( this.state.persons.length <= 2 ) {
  		assignedClasses.push( classes['red'] ); // assignedClasses = ['red']
  	}
  	if( this.state.persons.length <= 1 ) {
  		assignedClasses.push( classes['bold'] ); // assignedClasses = ['red', 'bold']
  	}

    return (
      <div className={ classes['App'] }>
        <h1>App Title</h1>
        <p className={ assignedClasses.join(' ') }>This is really working!</p>
        <div>
        	<h2>Add a Person!</h2>
        	{/* <input type="text" placeholder="Name" /> */}
        	{/* <input type="number" placeholder="Age" /> */}
	        <button onClick={ () => this.addPersonHandler('Testttttt', 23) }>Add new Person</button>
        </div>
        <br />
        <hr />
        <br />
        <button
        	className={ btnClass }
        	onClick={ this.togglePersonHandler }>Toggle Persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
