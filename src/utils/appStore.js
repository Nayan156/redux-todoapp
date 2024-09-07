import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        todoList: todoListSlice,
        user: userSlice
    }
})

export default appStore;