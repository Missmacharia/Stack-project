import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const DEFAULT_SIGNIN = {
  userProfile: "https://i.pinimg.com/564x/93/7f/29/937f29e9372f79fcde57f7f5c42f3307.jpg",
  userName: "",
  email: "",
  profession: "",
};

const SignIn = () => {
  const [signinForm, setSigninForm] = useState(DEFAULT_SIGNIN);

  const changeHandler = (e) => {
    setSigninForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="signin">
      <form className="signin_form">
        <img
          className="img_signin"
          src={signinForm.userProfile}
          onChange={changeHandler}
          alt=""
        />
        <input
          type="text"
          name="userName"
          placeholder="yvon"
          value={signinForm.userName}
        />
        <input
          type="text"
          name="email"
          placeholder="yvonne@gmail.com"
          value={signinForm.email}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="profession"
          placeholder="Software Engineer"
          value={signinForm.profession}
          onChange={changeHandler}
        />
        <Link to="/">
          <button className="signin_btn_user">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
