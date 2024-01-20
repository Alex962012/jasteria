import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
import { jwtDecode } from "jwt-decode";

export const fetchAuth:any = createAsyncThunk("auth/fetchAuth", async (params:any) => {
    try {
        const { data } = await axios.post("/auth/login", params)
        return jwtDecode(data.token);
    }

    catch (e) {
        alert("Неверно введен логин или пароль")
    }


});
const initialState = {
    data: null,
    status: "loading",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},

    extraReducers: {
        [fetchAuth.pending]: (state:any) => {
            state.status = "loading";
        },
        [fetchAuth.fulfilled]: (state:any, action:any) => {
            state.data = action.payload;
            state.status = "loaded";
        },
        [fetchAuth.rejected]: (state:any) => {
            state.data = null;
            state.status = "error";
        },
    },
});
export const selectIsAuth = (state:any) => Boolean(state.auth.data)

export const authReducer = authSlice.reducer;