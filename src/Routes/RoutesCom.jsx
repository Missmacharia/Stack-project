import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import Home from "../components/home/Home";
import AskQuestions from "../components/askQuestions/AskQuestions";
import Review from "../components/Review/Review";
import Answers from "../components/answers/Answers";
import Replyanswer from "../components/replyAnswer/Replyanswer";
import User from "../components/features/user";


const RoutesCom = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/askQuizs" element={<AskQuestions  /> }/>
        <Route path="/answers" element={<Answers />} />
        <Route path="/signin" element={<Signin /> } /> 
        <Route path="/review" element={<Review /> } />
        <Route path="/reply" element ={<Replyanswer /> } />
        <Route path="/users" element={<User /> } />
        
       
      </Routes>
    </div>
  );
};

export default RoutesCom;
