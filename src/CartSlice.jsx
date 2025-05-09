import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    cartNumber: 0,
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
        console.log(action);
        state.items = state.items.filter(e => e.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name,quantity} = action.payload;
        const itemToUpdate = state.items.find((e) => e.name === name);
        if (itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    },
    incrementCartNumber: (state) =>{      
        state.cartNumber += 1;
        console.log(state.cartNumber);
    },
    decrementCartNumber: (state) =>{      
        state.cartNumber -= 1;
        console.log(state.cartNumber);
    },
    deleteItemCartNumber: (state, action) =>{     
        const quantity = action.payload.quantity;
        console.log('payload',action.payload)
        console.log('quantity', quantity);
        state.cartNumber = state.cartNumber - quantity;
        console.log(state.cartNumber);
    }
  },
});

export const { addItem, removeItem, updateQuantity, incrementCartNumber, decrementCartNumber, deleteItemCartNumber } = CartSlice.actions;

export default CartSlice.reducer;
