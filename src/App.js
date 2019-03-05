// Third part modules
import React, { Component } from 'react';

// Resources & Custom Components
import './App.css';
import Controls from './todolist/Controls';
import Counter from './todolist/Counter';
import Header from './Header';
import ToDoList from './todolist/ToDoList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: ['Walk the Dog', 'Wash the Clothes', 'Mow the Lawn']
    }
  }

  clear = () => {
    this.setState({ items: [] });
  }

  add = (item) => {
    let newItems = [...this.state.items, item];
    this.setState({ items: newItems });
  }

  delete = (index) => {
    let currentItems = [...this.state.items];
    if(index >= 0){
      currentItems.splice(index, 1);
      this.setState({ items: currentItems });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList items={this.state.items} delete={this.delete} />
        <Controls clear={this.clear} add={this.add} />
        <Counter items={this.state.items} />
      </div>
    );
  }
}

export default App;
