import React, { useReducer } from 'react';
import axios from 'axios';

import {
  TODO_ADDED,
  TODO_REMOVED,
  TODOS_SET,
  TodosReducer,
} from './TodosReducers';
import TodosContext from './TodosContext';

export const DB_URL = 'http://localhost:3003/todos';

export const TodosState = props => {
  const [todosState, dispatch] = useReducer(TodosReducer, { todos: [] });

  const setTodos = async () => {
    const apiTodos = await axios.get(DB_URL);

    dispatch({
      type: TODOS_SET,
      todos: apiTodos.data,
    });
  };

  const addTodo = async todoText => {
    const response = await axios.post(DB_URL, { title: todoText });

    dispatch({
      type: TODO_ADDED,
      todo: response.data,
    });
  };

  const removeTodo = async todo_id => {
    dispatch({
      type: TODO_REMOVED,
      todo_id,
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todosState.todos,
        setTodos,
        addTodo,
        removeTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};
