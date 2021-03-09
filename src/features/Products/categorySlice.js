import { createSlice } from '@reduxjs/toolkit';


const initialCategories=[];
const product = createSlice({
  name: 'catagories',
  initialState: initialCategories,
  reducers: {
    getApiCategory:(state,action)=>{
        state.length=0;
        state.push(...action.payload);
    }
  } 
});

const { reducer, actions } = product;
export const { getApiCategory } = actions;
export default reducer; 