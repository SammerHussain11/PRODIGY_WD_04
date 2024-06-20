import React from "react";
import "./MyWork.css";
import work_1 from "../../assets/work-1.jpg";
import work_2 from "../../assets/work-2.jpg";
import work_3 from "../../assets/work-3.jpg";
import work_4 from "../../assets/work-4.jpg";
import work_5 from "../../assets/work-5.jpg";
import work_6 from "../../assets/work-6.jpg";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>
          <span>My latest work</span>
        </h1>
      </div>
      <div className="mywork-container">
        <div className="mywork-item">
          <img src={work_1} alt="work-1-pic" />
        </div>
        <div className="mywork-item">
          <img src={work_2} alt="work-2-pic" />
        </div>
        <div className="mywork-item">
          <img src={work_3} alt="work-3-pic" />
        </div>
        <div className="mywork-item">
          <img src={work_4} alt="work-4-pic" />
        </div>
        <div className="mywork-item">
          <img src={work_5} alt="work-5-pic" />
        </div>
        <div className="mywork-item">
          <img src={work_6} alt="work-6-pic" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
