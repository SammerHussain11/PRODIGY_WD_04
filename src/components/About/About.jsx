import React from "react";
import "./About.css";
// import Photo from "../../assets/photo.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>
          <span>About me</span>
        </h1>
      </div>
      <div className="about-section">
        {/* <div className="about-left">
          <img className="profile-picture" src={Photo} alt="Profile Picture" />
        </div> */}
        <div className="about-description">
          <p>I am a MERN Stack Developer with 2 years of experience.</p>
          <p>Currently, I am pursuing my degree in IT at Quest Nawabshah.</p>
          <div className="about-skills">
            <div className="skills">
              <p>HTML, CSS</p>
              <hr className="skill-bar" style={{ width: "50%" }} />
            </div>
            <div className="skills">
              <p>React.js, Next.js</p>
              <hr className="skill-bar" style={{ width: "60%" }} />
            </div>
            <div className="skills">
              <p>Node.js, JavaScript</p>
              <hr className="skill-bar" style={{ width: "70%" }} />
            </div>
            <div className="skills">
              <p>MongoDB, MySQL</p>
              <hr className="skill-bar" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr className="achievement-divider" />
        <div className="achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr className="achievement-divider" />
        <div className="achievement">
          <h1>10+</h1>
          <p>ACTIVE CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
