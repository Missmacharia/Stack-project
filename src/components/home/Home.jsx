import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="myHome">
      <div className="questions">
        <div className="pageTitle">
          <h1>All Questions</h1>
        </div>
        <div className="about_questions">
          <button>
            <Link to="/AskQuizs">Post Questions</Link>
          </button>
        </div>
      </div>
      <div className="question_field">
        <h1>questions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          officia, blanditiis quis atque ad distinctio. Cumque fugiat, fugit quo
          at quas, iste vitae incidunt voluptatibus expedita quod, officiis
          consectetur vero? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Explicabo voluptate, esse ab a aliquid error, temporibus,
          molestiae iusto reiciendis amet accusamus hic et rerum cum dignissimos
          saepe veniam. Fugiat, doloremque...
          <div className="votes">
            <h3>2 answers</h3>
            <button className="upvotes">100 Upvotes</button>
            <button className="downvotes">20 DownVotes</button>
          </div>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti
          recusandae maxime tenetur dolorem dolorum? Reiciendis aspernatur quasi
          culpa provident inventore veritatis ut, quos obcaecati quaerat
          adipisci esse error cupiditate.
        </p>
        {/* <div>
          {quiz.title}
          {quiz.question}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
