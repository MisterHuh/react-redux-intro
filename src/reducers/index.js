import {  combineReducers  } from "redux";
import clockReducer from "./clock_reducer"
import productsReducer from "./products_reducers"
import themeReducer from "./theme_reducer"

const rootReducer = combineReducers({
  clock: clockReducer,
  products: productsReducer,
  theme: themeReducer
});

export default rootReducer;
