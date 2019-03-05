import React, { Component } from 'react';
import ListItem from './ListItem';

class ToDoList extends Component {
  render(){
    const listItems = this.props.items.map((li, i) => {
      return <ListItem text={li} key={i} />
    });

    return(
        <ul>
          {listItems}
        </ul>
      );
  }
}

export default ToDoList;
