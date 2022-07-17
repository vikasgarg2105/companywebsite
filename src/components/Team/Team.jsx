import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Team/Team.scss";
import Circle from "../../images/circle.svg";

import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <section className="team pb-5 position-relative">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  Our Expert Team
                </h6>
                <h2 className="mb-4">
                  Meet Our Expert from <br />
                  Trusted source in IT Services
                </h2>
                <div className="bg-img-circle position-absolute top-0 start-0">
                  <img src={Circle} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
            <Col sm={6} md={6} lg={3}>
              <TeamItem />
            </Col>
            <Col sm={6} md={6} lg={3}>
              <TeamItem />
            </Col>
            <Col sm={6} md={6} lg={3}>
              <TeamItem />
            </Col>
            <Col sm={6} md={6} lg={3}>
              <TeamItem />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
