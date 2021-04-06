import axios from 'axios';

export const TODOS_SET = 'TODOS_SET';
export const TODO_ADDED = 'TODO_ADDED';
export const TODO_REMOVED = 'TODO_REMOVED';

export const DB_URL = 'http://localhost:3002/todos';

// Async action using redux Thunk
export const setTodos = () => {
  return async dispatch => {
    const response = await axios.get(DB_URL);

    return dispatch({
      type: TODOS_SET,
      todos: response.data,
    });
  };
};

// Async action using redux Thunk
export const addTodo = todoText => {
  return async dispatch => {
    const response = await axios.post(DB_URL, { title: todoText });

    dispatch({
      type: TODO_ADDED,
      todo: response.data,
    });
  };
};

// Non-asynchronous action
export const removeTodo = todo_id => ({
  type: TODO_REMOVED,
  todo_id,
});
