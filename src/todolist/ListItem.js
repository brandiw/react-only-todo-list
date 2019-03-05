import React, { Component } from 'react';
import IconButton from 'apollo-react-next/components/IconButton';
import { secondaryRed } from 'apollo-react-next/colors';

class ListItem extends Component {
  render(){
    return(
        <li>
          {this.props.text}
          <IconButton
            style={{backgroundColor: secondaryRed[500]}}
            onClick={() => { this.props.delete(this.props.index); }}
          >
            X
          </IconButton>
        </li>
      );
  }
}

export default ListItem;
