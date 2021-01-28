import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "elements/utils/styled_texts";
import SearchSuggestions from "elements/header/components/search_suggestions";
import {
  SearchBox,
  SearchButton,
} from "elements/header/components/search_bar/search_bar_styled_components";
import {
  onMouseOver,
  onSearchInputChanged,
  onSearchSuggestionClick,
  onKeyDown,
  NUMBER_OF_SUGGESTIONS,
} from "elements/header/components/search_bar/search_bar_events";

const SearchBar = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchState, setSearchState] = useState({
    searchQuery: "",
    fetchedQuery: "",
    searchResults: [],
  });
  const [suggestionState, setSuggestionState] = useState({
    suggestions: [],
    activeIndex: -1,
    activeName: "",
    visible: false,
  });

  useEffect(() => {
    const setSuggestionVisibility = () => {
      const suggestionsVisible = searchState.searchQuery.length >= NUMBER_OF_SUGGESTIONS;
      setSuggestionState((currentState) => ({ ...currentState, visible: suggestionsVisible }));
    };

    const setSuggestions = () => {
      const filteredSearchResults = searchState.searchResults
        .filter((suggestion) =>
          suggestion.name.toLowerCase().includes(searchState.searchQuery.toLowerCase())
        )
        .slice(1, NUMBER_OF_SUGGESTIONS + 1);

      setSuggestionState((currentState) => ({
        ...currentState,
        suggestions: filteredSearchResults,
      }));
    };

    setSuggestionVisibility();
    setSuggestions();
  }, [searchState]);

  return (
    <Container>
      <Row className="w-100">
        <Col>
          <InputGroup className="mb-1">
            <SearchBox
              onKeyDown={(event) =>
                onKeyDown(event, suggestionState, setSuggestionState, searchState, setSearchState)
              }
              searchQuery={searchState.searchQuery}
              onSearchInputChanged={(event) =>
                onSearchInputChanged(event, searchState, setSearchState, setErrorMessage)
              }
            />
            <InputGroup.Append>
              <SearchButton />
            </InputGroup.Append>
          </InputGroup>
          {suggestionState.visible ? (
            <SearchSuggestions
              onClick={(event) => onSearchSuggestionClick(event, setSearchState)}
              onMouseOver={(event) => onMouseOver(event, suggestionState, setSuggestionState)}
              searchQuery={searchState.searchQuery}
              searchResults={searchState.searchResults}
              suggestionState={suggestionState}
            />
          ) : null}
        </Col>
        <TextAlert>{errorMessage}</TextAlert>
      </Row>
    </Container>
  );
};

export default SearchBar;
