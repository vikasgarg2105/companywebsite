import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PayPal from "../../images/paypal.svg";
import Netflix from "../../images/netflix.svg";
import Snapchat from "../../images/snapchat.svg";
import Figma from "../../images/figma.svg";
import YouTube from "../../images/youtube.svg";
import "../Clients/Clients.scss";

const Clients = () => {
  return (
    <>
      <section className="clients py-5 my-5">
        <Container>
          <Row>
            <Col>
              <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100">
                <div className="client-img">
                  <img src={PayPal} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100">
                <div className="client-img">
                  <img src={Netflix} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100">
                <div className="client-img">
                  <img src={Snapchat} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100">
                <div className="client-img">
                  <img src={Figma} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="client-item d-flex align-items-center justify-content-center py-4 px-5 h-100">
                <div className="client-img">
                  <img src={YouTube} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Clients;
