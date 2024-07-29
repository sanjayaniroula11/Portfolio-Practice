import React, { useState } from "react";
import content from "./projectdata.js";
import portfolio from "../assets/portfolio.png";
import quiz from "../assets/quiz.png";
import todo from "../assets/todo.png";

function MyWorks() {
  return (
    <div className="project-section">
      <h1 className="text-green-400 text-5xl font-bold uppercase text-yellow">
        {" "}
        Projects Section
      </h1>{" "}
      <br />
      <div className="project-grid">
        <div className="service-box">
          <div className="image-service">
            <img src={portfolio} alt="Portfolio Image" className="car-image" />
          </div>
          <h2 className="font-black">Portfolio</h2>
          <p className="font-normal">
            This is a description of your portfolio project.
          </p>
        </div>
        <div className="service-box">
          <div className="image-service">
            <img src={quiz} alt="Quiz Image" className="car-image" />
          </div>
          <h2 className="font-black">Quiz App</h2>
          <p className="font-normal">
            This is a description of your quiz application project.
          </p>
        </div>
        <div className="service-box">
          <div className="image-service">
            <img src={todo} alt="Todo List Image" className="car-image" />
          </div>
          <h2 className="font-black">To-Do List</h2>
          <p className="font-normal">
            This is a description of your to-do list project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
