import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import logo from "../images/logo.png";

const Header = () => (
  <Navbar expand="md">
    <Logo />
    <SearchBar />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <NavigationLinks />
    </Navbar.Collapse>
  </Navbar>
);

const Logo = () => (
  <Navbar.Brand href="#home">
    <Image src={logo} fluid />
  </Navbar.Brand>
);

const SearchBar = () => {
  const StyledButton = styled(Button)`
    background-color: #65ba41;
    border: 0 none;
  `;
  return (
    <Container>
      <InputGroup className="mb-1">
        <FormControl type="text" placeholder="Search for a food..." />
        <InputGroup.Append>
          <StyledButton>
            <FontAwesomeIcon icon={faSearch} />
          </StyledButton>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

const NavigationLinks = () => (
  <Nav className="ml-auto">
    <Nav.Link href="#link1">Link1</Nav.Link>
    <Nav.Link href="#link2">Link2</Nav.Link>
  </Nav>
);

export default Header;
