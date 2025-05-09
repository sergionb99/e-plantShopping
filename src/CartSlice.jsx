import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name,image,cost} = action.payload;
        const exists = state.items.find((e) => e.name === name);
        if(exists){
            exists.quantity++;
        }
        else{
            state.items.push({name,image,cost,quantity:1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.find((e) => e.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;
        const itemToUpdate = state.items.find((e) => e.name === name);
        if (itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
