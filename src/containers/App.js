import React, { PureComponent } from 'react';

import WithClass from '../hoc/WithClass';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

import classes from './App.css';

class App extends PureComponent {
	constructor(props) {
		super(props);

		console.log('[App.js] Inside Constructor');
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount()');
	}

	state = {
		persons: [
			{ id: 'yez-1', name: 'Yez', age: 25 },
			{ id: 'karen-2', name: 'Karen', age: 25 },
			{ id: 'test-3', name: 'Test', age: 25 }
		],
		showPersons: false,
		toggleClicked: 0
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

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
		this.setState((prevState, props) => {
			return {
				showPersons: !doesShow,
				toggleClicked: ++prevState.toggleClicked
			};
		});
	}

  render() {
  	console.log('[App.js] Inside render()');
  	
  	let persons = null;

  	if( this.state.showPersons ) {
  		persons = <Persons
				persons={ this.state.persons }
				clicked={ this.deletePersonHandler }
				changed={ this.nameChangedHandler }
			/>;
  	}

    return (
      <WithClass classes={ classes['App'] }>
      	<button
      		onClick={ () => { this.setState({ showPersons: true }) } }
      	>
      		Show Persons
      	</button>
        <Cockpit
        	appTitle={ this.props.title }
        	persons={ this.state.persons }
        	showPersons={ this.state.showPersons }
        	clicked={ this.togglePersonHandler }
        	addPerson={ this.addPersonHandler }
        />
        <p>{ this.state.toggleClicked }</p>
        { persons }
      </WithClass>
    );
  }
}

export default App;
