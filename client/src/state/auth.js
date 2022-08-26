import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const registerRequest = createAsyncThunk("REGISTER", ({name,lastname,email,password,state,city,address,zip,phone}) => {
    return axios.post("/api/users/register", {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        state: state.value,
        city: city.value,
        address: address.value,
        zip: zip.value,
        phone: phone.value,
      })
      .then(res => res.data)
})

export const loginRequest = createAsyncThunk("LOGIN", ({email,password}) => {
    return axios.post("/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then(res => res.data)
})

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
    return axios.post("/api/users/logout")
      .then(res => res.data)
})

export const getProfile = createAsyncThunk("GET_PROFILE", () => {
    return axios.get("/api/users/me")
      .then(res => res.data)
})

const authReducer = createReducer(
    {},
    {
        [registerRequest.fulfilled]: (state,action) => action.payload,
        [loginRequest.fulfilled]: (state,action) => action.payload,
        [logoutRequest.fulfilled]: (state,action) => action.payload,
        [getProfile.fulfilled]: (state,action) => action.payload,
    }
)

export default authReducer;