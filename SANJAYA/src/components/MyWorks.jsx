import React from 'react'
import OneProject from './OneProject'

function MyWorks() {
  return (<>
    <div className="project-section psec1">
    <div className="project">
      {" "}
      <OneProject />{" "}
    </div>
    <div className="project">
      {" "}
      <OneProject />{" "}
    </div>
  </div>
  <div className="project-section psec2">
    <div className="project">
      {" "}
      <OneProject />{" "}
    </div>
  </div>
  </>
  )
}

export default MyWorks