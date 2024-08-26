//configureStore is a function that creates the store it contains the reducer object which contains all the reducers 
import { configureStore } from "@reduxjs/toolkit";
//configureStore is a function that creates the store
import {msgReducer }from "./slices/messageSlice";//importing the reducer from the slice
//reducer is a function that takes in the state and the action and returns the new state
import { noteReducer } from "./slices/noteSlice";
export default configureStore({
    reducer:{//specifying the reducers available in the store
        msgReducer,
        noteReducer
    }
})