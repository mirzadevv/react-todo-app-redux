import { v4 as uuid } from "uuid";
export function add(inputValue) {
  return {
    type: "add",
    payload: { id: uuid(), title: inputValue, isCompleted: false },
  };
}

export function completedChange(todo) {
  return {
    type: "completedChange",
    payload: todo,
  };
}

export function deleteTodo(todo) {
  return {
    type: "delete",
    payload: todo,
  };
}
