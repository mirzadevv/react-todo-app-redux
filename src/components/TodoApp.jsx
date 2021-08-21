import React from "react";
const TodoApp = () => {
  return (
    <div class="page-content page-container" id="page-content">
      <div class="row container d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card px-3">
            <div class="card-body">
              <h4 class="card-title">Awesome Todo list</h4>
              <div class="add-items d-flex">
                <input
                  type="text"
                  class="form-control todo-list-input"
                  placeholder="What do you need to do today?"
                />
                <button class="add btn btn-primary font-weight-bold todo-list-add-btn">
                  Add
                </button>
              </div>
              <div class="list-wrapper">
                <ul class="d-flex flex-column todo-list">
                  <li>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" />
                        Buy Milk.
                        <i class="input-helper"> </i>
                      </label>
                    </div>
                    <i class="remove mdi mdi-close-circle-outline"></i>
                  </li>
                  <li class="completed">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="checkbox" type="checkbox" checked="" />
                        Wash the dishes.
                        <i class="input-helper"></i>
                      </label>
                    </div>
                    <i class="remove mdi mdi-close-circle-outline"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
