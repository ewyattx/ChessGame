import { configureStore, combineReducers } from "redux-starter-kit";
import chessReducer from "./chessSlice";

const rootReducer = combineReducers({
  chess: chessReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
