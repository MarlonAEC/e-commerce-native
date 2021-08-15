import product from "./productReducer";
import home from "./homeReducer";
import cart from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  product,
  home,
  cart
});

export default rootReducer;
