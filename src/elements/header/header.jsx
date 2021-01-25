import React from "react";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./components/search_bar/search_bar";
import { Logo, NavigationLinks } from "./components/decorations";

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
