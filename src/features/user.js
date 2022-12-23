import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginUser } from "../services/userService";
const users= JSON.parse(sessionStorage.getItem('users'))


const signUpUserUrl= `http://localhost:4000/api/auth/signup`


export const signUpUserAction= createAsyncThunk(
    "add/user-one",
    async(newUser, thunkAPI)=>{
        try {
            await axios
            .post(signUpUserUrl, newUser)
            .then((data)=> console.log(data))
            return{
                newUser
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
    )
    

export const loginUserAction = createAsyncThunk(
    "user/login-one",
    async(user, thunkAPI)=>{
        try {
            console.log("sdfgh");
            const response= await loginUser(user)
            console.log(response);
            return response
        } catch (error) {
           thunkAPI.rejectWithValue({
            error: error.message
           })
        }
    }
)




const initialState= {
    users:  users ? {  users }
    : { users: null },
    loading: false
}

const usersSlice= createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(signUpUserAction.pending, (state, action)=>{
            state.loading= true
        })
        builder.addCase(signUpUserAction.fulfilled, (state, action)=>{
            state.users= action.payload
            state.loading= false
        });

        builder.addCase(loginUserAction.pending, (state, action)=>{
            state.loading = true
        });

        builder.addCase(loginUserAction.fulfilled, (state, action)=>{
            state.users= action.payload
            state.loading= false
        })
    }
})

export default usersSlice.reducer