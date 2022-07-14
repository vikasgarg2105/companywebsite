import React, { useState, useMemo } from "react";
import PageTitle from "./components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Facebook from "./images/facebook.svg";
import NormalButton from "./components/Normalbutton/NormalButton";
import Select from "react-select";
import countryList from "react-select-country-list";

const ContactUs = () => {
  const host = "http://localhost:3001";
  document.title = "Contact Us";
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [isChecked, setIsChecked] = useState("");
  // const [isValid, setIsValid] = useState("");
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
    setText({ ...text, country: value.label });
  };
  const emailRegex = /\S+@\S+\.\S+/;
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    // setIsChecked(e.target.value)
  };
  const submitBtn = async () => {
    // if (emailRegex.test(text.email)) {
    //   setIsValid(true);
    // } else {
    //   setIsValid(false);
    // }
    if (
      text.firstName.length === 0 ||
      text.lastName.length === 0 ||
      text.email.length === 0 ||
      text.mobileNumber.length === 0 ||
      text.country.length === 0 ||
      text.workWithCompany.length === 0 ||
      text.message.length === 0 ||
      emailRegex.test(text.email) === false
    ) {
      setError(true);
    } else {
      // API Call
      const response = await fetch(`${host}/api/contact/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      setSuccess(true);
      setText({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        country: "",
        company: "",
        workWithCompany: "",
        message: "",
      });
      setValue("");
      setError(false);
    }
  };
  return (
    <>
      <PageTitle Pagename="Contact Us" />
      <div className="contact-us position-relative pb-5">
        <Container>
          <Row>
            <Col lg={4} className="my-lg-4 my-5">
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
            <Col lg={8} className="my-lg-4 my-5">
              <div className="contact-us-form ps-lg-5 position-relative">
                <div className="heading">
                  <h6 className="d-flex align-items-center">Send Message</h6>
                  <h2 className="mb-5">Drop Us a line</h2>
                </div>
                <div className="contact-form-container">
                  <Form>
                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="firstName"
                        >
                          <Form.Control
                            type="text"
                            className="rounded-pill"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={text.firstName}
                          />
                          {error
                            ? text.firstName.length === 0 && (
                                <div className="error-msg position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="LastName"
                        >
                          <Form.Control
                            type="text"
                            className="rounded-pill"
                            placeholder="Last Name"
                            name="lastName"
                            value={text.lastName}
                            onChange={handleChange}
                          />
                          {error
                            ? text.lastName.length === 0 && (
                                <div className="error-msg position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="email"
                        >
                          <Form.Control
                            type="email"
                            className="rounded-pill"
                            placeholder="Email"
                            name="email"
                            value={text.email}
                            onChange={handleChange}
                          />
                          {error ? (
                            text.email.length === 0 ? (
                              <div className="error-msg position-absolute">
                                Please fill this field
                              </div>
                            ) : !emailRegex.test(text.email) ? (
                              <div className="error-msg position-absolute">
                                Please fill valid email
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="mobile-number"
                        >
                          <Form.Control
                            type="number"
                            className="rounded-pill"
                            placeholder="Mobile Number"
                            name="mobileNumber"
                            value={text.mobileNumber}
                            onChange={handleChange}
                          />
                          {error
                            ? text.mobileNumber.length === 0 && (
                                <div className="error-msg position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-4 position-relative">
                          <Select
                            options={options}
                            name="country"
                            value={value}
                            onChange={changeHandler}
                          />
                          {error
                            ? text.country.length === 0 && (
                                <div className="error-msg position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </div>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="namemessage"
                        >
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
                            value="Yes"
                            onChange={handleChange}
                            checked={
                              text.workWithCompany === "Yes" ? true : false
                            }
                          />
                          <Form.Check
                            inline
                            type="radio"
                            name="workWithCompany"
                            id="no"
                            label="no"
                            value="No"
                            onChange={handleChange}
                            checked={
                              text.workWithCompany === "No" ? true : false
                            }
                          />
                          {error
                            ? text.workWithCompany.length === 0 && (
                                <div className="error-msg radio-error position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </div>
                      </Col>
                      <Col lg={12}>
                        <Form.Group
                          className="mb-4 position-relative"
                          controlId="namemessage"
                        >
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Message"
                            name="message"
                            value={text.message}
                            onChange={handleChange}
                          />
                          {error
                            ? text.message.length === 0 && (
                                <div className="error-msg position-absolute">
                                  Please fill this field
                                </div>
                              )
                            : ""}
                        </Form.Group>
                      </Col>
                      <Col>
                        <NormalButton
                          buttonTitle="Submit"
                          type="button"
                          function={submitBtn}
                        />
                        {success ? (
                          <div className="success-message mt-2 position-relative">
                            Form have been Successfully submitted. We will call
                            you shortly. Thank you !!!
                          </div>
                        ) : (
                          ""
                        )}
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
