import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    
    initialState: {
        cart:[]
    },

    reducers:{
        addtoCart : (state, action) =>{
            state.cart.push(action.payload)
        },
        removefromCart: (state, action) =>{
            state.cart =state.cart.filter(item => 
                item.id.id !== action.payload.id);

            // console.log(action.payload.id);
            // console.log(state.cart);

        }

    }
})

export default cartSlice.reducer;
export const {addtoCart, removefromCart} = cartSlice.actions;
