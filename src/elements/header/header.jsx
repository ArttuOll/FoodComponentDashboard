import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Logo, NavigationLinks } from "elements/header/components/decorations";
import SearchBar from "elements/header/components/search_bar/search_bar";

const Header = () => {
  return (
    <Navbar expand="md">
      <Logo />
      <SearchBar />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavigationLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
