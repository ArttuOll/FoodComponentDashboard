import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./header_elements/search_bar";
import { Logo, NavigationLinks } from "./header_elements/decorations";

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

export default Header;
