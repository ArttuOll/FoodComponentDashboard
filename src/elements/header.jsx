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

const StyledButton = styled(Button)`
  :hover {
    background-color: #4ba227;
  }
  :focus {
    background-color: #4ba227;
  }
  :active {
    background-color: #277406 !important;
  }
  background-color: #65ba41;
  border: 0 none;
  box-shadow: none;
`;

const SearchBox = styled(FormControl)`
  :focus {
    border-color: #277406;
  }
  border-color: #65ba41;
`;

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
  <Navbar.Brand>
    <Image src={logo} fluid />
  </Navbar.Brand>
);

const SearchBar = () => {
  return (
    <Container>
      <InputGroup className="mb-1">
        <SearchBox className="shadow-none" type="text" placeholder="Search for a food..." />
        <InputGroup.Append>
          <StyledButton className="shadow-none">
            <FontAwesomeIcon icon={faSearch} />
          </StyledButton>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

const NavigationLinks = () => (
  <Nav className="ml-auto">
    <Nav.Link href="https://github.com/ArttuOll/FoodComponentDashboard">GitHub</Nav.Link>
  </Nav>
);

export default Header;
