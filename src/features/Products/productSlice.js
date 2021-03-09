import { createSlice } from '@reduxjs/toolkit';


const initialProduct=[];
const product = createSlice({
  name: 'products',
  initialState: initialProduct,
  reducers: {
    getApiProduct:(state,action)=>{
        state.length=0;
        state.push(...action.payload);
    }
  } 
});

const { reducer, actions } = product;
export const { getApiProduct } = actions;
export default reducer; 