import React from "react";
import mobileImg from "../../images/mobile-app-development.svg";

const ServiceItem = () => {
  return (
    <>
      <div className="service-item p-4 my-4">
        <div className="service-img d-flex justify-content-center align-items-center">
          <img src={mobileImg} alt="" className="img-fluid" />
        </div>
        <div className="service-content">
          <h5 className="mt-4 mb-2">Mobile App Development</h5>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type .
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
