import React from "react";
import "../pageTitle/PageTitle.scss";
import { Container, Row, Col } from "react-bootstrap";
import CircleAnim from "../../images/circle-anim.svg";

const PageTitle = (props) => {
  return (
    <>
      <div className="page-title position-relative">
        <Container>
          <Row>
            <Col>
              <div className="page-title-heading text-center text-white d-flex justify-content-center align-items-center">
                <h1>{props.Pagename}</h1>
                <div className="circle-animation">
                  <img src={CircleAnim} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PageTitle;
