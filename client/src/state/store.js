import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"


import authReducer from "./auth";
import cartItemReducer from "./cartItem";
import productReducer from "./products";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        auth: authReducer,
        products: productReducer,
        cartItems: cartItemReducer
    }
})

export default store