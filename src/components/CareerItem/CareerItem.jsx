import React from "react";
import "../CareerItem/CareerItem.scss";
import NormalButton from "../Normalbutton/NormalButton";
const CareerItem = (props) => {
  return (
    <>
      <div className="career-item bg-white">
        <h6 className="job-duration mb-3">{props.jobDuration}</h6>
        <h5 className="job-title mb-3">{props.jobTitle}</h5>
        <p className="mb-5">{props.jobDescription}</p>
        <NormalButton buttonTitle="Apply Now" type="button" />
      </div>
    </>
  );
};

export default CareerItem;
