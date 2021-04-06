import { useState } from 'react';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, changeTodoText] = useState('');

  const changeText = e => {
    changeTodoText(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, todoText]);
    changeTodoText('');
  };

  const removeTodo = idx => {
    let newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Devedo App</h1>
      <form className="new-todo-form" onSubmit={addTodo}>
        <input onChange={changeText} value={todoText} />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li className="todo" key={idx}>
            <h3>{todo}</h3>
            <button onClick={() => removeTodo(idx)}>(X)</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
