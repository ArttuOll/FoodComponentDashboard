import { fetchFoodNames } from "elements/utils/network_utils";
import { ACTIONS } from "elements/header/components/search_bar/search_bar_reducer";

const NUMBER_OF_SUGGESTIONS = 5;
const NUMBER_OF_CHARS_BEFORE_FETCHING = 3;
const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;

const onMouseOver = (event, state, dispatch) => {
  const activeSuggestionName = event.target.innerText;
  dispatch({ type: ACTIONS.SET_ACTIVE_SUGGESTION, payload: { activeSuggestionName } });
};

const setSuggestionVisibility = (state, dispatch) => {
  const suggestionsVisible = state.searchQuery.length > NUMBER_OF_CHARS_BEFORE_FETCHING;
  if (suggestionsVisible) {
    dispatch({ type: ACTIONS.SHOW_SUGGESTIONS });
  } else {
    dispatch({ type: ACTIONS.HIDE_SUGGESTIONS });
  }
};

const fetchingAllowed = (searchQuery, fetchingQuery) => {
  return searchQuery.length === NUMBER_OF_CHARS_BEFORE_FETCHING && searchQuery !== fetchingQuery;
};

const onSearchInputChanged = (event, state, dispatch, setErrorMessage) => {
  event.preventDefault();
  dispatch({ type: ACTIONS.SET_SEARCH_QUERY, payload: { searchQuery: event.target.value } });

  const { searchQuery, fetchingQuery } = state;
  if (fetchingAllowed(searchQuery, fetchingQuery)) {
    fetchFoodNames(searchQuery, dispatch, setErrorMessage);
    dispatch({ type: ACTIONS.SET_FETCHING_QUERY, payload: { fetchingQuery: searchQuery } });
  }

  setSuggestionVisibility(state, dispatch);
};

const onSearchSuggestionClick = (event, dispatch) => {
  const searchQuery = event.currentTarget.innerText;
  dispatch({ type: ACTIONS.SELECT_SUGGESTION, payload: { searchQuery } });
};

const previousSuggestionIndexNotUnderZero = (state) => state.activeSuggestionIndex - 1 >= 0;

const userHasActivatedASuggestion = (state) =>
  state.activeSuggestionIndex > -1 && state.suggestionsVisible;

const nextSuggestionIndexNotOverflowing = (state) =>
  state.activeSuggestionIndex + 1 < NUMBER_OF_SUGGESTIONS;

const arrowDownAllowed = (state) =>
  state.suggestions.length > 0 &&
  nextSuggestionIndexNotOverflowing(state) &&
  state.suggestionsVisible;

const arrowUpAllowed = (state) =>
  previousSuggestionIndexNotUnderZero(state) && state.suggestionsVisible;

const onKeyDown = (event, state, dispatch) => {
  switch (event.keyCode) {
    case ARROW_DOWN:
      if (arrowDownAllowed(state)) {
        dispatch({ type: ACTIONS.NEXT_SUGGESTION });
      }
      break;
    case ARROW_UP:
      if (arrowUpAllowed(state)) {
        dispatch({ type: ACTIONS.PREVIOUS_SUGGESTION });
      }
      break;
    case ENTER:
      if (userHasActivatedASuggestion(state)) {
        dispatch({
          type: ACTIONS.SELECT_SUGGESTION,
          payload: {
            searchQuery: state.suggestions[state.activeSuggestionIndex].name,
          },
        });
        dispatch({ type: ACTIONS.HIDE_SUGGESTIONS });
      }
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
  NUMBER_OF_CHARS_BEFORE_FETCHING,
};
