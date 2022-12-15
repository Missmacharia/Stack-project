
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import {  deleteDoc, deleteField, doc } from "firebase/firestore";
// import { firestoreDb } from "./firebaseconfig";

const getQuestionsUrl=`http://localhost:8080/api/questions`

const addQuestionUrl= `http://localhost:8080/api/addQuiz`

const deleteQuestionUrl= `http://localhost:8080/api/deleteQuiz/:id`


export const getQuestionsAction= createAsyncThunk(
    "question/fetch-one",
    async(args, thunkAPI)=>{
        try {
            const response= await axios.get(getQuestionsUrl)
            const res= response.data
            const questions= []
            
            for(let key in res){
                questions.push({
                    id: key,
                    userId: res[key].userId,
                    title: res[key].title,
                    question: res[key].question
                })
            }
            return questions;
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }
)

export const addQuestionAction= createAsyncThunk(
    "add/newQuestion-one",
    async(newQuestion, thunkAPI)=>{
        try {
            await axios
            .post(addQuestionUrl, newQuestion)
            .then((data)=>console.log(data))
            return{
                newQuestion
            }
        } catch (error) {
            thunkAPI.rejectWithValue({
                error: error.message
            })
        }
    }

)

export const deleteQuestionsAction= createAsyncThunk(
    "delete/question-one",
    async(id, thunkAPI)=>{
        try {
            await axios
            .delete(deleteQuestionUrl, id)
            .then((data)=>console.log(data))
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                message: error.message
            })
        }
    }
)



// export const deleteQuestionAction= createAsyncThunk(
//     "delete/question-one",
//     async(args, thunkAPI)=>{
//         try {
//             const questionsRef= doc(firestoreDb, "questions", "Dcsq8ehpzq7UG7ZnryjF")
//             const data= deleteField()
//             deleteDoc(questionsRef, data)
//             return{}
//         } catch (error) {
//             thunkAPI.rejectWithValue({
//                 error:error.meassage
//             })
            
//         }
//     }
// )




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

        // builder.addCase(deleteQuestionAction.pending, (state, action)=>{
        //     state.loading= true
        // });
        // builder.addCase(deleteQuestionAction.fulfilled, (state, action)=>{
        //     state.loading= false
        // })
    }
})

export default questionsSlice.reducer