import React, { useEffect, useState } from "react";
import { addCommentAction, fetchcommentAction } from "../../features/comment";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";


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

  // useEffect(() => {
  //   console.log('workings')
  //   if (answer?.id) {
  //     console.log(answer?.id);
  //     dispatch(fetchcommentAction(answer?.id));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   // dispatch(getAnswersAction(selectedAnswer))
    
  //   if(answer.id !== setSelectedAnswer){
  //     setFormComment(DEFAULT_COMMENT)
  //   }
  //   dispatch(fetchcommentAction(selectedAnswer))
  // }, [selectedAnswer])

  // console.log(selectedAnswer)

  return (
    <>
      <h4 onClick={handleComments}>answer</h4>
      <Link to={`/reply/${answer.questionId}`} className="btn_reply">
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
      {/* {selectedAnswer && (
        <>
        {comment?.comment}
        {comment?.map((comment) => {
        return <h3>{comment?.comment} </h3>;
      })} 
      </>
      )} */}
      {/* <Comments /> */}
      
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
