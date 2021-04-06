import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import TodosContext from '../context/TodosContext';
import { DB_URL } from '../context/TodosState';

const TodoList = (/* props */) => {
  const todosCtx = useContext(TodosContext);

  useEffect(() => {
    todosCtx.setTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todosCtx.todos.length]);

  const removeTodo = async todo_id => {
    await axios.delete(`${DB_URL}/${todo_id}`);
    todosCtx.removeTodo(todo_id);
  };

  return (
    <ul className="todo-list">
      {todosCtx.todos.map(({ title, id }) => (
        <li className="todo" key={id}>
          <h3>{title}</h3>
          <button onClick={() => removeTodo(id)}>(X)</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
