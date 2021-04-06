import React, { useContext } from 'react';

import TodosContext from '../context/TodosContext';

const TodoList = (/* props */) => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <ul className="todo-list">
      {todos.map((todo, idx) => (
        <li className="todo" key={idx}>
          <h3>{todo}</h3>
          <button onClick={() => removeTodo(idx)}>(X)</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
