import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
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
