import { React, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./header_elements/search_bar";
import { Logo, NavigationLinks } from "./header_elements/decorations";
import { TextAlert } from "./utils/styled_texts";

const API_URL = process.env.REACT_APP_URL;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchFoodNames = async () => {
    try {
      const response = await fetch(`${API_URL}/?q=${searchQuery}`);
      const responseJson = await response.json();
      setSearchResults([...responseJson]);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(`Error fetching search suggestions: ${error}`);
    }
  };

  const onSearchInputChanged = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    if (searchQuery.length >= 4) {
      fetchFoodNames();
    }
  };

  return (
    <Navbar expand="md">
      <Logo />
      <SearchBar onSearchInputChanged={onSearchInputChanged} />
      <TextAlert>{errorMessage}</TextAlert>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavigationLinks />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
