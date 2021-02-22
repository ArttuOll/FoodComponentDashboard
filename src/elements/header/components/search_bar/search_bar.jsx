import { React, useState, useEffect, useReducer } from "react";
import Proptypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { TextAlert } from "elements/utils/styled_texts";
import SearchSuggestions from "elements/header/components/search_suggestions";
import { SearchBox } from "elements/header/components/search_bar/search_bar_styled_components";
import SearchButton from "elements/header/components/search_bar/search_button";

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

const SearchBar = ({ foodDataCallback, foodNameCallback }) => {
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

  const foodIdLookupCallback = () => {
    return state.searchResults.find((food) => food.name === state.searchQuery).food_id;
  };

  const setFoodNameToBodyHeader = () => {
    foodNameCallback(state.searchQuery);
  };

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
              <SearchButton
                foodIdLookupCallback={foodIdLookupCallback}
                foodDataCallback={foodDataCallback}
                errorCallback={setErrorMessage}
                setFoodNameToBodyHeader={setFoodNameToBodyHeader}
              />
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

SearchBar.propTypes = {
  foodDataCallback: Proptypes.func.isRequired,
  foodNameCallback: Proptypes.func.isRequired,
};

export default SearchBar;
