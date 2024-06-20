import React from "react";
import "./Footer.css";
import Image from "../../assets/image.jpg";
import email_Icon from "../../assets/mail-icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Image} alt="logo" />
          <div>
            <h2>Sammer Hussain</h2>
            <p>
              Hey! I am Sammer Hussain, a MERN Stack Developer based in
              Pakistan. I have 2 years of experience in web development and have
              completed over 30 production-grade projects.
            </p>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="email-input">
            <img src={email_Icon} alt="email-icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <a
            href="https://www.youtube.com/channel/UC969ePTB49nw-oF_cTB3z0Q"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-subscribe"
          >
            Subscribe
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © Sammer Hussain, All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
