import { React, useState, useEffect, useReducer } from "react";
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

import {
  ACTIONS,
  reducer,
  initialState,
} from "elements/header/components/search_bar/search_bar_reducer";

const SearchBar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const setSuggestionVisibility = () => {
      const suggestionsVisible = state.searchQuery.length >= NUMBER_OF_SUGGESTIONS;
      if (suggestionsVisible) {
        dispatch({ type: ACTIONS.SHOW_SUGGESTIONS });
      } else {
        dispatch({ type: ACTIONS.HIDE_SUGGESTIONS });
      }
    };

    const setSuggestions = () => {
      const filteredSearchResults = state.searchResults
        .filter((suggestion) =>
          suggestion.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
        .slice(1, NUMBER_OF_SUGGESTIONS + 1);

      dispatch({ type: ACTIONS.SET_SUGGESTIONS, payload: { suggestions: filteredSearchResults } });
    };

    setSuggestionVisibility();
    setSuggestions();
  }, [state.searchQuery, state.searchResults]);

  return (
    <Container>
      <Row className="w-100">
        <Col>
          <InputGroup className="mb-1">
            <SearchBox
              onKeyDown={(event) => onKeyDown(event, state, dispatch)}
              searchQuery={state.searchQuery}
              onSearchInputChanged={(event) =>
                onSearchInputChanged(event, state, dispatch, setErrorMessage)
              }
            />
            <InputGroup.Append>
              <SearchButton />
            </InputGroup.Append>
          </InputGroup>
          {state.suggestionsVisible ? (
            <SearchSuggestions
              onClick={(event) => onSearchSuggestionClick(event, dispatch)}
              onMouseOver={(event) => onMouseOver(event, state, dispatch)}
              state={state}
            />
          ) : null}
        </Col>
        <TextAlert>{errorMessage}</TextAlert>
      </Row>
    </Container>
  );
};

export default SearchBar;
