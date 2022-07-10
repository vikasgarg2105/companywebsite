import React from "react";
import PageTitle from "./components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import CareerItem from "./components/CareerItem/CareerItem";
import CareerForm from "./components/CareerForm/CareerForm";

const Careers = () => {
  document.title = "Careers";
  return (
    <>
      <PageTitle Pagename="Careers" />
      <section className="careers">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  Get Involved Now
                </h6>
                <h2 className="mb-3">Join Our team</h2>
              </div>
              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br /> Ipsum has been the industry's standard
                dummy text.
              </p>
            </Col>
            <Col lg={8} className="my-5">
              <div className="vacancy-details">
                <Row>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                  <Col lg={6} className="my-3">
                    <CareerItem />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} className="my-5">
              <CareerForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Careers;
