import { React } from "react";
import Proptypes from "prop-types";
import { StyledSearchButton } from "elements/header/components/search_bar/search_bar_styled_components";
import { fetchFoodCompositionData } from "elements/utils/network_utils";

const SearchButton = ({
  foodIdLookupCallback,
  foodDataCallback,
  errorCallback,
  setFoodNameToBodyHeader,
}) => {
  const onSearchButtonClick = () => {
    const foodId = foodIdLookupCallback();
    if (foodId) fetchFoodCompositionData(foodId, foodDataCallback, errorCallback);
    setFoodNameToBodyHeader();
  };

  return <StyledSearchButton onSearchButtonClick={onSearchButtonClick} />;
};

SearchButton.propTypes = {
  foodIdLookupCallback: Proptypes.func.isRequired,
  foodDataCallback: Proptypes.func.isRequired,
  errorCallback: Proptypes.func.isRequired,
  setFoodNameToBodyHeader: Proptypes.func.isRequired,
};

export default SearchButton;
