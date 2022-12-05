import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { getQuestionsAction } from "../features/question";
import { decrementAction, incrementAction } from "../features/counter";
import { fetchUserAction } from "../features/user";


const Home = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.questions.questions);
  const count= useSelector((state)=> state.counter.count)

  useEffect(() => {
    dispatch(getQuestionsAction());
  }, [dispatch]);

  const upvoteHandler=()=>{
    dispatch(incrementAction());
  }

  const downvoteHandler=()=>{
    dispatch(decrementAction());
  }

  console.log(questions);
  return (
    <div className="myHome">
      <div className="questions">
        <div className="pageTitle">
          <h1>All Questions</h1>
        </div>
        <div className="about_questions">
          <Link to="/AskQuizs">Post Questions</Link>
        </div>
      </div>
      <div className="question_field">
        {questions?.map((question) => {
          return (
            <div className="questions_part">
              <Link
                onClick={() => dispatch(fetchUserAction())}
                to="/answers" >
                <h1>{question?.Qtitle}</h1>
              </Link>
              <p>{question?.QDescription}</p>
              <div className="votes">
                <div className="related_icons">
                  
                  <h3>{count} answers </h3>
                </div>
                <div className="opinions">
                  <button onClick={upvoteHandler} className="upvotes"> +</button>
                  <h4>{count} </h4>
                  <button onClick={downvoteHandler} className="downvotes"> -</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
