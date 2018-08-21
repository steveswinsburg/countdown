import React, { Component } from 'react';
import TimeUnit from './components/TimeUnit';

import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.interval = null;
    
    this.state = {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    }

    // the event
    this.eventDate = '2018-09-04T10:20+1000';
    this.eventName = 'My bae gets home';

  }

  componentDidMount() {

    this.interval = setInterval(
      () => this.calculate(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculate() {
    let event = new Date(this.eventDate);
    let now = new Date();

    let diff = new Date(event - now).getTime();

    var d, h, m, s;
    s = Math.floor(diff / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    if(d<0) { d= 0; }
    if(h<0) { h= 0; }
    if(m<0) { m= 0; }
    if(s<0) { s= 0; }

    this.setState({
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
    });

  }
  
  
  render() {

    let days = this.state.days;
    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

    return (
      <div className="container">

        <p>{this.eventName} in</p>

        <TimeUnit num={days} unit="d" />
        <TimeUnit num={hours} unit="h" />
        <TimeUnit num={minutes} unit="m" />
        <TimeUnit num={seconds} unit="s" leadingZero="true" />

      </div>
    );
  }
}

export default App;
