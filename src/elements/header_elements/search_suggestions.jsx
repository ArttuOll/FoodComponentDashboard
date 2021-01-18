import Proptypes from "prop-types";
import { React, useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { SuggestionsList } from "./search_bar_styled_components";

const SearchSuggestions = (props) => {
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const { searchResults, searchQuery } = props;

  useEffect(() => {
    const filteredSearchResults = searchResults
      .filter((suggestion) => suggestion.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(1, 5);
    setSuggestions(filteredSearchResults);
  }, [searchResults, searchQuery]);

  return (
    <SuggestionsList className="mx-auto px-4">
      {suggestions.map((suggestion) => (
        <ListGroup.Item key={suggestion.name}>{suggestion.name}</ListGroup.Item>
      ))}
    </SuggestionsList>
  );
};

SearchSuggestions.propTypes = {
  searchResults: Proptypes.arrayOf(Proptypes.object).isRequired,
  searchQuery: Proptypes.string.isRequired,
};

export default SearchSuggestions;
