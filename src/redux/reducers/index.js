
import { combineReducers } from "redux";
import cartReducer from './cartReducer';

const rootreducers = combineReducers({
   cartReducer,
});

export default rootreducers;