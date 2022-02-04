import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
  )
);

export default store;
