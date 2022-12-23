import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import {  getAnswersAction } from "../../features/answers";
import "./Answers.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { addCommentAction, fetchcommentAction } from "../../features/comment";
import AnswerCard from "./AnswerCard";

const Answers = () => {
  const { qid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnswersAction(qid));
  }, [qid]);

  const { answers } = useSelector((state) => state.answers);

  return (
    <div className="myAnswers">
        <Link to={`/reply/${qid}`} className="btn_reply">
        reply
      </Link>
      {answers?.questionAnswerRlt?.map((answer, idx) => (
        <div className="quizAnsw">
          <AnswerCard key={idx} answer={answer} />
        </div>
      ))}
    </div>
  );
};

export default Answers;
