import React, { Component } from "react";
import classes from "./Clock.module.css";

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;

    return (
        <div className={classes.Clock}>
          <h1>Current Local Time</h1>
          <div className={classes.blackBackground}>
          <h2>{time.toLocaleTimeString('en-US',
            {timeZone:'America/Denver',hour12:true,hour:'numeric',minute:'numeric', second: 'numeric'}).split(':').join(' : ')}</h2>
          </div>
        </div>);
  }
}

export default Clock;
