import { put, call, takeEvery } from "redux-saga/effects";
import {
  getAllListAndCard,
  getTodoListById,
  addList,
  editTodoList,
  deleteTodoList,
  addCard,
  getAllCard,
  getCardByCategory,
  deleteCard,
  getCardByID,
  deleteCardByCategory,
  editCardName,
  updateDescription
} from "../../api/TodoList";
import {
  getAllListAndCardSuccess,
  getAllListAndCardFailed,
  getListByIdSuccess,
  getListByIdFailed,
  addNewListSuccess,
  addNewListFailed,
  editListSuccess,
  editListFailed,
  deleteListSuccess,
  deleteListFailed,
  addCardSuccess,
  addCardFailed,
  getAllCardSuccess,
  getAllCardFailed,
  getCardByCategorySuccess,
  getCardByCategoryFailed,
  deleteCardSuccess,
  deleteCardFailed,
  getCardSuccess,
  getCardFailed,
  editCardSuccess,
  editCardFailed,
  upDateCardDescriptionSuccess,
  upDateCardDescriptionFailed
} from "./action";
import * as types from "./types";

import { ToastSuccess, ToastError } from "../../utils/toaster";

function* getAllListsSaga() {
  try {
    const resData = yield call(getAllListAndCard);
    if (resData.data) {
      yield put(getAllListAndCardSuccess(resData.data));
      ToastSuccess("Success");
    }
  } catch (error) {
    const errs = error.message;
    yield put(getAllListAndCardFailed(errs));
    ToastError(errs);
  }
}

function* getListSaga(action) {
  try {
    const resData = yield call(getTodoListById, action.id);

    if (resData.data) {
      yield put(getListByIdSuccess(resData.data));
    }
  } catch (error) {
    const errs = error.message;
    yield put(getListByIdFailed(errs));
  }
}

function* addNewListSaga(action) {
  try {
    const resData = yield call(addList, action.payload);
    const fetchData = yield call(getAllListAndCard);
    if (resData.data) {
      yield put(addNewListSuccess(resData.data));
      yield put(getAllListAndCardSuccess(fetchData.data));
    }
  } catch (error) {
    const errs = error.response.data.message;
    yield put(addNewListFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* GetAllCardSaga(action) {
  try {
    const resData = yield call(getAllCard, action.payload);
    if (resData.data) {
      yield put(getAllCardSuccess(resData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(getAllCardFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* GetCardByListID(action) {
  try {
    const resData = yield call(getCardByCategory, action.payload);
    if (resData.data) {
      yield put(getCardByCategorySuccess(resData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(getCardByCategoryFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* GetCardByCardID(action) {
  try {
    const resData = yield call(getCardByID, action.payload);
    if (resData.data) {
      yield put(getCardSuccess(resData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(getCardFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* addNewCardSaga(action) {
  try {
    const resData = yield call(
      addCard,
      action.payload.id,
      action.payload.category,
      action.payload.card
    );
    const fetchData = yield call(getAllCard);
    if (resData.data) {
      yield put(addCardSuccess(resData.data));
      yield put(getAllCardSuccess(fetchData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(addCardFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* editListSaga(action) {
  try {
    const resData = yield call(
      editTodoList,
      action.payload.id,
      action.payload.list
    );
    const fetchData = yield call(getAllListAndCard);
    if (resData.data) {
      yield put(editListSuccess(resData.data));
      yield put(getAllListAndCardSuccess(fetchData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.message;
    yield put(editListFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* editCardSaga(action) {
  try {
    const resData = yield call(
      editCardName,
      action.payload.id,
      action.payload.data
    );
    const fetchData = yield call(getAllCard);
    const fetchTask = yield call(getCardByID, action.payload.id);
    if (resData.data) {
      yield put(editCardSuccess(resData.data));
      yield put(getAllCardSuccess(fetchData.data));
      yield put(getCardSuccess(fetchTask.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.message;
    yield put(editCardFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* updateDescriptionCardSaga(action) {
  console.log("fecth", action.payload.data);
  try {
    const resData = yield call(
      updateDescription,
      action.payload.id,
      action.payload.data
    );
    const fetchData = yield call(getAllCard);
    const fetchTask = yield call(getCardByID, action.payload.id);
    if (resData.data) {
      yield put(upDateCardDescriptionSuccess(resData.data));
      yield put(getAllCardSuccess(fetchData.data));
      yield put(getCardSuccess(fetchTask.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.message;
    yield put(upDateCardDescriptionFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* deleteListSaga(action) {
  try {
    const resData = yield call(deleteTodoList, action.payload.id);
    const dataDelete = yield call(deleteCardByCategory, action.payload.arrTask);
    const fetchTasks = yield call(getAllCard);
    const fetchData = yield call(getAllListAndCard);

    if (resData.data) {
      yield put(deleteCardSuccess(dataDelete.data));
      yield put(deleteListSuccess(resData.data));
      yield put(getAllListAndCardSuccess(fetchData.data));
      yield put(getAllCardSuccess(fetchTasks.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(deleteListFailed(errs));
    ToastError(errs.name[0]);
  }
}

function* removeCard(action) {
  try {
    const resData = yield call(deleteCard, action.payload);
    const fetchData = yield call(getCardByCategory);
    if (resData.data) {
      yield put(deleteCardSuccess(resData.data));
      yield put(getAllCardSuccess(fetchData.data));
    }
    ToastSuccess(resData.data.message);
  } catch (error) {
    const errs = error.response.data.message;
    yield put(deleteCardFailed(errs));
    ToastError(errs.name[0]);
  }
}

export function* ListSaga() {
  yield takeEvery(types.GET_ALL_LIST_AND_CARD_DOING, getAllListsSaga);
  yield takeEvery(types.GET_LIST_AND_CARD_BY_ID_DOING, getListSaga);
  yield takeEvery(types.ADD_LIST_DOING, addNewListSaga);
  yield takeEvery(types.EDIT_LIST_DOING, editListSaga);
  yield takeEvery(types.DELETE_LIST_DOING, deleteListSaga);
  yield takeEvery(types.ADD_CARD_DOING, addNewCardSaga);
  yield takeEvery(types.GET_ALL_CARD_DOING, GetAllCardSaga);
  yield takeEvery(types.GET_CARD_BY_LIST_ID_DOING, GetCardByListID);
  yield takeEvery(types.DELETE_CARD_DOING, removeCard);
  yield takeEvery(types.GET_CARD_BY_CARD_ID_DOING, GetCardByCardID);
  yield takeEvery(types.EDIT_CARD_DOING, editCardSaga);
  yield takeEvery(
    types.UPDATE_CARD_DESCRIPTION_DOING,
    updateDescriptionCardSaga
  );
}
