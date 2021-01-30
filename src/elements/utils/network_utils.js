import { ACTIONS } from "elements/header/components/search_bar/search_bar_reducer";

const API_URL = process.env.REACT_APP_URL;

const fetchFoodNames = async (searchQuery, dispatch, setErrorMessage) => {
  try {
    const response = await fetch(`${API_URL}/?q=${searchQuery}`);
    const responseJson = await response.json();
    const searchResults = responseJson.result;
    dispatch({ type: ACTIONS.SET_SEARCH_RESULTS, payload: { searchResults } });
    setErrorMessage("");
  } catch (error) {
    setErrorMessage(`Error fetching search suggestions: ${error}`);
  }
};

export default fetchFoodNames;
