import React from "react";
import { useSelector } from "react-redux";
import store from "../store";
const TodosList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        {todos.length === 0 ? (
          <h5> There are no todos</h5>
        ) : (
          <>
            {todos.map((todo) => (
              <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      className="checkbox"
                      type="checkbox"
                      onClick={() =>
                        store.dispatch({
                          type: "completedChange",
                          payload: todo,
                        })
                      }
                    />
                    {todo.title}
                    <i className="input-helper"> </i>
                  </label>
                </div>
                <i
                  className="remove mdi mdi-close-circle-outline"
                  onClick={() =>
                    store.dispatch({ type: "delete", payload: todo })
                  }
                ></i>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default TodosList;
