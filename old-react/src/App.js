import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addTodo = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  removeTodo = idx => {
    let todos = [...this.state.todos];
    todos.splice(idx, 1);
    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <h1>Old Devedo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    );
  }
}

export default App;
