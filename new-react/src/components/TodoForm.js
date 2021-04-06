import React, { useState, useContext } from 'react';

import TodosContext from '../context/TodosContext';

const TodoForm = (/* props */) => {
  const [todoText, changeText] = useState('');
  const todosCtx = useContext(TodosContext);

  const addTodo = e => {
    e.preventDefault();
    todosCtx.addTodo(todoText);
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
