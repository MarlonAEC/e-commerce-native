import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const middleware = [thunk];

import rootReducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
