import { combineReducers, createStore } from "redux";
import todosReducer from "./todos/todosReducer";
const reducers = combineReducers({
  todos: todosReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
