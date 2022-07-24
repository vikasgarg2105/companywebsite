import React, { useState, useRef } from "react";
import PageTitle from "./components/pageTitle/PageTitle";
import { Container, Row, Col } from "react-bootstrap";
import CareerItem from "./components/CareerItem/CareerItem";
import CareerForm from "./components/CareerForm/CareerForm";
import NoJob from "./images/no-job.gif";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
const axios = require("axios").default;

const careerData = [
  {
    id: 1,
    jobDuration: "Full Time",
    jobTitle: "Web Development",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 2,
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 3,
    jobDuration: "Full Time",
    jobTitle: "AI Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 4,
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 5,
    jobDuration: "Full Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 6,
    jobDuration: "part Time",
    jobTitle: "Mobile App Developer",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
];

const Careers = () => {
  document.title = "Careers";

  const host = "http://localhost:3001";
  const inputRef = useRef(null);
  const [select, setSelect] = useState("");
  const [error, setError] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (getid) => {
    setShow(true);
    let item = careerData.filter((item) => {
      return item.id === getid;
    });
    let positionValue = item[0].jobTitle;
    setText({ ...text, position: positionValue });
    setModalText({ ...modalText, position: positionValue });
    setModalSuccess(false);
  };
  const [text, setText] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    position: "",
    resumeFile: "",
    message: "",
  });
  const [modalText, setModalText] = useState({
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
    setModalText({ ...modalText, position: selectvalue.value });
  };
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    // console.log(text);
  };
  const handleModalChange = (e) => {
    setModalText({ ...modalText, [e.target.name]: e.target.value });
    // console.log(text);
  };
  const handleFile = (e) => {
    var file = e.target.files[0];
    // if(file.name.length>=25){
    //   let filename = file.name.slice(0, 12) + `...` + file.name.slice(-8);
    //   // inputRef.current.value = filename;
    //   setText({ ...text, resumeFile: filename });
    // }
    // console.log(file, text);
    setText({ ...text, resumeFile: file });
  };
  const handleModalFile = (e) => {
    var file = e.target.files[0];
    // if(file.name.length>=25){
    //   let filename = file.name.slice(0, 12) + `...` + file.name.slice(-8);
    //   // inputRef.current.value = filename;
    //   setText({ ...text, resumeFile: filename });
    // }
    // console.log(file, text);
    setModalText({ ...modalText, resumeFile: file });
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
      // console.log(text);
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

  const submitModalBtn = async (e) => {
    e.preventDefault();
    if (
      modalText.name.length === 0 ||
      modalText.email.length === 0 ||
      modalText.mobileNumber.length === 0 ||
      modalText.position.length === 0 ||
      modalText.resumeFile.length === 0 ||
      emailRegex.test(modalText.email) === false
    ) {
      setModalError(true);
      setModalSuccess(false);
    } else {
      var url = `${host}/api/careers/careers/`;
      let formData = new FormData();
      var respo = "";
      formData.append("name", modalText.name);
      formData.append("email", modalText.email);
      formData.append("mobileNumber", modalText.mobileNumber);
      formData.append("position", modalText.position);
      formData.append("resumeFile", modalText.resumeFile);
      formData.append("message", modalText.message);
      // console.log(text);
      setModalSuccess(true);
      setSelect("");
      // input field value empty
      setModalText({
        name: "",
        email: "",
        mobileNumber: "",
        position: "",
        resumeFile: "",
        message: "",
      });
      inputRef.current.value = null;
      setModalError(false);

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
                    careerData.map((item) => {
                      return (
                        <Col md={6} className="my-3" key={item.id}>
                          <CareerItem
                            jobDuration={item.jobDuration}
                            jobTitle={item.jobTitle}
                            jobDescription={item.jobDescription}
                            handleShow={handleShow}
                            id={item.id}
                          />
                        </Col>
                      );
                    })
                  )}
                </Row>
              </div>
            </Col>
            <Col xl={4} className="my-5">
              <CareerForm
                text={text}
                handleChange={handleChange}
                error={error}
                emailRegex={emailRegex}
                success={success}
                select={select}
                profileOptions={profileOptions}
                handleSelect={handleSelect}
                submitBtn={submitBtn}
                inputRef={inputRef}
                handleFile={handleFile}
                css="my-3"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        className="careers-forms"
        centered
      >
        <Modal.Body className="ps-0">
          <Button
            onClick={handleClose}
            className="close-btn position-absolute bg-white border-0 d-flex align-items-center justify-content-center rounded-circle"
          >
            x
          </Button>
          <CareerForm
            text={modalText}
            handleChange={handleModalChange}
            error={modalError}
            emailRegex={emailRegex}
            success={modalSuccess}
            // select={select}
            profileOptions={profileOptions}
            handleSelect={handleSelect}
            submitModalBtn={submitModalBtn}
            inputRef={inputRef}
            handleFile={handleModalFile}
            css="my-0 p-4"
            show={show}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Careers;
