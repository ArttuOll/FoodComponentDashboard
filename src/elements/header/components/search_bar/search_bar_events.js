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

const onSearchInputChanged = (event, searchState, setSearchState, setErrorMessage) => {
  event.preventDefault();
  setSearchState((currentState) => ({ ...currentState, searchQuery: event.target.value }));

  const { searchQuery, fetchingQuery } = searchState;
  if (searchQuery.length === FETCHING_LIMIT && searchQuery !== fetchingQuery) {
    fetchFoodNames(searchQuery, setSearchState, setErrorMessage);
    setSearchState((currentState) => ({ ...currentState, fetchingQuery: searchQuery }));
  }
};

const onSearchSuggestionClick = (event, setSearchState) => {
  const searchQuery = event.currentTarget.innerText;
  setSearchState((currentState) => ({ ...currentState, searchQuery }));
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

const onKeyDown = (event, suggestionState, setSuggestionState, searchState, setSearchState) => {
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
      setSearchState((currentState) => ({
        ...currentState,
        searchQuery: suggestionState.suggestions[suggestionState.activeIndex].name,
      }));
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
