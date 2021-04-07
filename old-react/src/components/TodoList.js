import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { removeTodo, setTodos, DB_URL } from '../redux/actions';
import { animateButton } from '../utils/animate';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.btnRef = React.createRef();
  }

  componentDidMount() {
    // Fetch all the todos from the db
    this.props.setTodos();
    // add a confetti event listener
    this.btnRef.current.addEventListener('click', animateButton, false);
  }

  componentWillUnmount() {
    this.btnRef.current.removeEventListener('click', animateButton);
  }

  removeTodo = async todo_id => {
    await axios.delete(`${DB_URL}/${todo_id}`);
    this.props.removeTodo(todo_id);
  };

  render() {
    return (
      <ul className="todo-list confetti" ref={this.btnRef}>
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
