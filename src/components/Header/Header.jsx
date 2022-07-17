import React, { useState } from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";
import "../Header/Header.scss";
import logoWhite from "../../images/logo.svg";
import logoBlack from "../../images/logo-black.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let expand = "xl";
  const [colorChange, setColorchange] = useState(false);
  const [logo, setLogo] = useState(logoWhite);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
      setLogo(logoBlack);
    } else {
      setColorchange(false);
      setLogo(logoWhite);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Navbar
        expand={expand}
        className={colorChange ? "scroll" : ""}
        fixed="top"
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" className="img-fluid" />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to="/" className="mx-2 nav-link">
                  Home
                </NavLink>
                <NavLink to="/about" className="mx-2 nav-link">
                  About
                </NavLink>
                <NavLink to="/Services" className="mx-2 nav-link">
                  Services
                </NavLink>
                <NavLink to="/ourworks" className="mx-2 nav-link">
                  Our Works
                </NavLink>
                <NavLink to="/careers" className="mx-2 nav-link">
                  Careers
                </NavLink>
                <NavLink to="/contactus" className="ms-2 nav-link">
                  Contact Us
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
