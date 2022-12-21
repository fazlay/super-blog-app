import { createSlice } from "@reduxjs/toolkit";

export interface Users{
    user:string
}
const initialState:Users ={
    user: "David-Omotayo "
}


export const userSlice = createSlice({name: "users",
initialState,   
reducers:
{addUser: (state, action) => console.log(state)},
})

export const {addUser} = userSlice.actions;
export default userSlice.reducer;