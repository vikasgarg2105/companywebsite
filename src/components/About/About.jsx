import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../../images/about.png";
import AboutBgImg from "../../images/about-bg.svg";
import NormalButton from "../Normalbutton/NormalButton";
import "../About/About.scss";
const About = (props) => {
  return (
    <>
      <section className="about-us position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading">
                <h6 className="d-flex align-items-center">About Us</h6>
                <h2 className="mb-4">
                  We are here to IT Solution with{" "}
                  <br className="d-none d-md-block" /> years of experience
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="about-secp mb-4">
                Over years working in IT services developing software
                applications and mobile apps for clients all over the world.
              </p>
              <NormalButton
                buttonTitle="Learn More"
                type="button"
                css={props.css}
              />
            </Col>
            <Col lg={6}>
              <div className="about-img">
                <img
                  src={AboutImg}
                  alt=""
                  className="img-fluid position-relative about-main-img"
                />
                <div className="about-bg-img position-absolute end-0">
                  <img src={AboutBgImg} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
