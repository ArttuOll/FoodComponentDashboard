const API_URL = process.env.REACT_APP_URL;

const fetchFoodNames = async (searchQuery, setSearchState, setErrorMessage) => {
  try {
    const response = await fetch(`${API_URL}/?q=${searchQuery}`);
    const responseJson = await response.json();
    setSearchState((currentState) => ({ ...currentState, searchResults: responseJson.result }));
    setErrorMessage("");
  } catch (error) {
    setErrorMessage(`Error fetching search suggestions: ${error}`);
  }
};

export default fetchFoodNames;
