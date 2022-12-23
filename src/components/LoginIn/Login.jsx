import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserAction } from "../../features/user";
import "./Login.css";

const DEFAULT_LOGIN = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(DEFAULT_LOGIN);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (loginForm.email === "") {
      setError("Please fill in your email address");
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginForm.email)
    ) {
      setError("invalid email");
      return;
    }

    if (loginForm.password === "") {
      setError("Password is Required");
      return;
    }

    const user = { ...loginForm };
    dispatch(loginUserAction(user));

    alert("Login successfully");
  };

  return (
    <div className="login">
      <form className="login_form">
        <div>{error && <p className="error_message">{error} </p>}</div>
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
          <button onClick={handlerSubmit} className="login_btn_user">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
