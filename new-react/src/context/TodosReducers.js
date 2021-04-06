export const TODOS_SET = 'TODOS_SET';
export const TODO_ADDED = 'TODO_ADDED';
export const TODO_REMOVED = 'TODO_REMOVED';

export const TodosReducer = (state, action) => {
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
      let todos = [...state.todos].filter(td => td.id !== action.todo_id);

      return {
        ...state,
        todos,
      };
    default:
      return state;
  }
};
