import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);
export default store;
