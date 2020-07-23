import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();

const storeEnhancers = compose(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, storeEnhancers);

sagaMiddleware.run(rootSaga);
