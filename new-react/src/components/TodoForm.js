import React, { useState } from 'react';

const TodoForm = props => {
  const [todoText, changeText] = useState('');

  const addTodo = e => {
    e.preventDefault();
    props.addTodo(todoText);
    changeText('');
  };

  return (
    <form className="new-todo-form" onSubmit={addTodo}>
      <input onChange={e => changeText(e.target.value)} value={todoText} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
