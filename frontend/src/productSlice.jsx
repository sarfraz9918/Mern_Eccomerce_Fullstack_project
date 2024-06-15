import toast, { Toaster } from 'react-hot-toast';

import { createSlice } from '@reduxjs/toolkit'
const initialState={
     cart:[]
}
const productSlice=createSlice({
       name:"cartProduct",
       initialState: initialState,
       reducers:{               
            addtoCart:(state, action)=>{              
            var cartItem= state.cart.filter((item)=>item.id==action.payload.id);
            
            if (cartItem.length>=1)
                  {
                   toast.success('Product Aleready Added!');
                        
                  
                  }
                  else 
                  {
                   state.cart.push(action.payload)
                   toast.success('Add To Card!');
                   
                  }                                      
        },
        increaseQuantity:(state, action)=>{
            for (var i=0; i<state.cart.length; i++)
                  {
                        if (state.cart[i].id==action.payload)
                              {
                                    state.cart[i].qnty+=1;
                              }
                  }
        },
        decreaseQuantity:(state, action)=>{

            for (var i=0; i<state.cart.length; i++)
                  {
                        if (state.cart[i].id==action.payload)
                              {
                                    if (state.cart[i].qnty==1)
                                          {
                                                alert("You can not Decrease Product Quantity less than 1")
                                          }
                                          else 
                                          {
                                                state.cart[i].qnty-=1;
                                          }
                                   
                              }
                  }
        },

        removeItem:(state, action)=>{
            state.cart=state.cart.filter(item=>item.id!==action.payload);
        }
       }
})
export const  {addtoCart, increaseQuantity, decreaseQuantity, removeItem} = productSlice.actions;
export default productSlice.reducer;