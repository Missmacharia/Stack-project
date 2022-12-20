import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addComments, getComments } from "../services/commentsServices";




export const fetchcommentAction= createAsyncThunk(
    "fetch/comments-one",
    async(comments, thunkAPI)=>{
        try {
            const res= await getComments(comments)
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)

export const addCommentAction= createAsyncThunk(
    "add/comment-one",
    async(comment, thunkAPI)=>{
        try {
            const response = await addComments(comment)
            return {comment: response}
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