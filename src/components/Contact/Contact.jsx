import React, { useState, useRef } from "react";
import "./Contact.css";
import contactIcon from "../../assets/contact-logo.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: mailIcon,
      text: "sammerhussain5121472@gmail.com",
      alt: "mail-icon",
    },
    {
      icon: phoneIcon,
      text: "+92307-3461499",
      alt: "phone-icon",
    },
    {
      icon: locationIcon,
      text: "City Mehrabpur district N.Feroze Sindh Pakistan.",
      alt: "location-icon",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x951htb",
        "template_o4ialua",
        formData,
        "1v7I4mhJimwylnNnQ" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>
          <span>Get in touch</span>
        </h1>
        <img src={contactIcon} alt="contact-logo" className="contact-image" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          {contactDetails.map((detail, index) => (
            <div className="contact-details" key={index}>
              <div className="detail">
                <img src={detail.icon} alt={detail.alt} />
                <p>{detail.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="contact-right" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Write Your Message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
