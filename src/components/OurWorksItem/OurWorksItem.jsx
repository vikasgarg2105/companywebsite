import React from "react";
import "../OurWorksItem/OurWorksItem.scss";
import { Row, Col } from "react-bootstrap";
import NormalButton from "../Normalbutton/NormalButton";
import PortfolioImg1 from "../../images/portfolio/portfolio-1.png";

const portfolio = [
  {
    projectNumber: "01",
    category: "IT Company",
    projectName: "HangingPanda Pvt. Ltd.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technology: "HTML5, CSS3, Bootsrap5, Javascript,JQuery",
    projectImg: PortfolioImg1,
  },
  {
    projectNumber: "02",
    category: "IT Company",
    projectName: "HangingPanda Pvt. Ltd.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technology: "HTML5, CSS3, Bootsrap5, Javascript,JQuery",
    projectImg: PortfolioImg1,
  },
];

const OurWorksItem = () => {
  return (
    <>
      {portfolio.map((items, index) => {
        return (
          <div className="our-works-item mb-5 pb-5" key={index}>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="our-works-content">
                  <h6 className="company-category d-flex align-items-center">
                    {items.projectNumber} {items.category}{" "}
                    <div className="line ms-3"></div>
                  </h6>
                  <h2 className="mb-3 project-name">{items.projectName}</h2>
                  <p>{items.description}</p>
                  <p className="mb-4">
                    <span>Technology :-</span> {items.technology}
                  </p>
                  <NormalButton type="button" buttonTitle="Learn More" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="portfolio-img">
                  <img src={items.projectImg} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default OurWorksItem;
