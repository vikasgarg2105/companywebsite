import React from "react";
import "../Team/Team.scss";
import TeamImg from "../../images/team.png";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin.svg";

const TeamItem = () => {
  return (
    <div className="team-item my-5 p-3 bg-white">
      <div className="team-img position-relative">
        <img src={TeamImg} alt="" className="img-fluid" />
        <ul className="social-icons position-absolute mb-0 w-100 ps-0 d-flex align-items-center justify-content-center">
          <a href="#" className="mx-2">
            <li className="d-flex justify-content-center align-items-center">
              <img src={Facebook} alt="" />
            </li>
          </a>
          <a href="#" className="mx-2">
            <li className="d-flex justify-content-center align-items-center">
              <img src={Twitter} alt="" />
            </li>
          </a>
          <a href="#" className="mx-2">
            <li className="d-flex justify-content-center align-items-center">
              <img src={Instagram} alt="" />
            </li>
          </a>
          <a href="#" className="mx-2">
            <li className="d-flex justify-content-center align-items-center">
              <img src={Linkedin} alt="" />
            </li>
          </a>
        </ul>
      </div>
      <div className="team-content text-center py-3">
        <h5>Archit Chaudhary</h5>
        <div className="team-expertise">Director/AI Expert</div>
      </div>
    </div>
  );
};

export default TeamItem;
