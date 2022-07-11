import React from "react";
import "../../components/ArtificialIntelligence/ArtificialIntelligence.scss";
import { Container, Row, Col } from "react-bootstrap";
import GradientButton from "../Gradientbutton/GradientButton";
import robotImg from "../../images/robot.png";

const ArtificialIntelligence = () => {
  return (
    <>
      <section className="artificial-intellince py-md-5 pt-0 pb-5">
        <Container>
          <Row>
            <Col>
              <div className="artificial-intelligence-item p-md-5 p-4 position-relative">
                <h5 className="text-white mb-md-4 mb-3 mt-lg-5 mt-md-4 mt-2 pt-xl-5">
                  We Create The Most Realistic Artificial Intelligence
                </h5>
                <h2 className="mb-md-5 mb-4">
                  Power Your Creativity With{" "}
                  <br className="d-none d-md-block" />
                  Artificial Intelligence
                </h2>
                <div className="mb-lg-5 mb-md-4 mb-2 pb-xl-5">
                  <GradientButton text="Let's Connect" type="button" />
                </div>
                <div className="robot-img position-absolute">
                  <img src={robotImg} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ArtificialIntelligence;
