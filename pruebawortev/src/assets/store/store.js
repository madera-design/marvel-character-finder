import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./reducer";
import loginReducer from "./loginReducer";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    login: loginReducer,
  },
});

export default store;
