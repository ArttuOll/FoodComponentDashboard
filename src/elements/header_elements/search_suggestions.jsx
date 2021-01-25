import Proptypes from "prop-types";
import { React } from "react";
import { SuggestionsList, SuggestionsListItem } from "./search_bar_styled_components";

const SearchSuggestions = (props) => {
  const { onClick, onMouseOver, suggestionState } = props;

  const getActivityStatus = (suggestion) => {
    return suggestionState.activeName === suggestion.name;
  };

  return (
    <SuggestionsList className="mx-auto px-4">
      {suggestionState.suggestions.map((suggestion) => (
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
  suggestionState: Proptypes.shape({
    suggestions: Proptypes.arrayOf(
      Proptypes.shape({ id: Proptypes.number, name: Proptypes.string })
    ),
    activeName: Proptypes.string,
    activeIndex: Proptypes.number,
  }).isRequired,
  onClick: Proptypes.func.isRequired,
  onMouseOver: Proptypes.func.isRequired,
};

export default SearchSuggestions;
