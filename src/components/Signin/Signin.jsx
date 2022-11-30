import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
const DEFAULT_FORM= 
{
  username: "",
  email: "",
  password:""
}

const Signin = () => {
  const [userform, setUserForm]= useState(DEFAULT_FORM)
  const [users, setUser]= useState([])

  const changeHandler=(e)=>{
    setUserForm((prev)=>({
    ...prev,  [e.target.name]: e.target.value
    }))

  }

  const submitHandler=(e)=>{
    e.preventDefault()
    const id=Math.ceil(Math.random()*10000)
    const newUser= {...userform, id}
    setUser(newUser)
    setUserForm(DEFAULT_FORM)
  }

  return (
    <div className="signPage">
      <form className="signin_form">
        <input type="file" name="image" />
        <input
          type="text"
          name="username"
          placeholder="yvon"
          value={userform.username}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="yvonne@gmail.com"
          value={userform.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="........"
          value={userform.password}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>
          <Link to="/" >Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default Signin;
