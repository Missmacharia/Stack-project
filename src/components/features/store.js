import { configureStore } from '@reduxjs/toolkit';
import questionsReducer  from "../features/question";
import  counterReducer  from "../features/counter";
import  commentReducer  from "../features/comment";
import  userReducer  from "../features/user";


const store = configureStore({
    reducer:{
        questions: questionsReducer, 
        counter: counterReducer,
        comment: commentReducer,
        users: userReducer,
    }
})
  

export default store
