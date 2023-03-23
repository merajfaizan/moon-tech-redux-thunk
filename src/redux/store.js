import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./reducers/rootReducers";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

// * we installed logger to see how our state works {logger}

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
);

export default store;
