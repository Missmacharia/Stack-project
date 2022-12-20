import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import AskQuestions from "../components/askQuestions/AskQuestions";
import Answers from "../components/answers/Answers";
import Replyanswer from "../components/replyAnswer/Replyanswer";
import User from "../features/user";
import Login from "../components/LoginIn/Login";
import Profile from "../components/profile/Profile";
import SignIn from "../components/Sign/SignIn";



const RoutesCom = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/askQuizs" element={<AskQuestions  /> }/>
        <Route path="/answers/:qid" element={<Answers />} />
        <Route path="/reply" element ={<Replyanswer /> } />
        <Route path="/users" element={<User /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/signin" element={<SignIn /> } />
        <Route path="/profile" element={<Profile /> } />
      </Routes>
    </div>
  );
};

export default RoutesCom;
