import React, { useReducer } from 'react';

import { TODO_ADDED, TODO_REMOVED, TodosReducer } from './TodosReducers';
import TodosContext from './TodosContext';

export const TodosState = props => {
  const [todosState, dispatch] = useReducer(TodosReducer, { todos: [] });

  const addTodo = async todoText => {
    dispatch({
      type: TODO_ADDED,
      todoText,
    });
  };

  const removeTodo = async todo_index => {
    dispatch({
      type: TODO_REMOVED,
      todo_index,
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todosState.todos,
        addTodo,
        removeTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};
