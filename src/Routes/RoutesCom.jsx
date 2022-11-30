import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import AskQuestions from "../components/askQuestions/AskQuestions";
import Review from "../components/Review/Review";


const RoutesCom = () => {
  return (
    <div>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/askQuizs" element={<AskQuestions  /> }/>
        <Route path="profile" element={<Profile /> } />
        <Route path="signin" element={<Signin /> } /> 
        <Route path="review" element={<Review /> } />
        
       
      </Routes>
    </div>
  );
};

export default RoutesCom;
