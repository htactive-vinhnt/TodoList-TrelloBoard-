import { combineReducers } from "redux";
import TodoListReducer from "./TodoList/reducer";

const reducers = combineReducers({
  arrList: TodoListReducer
});

export default reducers;
