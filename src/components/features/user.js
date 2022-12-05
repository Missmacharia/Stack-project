import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../firebaseconfig";


export const fetchUserAction= createAsyncThunk(
    "fetch/user-one",
    async(args, thunkAPI)=>{
        try {
            const userRef= collection(firestoreDb, "users")
            const docsSnap= await getDocs(userRef)
            let users= []
            docsSnap.forEach((doc)=>{
                const data= doc.data()
                users.push({id:doc.id, ...data})
            })
            return{
                users
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
            
        }
    }
)


export const addUserAction= createAsyncThunk(
    "add/user-one",
    async(newUser, thunkAPI)=>{
        try {
            const userRef= collection(firestoreDb, "users")
            await addDoc(userRef, newUser)
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
)

const initialState= {
    users: [],
    loading: false
}

const usersSlice= createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchUserAction.pending, (state, action)=>{
            state.loading= true
        });

        builder.addCase(fetchUserAction.fulfilled, (state, action)=>{
            state.users= action.payload.users
            state.loading= false
        });

        builder.addCase(addUserAction.pending, (state, action)=>{
            state.loading = true
        });

        builder.addCase(addUserAction.fulfilled, (state, action)=>{
            state.loading= false
        })
    }
})

export default usersSlice.reducer