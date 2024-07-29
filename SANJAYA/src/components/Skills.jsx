import React from "react";

function Skills() {
  return (
    <>
      <div class="service-provided">
        <h1 className="heading-services bg-yellow-300 w-9/12 rounded-md">
          {" "}
          Services I Provide As A Web Developer{" "}
        </h1>
        <div class="services-grid">
          <div class="one-grid">
            <p class="service-topic">Web Design</p>
            <div class="service-content">
              <div class="icon-section">
                <img
                  src="https://cdn.icon-icons.com/icons2/1091/PNG/512/onlineshop_78377.png"
                  alt=""
                  class="service-image"
                ></img>
              </div>
              <div class="service-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis, culpa repudiandae reprehenderit magni aliquid odit!
                </p>
              </div>
            </div>
          </div>

          <div class="one-grid">
            <p class="service-topic">Web Development</p>
            <div class="service-content">
              <div class="icon-section">
                <img
                  src="https://cdn.icon-icons.com/icons2/3151/PNG/512/web_development_maintenance_construction_teamwork_icon_192840.png"
                  alt=""
                  class="service-image"
                ></img>
              </div>
              <div class="service-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis, culpa repudiandae reprehenderit magni aliquid odit!
                </p>
              </div>
            </div>
          </div>

          <div class="one-grid">
            <p class="service-topic">Content Management System </p>
            <div class="service-content">
              <div class="icon-section">
                <img
                  src="https://cdn.icon-icons.com/icons2/2104/PNG/512/content_icon_129122.png"
                  alt=""
                  class="service-image"
                ></img>
              </div>
              <div class="service-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis, culpa repudiandae reprehenderit magni aliquid odit!
                </p>
              </div>
            </div>
          </div>

          <div class="one-grid">
            <p class="service-topic">Website Maintainance</p>
            <div class="service-content">
              <div class="icon-section">
                <img
                  src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564402-settings_81520.png"
                  alt=""
                  class="service-image"
                ></img>
              </div>
              <div class="service-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis, culpa repudiandae reprehenderit magni aliquid odit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="whatido">
        <h3>I build web applications by using </h3>
        <div className="pointss">
          <div class="points">
            <div class="point-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>
            <div class="point-description">
              <p>React.</p>
            </div>
          </div>

          <div class="points">
            <div class="point-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            </div>
            <div class="point-description">
              <p>Javascript</p>
            </div>
          </div>

          <div class="points">
            <div class="point-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            </div>
            <div class="point-description">
              <p>Vite JS</p>
            </div>
          </div>

          <div class="points">
            <div class="point-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            </div>
            <div class="point-description">
              <p>TailwindCSS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
