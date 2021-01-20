import Proptypes from "prop-types";
import { React } from "react";
import { ListGroup } from "react-bootstrap";
import { SuggestionsList } from "./search_bar_styled_components";

const SearchSuggestions = (props) => {
  const { suggestions, onClick, onMouseOver, activeSuggestionName } = props;

  const getActivityStatus = (suggestion) => {
    return activeSuggestionName === suggestion.name ? "active" : "";
  };

  return (
    <SuggestionsList className="mx-auto px-4">
      {suggestions.map((suggestion) => (
        <ListGroup.Item
          className={getActivityStatus(suggestion)}
          onMouseOver={onMouseOver}
          onClick={onClick}
          key={suggestion.name}
        >
          {suggestion.name}
        </ListGroup.Item>
      ))}
    </SuggestionsList>
  );
};

SearchSuggestions.propTypes = {
  suggestions: Proptypes.arrayOf(Proptypes.object).isRequired,
  onClick: Proptypes.func.isRequired,
  onMouseOver: Proptypes.func.isRequired,
  activeSuggestionName: Proptypes.string.isRequired,
};

export default SearchSuggestions;
