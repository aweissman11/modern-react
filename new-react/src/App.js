import { useState } from 'react';

import { TodosState } from './context/TodosState';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => setTodos([...todos, newTodo]);

  const removeTodo = idx => {
    let newTodos = [...todos];
    newTodos.splice(idx, 1);
    setTodos(newTodos);
  };

  return (
    <TodosState>
      <div className="App">
        <h1>New Devedo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </TodosState>
  );
};

export default App;
