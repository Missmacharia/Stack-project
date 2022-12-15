import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "./firebaseconfig";



export const fetchcommentAction=createAsyncThunk(
    "fetch/comment-one",
    async(args, thunkAPI)=>{
        try {
            const commentRef=collection(firestoreDb, "comment")
            const docsSnap= await getDocs(commentRef)
            let comment = []
            docsSnap.forEach((doc)=>{
                const data= doc.data()
                comment.push({id:doc.id, ...data})
            });
            return{
                comment
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
)

export const addCommentAction= createAsyncThunk(
    "add/comment-one",
    async(newComment, thunkAPI)=>{
        try {
            const commentRef= collection(firestoreDb, "comment")
            await addDoc(newComment, commentRef)
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
            
        }
    }
)

const initialState= {
    comment: [],
    loading: false
}

const commentSlice= createSlice({
    name: "comment",
    initialState, 
    reducer: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchcommentAction.pending, (state, action)=>{
            state.loading =true
        });
        builder.addCase(fetchcommentAction.fulfilled, (state, action)=>{
            state.comment =action.payload.comment
            state.loading= false
        });

        builder.addCase(addCommentAction.pending, (state, action)=>{
            state.loading= true
        });

        builder.addCase(addCommentAction.fulfilled, (state, action)=>{
            state.loading= false
        })
    }
})


export default commentSlice.reducer