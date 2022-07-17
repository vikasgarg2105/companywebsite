import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OurWorksItem from "./components/OurWorksItem/OurWorksItem";
import PageTitle from "./components/pageTitle/PageTitle";

const OurWorks = () => {
  document.title = "Our Works";
  return (
    <>
      <PageTitle Pagename="Our Works" />
      <section className="our-works py-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  Our Works
                </h6>
                <h2 className="mb-4">Portfolio</h2>
              </div>
            </Col>
            <Col xs={12} className="pt-4">
              <OurWorksItem />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurWorks;
