import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import loadData from "./load";
import applicationsReducer from "./applications";

const store = configureStore({
  reducer: {
    form: formReducer,
    load: loadData,
    applications: applicationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
