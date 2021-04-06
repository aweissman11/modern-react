export const TODO_ADDED = 'TODO_ADDED';
export const TODO_REMOVED = 'TODO_REMOVED';

export const TodosReducer = (state, action) => {
  switch (action.type) {
    case TODO_ADDED:
      return {
        ...state,
        todos: [...state.todos, action.todoText],
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
