import { createSlice } from "@reduxjs/toolkit";
const DEFAULT_ITEMS= [];
const itemSlice= createSlice({
    name: 'items',
    initialState: DEFAULT_ITEMS,
    reducers: {
      addInitialItems: (state, action)=> {        
        return action.payload;
      }
    }
  })
  export const itemsAction= itemSlice.actions;
  export default itemSlice;
  