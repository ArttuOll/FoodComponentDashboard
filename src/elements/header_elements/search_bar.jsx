import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "../utils/styled_texts";
import SearchSuggestions from "./search_suggestions";
import { SearchBox, SearchButton } from "./search_bar_styled_components";

const NUMBER_OF_SUGGESTIONS = 5;
const FETCHING_LIMIT = 4;
const API_URL = process.env.REACT_APP_URL;
const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [activeSuggestionName, setActiveSuggestionName] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const filteredSearchResults = searchResults
      .filter((suggestion) => suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(1, NUMBER_OF_SUGGESTIONS + 1);
    setSuggestions(filteredSearchResults);
  }, [searchResults, searchQuery]);

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
    if (searchQuery.length >= FETCHING_LIMIT) {
      fetchFoodNames();
    }
  };

  const onSearchSuggestionClick = (event) => {
    setSearchQuery(event.currentTarget.innerText);
  };

  const onMouseOver = (event) => {
    setActiveSuggestionName(event.target.innerText);
  };

  const setNextActiveSuggestion = () => {
    setActiveSuggestionIndex((currentIndex) => currentIndex + 1);
    setActiveSuggestionName(suggestions[activeSuggestionIndex + 1].name);
  };

  const setPreviousActiveSuggestion = () => {
    setActiveSuggestionIndex((currentIndex) => currentIndex - 1);
    setActiveSuggestionName(suggestions[activeSuggestionIndex - 1].name);
  };

  const nextSuggestionNotOverLimit = () => activeSuggestionIndex + 1 < NUMBER_OF_SUGGESTIONS;
  const previousSuggestionNotUnderZero = () => activeSuggestionIndex - 1 >= 0;

  const onKeyDown = (event) => {
    switch (event.keyCode) {
      case KEY_DOWN:
        if (nextSuggestionNotOverLimit()) setNextActiveSuggestion();
        break;
      case KEY_UP:
        if (previousSuggestionNotUnderZero()) setPreviousActiveSuggestion();
        break;
      case KEY_ENTER:
        setSearchQuery(suggestions[activeSuggestionIndex].name);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Row className="w-100">
        <Col>
          <InputGroup className="mb-1">
            <SearchBox
              onKeyDown={onKeyDown}
              searchQuery={searchQuery}
              onSearchInputChanged={onSearchInputChanged}
            />
            <InputGroup.Append>
              <SearchButton />
            </InputGroup.Append>
          </InputGroup>
          <SearchSuggestions
            onClick={onSearchSuggestionClick}
            onMouseOver={onMouseOver}
            searchQuery={searchQuery}
            searchResults={searchResults}
            activeSuggestionName={activeSuggestionName}
            suggestions={suggestions}
          />
        </Col>
        <TextAlert>{errorMessage}</TextAlert>
      </Row>
    </Container>
  );
};

export default SearchBar;
