import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk("GET_ALL_CARTITEMS", async (setCartItems) => {
    try {
        const res = await axios.get(`/api/cartItem`)
        setCartItems(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getCartItemProducts = createAsyncThunk("GET_CARTITEMS_PRODUCTS", async ({setProducts,productId}) => {
    try {
        const res = await axios.get(`/api/cartItem/cartItems?productId=${productId}`)
        setProducts(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const addCartItem = createAsyncThunk("ADD_ITEM", async ({userId,productId}) => {
    try {
        const res = await axios.post("/api/cartItem/", {userId , productId})
        return res.data
    } catch (err) {
        return err.message
    }
})

export const deleteItem = createAsyncThunk("DELETE_ITEM", async (cartItemId) => {
    try {
        const res = await axios.delete(`api/cartItem/${cartItemId}`)
        // const res = await axios.delete(`http://localhost:8080/api/cartItem/${cartItemId}`)
        return res.data
    } catch (err) {
        return err.message
    }
})


const cartItemReducer = createReducer(
    {},
    {
        [getCartItems.fulfilled]: (state,action) => action.payload,
        [getCartItemProducts.fulfilled]: (state,action) => action.payload,
        [addCartItem.fulfilled]: (state,action) => action.payload,
        [deleteItem.fulfilled]: (state,action) => action.payload,
    }
)

export default cartItemReducer;