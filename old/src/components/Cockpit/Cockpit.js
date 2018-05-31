import React from 'react';

import Aux from '../../hoc/Aux';

import classes from './Cockpit.css';

const cockpit = props => {
  const assignedClasses = [];

  if( props.persons.length <= 2 ) {
    assignedClasses.push( classes['red'] ); // assignedClasses = ['red']
  }
  if( props.persons.length <= 1 ) {
    assignedClasses.push( classes['bold'] ); // assignedClasses = ['red', 'bold']
  }


  let btnClass = classes['Button'];
  
  if( props.showPersons ) {
    btnClass = [classes['Button'], classes['Red']].join(' ');
  }

  return (
    <Aux>
      <h1>{ props.appTitle }</h1>
      <p className={ assignedClasses.join(' ') }>This is really working!</p>
      <div>
        <h2>Add a Person!</h2>
        {/* <input type="text" placeholder="Name" /> */}
        {/* <input type="number" placeholder="Age" /> */}
        <button onClick={ () => props.addPerson('Testttttt', 23) }>Add new Person</button>
      </div>
      <br />
      <hr />
      <br />
      <button
        className={ btnClass }
        onClick={ props.clicked }>Toggle Persons
      </button>
    </Aux>
  );
};

export default cockpit;