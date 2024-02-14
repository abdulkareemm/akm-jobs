import {createSlice} from "@reduxjs/toolkit"



export const userSlice = createSlice({
    name:"users",
    initialState:{
        currentUser:null

    },
    reducers:{
        setCurrentUser:(state,action)=>{
        state.currentUser = action.payload
        }
    }
})


export const { setCurrentUser } = userSlice.actions;