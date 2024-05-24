import React, { useState } from 'react';
import content from './projectdata.js';

function MyWorks() {


  const renderProjects = () => {
    if (content.length === 0) {
      return <h1>No Projects Available</h1>;
    } else {
      return (
        <div className="project-section">
          {content.map((project, index) => (
            <div className="service-box" key={index}>
              <img
                src={project.image}
                className="car-image"
                alt=""
              />
              <h2 className="font-black">{project.name}</h2>
              <p className="font-normal">
                {project.description}
              </p>
              {/* <a href={project.link} className="view-btn">View Project</a> */}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      {renderProjects()}
    </>
  );
}

export default MyWorks;
