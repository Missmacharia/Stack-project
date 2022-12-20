import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addAnswerAction } from "../../features/answers";
// import { addNewAnswerAction } from "../features/answer";
import { incrementAction } from "../../features/counter";

// import { addUserAction, fetchUserAction } from "../../features/user";
import "./ReplyAnswer.css";


const DEFAULT_REPLY= {
    answer: ""
}

const Replyanswer = () => {
    const [answer, setAnswer]= useState(DEFAULT_REPLY)
    const dispatch = useDispatch()

    const question = useSelector((state) => state.questions.questions);

    const changeHandler=(e)=>{
      setAnswer((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const {qid}= useParams()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(addAnswerAction(qid))
        dispatch(incrementAction())
    }
    

  return (
    <div className="reply">
      <div className="reply_white">
        <textarea
          name="answer"
          id="reply_text"
          placeholder="answer"
          value={answer.answer}
          onChange={changeHandler}
          cols="60"
          rows="10"
        ></textarea>
        <div className="ans_button">
          <button onClick={submitHandler} className="answer_quiz" to="./answers" >
            <Link to={`/answers/${question.id}`}>Submit Answer</Link> 
            </button>
          <button className="cancel_answer">
            <Link to="/answers">Cancel</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Replyanswer;
