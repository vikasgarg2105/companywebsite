import React from "react";
import { Button } from "react-bootstrap";
import "../Normalbutton/NormalButton.scss";

const NormalButton = (props) => {
  return (
    <>
      <Button
      type={props.type}
        className={`normal-btn border-0 rounded-pill ${
          props.css ? props.css : ""
        }`}
      >
        {props.buttonTitle}
      </Button>
    </>
  );
};

export default NormalButton;
