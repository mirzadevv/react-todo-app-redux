import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import store from "../store";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    store.dispatch({
      type: "add",
      payload: { id: uuid(), title: inputValue, isCompleted: false },
    });
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
