import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartUser = createAsyncThunk("GET_ALL_CARTITEMS", async (setTotal) => {
    try {
        const res = await axios.get("/api/cartUser")
        setTotal(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})


const cartUserReducer = createReducer(
    {},
    {
        [getCartUser.fulfilled]: (state,action) => action.payload,
    }
)

export default cartUserReducer;