const API_URL = process.env.REACT_APP_URL;

const fetchFoodNames = async (searchQuery, setSearchResults, setErrorMessage) => {
  try {
    const response = await fetch(`${API_URL}/?q=${searchQuery}`);
    const responseJson = await response.json();
    setSearchResults(responseJson.result);
    setErrorMessage("");
  } catch (error) {
    setErrorMessage(`Error fetching search suggestions: ${error}`);
  }
};

export default fetchFoodNames;
