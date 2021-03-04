import { React } from "react";
import Proptypes from "prop-types";
import { StyledSearchButton } from "elements/header/components/search_bar/search_bar_styled_components";
import { fetchFoodCompositionData } from "elements/utils/network_utils";

/**
 * Hakupalkin painike. Laukaisee ruoan komponenttien hakemisen palvelimelta hakukenttään syötetyn
 * ruoan nimen perusteella.
 */
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
  /** Takaisinkutsufunktio, jonka avulla selvitetään sen ruoan id, jonka nimi on kirjoitettu
   * hakupalkkiin */
  foodIdLookupCallback: Proptypes.func.isRequired,
  /** Takaisinkutsufunktio, jonka avulla haettu ruoan komponenttidata asetetaan App-komponentin
   * tilamuuttujaan ja välitetään sovelluksen rungolle */
  foodDataCallback: Proptypes.func.isRequired,
  /** Takaisinkutsufunktio, jonka avulla API-kutsun yhteydessä havaittu virhe voidaan välittää
   * takaisin SearchBar-komponentille. */
  errorCallback: Proptypes.func.isRequired,
  /** Takaisinkutsufunktio, joka asettaa ruoan nimen rungon otsakkeeksi */
  setFoodNameToBodyHeader: Proptypes.func.isRequired,
};

export default SearchButton;
