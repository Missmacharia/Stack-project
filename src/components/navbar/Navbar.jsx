import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAQuestionAction, searchQuestionAction } from "../../features/question";
import "./Navbar.css";

const DEFAULT_SEARCH = {
  search: ""
}

const Navbar = () => {
  
  const dispatch= useDispatch()

  const { qid } = useParams();

  const [search, setSearch ]= useState(DEFAULT_SEARCH)
  const [found, setFound]= useState(false)

  const changeHandler = (e)=>{
    setSearch((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  

  const questions = useSelector((state) => state.questions.questions);
  console.log(questions);

  const searchHandler= (e)=>{
    e.preventDefault()
    if(!search.search===questions.search){
      setFound("Question not found")
      return
    }
    const question= {...search}
    dispatch(searchQuestionAction(question))
    setSearch(DEFAULT_SEARCH)
  }

  useEffect(()=>{
    dispatch(getAQuestionAction(qid))
  }, [dispatch], qid)

  return (
    <div className="myLinks">
      <div>
        <h1>{found}</h1>
      </div>
      <h1 className="my_tiltle">
        <Link to="/">Stack OverFlow</Link>
      </h1>
      <input type="text"
      className="serach"
      name="search"
      value={search.search}
      onChange={changeHandler}
      placeholder="search" />
      <button className="btn_search" onClick={searchHandler}>Search</button>
      <div className="nav_lnks">
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/profile">Profile</Link> */}
        <Link to="/login">Login</Link>
        <Link to="/signin">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;
