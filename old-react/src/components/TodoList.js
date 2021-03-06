import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { removeTodo, setTodos, DB_URL } from '../redux/actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.setTodos();
  }

  removeTodo = async todo_id => {
    await axios.delete(`${DB_URL}/${todo_id}`);

    this.props.removeTodo(todo_id);
  };

  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(({ title, id }) => (
          <li className="todo" key={id}>
            <h3>{title}</h3>
            <button onClick={() => this.removeTodo(id)}>(X)</button>
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
    setTodos: () => dispatch(setTodos()),
    removeTodo: todo_index => dispatch(removeTodo(todo_index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
