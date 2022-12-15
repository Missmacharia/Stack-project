import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addQuestionAction, getQuestionsAction } from "../features/question";
import "./AskQuestions.css";

const DEFAULT_QUESTIONS={
  title: "",
  question: "",
}

const AskQuestions = () => {
  const dispatch= useDispatch()
  
  const[questionForm, setQuestionForm]= useState(DEFAULT_QUESTIONS)



  const handlerChange= (e)=>{
    setQuestionForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
const handlerSubmit= (e)=>{
  e.preventDefault()
  const id= Math.ceil(Math.random()*100000)
  const newQuestion= {...questionForm,id}
   dispatch(addQuestionAction(newQuestion))
  dispatch(getQuestionsAction())
  console.log(newQuestion);
}

const cancelHandler=()=>{
  setQuestionForm(DEFAULT_QUESTIONS)
}

  return (
    <div className="askQuetions">
      <div className="white_bc">
        <h1>New Questions</h1>
        <form className="question_form">
          <input
            className="quiz_input"
            type="text"
            name="title"
            placeholder="Title of questions"
            value={questionForm.title}
            onChange={handlerChange}
          />
          <textarea
            name="question"
            id="question"
            placeholder="How to work with grid"
            value={questionForm.question}
            onChange={handlerChange}
          ></textarea>
        </form>
        <div className="opt_buttons">
          <button onClick={cancelHandler} className="cancel">
          <Link to="/">Cancel</Link>
            </button>
          <button onClick={handlerSubmit} className="saveQuiz">
            <Link to="/">Save Question</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
