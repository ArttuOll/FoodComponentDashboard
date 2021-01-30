import Proptypes from "prop-types";
import { React } from "react";
import {
  SuggestionsList,
  SuggestionsListItem,
} from "elements/header/components/search_bar/search_bar_styled_components";

const SearchSuggestions = ({ onClick, onMouseOver, state }) => {
  const getActivityStatus = (suggestion) => {
    return state.activeSuggestionName === suggestion.name;
  };

  return (
    <SuggestionsList className="mx-auto px-4">
      {state.suggestions.map((suggestion) => (
        <SuggestionsListItem
          $activityStatus={getActivityStatus(suggestion)}
          onMouseOver={onMouseOver}
          onClick={onClick}
          key={suggestion.name}
        >
          {suggestion.name}
        </SuggestionsListItem>
      ))}
    </SuggestionsList>
  );
};

SearchSuggestions.propTypes = {
  state: Proptypes.shape({
    suggestions: Proptypes.arrayOf(
      Proptypes.shape({ id: Proptypes.number, name: Proptypes.string })
    ),
    activeSuggestionName: Proptypes.string,
    activeSuggestionIndex: Proptypes.number,
  }).isRequired,
  onClick: Proptypes.func.isRequired,
  onMouseOver: Proptypes.func.isRequired,
};

export default SearchSuggestions;
