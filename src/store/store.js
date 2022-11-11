import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainStore/mainSlice";

const rootReducers = {
  main: mainSlice,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
