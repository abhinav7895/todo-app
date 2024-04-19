import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";
const store = configureStore({
    reducer : {
        "todos" : todoSlice,
        "user" : userSlice,
    }
})

export default store;