import { combineReducers } from "redux";
import filterReducers from "./filterReducers";
import productReducer from "./productReducer";

const rootReducers = combineReducers({
  product: productReducer,
  filter: filterReducers,
});

export default rootReducers;
