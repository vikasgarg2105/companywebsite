import React from "react";
import "../../components/Footer/Footers.scss";
import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import doubleArrow from "../../images/angle-double-right-solid.svg";
import logoBlack from "../../images/logo-black.svg";

const Footers = () => {
  return (
    <>
      <footer className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="my-md-5 mt-4">
              <div className="company-logo">
                <img src={logoBlack} alt="logo" className="img-fluid" />
              </div>
            </Col>
            <Col md={6} className="my-md-5 my-4">
              <div className="social-icons">
                <ul className="d-flex justify-content-md-end justify-content-center ps-0 mb-0">
                  <li className="rounded-circle mx-2 d-flex align-items-center justify-content-center">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <img src={facebook} alt="" />
                    </a>
                  </li>
                  <li className="rounded-circle mx-2 d-flex align-items-center justify-content-center">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <img src={twitter} alt="" />
                    </a>
                  </li>
                  <li className="rounded-circle mx-2 d-flex align-items-center justify-content-center">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <img src={instagram} alt="" />
                    </a>
                  </li>
                  <li className="rounded-circle ms-2 d-flex align-items-center justify-content-center">
                    <a
                      className="d-flex justify-content-center align-items-center"
                      href="#"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <hr />
          </Row>
          <Row className="pt-5 pb-4">
            <Col lg={4} className="mb-5">
              <div className="column-item me-xxl-5 pe-xxl-5 me-4 pe-4">
                <div className="column-heading mb-4">
                  <h5 className="mb-2">About Company</h5>
                  <div className="border-bottom"></div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived,,,
                </p>
              </div>
            </Col>
            <Col lg={2} className="mb-5">
              <div className="column-item">
                <div className="column-heading mb-4">
                  <h5 className="mb-2">Navigation</h5>
                  <div className="border-bottom"></div>
                </div>

                <ul className="ps-0 mb-0">
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Home
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> About Us
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Services
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Our
                      Works
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Careers
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Contact
                      Us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} className="mb-5">
              <div className="column-item">
                <div className="column-heading mb-4">
                  <h5 className="mb-2">Solutions</h5>
                  <div className="border-bottom"></div>
                </div>

                <ul className="ps-0 mb-0">
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Web
                      Designing &amp; Development
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Mobile
                      App Development
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Branding
                      &amp; Designs
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> AI
                      Solutions
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Chatbot
                      Development
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> Digital
                      Marketing Us
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} className="mb-5">
              <div className="column-item">
                <div className="column-heading mb-4">
                  <h5 className="mb-2">Contact Info</h5>
                  <div className="border-bottom"></div>
                </div>
                <ul className="ps-0 mb-0">
                  <li className="d-flex align-items-center">
                    <div href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> #205,
                      sector-62, Noida (201301) U.P.
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> +1 (123)
                      456-7890
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" />{" "}
                      info@company.com
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> +1 (123)
                      456-7890
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div href="#" className="d-flex align-items-center">
                      <img src={doubleArrow} alt="" className="me-2" /> 09.00 AM
                      - 05.00 PM
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <hr />
            <Col xs={12}>
              <div className="d-flex flex-md-row flex-column align-items-center justify-content-between">
                <div className="copyright text-md-start text-center mb-2 mb-md-0">
                  Copyright &copy; 2020 BluAmbition. All rights reserved.
                </div>
                <div className="support-links">
                  <ul className="d-flex align-items-center ps-0 mb-0">
                    <li className="ms-3">
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li className="ms-3">
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footers;
