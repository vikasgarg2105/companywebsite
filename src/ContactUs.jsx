import React, { useState, useMemo } from "react";
import PageTitle from "./components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Facebook from "./images/facebook.svg";
import NormalButton from "./components/Normalbutton/NormalButton";
import Select from "react-select";
import countryList from "react-select-country-list";

const ContactUs = () => {
  document.title = "Contact Us";
  const [value, setValue] = useState("");
  const [text, setText] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    country: "",
    company: "",
    workWithCompany: "",
    message: "",
  });
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    console.log(text);
  };
  return (
    <>
      <PageTitle Pagename="Contact Us" />
      <div className="contact-us position-relative pb-5">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="heading">
                <h6 className="d-flex align-items-center">Come Visit Us At</h6>
                <h2 className="mb-5">Our Address</h2>
              </div>
              <div className="address-content">
                <div className="address-item pb-3 mb-3 d-flex align-items-center">
                  <div className="item-img me-2 rounded-circle d-flex alig-items-center justify-content-center">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="item-content">
                    <h5 className="mb-2">Office Address</h5>
                    <p className="mb-0">#205, sector-62, Noida (201301) U.P.</p>
                  </div>
                </div>
                <div className="address-item pb-3 mb-3 d-flex align-items-center">
                  <div className="item-img me-2 rounded-circle d-flex alig-items-center justify-content-center">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="item-content">
                    <h5 className="mb-2">Phone Number</h5>
                    <p className="mb-0">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="address-item pb-3 mb-3 d-flex align-items-center">
                  <div className="item-img me-2 rounded-circle d-flex alig-items-center justify-content-center">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="item-content">
                    <h5 className="mb-2">Email</h5>
                    <p className="mb-0">info@bluambition.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="contact-us-form ps-5 position-relative">
                <div className="heading">
                  <h6 className="d-flex align-items-center">Send Message</h6>
                  <h2 className="mb-5">Drop Us a line</h2>
                </div>
                <div className="contact-form-container">
                  <Form>
                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="firstName">
                          <Form.Control
                            type="text"
                            className="rounded-pill"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={text.firstName}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="LastName">
                          <Form.Control
                            type="text"
                            className="rounded-pill"
                            placeholder="Last Name"
                            name="lastName"
                            value={text.lastName}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="email">
                          <Form.Control
                            type="email"
                            className="rounded-pill"
                            placeholder="Email"
                            name="email"
                            value={text.email}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="mobile-number">
                          <Form.Control
                            type="number"
                            className="rounded-pill"
                            placeholder="Mobile Number"
                            name="mobileNumber"
                            value={text.mobileNumber}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Select
                          options={options}
                          name="country"
                          value={value}
                          onChange={changeHandler}
                        />
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="namemessage">
                          <Form.Control
                            type="text"
                            className="rounded-pill"
                            placeholder="Company (Optional)"
                            name="company"
                            value={text.company}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={12} className="mb-4">
                        <div className="mb-2">
                          Have you work with BluAmbition Pvt. Ltd. before?
                        </div>
                        <div className="d-flex align-items-center">
                          <Form.Check
                            inline
                            type="radio"
                            className="me-3"
                            name="workWithCompany"
                            id="yes"
                            label="yes"
                            value={text.workWithCompany}
                            onChange={handleChange}
                          />
                          <Form.Check
                            inline
                            type="radio"
                            name="workWithCompany"
                            id="no"
                            label="no"
                            value={text.workWithCompany}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-4" controlId="namemessage">
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Message (Optional)"
                            name="message"
                            value={text.message}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <NormalButton buttonTitle="Submit" type="submit" />
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="contact-bg-color position-absolute"></div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="company-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224369.03562454425!2d77.26107949942362!3d28.516681710933348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1657464755398!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
