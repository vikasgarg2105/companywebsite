import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GradientButton from "../Gradientbutton/GradientButton";
import "../Hero/Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="hero-item text-white d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-center">
                  Best Solutions to Help Your Business{" "}
                  <br className="d-none d-md-block" /> Thrive in Digital era
                </h1>
                <p className="text-center mt-2 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and{" "}
                  <br className="d-none d-md-block" /> typesetting industry.
                </p>
                <GradientButton type="button" text="Let's Connect" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
