import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedInUser: "Default",
    },
    reducers: {
        logInUser: (state, action) => {
            state.loggedInUser = action.payload

            return state;
        },
        logOutUser: (state, action) => {
            state.loggedInUser = "Default"

            return state;
        }
    }
})

export const { logInUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;