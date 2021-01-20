import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/playerReducer";

const store = configureStore({
  reducer: playerReducer,
});

export default store;
