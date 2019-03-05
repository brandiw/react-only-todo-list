import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return(
        <div>
          <button onClick={this.props.clear}>
            Clear
          </button>
        </div>
      );
  }
}

export default Controls;
