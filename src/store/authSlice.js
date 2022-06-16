import { createSlice } from "@reduxjs/toolkit";
const initailAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'authentication',
    initialState: initailAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }

    }
})


export default authSlice;