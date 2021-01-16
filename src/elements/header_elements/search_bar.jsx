import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "../utils/styled_texts";
import AutocompleteInput from "./autocomplete_input";
import { SearchBox, SearchButton } from "./search_bar_styled_components";

const API_URL = process.env.REACT_APP_URL;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchFoodNames = async () => {
    try {
      const response = await fetch(`${API_URL}/?q=${searchQuery}`);
      const responseJson = await response.json();
      setSearchResults(responseJson.result);
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
    <Container>
      <InputGroup className="mb-1">
        <SearchBox onSearchInputChanged={onSearchInputChanged}>
          <AutocompleteInput searchQuery={searchQuery} searchResults={searchResults} />
        </SearchBox>
        <InputGroup.Append>
          <SearchButton />
        </InputGroup.Append>
      </InputGroup>
      <TextAlert>{errorMessage}</TextAlert>
    </Container>
  );
};

export default SearchBar;
