import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";
import { useEffect } from "react";
import { getAnswersAction } from "../../features/answers";
import "./Answers.css";

const Answers = () => {
  const { qid } = useParams();
  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getAnswersAction(qid));
    }, [,qid])



  const answers = useSelector((state) => state.answers);
  console.log(answers.answers.questionAnswerRlt);

  return (
    <div className="myAnswers">
      <h1>hello</h1>
      <div className="quizAnsw">
        {answers.answers.questionAnswerRlt?.map((answer) => (
          <>
            <h1>question title </h1>
            <Link to="/reply" className="btn_reply">
              reply
            </Link>
              
            <p>{answer?.answer} </p>
           
            <div className="thoughts">
              <div className="options">
                <AiFillHeart />
                <RiDislikeLine />
              </div>
            </div>
             
            <div className="btn_answers">
              <button className="increment_btn">+</button>
              <h4>{answer.upVote} </h4>
              <button className="decrement_btn">-</button>
              <h4>{answer?.downVote} </h4>
            </div>
            
            <h6 className="user">answered by:{answer?.userId} </h6>
            <p>comment</p>
            <div className="comments">
              <textarea name="comment" id="comment" cols="30"></textarea>
              <button className="btn_comment">submit</button>
            </div> 
          </>
        ))}
      </div>
    </div>
  );
};

export default Answers;
