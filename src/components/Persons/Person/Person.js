import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';

import classes from './Person.css';

class Person extends Component {

	constructor(props) {
		super(props);

		console.log('[Person.js] Inside Constructor');
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}
	
	render() {
		console.log('[Person.js] Inside render()');

		return (
			<WithClass classes={ classes['Person'] }>
				<p>I'm { this.props.name } and I am { this.props.age } years old!</p>
				{ this.props.children }
				<input type="text" onChange={ this.props.changed } value={ this.props.name } />
				<button onClick={ this.props.click }>Delete Person</button>
			</WithClass>
		);
	}

}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
	click: PropTypes.func
};

export default Person;