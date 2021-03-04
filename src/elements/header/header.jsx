import Proptypes from "prop-types";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Logo, NavigationLinks } from "elements/header/components/decorations";
import SearchBar from "elements/header/components/search_bar/search_bar";

/**
 * Sovelluksen yläpalkki.
 *
 * Sisältää sovelluksen logon, hakupalkin ja -painikkeen sekä GitHub-linkin.
 */
const Header = ({ foodDataCallback, foodNameCallback }) => {
  return (
    <Navbar expand="md">
      <Logo />
      <SearchBar foodDataCallback={foodDataCallback} foodNameCallback={foodNameCallback} />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavigationLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  /** Takaisinkutsufunktio, joka asettaa ruoan komponenttidatan sovelluksen ylätason eli
   * App-komponentin tilamuuttujaan */
  foodDataCallback: Proptypes.func.isRequired,
  /** Takaisinkutsufunktio, joka asettaa ruoan nimen sovelluksen ylätason eli
   * App-komponentin tilamuuttujaan */
  foodNameCallback: Proptypes.func.isRequired,
};

export default Header;
