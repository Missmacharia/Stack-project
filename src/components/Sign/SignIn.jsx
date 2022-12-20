import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUpUserAction } from "../../features/user";
import "./SignIn.css";

const DEFAULT_SIGNIN = {
  userName: "",
  email: "",
  password: ""
};


const SignIn = () => {
  const [signupForm, setSignupForm] = useState(DEFAULT_SIGNIN);



  const dispatch= useDispatch()

  const changeHandler = (e) => {
    setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler= (e)=>{
    e.preventDefault()
    const newUser={...signupForm}
    dispatch(signUpUserAction(newUser))
  }

  return (
    <div className="signin">
      <form className="signin_form">
        <input
          type="text"
          name="userName"
          placeholder="yvonne"
          value={signupForm.userName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="yvonne@gmail.com"
          value={signupForm.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={signupForm.password}
          onChange={changeHandler}
        />
        <Link to="/">
          <button 
          onClick={submitHandler}
           className="signin_btn_user">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
