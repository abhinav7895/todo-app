import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";
const store = configureStore({
    reducer : {
        "todos" : todoSlice,
        "user" : userSlice,
        "tasks" : taskSlice,
    }
})

export default store;