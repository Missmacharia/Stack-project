
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addDoc, collection, deleteDoc, deleteField, doc } from "firebase/firestore";
import { firestoreDb } from "../../firebaseconfig";

const getQuestionsUrl=`http://localhost:4000/questions/questions`
const addQuestionUrl= `http://localhost:4000/questions/addQuiz`


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
            console.log(questions);
            return questions;
        } catch (error) {
            thunkAPI.rejectWithValue({
                message: "Questions not found"
            })
        }
    }
)


export const addQuestionAction= createAsyncThunk(
    "add/newQuestion-one",
    async(newQuestion, thunkAPI)=>{
        try {
           const response = await axios.post(addQuestionUrl) 
           return response.data
        } catch (error) {
            thunkAPI.rejectWithValue({
                message: "Answer added successfully"
            })
        }
    }
)

// export const addQuestionAction= createAsyncThunk(
//     "add/newQuestion-one",
//     async(newQuestion, thunkAPI)=>{
//         try {
//             const questionsRef= collection(firestoreDb, "questions")
//             await addDoc(questionsRef, newQuestion)
//             return{}
//         } catch (error) {
//             thunkAPI.rejectWithValue({
//                 error:error.meassage
//             })
//         }
//     }
// );


export const deleteQuestionAction= createAsyncThunk(
    "delete/question-one",
    async(args, thunkAPI)=>{
        try {
            const questionsRef= doc(firestoreDb, "questions", "Dcsq8ehpzq7UG7ZnryjF")
            const data= deleteField()
            deleteDoc(questionsRef, data)
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.meassage
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

        builder.addCase(deleteQuestionAction.pending, (state, action)=>{
            state.loading= true
        });
        builder.addCase(deleteQuestionAction.fulfilled, (state, action)=>{
            state.loading= false
        })
    }
})

export default questionsSlice.reducer