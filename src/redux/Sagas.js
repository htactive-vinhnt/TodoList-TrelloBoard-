import { all } from "redux-saga/effects";

import { ListSaga } from "./TodoList/saga";

export default function* rootSaga() {
  yield all([ListSaga()]);
}
