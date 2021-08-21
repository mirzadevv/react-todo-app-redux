import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todos/todosActions";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(add(inputValue));
    setInputValue("");
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={handleAddTodo}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
