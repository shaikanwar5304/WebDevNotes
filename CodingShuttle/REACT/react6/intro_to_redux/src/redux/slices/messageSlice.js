import {createSlice} from "@reduxjs/toolkit"
//slice is a part of the store
const messageSlice = createSlice({
    name: "messageSlice",//name of the slice

    initialState:{//initial state of the slice simlar to the useState we used earlier
        message:''
    },

    reducers:{//methods that can be used to change the state
        resetMessage: (state, action)=>{
            state.message=''
        },
        setMessage: (state,action)=>{//setMessage is one of the methods
            //state is the current state of the slice
            state.message=action.payload;
        }
        //we can make many methods
    }
})
// export default messageSlice.reducer//exporting all the methods 
// export const{setMessageAction, resetMessageAction} = messageSlice.actions//actions are the methods that we can use to change the state
export const setMsgExport = messageSlice.actions.setMessage
export const msgReducer = messageSlice.reducer