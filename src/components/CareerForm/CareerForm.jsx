import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import "../CareerForm/CareerForm.scss";
import Select from "react-select";
import NormalButton from "../Normalbutton/NormalButton";
const axios = require("axios").default;

const CareerForm = () => {
  const host = "http://localhost:3001";
  const inputRef = useRef(null);
  const [select, setSelect] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    position: "",
    resumeFile: "",
    message: "",
  });
  const handleSelect = (selectvalue) => {
    setSelect(selectvalue);
    setText({ ...text, position: selectvalue.value });
  };
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    // console.log(text);
  };
  const handleFile = (e) => {
    var file = e.target.files[0];
    // if(file.name.length>=25){
    //   let filename = file.name.slice(0, 12) + `...` + file.name.slice(-8);
    //   // inputRef.current.value = filename;
    //   setText({ ...text, resumeFile: filename });
    // }
    console.log(file, text);
    setText({ ...text, resumeFile: file });
  };
  const emailRegex = /\S+@\S+\.\S+/;
  const submitBtn = async (e) => {
    e.preventDefault();
    if (
      text.name.length === 0 ||
      text.email.length === 0 ||
      text.mobileNumber.length === 0 ||
      text.position.length === 0 ||
      text.resumeFile.length === 0 ||
      emailRegex.test(text.email) === false
    ) {
      setError(true);
      setSuccess(false);
    } else {
      var url = `${host}/api/careers/careers/`;
      let formData = new FormData();
      var respo = "";
      formData.append("name", text.name);
      formData.append("email", text.email);
      formData.append("mobileNumber", text.mobileNumber);
      formData.append("position", text.position);
      formData.append("resumeFile", text.resumeFile);
      formData.append("message", text.message);
      console.log(text);
      setSuccess(true);
      setSelect("");
      // input field value empty
      setText({
        name: "",
        email: "",
        mobileNumber: "",
        position: "",
        resumeFile: "",
        message: "",
      });
      inputRef.current.value = null;
      setError(false);

      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          respo = response.data;
        })
        .catch((error) => {
          // console.log("API Error");
          return error;
        });
    }
  };

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
        <Form encType="multipart/form-data" method="post">
          <Form.Group className="mb-4 position-relative" controlId="name">
            <Form.Control
              type="text"
              className="rounded-pill"
              placeholder="Name"
              name="name"
              value={text.name}
              autoComplete="off"
              onChange={handleChange}
            />
            {error
              ? text.name.length === 0 && (
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
              value={text.email}
              onChange={handleChange}
              autoComplete="off"
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
          <div className="mb-4 position-relative">
            <Select
              className="basic-single rounded-pill"
              classNamePrefix="select"
              placeholder="Position apply for"
              name="position"
              options={profileOptions}
              value={select}
              onChange={handleSelect}
            />
            {error
              ? text.position.length === 0 && (
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
                ref={inputRef}
                className="rounded-pill"
                name="resumeFile"
                accept=".pdf"
                onChange={handleFile}
              />
              {/* <NormalButton buttonTitle="Upload" /> */}
              <div className="normal-btn text-white rounded-pill">Upload</div>
            </Form.Label>
            {error
              ? text.resumeFile.length === 0 && (
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
              value={text.message}
              onChange={handleChange}
              autoComplete="off"
            />
          </Form.Group>
          <NormalButton
            type="submit"
            buttonTitle="Apply Now"
            css="w-100"
            function={submitBtn}
          />
          {success ? (
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
