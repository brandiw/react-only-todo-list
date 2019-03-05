import React, { Component } from 'react';
import List from 'apollo-react-next/components/List';
import ListItem from './ListItem';

class ToDoList extends Component {
  render(){
    const listItems = this.props.items.map((li, i) => {
      return <ListItem text={li} index={i} key={i} delete={this.props.delete} />
    });

    return(
        <List>
          {listItems}
        </List>
      );
  }
}

export default ToDoList;
