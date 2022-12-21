import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addComments, getComments } from "../services/commentsServices";




export const fetchcommentAction= createAsyncThunk(
    "fetch/comments-one",
    async(id, thunkAPI)=>{
        try {
            const res= await getComments(id)
            console.log(res.data);
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
    async({answerId,comment}, thunkAPI)=>{
        try {
            const response = await addComments(answerId, comment)
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
            state.comment =action.payload
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