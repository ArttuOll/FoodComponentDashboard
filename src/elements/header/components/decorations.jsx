import React from "react";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import logo from "images/logo.png";

const Logo = () => (
  <Navbar.Brand>
    <Image src={logo} alt="Food Component Dashboard" fluid />
  </Navbar.Brand>
);

const NavigationLinks = () => (
  <Nav className="ml-auto">
    <ScaledDownH1>
      <Nav.Link href={process.env.REACT_APP_REPO_URL} style={{ fontSize: "0rem" }}>
        GitHub
      </Nav.Link>
    </ScaledDownH1>
  </Nav>
);

const ScaledDownH1 = styled.h1`
  font-size: "100px";
`;

export { Logo, NavigationLinks };
