import { createSlice } from "@reduxjs/toolkit";

import { authors } from "../data/authors";

const initialState={
    authors:authors
};

export const LoginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        register(state, action){
            state.authors=[...state.authors, {id: Date.now(),  ...action.payload }];
            console.log(state.authors)
        }
    }
})

export default LoginSlice.reducer;

export const {register}=LoginSlice.actions;