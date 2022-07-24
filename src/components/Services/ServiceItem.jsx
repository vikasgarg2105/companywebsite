import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  return (
    <>
      <div className="service-item p-4 my-4">
        <div className="service-img d-flex justify-content-center align-items-center">
          <img src={props.serviceImg} alt="" className="img-fluid" />
        </div>
        <div className="service-content">
          <h5 className="mt-4 mb-2">{props.serviceName}</h5>
          <p className="mb-5">{props.serviceDescription}</p>
          <Link to="/">Read More...</Link>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
