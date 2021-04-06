import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, idx) => (
          <li className="todo">
            <h3>{todo}</h3>
            <button onClick={() => this.props.removeTodo(idx)}>(X)</button>
          </li>
        ))}
      </ul>
    );
  }
}
