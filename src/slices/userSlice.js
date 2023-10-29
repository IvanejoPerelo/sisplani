import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: localStorage.getItem("user")//Json.parse()
    },
    reducers:{
        saveUser: (state, action) => {
            state = action.payload
            localStorage.setItem("user", Json.stringify(action.payload))
        }
    }
})

export const { saveUser } = userSlice.actions

export default userSlice.reducer