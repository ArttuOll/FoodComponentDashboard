import fetchFoodNames from "../../../utils/network_utils";

const NUMBER_OF_SUGGESTIONS = 5;
const FETCHING_LIMIT = 4;
const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;

const onMouseOver = (event, suggestionState, setSuggestionState) => {
  const activeName = event.target.innerText;
  setSuggestionState((currentState) => ({ ...currentState, activeName }));
};

const onSearchInputChanged = (
  event,
  searchQuery,
  setSearchQuery,
  setSearchResults,
  setErrorMessage
) => {
  event.preventDefault();
  setSearchQuery(event.target.value);
  if (searchQuery.length >= FETCHING_LIMIT) {
    fetchFoodNames(searchQuery, setSearchResults, setErrorMessage);
  }
};

const onSearchSuggestionClick = (event, setSearchQuery) => {
  setSearchQuery(event.currentTarget.innerText);
};

const setNextActiveSuggestion = (suggestionState, setSuggestionState) => {
  const { suggestions, activeIndex } = suggestionState;
  const nextIndex = activeIndex + 1;
  setSuggestionState((currentState) => ({
    ...currentState,
    activeIndex: nextIndex,
    activeName: suggestions[nextIndex].name,
  }));
};

const setPreviousActiveSuggestion = (suggestionState, setSuggestionState) => {
  const { suggestions, activeIndex } = suggestionState;
  const previousIndex = activeIndex - 1;
  setSuggestionState((currentState) => ({
    ...currentState,
    activeIndex: previousIndex,
    activeName: suggestions[previousIndex].name,
  }));
};

const nextSuggestionNotOverLimit = (suggestionState) =>
  suggestionState.activeIndex + 1 < NUMBER_OF_SUGGESTIONS;

const previousSuggestionNotUnderZero = (suggestionState) => suggestionState.activeIndex - 1 >= 0;

const onKeyDown = (event, suggestionState, setSuggestionState, setSearchQuery) => {
  switch (event.keyCode) {
    case KEY_DOWN:
      if (nextSuggestionNotOverLimit(suggestionState)) {
        setNextActiveSuggestion(suggestionState, setSuggestionState);
      }
      break;
    case KEY_UP:
      if (previousSuggestionNotUnderZero(suggestionState)) {
        setPreviousActiveSuggestion(suggestionState, setSuggestionState);
      }
      break;
    case KEY_ENTER:
      setSearchQuery(suggestionState.suggestions[suggestionState.activeIndex].name);
      break;
    default:
      break;
  }
};

export {
  onMouseOver,
  onSearchInputChanged,
  onSearchSuggestionClick,
  onKeyDown,
  NUMBER_OF_SUGGESTIONS,
};
