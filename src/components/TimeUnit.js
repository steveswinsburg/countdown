import React, { Component } from "react";
import './../App.css';


export class TimeUnit extends Component {
  
  render() {

    let num = this.props.num;
    let leadingZero=this.props.leadingZero;
    if(leadingZero) {
      num=this.pad(num);
    }

    return (
      <span>
        <span className="digit">{num}</span>
        <span className="separator">{this.props.unit}</span>
      </span>
    );
  }

  pad(num) {
    return (num < 10) ? ("0" + num) : num;
  }


  
}

export default TimeUnit;
