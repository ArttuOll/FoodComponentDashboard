import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../images/logo.png";

const Logo = () => (
  <Navbar.Brand>
    <Image src={logo} fluid />
  </Navbar.Brand>
);

const NavigationLinks = () => (
  <Nav className="ml-auto">
    <Nav.Link href={process.env.REACT_APP_REPO_URL}>GitHub</Nav.Link>
  </Nav>
);

export { Logo, NavigationLinks };
