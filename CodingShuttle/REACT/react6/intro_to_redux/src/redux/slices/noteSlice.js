import { createSlice } from "@reduxjs/toolkit";
const noteSlice = createSlice({
    name: "note",
    initialState:{
        notes:[]
    },
    reducers:{
        addNote: (state, action)=>{
            state.notes.push(action.payload)
        },
        removeNote: (state, action)=>{
            state.notes = state.notes.filter((note)=>{
                if(note.id!== action.payload){
                    return note;
                }
            })
        }
    }
})
export const noteReducer = noteSlice.reducer;
export const addNote = noteSlice.actions.addNote;
export const removeNote = noteSlice.actions.removeNote;