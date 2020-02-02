import chessReducer from "./chessSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  chess: chessReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
