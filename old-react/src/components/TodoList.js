import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo } from '../redux/actions';

class TodoList extends Component {
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

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: todo_index => dispatch(removeTodo(todo_index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
