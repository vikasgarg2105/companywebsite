import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "./components/pageTitle/PageTitle";
import ServiceItem from "./components/ServiceList/ServiceItem";

const ServicePage = () => {
  document.title="Services";
  return (
    <>
      <PageTitle Pagename="Services" />
      <section className="services-page">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="heading both text-center">
                <h6 className="d-flex align-items-center justify-content-center">
                  Services
                </h6>
                <h2 className="mb-4">What we Do</h2>
              </div>
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
            <Col md={6} lg={4} className="my-4">
              <ServiceItem />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicePage;
