import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "../../../utils/styled_texts";
import SearchSuggestions from "../search_suggestions";
import { SearchBox, SearchButton } from "./search_bar_styled_components";
import {
  onMouseOver,
  onSearchInputChanged,
  onSearchSuggestionClick,
  onKeyDown,
  NUMBER_OF_SUGGESTIONS,
} from "./search_bar_events";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [suggestionState, setSuggestionState] = useState({
    suggestions: [],
    activeIndex: -1,
    activeName: "",
    visible: false,
  });

  useEffect(() => {
    const setSuggestionVisibility = () => {
      const suggestionsVisible = searchQuery.length >= NUMBER_OF_SUGGESTIONS;
      setSuggestionState((currentState) => ({ ...currentState, visible: suggestionsVisible }));
    };

    const setSuggestions = () => {
      const filteredSearchResults = searchResults
        .filter((suggestion) => suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(1, NUMBER_OF_SUGGESTIONS + 1);
      setSuggestionState((currentState) => ({
        ...currentState,
        suggestions: filteredSearchResults,
      }));
    };

    setSuggestionVisibility();
    setSuggestions();
  }, [searchResults, searchQuery]);

  return (
    <Container>
      <Row className="w-100">
        <Col>
          <InputGroup className="mb-1">
            <SearchBox
              onKeyDown={(event) =>
                onKeyDown(event, suggestionState, setSuggestionState, setSearchQuery)
              }
              searchQuery={searchQuery}
              onSearchInputChanged={(event) =>
                onSearchInputChanged(
                  event,
                  searchQuery,
                  setSearchQuery,
                  setSearchResults,
                  setErrorMessage
                )
              }
            />
            <InputGroup.Append>
              <SearchButton />
            </InputGroup.Append>
          </InputGroup>
          {suggestionState.visible && (
            <SearchSuggestions
              onClick={(event) => onSearchSuggestionClick(event, setSearchQuery)}
              onMouseOver={(event) => onMouseOver(event, suggestionState, setSuggestionState)}
              searchQuery={searchQuery}
              searchResults={searchResults}
              suggestionState={suggestionState}
            />
          )}
        </Col>
        <TextAlert>{errorMessage}</TextAlert>
      </Row>
    </Container>
  );
};

export default SearchBar;
