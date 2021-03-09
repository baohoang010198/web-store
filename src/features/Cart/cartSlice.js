import { createSlice } from "@reduxjs/toolkit";

const initialCart=JSON.parse(localStorage.getItem("Cart"))?JSON.parse(localStorage.getItem("Cart")):[];
const CartLocalStorage = 'Cart';
const cart = createSlice({
    name: 'carts',
    initialState:initialCart,
    reducers:{
        addCart: (state, action) => {
            const cartIndex = state.findIndex(cart => cart.uid === action.payload.uid);
            if(cartIndex===-1){
                state.push({
                    uid:action.payload.uid,
                    cartItems:[{
                        ...action.payload.cartItem,
                    }]
                });
            }
            else {
                const cart = state[cartIndex];
                const cartItemIndex = cart.cartItems.findIndex(item=>item.id===action.payload.cartItem.id);
                const cartItems =cart.cartItems;
                const cartItem = cart.cartItems[cartItemIndex];
                if(cartItemIndex===-1){
                    cartItems.push({
                        ...action.payload.cartItem,
                    });
                }
                else{
                    cartItem.quantity ++;
                }
            }
            localStorage.setItem(CartLocalStorage,JSON.stringify(state));
        },
        increase:(state,action)=>{
            const cartIndex = state.findIndex(cart => cart.uid === action.payload.uid);
            const cart = state[cartIndex];
            const cartItemIndex = cart.cartItems.findIndex(item=>item.id===action.payload.idProduct);
            const cartItem = cart.cartItems[cartItemIndex];
            cartItem.quantity++;
            localStorage.setItem(CartLocalStorage,JSON.stringify(state));
        },
        decrease:(state,action)=>{
            const cartIndex = state.findIndex(cart => cart.uid === action.payload.uid);
            const cart = state[cartIndex];
            const cartItemIndex = cart.cartItems.findIndex(item=>item.id===action.payload.idProduct);
            const cartItem = cart.cartItems[cartItemIndex];
            cartItem.quantity = Math.max( cartItem.quantity - 1, 0);
            localStorage.setItem(CartLocalStorage,JSON.stringify(state));
        },
        deleteItem:(state,action)=>{
            const cartIndex = state.findIndex(cart => cart.uid === action.payload.uid);
            const cart = state[cartIndex];
            const cartItemIndex = cart.cartItems.findIndex(item=>item.id===action.payload.idProduct);
            const cartItem = cart.cartItems[cartItemIndex];
            cartItem.quantity = 0;
            localStorage.setItem(CartLocalStorage,JSON.stringify(state));
        },
        checkout:(state,action)=>{
            const cartIndex = state.findIndex(cart => cart.uid === action.payload.uid);
            const cart = state[cartIndex];
            cart.cartItems.length = 0;
            localStorage.setItem(CartLocalStorage,JSON.stringify(state));
        },
    }   
});

const { reducer , actions} = cart;
export const { addCart, increase, decrease, deleteItem, checkout } = actions;
export default reducer; 