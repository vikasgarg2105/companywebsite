import React from "react";
import PageTitle from "./components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import CareerItem from "./components/CareerItem/CareerItem";
import CareerForm from "./components/CareerForm/CareerForm";
import NoJob from "./images/no-job.gif";

const careerData = [
  {
    jobDuration: "Full Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    jobDuration: "Full Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    jobDuration: "Full Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];

const Careers = () => {
  document.title = "Careers";
  return (
    <>
      <PageTitle Pagename="Careers" />
      <section className="careers py-5">
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
            <Col xl={8} className="my-5">
              <div className="vacancy-details">
                <Row>
                  {careerData.length === 0 ? (
                    <>
                      <Col xs={12} className="my-3">
                        {/* <p className="text-center">No Vacancies !!!</p> */}
                        <div className="no-job-found text-center">
                          <img src={NoJob} alt="" className="img-fluid" />
                        </div>
                      </Col>
                    </>
                  ) : (
                    careerData.map((item, index) => {
                      return (
                        <Col md={6} className="my-3" key={index}>
                          <CareerItem
                            jobDuration={item.jobDuration}
                            jobTitle={item.jobTitle}
                            jobDescription={item.jobDescription}
                          />
                        </Col>
                      );
                    })
                  )}
                </Row>
              </div>
            </Col>
            <Col xl={4} className="my-5">
              <CareerForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Careers;
