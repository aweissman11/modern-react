const TODO_ADDED = 'TODO_ADDED';
const TODO_REMOVED = 'TODO_REMOVED';

const addTodo = todo => ({
  type: TODO_ADDED,
  todo,
});

const removeTodo = todo_index => ({
  type: TODO_REMOVED,
  todo_index,
});

export { TODO_ADDED, TODO_REMOVED, addTodo, removeTodo };
