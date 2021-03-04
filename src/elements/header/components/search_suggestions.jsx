import Proptypes from "prop-types";
import { React } from "react";
import {
  SuggestionsList,
  SuggestionsListItem,
} from "elements/header/components/search_bar/search_bar_styled_components";

/**
 * Hakupalkin hakuehdotukset.
 */
const SearchSuggestions = ({ onClick, onMouseOver, state }) => {
  const getActivityStatus = (suggestion) => {
    return state.activeSuggestionName === suggestion.name;
  };

  return (
    <SuggestionsList className="mx-auto px-4">
      {state.suggestions.map((suggestion) => (
        <SuggestionsListItem
          $activityStatus={getActivityStatus(suggestion)}
          onMouseOver={onMouseOver}
          onClick={onClick}
          key={suggestion.name}
        >
          {suggestion.name}
        </SuggestionsListItem>
      ))}
    </SuggestionsList>
  );
};

SearchSuggestions.propTypes = {
  /** Hakupalkin tilamuuttuja, joka sisältää hakuehdotusten tilamuuttujat. */
  state: Proptypes.shape({
    /** Hakuehdotukset sisältävä taulukko. Hakuehdotukset ovat olioissa, jotka sisältävät muuttujan
     * id, joka on hakuehdotuksen yksilöivä positiivinen kokonaisluku, sekä muuttujan name, joka on
     * hakuehdotuksen nimi (eli sen varsinainen sisältö). */
    suggestions: Proptypes.arrayOf(
      Proptypes.shape({ id: Proptypes.number, name: Proptypes.string })
    ),
    /** Tällä hetkellä valittuna olevan hakuehdotuksen nimi. */
    activeSuggestionName: Proptypes.string,
    /** Tällä hetkellä valittuna olevan hakuehdotuksen indeksi käyttäjälle näkyvissä
     * hakuehdotuksissa. */
    activeSuggestionIndex: Proptypes.number,
  }).isRequired,
  /** Takaisinkutsufunktio, jota kutsutaan käyttäjän klikatessa hakuehdotusta. Asettaa
   * hakuehdotuksen nimen hakupalkkiin */
  onClick: Proptypes.func.isRequired,
  /** Takaisinkutsufunktio, jota kutsutaan käyttäjän siirtäessä hiiren hakuehdotuksen päälle.
   * Muuttaa hakuehdotuksen aktiiviseksi. */
  onMouseOver: Proptypes.func.isRequired,
};

export default SearchSuggestions;
