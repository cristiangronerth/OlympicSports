import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllShirts = createAsyncThunk("GET_ALL_SHIRTS", async (setShirts) => {
    try {
        const res = await axios.get(`/api/products/getProducts?categoria=shirts`)
        return setShirts(res.data)
    } catch (err) {
        return err.message
    }
})

export const getProduct = createAsyncThunk("GET_PRODUCT", async ({setProduct,productId}) => {
    try {
        const res = await axios.get(`/api/products/getProduct?productId=${productId}`)
        return setProduct(res.data)
    } catch (err) {
        return err.message
    }
})

export const getProduct2 = createAsyncThunk("GET_PRODUCT", async (productId) => {
    try {
        const res = await axios.get(`/api/products/getProduct?productId=${productId}`)
        return res.data
    } catch (err) {
        return err.message
    }
})

const productReducer = createReducer(
    {},
    {
        [getAllShirts.fulfilled]: (state,action) => action.payload,
        [getProduct.fulfilled]: (state,action) => action.payload
    }
)

export default productReducer;