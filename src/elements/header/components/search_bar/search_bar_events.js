import { fetchFoodNames } from "elements/utils/network_utils";
import { ACTIONS } from "elements/header/components/search_bar/search_bar_reducer";

const NUMBER_OF_SUGGESTIONS = 5;
const FETCHING_LIMIT = 4;
// TODO: uudelleennimeä: KEY => ARROW, KEY_ENTER => ENTER
const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;

const onMouseOver = (event, state, dispatch) => {
  const activeSuggestionName = event.target.innerText;
  dispatch({ type: ACTIONS.SET_ACTIVE_SUGGESTION, payload: { activeSuggestionName } });
};

const fetchingAllowed = (searchQuery, fetchingQuery) => {
  return searchQuery.length === FETCHING_LIMIT && searchQuery !== fetchingQuery;
};

const onSearchInputChanged = (event, state, dispatch, setErrorMessage) => {
  event.preventDefault();
  dispatch({ type: ACTIONS.SET_SEARCH_QUERY, payload: { searchQuery: event.target.value } });

  const { searchQuery, fetchingQuery } = state;
  if (fetchingAllowed(searchQuery, fetchingQuery)) {
    fetchFoodNames(searchQuery, dispatch, setErrorMessage);
    dispatch({ type: ACTIONS.SET_FETCHING_QUERY, payload: { fetchingQuery: searchQuery } });
  }
};

const onSearchSuggestionClick = (event, dispatch) => {
  const searchQuery = event.currentTarget.innerText;
  dispatch({ type: ACTIONS.SET_SEARCH_QUERY, payload: { searchQuery } });
};

const nextSuggestionNotOverLimit = (state) =>
  state.activeSuggestionIndex + 1 < NUMBER_OF_SUGGESTIONS;

const previousSuggestionNotUnderZero = (state) => state.activeSuggestionIndex - 1 >= 0;

const onKeyDown = (event, state, dispatch) => {
  switch (event.keyCode) {
    case KEY_DOWN:
      if (nextSuggestionNotOverLimit(state) && state.suggestionsVisible) {
        dispatch({ type: ACTIONS.NEXT_SUGGESTION });
      }
      break;
    case KEY_UP:
      if (previousSuggestionNotUnderZero(state) && state.suggestionsVisible) {
        dispatch({ type: ACTIONS.PREVIOUS_SUGGESTION });
      }
      break;
    case KEY_ENTER:
      dispatch({
        type: ACTIONS.SET_SEARCH_QUERY,
        payload: { searchQuery: state.suggestions[state.activeSuggestionIndex].name },
      });
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
