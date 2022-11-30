import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Home from "../home/Home";
import "./AskQuestions.css";

const DEFAULT_QUESTIONS={
  title: "",
  question: ""
}

const AskQuestions = () => {

  const[questionForm, setQuestionForm]= useState(DEFAULT_QUESTIONS)
  const [quiz, setQuiz]= useState([])
  console.log(quiz.length);
  const handlerChange= (e)=>{
    setQuestionForm((prev)=>({
      ...prev, [e.target.name]: e.target.value
    }))
  }
const handlerSubmit=(e)=>{
  e.preventDefault()
  // const id= Math.ceil(Math.random()*100000)
  const newQuiz=[
    {
      title: "hello",
      question: "hey there"
    }
  ]
  console.log(newQuiz);
  // {...questionForm,id}
  setQuiz(newQuiz)
  setQuestionForm(DEFAULT_QUESTIONS)
}

const cancelHandler=()=>{
  setQuestionForm(DEFAULT_QUESTIONS)
}
console.log(quiz);
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
          ></textarea>H
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
      
     {quiz?.map((quiz=><Home quiz={quiz}/>))}
    </div>
  );
};

export default AskQuestions;
