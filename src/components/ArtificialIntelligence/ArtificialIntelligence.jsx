import React from "react";
import "../../components/ArtificialIntelligence/ArtificialIntelligence.scss";
import { Container, Row, Col } from "react-bootstrap";
import GradientButton from "../Gradientbutton/GradientButton";
import robotImg from "../../images/robot.png"

const ArtificialIntelligence = () => {
  return (
    <>
      <section className="artificial-intellince py-5">
        <Container>
          <Row>
            <Col>
              <div className="artificial-intelligence-item p-5 position-relative">
                <h5 className="text-white mb-4 mt-5 pt-5">
                  We Create The Most Realistic Artificial Intelligence
                </h5>
                <h2 className="mb-5">
                  Power Your Creativity With <br />
                  Artificial Intelligence
                </h2>
                <div className="mb-5 pb-5">
                  <GradientButton text="Let's Connect" />
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
