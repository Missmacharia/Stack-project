import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const DEFAULT_LOGIN = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(DEFAULT_LOGIN);

  const changeHandler= (e)=>{
    setLoginForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div className="login">
      <form className="login_form">
        <input
          type="text"
          name="email"
          placeholder="yvonne@gmail.com"
          value={loginForm.email}
          onChange={changeHandler}
          />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginForm.password}
          onChange={changeHandler}
        />
        <Link to="/">
        <button className="login_btn_user">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
