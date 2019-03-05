import React, { Component } from 'react';

class Counter extends Component {
  render(){
    let message = 'You have ' + this.props.items.length + ' things left to do today';
    if(this.props.items.length === 1){
      message = 'Keep going! Just one more thing! Go ' + this.props.items[0] + '!!!';
    }
    else if(this.props.items.length === 0){
      message = 'YAYAYAYAYAYAYAYAY! We did all the things!';
    }
    return(
        <div className="counter">
          <h2>{message}</h2>
        </div>
      );
  }
}

export default Counter;
