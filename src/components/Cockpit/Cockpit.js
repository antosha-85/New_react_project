import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
const Cockpit = (props) => {

  // eslint-disable
  useEffect(()=> {
    console.log('[Cockpit.js] useEffect');
    //http request
    // setTimeout(()=> {
    //   alert('Saved data to cloud!')
    // }, 1000);
    return ()=> {
      console.log('[Person.js] cleanup work in useEffect')
    }
  }, [])
  
  useEffect(()=>{
    console.log('[Cockpit.js 2nd useEffect');
    return ()=> {
      console.log('[Cockpit.js] cleanup workin 2nd useEffect')
    }
  })
  
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>

      <p className={assignedClasses.join(" ")}>This is working!</p>
      <button
        className={btnClass}
        // alt={this.state.showPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
