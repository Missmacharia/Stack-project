import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, deleteField, doc, getDocs } from "firebase/firestore";
import { firestoreDb } from "../../firebaseconfig";



export const getQuestionsAction=createAsyncThunk(
    "fetch/Question-one",
    async(args, thunkAPI)=>{
        try {

            const questionsRef=collection(firestoreDb, "questions")
            const docsSnap= await getDocs(questionsRef)
            let questions= []
            docsSnap.forEach((doc)=>{
                const data= doc.data()
                questions.push({id:doc.id,...data})
            });
            return{
                questions
            }
        } catch (error) {
            console.log(error);
            thunkAPI.rejectWithValue({
                error:error.meassage
            })
        }
    }
)

export const addQuestionAction= createAsyncThunk(
    "add/newQuestion-one",
    async(newQuestion, thunkAPI)=>{
        try {
            const questionsRef= collection(firestoreDb, "questions")
            await addDoc(questionsRef, newQuestion)
            return{}
        } catch (error) {
            thunkAPI.rejectWithValue({
                error:error.meassage
            })
        }
    }
);


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
            state.questions= action.payload.questions
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