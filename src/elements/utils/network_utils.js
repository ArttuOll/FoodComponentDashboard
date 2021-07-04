import { ACTIONS } from "elements/header/components/search_bar/search_bar_reducer";
import { curry } from "rambda";

const API_URL = process.env.REACT_APP_URL;

const makeGetRequest = async (url, resultCallback, errorCallback) => {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const searchResults = responseJson.result;
    resultCallback(searchResults);
    errorCallback("");
  } catch (error) {
    errorCallback(`Error fetching search suggestions: ${error}`);
  }
};

const curriedMakeGetRequest = curry(makeGetRequest);

const fetchFoodNames = async (searchQuery, dispatch, setErrorMessage) => {
  const url = `${API_URL}/?q=${searchQuery}`;
  const resultCallback = (searchResults) => {
    dispatch({ type: ACTIONS.SET_SEARCH_RESULTS, payload: { searchResults } });
  };

  curriedMakeGetRequest(url)(resultCallback)(setErrorMessage);
};

const fetchFoodCompositionData = async (foodId, foodDataCallback, setErrorMessage) => {
  const url = `${API_URL}/${foodId}`;
  const resultCallback = foodDataCallback;
  makeGetRequest(url, resultCallback, setErrorMessage);
};

export { fetchFoodNames, fetchFoodCompositionData };
