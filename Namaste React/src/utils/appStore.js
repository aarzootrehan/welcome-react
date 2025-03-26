import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';

// Creates the store of our react app
export const appStore = configureStore({
    // Even the app store has its own reducer which takes in all the reducers of its slices
    reducer: {
        cart: cartReducer,
        // user: userReducer if any
    }
});