import React from "react";
import { Form } from "react-bootstrap";
import "../CareerForm/CareerForm.scss";
import Select from "react-select";
import NormalButton from "../Normalbutton/NormalButton";

const CareerForm = (props) => {
  return (
    <>
      <div className={`career-form bg-white ${props.css} sticky-top`}>
        <div className="career-form-heading text-center mb-4">
          <h4 className="mb-2">Be A Part Of Our Team</h4>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <Form encType="multipart/form-data" method="post">
          <Form.Group className="mb-4 position-relative" controlId="name">
            <Form.Control
              type="text"
              className="rounded-pill"
              placeholder="Name"
              name="name"
              value={props.text.name}
              autoComplete="off"
              onChange={props.handleChange}
            />
            {props.error
              ? props.text.name.length === 0 && (
                  <div className="error-msg position-absolute">
                    Please fill this field
                  </div>
                )
              : ""}
          </Form.Group>
          <Form.Group className="mb-4 position-relative" controlId="email">
            <Form.Control
              type="email"
              className="rounded-pill"
              placeholder="Email"
              name="email"
              value={props.text.email}
              onChange={props.handleChange}
              autoComplete="off"
            />
            {props.error ? (
              props.text.email.length === 0 ? (
                <div className="error-msg position-absolute">
                  Please fill this field
                </div>
              ) : !props.emailRegex.test(props.text.email) ? (
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
          <Form.Group
            className="mb-4 position-relative"
            controlId="mobile-number"
          >
            <Form.Control
              type="number"
              className="rounded-pill"
              placeholder="Mobile Number"
              name="mobileNumber"
              autoComplete="off"
              value={props.text.mobileNumber}
              onChange={props.handleChange}
            />
            {props.error
              ? props.text.mobileNumber.length === 0 && (
                  <div className="error-msg position-absolute">
                    Please fill this field
                  </div>
                )
              : ""}
          </Form.Group>
          <div className="mb-4 position-relative">
            {props.show ? (
              <Form.Control
                type="text"
                className="rounded-pill"
                placeholder="Position apply for"
                name="position"
                value={props.text.position}
                onChange={props.handleChange}
                disabled
              />
            ) : (
              <Select
                className="basic-single rounded-pill"
                classNamePrefix="select"
                placeholder="Position apply for"
                name="position"
                options={props.profileOptions}
                value={props.select}
                onChange={props.handleSelect}
              />
            )}

            {props.error
              ? props.text.position.length === 0 && (
                  <div className="error-msg position-absolute">
                    Please fill this field
                  </div>
                )
              : ""}
          </div>
          <Form.Group className="mb-4 position-relative" controlId="uploadbtn">
            <Form.Label
              className="form-control position-relative p-0 mb-0"
              id="uploadBtn"
            >
              <Form.Control
                type="file"
                ref={props.inputRef}
                className="rounded-pill"
                name="resumeFile"
                accept=".pdf"
                onChange={props.handleFile}
              />
              {/* <NormalButton buttonTitle="Upload" /> */}
              <div className="normal-btn text-white rounded-pill">Upload</div>
            </Form.Label>
            {props.error
              ? props.text.resumeFile.length === 0 && (
                  <div className="error-msg position-absolute">
                    Please fill this field
                  </div>
                )
              : ""}
          </Form.Group>
          <Form.Group
            className="mb-4 position-relative"
            controlId="namemessage"
          >
            <Form.Control
              type="text"
              className="rounded-pill"
              placeholder="Message (Optional)"
              name="message"
              value={props.text.message}
              onChange={props.handleChange}
              autoComplete="off"
            />
          </Form.Group>
          {props.show ? (
            <NormalButton
              type="submit"
              buttonTitle="Apply Now"
              css="w-100"
              function={props.submitModalBtn}
            />
          ) : (
            <NormalButton
              type="submit"
              buttonTitle="Apply Now"
              css="w-100"
              function={props.submitBtn}
            />
          )}
          {props.success ? (
            <div className="success-message mt-2 position-relative">
              Form have been Successfully submitted.
            </div>
          ) : (
            ""
          )}
        </Form>
      </div>
    </>
  );
};

export default CareerForm;
