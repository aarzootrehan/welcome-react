import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartName",
    initialState: {
        items: [] 
    },
    reducers: {
        // Mutating the state
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(current(state));
            // state.items.length = 0;
            state.items = [];

            // Redux toolkit says - either mutate the original state or return a new state by doing the below
            // return {items: []}
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;