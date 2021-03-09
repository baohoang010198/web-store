import { createSelector } from "@reduxjs/toolkit";
import { useUser } from "reactfire";


export const getQuantity = createSelector(
    state=>state.carts,
    
    carts =>{
      const {data:user}=useUser();
      const cartOfUser = carts.find(cart=>cart.uid===user.uid);
      if(cartOfUser){
        const ArrIteminCart = cartOfUser.cartItems.filter(cartItem=>cartItem.quantity>0);
        const quantityArr = ArrIteminCart.length;
        return quantityArr;
      }else
      return 0;
    },
);