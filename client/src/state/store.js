import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"


import authReducer from "./auth";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        auth: authReducer
    }
})

export default store