import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        items: [{name:"Working"}, {name:"Coding"}],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload,1);
        }
    },
})

export const { addItem, removeItem } = todoListSlice.actions;

export default todoListSlice.reducer;