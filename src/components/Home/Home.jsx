import React from "react";
import "./Home.css";
import Profile from "../../assets/Profile-Pic.jpg";

const Home = ({ handleScrollTo, contactRef }) => {
  const scrollToContact = () => {
    handleScrollTo(contactRef);
  };

  const redirectToResume = () => {
    window.location.href = "https://sg.docworkspace.com/d/sIEuvmKSPAfCbsbMG";
  };

  return (
    <>
      <div className="hero">
        <img className="profile-pic" src={Profile} alt="Profile Pic" />
        <h1>
          <span>Hey!, I am Sammer Hussain,</span>
        </h1>
        <h1>MERN Stack Developer based in Pakistan.</h1>

        <p>
          I am the student of BS Information Technology at Quaid e Awam
          University of Engineering Science and Technology Nawabshah
        </p>
        <div className="hero-action">
          <div className="hero-connect" onClick={scrollToContact}>
            Connect With Me
          </div>
          <div className="hero-resume" onClick={redirectToResume}>
            My Resume
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
