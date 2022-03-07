import { combineReducers } from "redux";
import adderReducer from "./reducers/adderReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";
import productReducer from "./reducers/productReducer";



const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order : adderReducer,
  filterData : filterReducer,
});

export default rootReducer;
