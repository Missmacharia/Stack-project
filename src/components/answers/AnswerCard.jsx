import React, { useEffect, useState } from "react";
import { addCommentAction, fetchcommentAction } from "../../features/comment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../../features/counter";


const DEFAULT_COMMENT = {
  comment: "",
};

const AnswerCard = ({ answer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [show, setShow] = useState(false);
  console.log(answer);
  const [formComment, setFormComment] = useState(DEFAULT_COMMENT);

  const { comment } = useSelector((state) => state.comment);
  console.log(comment);

  const count= useSelector((state)=> state.counter.count)

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const users = JSON.parse(sessionStorage.getItem("users"));
    if (!users) alert("Login first to comment");

    let user = users.user;
    const newComment = {
      comment: formComment.comment,
      answerId: answer?.id,
      userId: user.id,
    };
    dispatch(
      addCommentAction({
        answerId: answer?.id,
        comment: newComment      
      })
    );
    setFormComment(DEFAULT_COMMENT)
  };

  const handleComments = () => {
    setShow(!show);
    dispatch(fetchcommentAction(answer.id))
    setSelectedAnswer(answer.id)
  }

  useEffect(() => {
    if (selectedAnswer !== answer.id) {
      setShow(false);
    }
  }, [selectedAnswer])

  return (
    <>
      <h4 onClick={handleComments}>answer</h4>
      {/* <Link to={`/reply/${answer.questionId}`} className="btn_reply">
        reply
      </Link> */}

      <p>{answer?.answer} </p>


      <div className="btn_answers">
        <button onClick={()=>dispatch(incrementAction(answer.id))} className="increment_btn">upvote</button>
        <h4>{count} </h4>
        <button onClick={()=>dispatch(decrementAction(answer.id))} className="decrement_btn">downvote</button>
        <h4>{answer?.downVote} </h4>
      </div>

      <h6 className="user">answered by:{answer?.userId} </h6>
      <p>comment</p>
      {show && (
        <>
      {comment.length > 0 ? (
        <div>
          {comment.map((comment) => (
            <div>{comment.comment}</div>
          ))}
        </div>
      ) : (<div>No comments</div>)}
      </>
      )}
   
      
      <div className="comments">
        <textarea
          name="comment"
          onChange={changeHandler}
          value={formComment?.comment}
          id="comment"
          cols="30"
        ></textarea>
        <button onClick={submitHandler} className="btn_comment">
          submit
        </button>
      </div>
    </>
  );
};

export default AnswerCard;
