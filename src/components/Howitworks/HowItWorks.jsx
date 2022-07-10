import React from "react";
import "../../components/Howitworks/HowItWorks.scss";
import { Container, Row, Col } from "react-bootstrap";
import workProcessimg from "../../images/choose-service.png";
import arrowImg from "../../images/arrow.svg";

const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works py-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  How it Works
                </h6>
                <h2 className="mb-4">Check Out Our Work Process</h2>
              </div>
            </Col>
            <Col lg={3} className="my-4">
              <div className="work-process-item position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="work-process-img position-relative text-center rounded-circle d-flex justify-content-center w-100 background-white align-items-center">
                  <img
                    src={workProcessimg}
                    alt=""
                    className="img-fluid rounded-circle w-100 h-100"
                  />
                  <div className="work-process-num position-absolute text-white rounded-circle d-flex align-items-center justify-content-center">
                    1
                  </div>
                </div>
                <div className="work-process-content">
                  <h5 className="text-center mt-4 mb-3">Choose a Service</h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
                <div className="next-arrow position-absolute">
                  <img src={arrowImg} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col lg={3} className="my-4">
              <div className="work-process-item position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="work-process-img position-relative text-center rounded-circle d-flex justify-content-center w-100 background-white align-items-center">
                  <img
                    src={workProcessimg}
                    alt=""
                    className="img-fluid rounded-circle w-100 h-100"
                  />
                  <div className="work-process-num position-absolute text-white rounded-circle d-flex align-items-center justify-content-center">
                    2
                  </div>
                </div>
                <div className="work-process-content">
                  <h5 className="text-center mt-4 mb-3">Request a Meeting</h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
                <div className="next-arrow position-absolute">
                  <img src={arrowImg} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col lg={3} className="my-4">
              <div className="work-process-item position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="work-process-img position-relative text-center rounded-circle d-flex justify-content-center w-100 background-white align-items-center">
                  <img
                    src={workProcessimg}
                    alt=""
                    className="img-fluid rounded-circle w-100 h-100"
                  />
                  <div className="work-process-num position-absolute text-white rounded-circle d-flex align-items-center justify-content-center">
                    3
                  </div>
                </div>
                <div className="work-process-content">
                  <h5 className="text-center mt-4 mb-3">
                    Receive Customer Plan
                  </h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
                <div className="next-arrow position-absolute">
                  <img src={arrowImg} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col lg={3} className="my-4">
              <div className="work-process-item position-relative d-flex flex-column justify-content-center align-items-center">
                <div className="work-process-img position-relative text-center rounded-circle d-flex justify-content-center w-100 background-white align-items-center">
                  <img
                    src={workProcessimg}
                    alt=""
                    className="img-fluid rounded-circle w-100 h-100"
                  />
                  <div className="work-process-num position-absolute text-white rounded-circle d-flex align-items-center justify-content-center">
                    4
                  </div>
                </div>
                <div className="work-process-content">
                  <h5 className="text-center mt-4 mb-3">
                    Let’s make it happen
                  </h5>
                  <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowItWorks;
