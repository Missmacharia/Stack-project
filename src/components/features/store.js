import { configureStore } from '@reduxjs/toolkit';
import questionsReducer  from "../features/question";
import answersReducer from "../features/answer"
import  counterReducer  from "../features/counter";
import  commentReducer  from "../features/comment";
import  userReducer  from "../features/user";


const store = configureStore({
    reducer:{
        questions: questionsReducer,
        answers: answersReducer, 
        counter: counterReducer,
        comment: commentReducer,
        users: userReducer,
    }
})
  

export default store
