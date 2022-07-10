import React from "react";
import "../../components/ServiceList/ServiceItem.scss";
import ServiceImg from "../../images/service-img.png";
import ServiceIcon from "../../images/service-icon.svg";

const ServiceItem = () => {
  return (
    <div className="service-page-item">
      <div className="service-img">
        <img src={ServiceImg} alt="" className="img-fluid" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="service-page-content bg-white d-flex justify-content-center align-items-center">
          <div className="service-item-icon me-2">
            <img src={ServiceIcon} alt="" className="img-fluid" />
          </div>
          <div className="service-item-name">
            Mobile Application Developement
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
