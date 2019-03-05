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

  render() {
    return (
      <div className="App">
        <Header />
        <ToDoList items={this.state.items} />
        <Controls clear={this.clear} />
        <Counter items={this.state.items} />
      </div>
    );
  }
}

export default App;
