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
  const [ setUser]= useState([])

  const [error, setError]=useState("")

  const changeHandler=(e)=>{
    setUserForm((prev)=>({
    ...prev,  [e.target.name]: e.target.value
    }))

  }

  const submitHandler=(e)=>{
    setError("")
    console.log(setError('hello'))
    if(userform.username===""){
      setError("Fill in your name!")
      return;
    }
    if(userform.email===""){
      setError("Fill in the Emails!")
      return;
    }
    if(userform.password===""){
      setError("Password is required!")
      return;
    }
    e.preventDefault()
    const id=Math.ceil(Math.random()*10000)
    const newUser= {...userform, id}
    setUser(newUser)
    setUserForm(DEFAULT_FORM)
  }

  return (
    <div className="signPage">
      <form className="signin_form">
        {error &&(
          <h1>{error}</h1>
        )}
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
