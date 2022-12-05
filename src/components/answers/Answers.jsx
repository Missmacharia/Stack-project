import React from "react";
import { useSelector } from "react-redux";
import "./Answers.css";
import { FcLikePlaceholder } from 'react-icons/fc';
import { Link } from "react-router-dom";

const Answers = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <div className="myAnswers">
      <div className="quizAnsw">
        {users?.map((user) => {
          return (
            <>
              <h1>{user?.question} </h1>
              <button>
                <Link to="/reply">
                reply
                </Link>
                </button>
              <div>
                <FcLikePlaceholder />
              </div>
              <p>{user?.answers} </p>
              <h6>answered by:{user?.user} </h6>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Answers;
