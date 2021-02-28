const ACTIONS = {
  SHOW_SUGGESTIONS: "showSuggestions",
  HIDE_SUGGESTIONS: "hideSuggestions",
  SET_SUGGESTIONS: "setSuggestions",
  NEXT_SUGGESTION: "nextSuggestion",
  PREVIOUS_SUGGESTION: "previousSuggestion",
  SET_SEARCH_QUERY: "setSearchQuery",
  SELECT_SUGGESTION: "selectSuggestion",
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

/**
 * Funktio, joka suorittaa annettua parametria `action` vastaavan muutoksen parametriin `state`,
 * joka on sovelluksen hakupalkin tila. Jos tilan muutokseen liittyy datan asettamista johonkin
 * `state`n muuttujista, voidaan asetettava data liittää `action` muuttujan oliomuuttujaan
 * `payload`. Palautettava arvo on olio, joka kuvaa hakupalkin päivitettyä tilaa.
 */
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
    // Tallentaa käyttäjän syötteen tilan muuttujaan käyttäjän syöttäessä tekstiä hakukenttään.
    case ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };
    // Laukeaa, kun käyttäjä valitsee hakuehdotuksen joko klikkaamalla tai painamalle enteriä.
    case ACTIONS.SELECT_SUGGESTION:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
        activeSuggestionIndex: -1,
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
