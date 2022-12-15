import React from "react";
import { useSelector } from "react-redux";
import "./Answers.css";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";
const Answers = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div className="myAnswers">
      <div className="quizAnsw">
        {users?.map((user) => {
          return (
            <>
              <h1>{user?.question} </h1>
              <Link to="/reply">
                <button >reply</button>
              </Link>
              <p>{user?.answers} </p>
              <div className="thoughts">
                <div className="options">
                  <AiFillHeart />
                  <RiDislikeLine />
                </div>
                <div className="btn_answers">
                  <button className="increment_btn">+</button>
                  <h4>0</h4>
                  <button className="decrement_btn">-</button>
                </div>
              </div>
              <h6>answered by:{user?.user} </h6>
              <p>comment</p>
              <div className="comments">
                <textarea
                 name="comment"
                  id="comment"
                   cols="30" >
                   </textarea>
                   <button className="btn_comment">submit</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Answers;
