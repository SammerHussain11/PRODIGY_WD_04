import React from "react";
import "./Services.css";
import services from "../../assets/services.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>
          <span>My Services</span>
        </h1>
        <img
          style={{ height: "300px", width: "600px" }}
          src={services}
          alt="services"
        />
      </div>
      <div className="services-content">
        <div className="service-card">
          <div className="service-card-content">
            <h2>Web Development</h2>
            <p>
              Building responsive and functional websites using modern
              technologies.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <h2>Mobile Development</h2>
            <p>
              Creating mobile applications with a focus on user experience and
              performance.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <h2>UI/UX Design</h2>
            <p>
              Designing user interfaces and experiences that are both intuitive
              and visually appealing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;