import React from "react";
import { Form } from "react-bootstrap";
import "../CareerForm/CareerForm.scss";
import Select from "react-select";
import NormalButton from "../Normalbutton/NormalButton";

const CareerForm = () => {
  const profileOptions = [
    {
      value: "Mobile Application Development",
      label: "Mobile Application Development",
    },
    { value: "Web Development", label: "Web Development" },
    { value: "AI Development", label: "AI Development" },
  ];
  return (
    <>
      <div className="career-form bg-white my-3 sticky-top">
        <div className="career-form-heading text-center mb-4">
          <h4 className="mb-2">Be A Part Of Our Team</h4>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Form>
          <Form.Group className="mb-4" controlId="name">
            <Form.Control
              type="text"
              className="rounded-pill"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="email">
            <Form.Control
              type="email"
              className="rounded-pill"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="mobile-number">
            <Form.Control
              type="number"
              className="rounded-pill"
              placeholder="Mobile Number"
            />
          </Form.Group>
          <Select
            className="basic-single mb-4 rounded-pill"
            classNamePrefix="select"
            placeholder="Position apply for"
            name="profile"
            options={profileOptions}
          />
          <Form.Group className="mb-4" controlId="uploadbtn">
            <Form.Label className="form-control position-relative p-0" id="uploadBtn">
              <Form.Control type="file" className="rounded-pill" />
              <NormalButton buttonTitle="Upload" />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-4" controlId="namemessage">
            <Form.Control
              type="text"
              className="rounded-pill"
              placeholder="Message (Optional)"
            />
          </Form.Group>
          <NormalButton buttonTitle="Apply Now" css="w-100" />
        </Form>
      </div>
    </>
  );
};

export default CareerForm;
