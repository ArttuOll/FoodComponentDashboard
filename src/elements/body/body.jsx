import React from "react";
import PropTypes from "prop-types";
import { FoodLabel } from "elements/utils/styled_texts";
import { generateComponentRow } from "elements/body/components/component_card_row";

function filterFoodDataByComponentClass(foodData, componentClass) {
  return foodData.filter((food) => food.component_class === `${componentClass}`);
}

/**
 * Sovelluksen runko-osa. Sisältää ruoan nimen, ravintoainekomponettien kortit sekä korttien
 * otsakkeen.
 */
const Body = ({ foodData, foodName }) => {
  const macroComponentData = filterFoodDataByComponentClass(foodData, "MACROCMP");
  const MacroComponentsRow = generateComponentRow("Energiaravintoaineet", macroComponentData);

  const vitaminData = filterFoodDataByComponentClass(foodData, "VITAM");
  const VitaminsRow = generateComponentRow("Vitamiinit", vitaminData);

  const mineralData = filterFoodDataByComponentClass(foodData, "MINERAL");
  const MineralRow = generateComponentRow("Mineraalit", mineralData);

  const fatData = filterFoodDataByComponentClass(foodData, "FAT");
  const FatRow = generateComponentRow("Rasvat", fatData);

  const carbComponentData = filterFoodDataByComponentClass(foodData, "CARBOCMP");
  const CarbComponentRow = generateComponentRow("Hiilihydraatit", carbComponentData);

  return (
    <>
      <FoodLabel className="text-center">{foodName}</FoodLabel>
      <MacroComponentsRow />
      <VitaminsRow />
      <MineralRow />
      <FatRow />
      <CarbComponentRow />
    </>
  );
};

Body.propTypes = {
  foodData: PropTypes.arrayOf(
    PropTypes.shape({
      /** Sen ruoan id, johon tämä ravintoainekomponentti liittyy */
      foodid: PropTypes.number.isRequired,
      /** Tämä on tietokannan sarakenimi komponentin nimelle */
      description: PropTypes.string.isRequired,
      /** Ravintoainekomponentin arvon yksikkö */
      unit: PropTypes.string.isRequired,
      /** Ravintoainekomponentin yksikön lyhenne */
      unit_abbrev: PropTypes.string.isRequired,
      /** Ravintoainekomponentin arvo */
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  /** Haetun ruoan nimi */
  foodName: PropTypes.string.isRequired,
};

export default Body;
