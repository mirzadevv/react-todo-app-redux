export default function todosReducer(todos = [], action) {
  const todo = action.payload;

  switch (action.type) {
    case "add": {
      const newTodos = [...todos];
      newTodos.unshift(todo);
      return newTodos;
    }

    default:
      return todos;
  }
}
