import React from "react";
import "../CareerItem/CareerItem.scss";
import NormalButton from "../Normalbutton/NormalButton"

const CareerItem = () => {
  return (
    <>
      <div className="career-item bg-white">
        <h6 className="job-duration mb-3">Full Time</h6>
        <h5 className="job-title mb-3">Mobile App Developer</h5>
        <p className="mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
        <NormalButton buttonTitle = "Apply Now" type="button" />
      </div>
    </>
  );
};

export default CareerItem;
