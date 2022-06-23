import { createSlice } from "@reduxjs/toolkit";
import {UserData} from '../data'
const userSlice = createSlice({
    name:'users',
    initialState:{value:UserData},
    reducers:{
        addUser:(state,action)=>{
             state.value.push( action.payload)   
        },
        removeUser:(state,action)=>{
         state.value = state.value.filter(item=>item.id!==action.payload)
        },
        updateUser:(state,action)=>{
            state.value.map((user)=>{
                if(user.id === action.payload.id){
                    user.username = action.payload.username
                }
            })
        }
    }
})
export const {addUser,removeUser,updateUser} = userSlice.actions
export default userSlice.reducer