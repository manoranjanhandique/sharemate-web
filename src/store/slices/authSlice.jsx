/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:null,
    reducers:{
        addUser:(state, action)=>{
            return action.payload;
        },
        removeUser:(state, action)=>{
            return null;
        }
    }
})

export const { addUser, removeUser} =authSlice.actions;
export default authSlice.reducer;