import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../firebaseconfig";


export const fetchAnswersAction= createAsyncThunk(
    "fetch/answer/one",
    async(args, thunkAPI)=>{
        try {
            const answersRef= collection(firestoreDb, "answers")
            const docsSnap= await getDocs(answersRef)
            let answers= []
            docsSnap.forEach((doc)=>{
                const data= doc.data()
                answers.push({id:doc.id, ...data})
            })
            return{
                answers
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
)

export const addNewAnswerAction= createAsyncThunk(
    "addNewAnswer/one",
    async(newAnswers, thunkAPI)=>{
        try {
            const answersRef= collection(firestoreDb, "answers")
            await addDoc(answersRef, newAnswers)
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.message
            })
        }
    }
)

const initialState={
    answers:[],
    loading: false
}

const answersSlice= createSlice({
    name: "answers",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAnswersAction.pending, (state, action)=>{
            state.loading= true
        });
        builder.addCase(fetchAnswersAction.fulfilled, (state, action)=>{
            state.answers=action.payload.answers
            state.loading= false
        });
        builder.addCase(addNewAnswerAction.pending, (state, action)=>{
            state.loading= true
        });
        builder.addCase(addNewAnswerAction.fulfilled, (state, action)=>{
            state.loading= false
        })
    }
})

export default answersSlice.reducer