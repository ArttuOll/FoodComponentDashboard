const ACTIONS = {
  SHOW_SUGGESTIONS: "showSuggestions",
  HIDE_SUGGESTIONS: "hideSuggestions",
  SET_SUGGESTIONS: "setSuggestions",
  NEXT_SUGGESTION: "nextSuggestion",
  PREVIOUS_SUGGESTION: "previousSuggestion",
  SET_SEARCH_QUERY: "setSearchQuery",
  SET_FETCHING_QUERY: "setFetchingQuery",
  SET_SEARCH_RESULTS: "setSearchResults",
  SET_ACTIVE_SUGGESTION: "setActiveSuggestion",
};

const initialState = {
  searchQuery: "",
  fetchedQuery: "",
  searchResults: [],
  suggestions: [],
  activeSuggestionIndex: -1,
  activeSuggestionName: "",
  suggestionsVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_SUGGESTIONS:
      return { ...state, suggestionsVisible: true };
    case ACTIONS.HIDE_SUGGESTIONS:
      return { ...state, suggestionsVisible: false };
    case ACTIONS.SET_SUGGESTIONS:
      return { ...state, suggestions: action.payload.suggestions };
    case ACTIONS.NEXT_SUGGESTION:
      return {
        ...state,
        activeSuggestionIndex: state.activeSuggestionIndex + 1,
        activeSuggestionName: state.suggestions[state.activeSuggestionIndex + 1].name,
      };
    case ACTIONS.PREVIOUS_SUGGESTION:
      return {
        ...state,
        activeSuggestionIndex: state.activeSuggestionIndex - 1,
        activeSuggestionName: state.suggestions[state.activeSuggestionIndex - 1].name,
      };
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };
    case ACTIONS.SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload.searchResults };
    case ACTIONS.SET_FETCHING_QUERY:
      return { ...state, fetchingQuery: action.payload.fetchingQuery };
    case ACTIONS.SET_ACTIVE_SUGGESTION:
      return { ...state, activeSuggestionName: action.payload.activeSuggestionName };
    default:
      return state;
  }
};

export { ACTIONS, reducer, initialState };
