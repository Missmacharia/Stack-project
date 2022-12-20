
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { askQuestions, deleteQuestion, getQuestion } from "../services/questionsService";
// import {  deleteDoc, deleteField, doc } from "firebase/firestore";
// import { firestoreDb } from "./firebaseconfig";

const getQuestionsUrl=`http://localhost:8080/api/questions`

// const deleteQuestionUrl= `http://localhost:8080/api/deleteQuiz/:id`


export const getQuestionsAction= createAsyncThunk(
    "question/fetch-one",
    async(args, thunkAPI)=>{
        try {
            const response= await axios.get(getQuestionsUrl)
            const res= response.data
   
            return res;
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)

export const getAQuestionAction= createAsyncThunk(
    "question/fetch_aQuestion",
    async(question, thunkAPI)=>{
        try {
            const res = await getQuestion(question)
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
        })
        }
    }
)


export const addQuestionAction = createAsyncThunk(
    "add/newQuestion-one",
    async(question, thunkAPI)=>{
        try {
            console.log(question);
            const response = await askQuestions(question)
            console.log(response);
            return {question: response}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)

export const deleteQuestionAction= createAsyncThunk(
    "delete/question-one",
    async(question, thunkAPI)=>{
        try {
            const response = await deleteQuestion(question)
            return response
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)



const initialState= {
    questions: [],
    loading: false
}

const questionsSlice= createSlice({
    name:"questions",
    initialState,
    
    extraReducers:(builder)=>{
        builder.addCase(getQuestionsAction.pending, (state, action)=>{
            
            state.loading= true
        });
        builder.addCase(getQuestionsAction.fulfilled, (state, action)=>{
            state.questions= action.payload
            console.log(action.payload);
            state.loading= false
        });
        builder.addCase(addQuestionAction.pending, (state, action)=>{
            state.loading= true
        });
        builder.addCase(addQuestionAction.fulfilled, (state, action)=>{
            state.loading= false
        });

        builder.addCase(getAQuestionAction.pending, (state, action)=>{
            state.questions= action.payload
            state.loading = false
        })

        builder.addCase(getAQuestionAction.fulfilled, (state, action)=>{
            state.loading = true
        })

        // builder.addCase(deleteQuestionAction.pending, (state, action)=>{
        //     state.loading= true
        // });
        // builder.addCase(deleteQuestionAction.fulfilled, (state, action)=>{
        //     state.loading= false
        // })
    }
})

export default questionsSlice.reducer