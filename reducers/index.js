import product from "./productReducer";
import home from "./homeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product,
  home
});

export default rootReducer;
