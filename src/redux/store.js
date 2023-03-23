import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./reducers/rootReducers";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;
