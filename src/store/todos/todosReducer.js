export default function todosReducer(todos = [], action) {
  const todo = action.payload;

  switch (action.type) {
    case "add": {
      const newTodos = [...todos];
      newTodos.unshift(todo);
      return newTodos;
    }

    case "completedChange": {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return { ...item, isCompleted: !todo.isCompleted };
        } else {
          return item;
        }
      });

      return newTodos;
    }

    default:
      return todos;
  }
}
