import { createSelector } from "@reduxjs/toolkit";
import { useUser } from "reactfire";


export  const getCartContents = createSelector(
    state=>state.carts,
    
    carts =>{
      const {data:user}=useUser();
      const cartOfUser = carts.find(cart=>cart.uid===user.uid);
      if(cartOfUser && cartOfUser.cartItems.length>0){
      
        const itemInCart = cartOfUser.cartItems.map(cartItem=>{
          const quantity = cartItem.quantity;
          const price = cartItem.price;
          return{
            ...cartItem,
            subtotal:quantity*price,
          }
        });
        const arrSubTotal = itemInCart.map(cartitem=>{
           return cartitem.subtotal;
        });
        const total = arrSubTotal.reduce((total,item)=>total+item);
        return { itemInCart,total };
      }else
      return 0;
    },
);