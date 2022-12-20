import { configureStore } from '@reduxjs/toolkit';
import questionsReducer  from "../features/question";
import  counterReducer  from "../features/counter";
import  commentReducer  from "../features/comment";
import  userReducer  from "../features/user";
import answersReducer from '../features/answers';


const store = configureStore({
    reducer:{
        questions: questionsReducer, 
        counter: counterReducer,
        comment: commentReducer,
        users: userReducer,
        answers: answersReducer
    }
})
  

export default store
