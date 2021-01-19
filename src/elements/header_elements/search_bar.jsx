import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "../utils/styled_texts";
import SearchSuggestions from "./search_suggestions";
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

  const onSearchSuggestionClick = (event) => {
    setSearchQuery(event.currentTarget.innerText);
  };

  return (
    <Container>
      <Row className="w-100">
        <Col>
          <InputGroup className="mb-1">
            <SearchBox searchQuery={searchQuery} onSearchInputChanged={onSearchInputChanged} />
            <InputGroup.Append>
              <SearchButton />
            </InputGroup.Append>
          </InputGroup>
          <SearchSuggestions
            onClick={onSearchSuggestionClick}
            searchQuery={searchQuery}
            searchResults={searchResults}
          />
        </Col>
        <TextAlert>{errorMessage}</TextAlert>
      </Row>
    </Container>
  );
};

export default SearchBar;
