import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoText: '',
    };
  }

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todoText],
      todoText: '',
    });
  };

  changeText = e => {
    this.setState({
      todoText: e.target.value,
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
        <h1>Devedo App</h1>
        <form className="new-todo-form" onSubmit={this.addTodo}>
          <input onChange={this.changeText} value={this.state.todoText} />
          <button type="submit">Add Todo</button>
        </form>

        <ul className="todo-list">
          {this.state.todos.map((todo, idx) => (
            <li className="todo" key={idx}>
              <h3>{todo}</h3>
              <button onClick={() => this.removeTodo(idx)}>(X)</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
