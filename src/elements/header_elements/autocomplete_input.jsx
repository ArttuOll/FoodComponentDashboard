import Proptypes from "prop-types";
import { React, useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const AutocompleteInput = (props) => {
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const { searchResults, searchQuery } = props;

  useEffect(() => {
    const filteredSearchResults = searchResults.filter((suggestion) =>
      suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestions(filteredSearchResults);
    setShowSuggestions(true);
  }, [searchResults, searchQuery]);

  return (
    <ListGroup>
      {suggestions.map((suggestion) => (
        <ListGroup.Item>{suggestion}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

AutocompleteInput.propTypes = {
  searchResults: Proptypes.arrayOf(Proptypes.object).isRequired,
  searchQuery: Proptypes.string.isRequired,
};

export default AutocompleteInput;
