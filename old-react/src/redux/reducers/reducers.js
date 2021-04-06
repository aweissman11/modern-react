import { TODO_ADDED, TODO_REMOVED, TODOS_SET } from '../actions';

const defaultState = {
  todos: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case TODOS_SET:
      return {
        ...state,
        todos: action.todos,
      };
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TODO_REMOVED:
      const todos = [...state.todos].filter(td => td.id !== action.todo_id);

      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};

export default reducers;
