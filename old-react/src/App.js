import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Old Devedo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
