import { TODO_ADDED, TODO_REMOVED } from '../actions';

const defaultState = {
  todos: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TODO_REMOVED:
      let todos = [...state.todos];
      todos.splice(action.todo_index, 1);

      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};

export default reducers;
