import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addAnswerAction } from "../../features/answers";
import { incrementAction } from "../../features/counter";


import "./ReplyAnswer.css";


const DEFAULT_REPLY= {
    answer: ""
}

const Replyanswer = () => {
    const [answer, setAnswer]= useState(DEFAULT_REPLY)
    const dispatch = useDispatch()


    const changeHandler=(e)=>{
      setAnswer((prev)=>({...prev, [e.target.name]: e.target.value}))
    }

    const {qid}= useParams()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(addAnswerAction({qid, answer}))
        dispatch(incrementAction())
    }

    console.log(qid);
    

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
          <button onClick={submitHandler} className="answer_quiz" >

            <Link to={`/answers/${qid}`}>Submit Answer</Link> 
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
