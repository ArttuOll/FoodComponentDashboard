import { fetchFoodNames } from "elements/utils/network_utils";
import { ACTIONS } from "elements/header/components/search_bar/search_bar_reducer";
import { path } from "rambda";

const NUMBER_OF_SUGGESTIONS = 5;
const NUMBER_OF_CHARS_BEFORE_FETCHING = 3;
const ARROW_DOWN = 40;
const ARROW_UP = 38;
const ENTER = 13;

function getEventInnerText() {
  return path(["target", "innerText"]);
}

function onMouseOver(event, state, dispatch) {
  const activeSuggestionName = getEventInnerText(event);
  dispatch({ type: ACTIONS.SET_ACTIVE_SUGGESTION, payload: { activeSuggestionName } });
}

function setSuggestionVisibility(state, dispatch) {
  const suggestionsVisible = state.searchQuery.length > NUMBER_OF_CHARS_BEFORE_FETCHING;
  if (suggestionsVisible) {
    dispatch({ type: ACTIONS.SHOW_SUGGESTIONS });
  } else {
    dispatch({ type: ACTIONS.HIDE_SUGGESTIONS });
  }
}

function fetchingAllowed(searchQuery, fetchingQuery) {
  return searchQuery.length === NUMBER_OF_CHARS_BEFORE_FETCHING && searchQuery !== fetchingQuery;
}

function onSearchInputChanged(event, state, dispatch, setErrorMessage) {
  event.preventDefault();
  dispatch({ type: ACTIONS.SET_SEARCH_QUERY, payload: { searchQuery: event.target.value } });

  const { searchQuery, fetchingQuery } = state;
  if (fetchingAllowed(searchQuery, fetchingQuery)) {
    fetchFoodNames(searchQuery, dispatch, setErrorMessage);
    dispatch({ type: ACTIONS.SET_FETCHING_QUERY, payload: { fetchingQuery: searchQuery } });
  }

  setSuggestionVisibility(state, dispatch);
}

function onSearchSuggestionClick(event, dispatch) {
  const searchQuery = event.currentTarget.innerText;
  dispatch({ type: ACTIONS.SELECT_SUGGESTION, payload: { searchQuery } });
}

function previousSuggestionIndexNotUnderZero(state) {
  return state.activeSuggestionIndex - 1 >= 0;
}

function userHasActivatedASuggestion(state) {
  return state.activeSuggestionIndex > -1 && state.suggestionsVisible;
}

function nextSuggestionIndexNotOverflowing(state) {
  return state.activeSuggestionIndex + 1 < NUMBER_OF_SUGGESTIONS;
}

function arrowDownAllowed(state) {
  return (
    state.suggestions.length > 0 &&
    nextSuggestionIndexNotOverflowing(state) &&
    state.suggestionsVisible
  );
}

function arrowUpAllowed(state) {
  return previousSuggestionIndexNotUnderZero(state) && state.suggestionsVisible;
}

function onKeyDown(event, state, dispatch) {
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
}

export {
  onMouseOver,
  onSearchInputChanged,
  onSearchSuggestionClick,
  onKeyDown,
  NUMBER_OF_SUGGESTIONS,
  NUMBER_OF_CHARS_BEFORE_FETCHING,
};
