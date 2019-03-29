import React from 'react';
import  './Cockpit.css'

const cockpit = (props) =>{

    let classes = [];
    if(props.persons.length<=2){
      classes.push('red');
    }
    if(props.persons.length<=1){
      classes.push('bold');
    }

return (
    <div>
        <h1>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <button
      style={style}
      onClick={props.clicked}>Toggle Persons</button>
      </div>
);
}