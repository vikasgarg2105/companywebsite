import React from "react";
import "../CareerItem/CareerItem.scss";
import { Button } from "react-bootstrap";
const CareerItem = (props) => {
  return (
    <>
      <div className="career-item bg-white">
        <h6 className="job-duration mb-3">{props.jobDuration}</h6>
        <h5 className="job-title mb-3">{props.jobTitle}</h5>
        <p className="mb-5">{props.jobDescription}</p>
        <Button
          type="button"
          onClick={() => {
            props.handleShow(props.id);
          }}
          className="normal-btn border-0 rounded-pill"
        >
          Apply Now
        </Button>
      </div>
    </>
  );
};

export default CareerItem;
