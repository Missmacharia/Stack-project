import React, { useState } from "react";
import "./Profile.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserQuestionAction } from "../../features/question";

const DEFAULT_PROFILE = {
  profile:
    "https://i.pinimg.com/236x/91/d3/96/91d3967b4adb5296767be16e23263f5c.jpg",
};
const Profile = () => {
  const [profileForm] = useState(DEFAULT_PROFILE);
  const [profile, setProfile] = useState();
  const dispatch= useDispatch()
  const users = useSelector((state)=> state.users)

  useEffect(()=>{
    dispatch(getUserQuestionAction(users.users.users.user.id))
  }, [dispatch])


  const questions = useSelector((state) => state.questions.questions);



  return (
    <div className="profile">
      <div className="theProfile">
        <div className="profile_user">
          <div className="prfl">
            <img className="profile_img" src={profileForm.profile} alt="" />
            <div className="camera">
            <AiFillCamera className="camera-icon" />
            </div>
          </div>
          <form className="userDetails">
            <span>Username</span>
            <input
              type="text"
              name="username"
              placeholder="yvonne"
              // value={profile.username}
            />
            <span>Email Address</span>
            <input
              type="text"
              name="email"
              placeholder="yvonne2gmail.com"
              // value={profile.email}
            />
            {/* <span>Phone Number</span>
            <input
              type="text"
              name="phoneNumber"
              placeholder="012345678"
              // value={profile.phoneNumber}
            /> */}
            <button className="submit_profile">Submit</button>
          </form>
        </div>
      </div>
      <div className="my-questions">
        <h4 className="qstn-title">My Questions</h4>
        <div className="question-container">
          <div className="questn">
            <div className="dot"></div>
            <Link to="/" className="my-question">
            {questions?.map((question)=>{
             return( <p>{question.title} </p>)
            })}
            </Link>
          </div>
          <div className="questn">
            {/* <div className="dot"></div>
            <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a>
          </div>
          <div className="questn">
            <div className="dot"></div>
            <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a>
          </div>
          <div className="questn">
            <div className="dot"></div> */}
            {/* <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a>
          </div>
          <div className="questn">
            <div className="dot"></div>
            <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a>
          </div>
          <div className="questn">
            <div className="dot"></div>
            <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a>
          </div>
          <div className="questn">
            <div className="dot"></div>
            <a href="#" className="my-question">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              expedita? Quis repellat aspernatur sunt dignissimos.
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
