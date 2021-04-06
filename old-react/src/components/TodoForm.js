import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions';

class TodoForm extends Component {
  state = {
    todoText: '',
  };

  changeText = e => {
    this.setState({
      todoText: e.target.value,
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: '' });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.addTodo}>
        <input onChange={this.changeText} value={this.state.todoText} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
