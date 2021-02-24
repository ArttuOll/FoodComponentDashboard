import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { FoodLabel, ComponentLabel } from "elements/utils/styled_texts";
import ComponentCardRow from "elements/body/components/component_card_row";

function generateComponentRow(title, data) {
  return () => (
    <Container>
      {data.length > 0 ? (
        <>
          <ComponentLabel className="my-3 text-break">{title}</ComponentLabel>
          <ComponentCardRow data={data} />
        </>
      ) : null}
    </Container>
  );
}

const Body = ({ foodData, foodName }) => {
  const macroComponentData = foodData.filter((food) => food.component_class === "MACROCMP");
  const MacroComponentsRow = generateComponentRow("Energiaravintoaineet", macroComponentData);

  const vitaminData = foodData.filter((food) => food.component_class === "VITAM");
  const VitaminsRow = generateComponentRow("Vitamiinit", vitaminData);

  const mineralData = foodData.filter((food) => food.component_class === "MINERAL");
  const MineralRow = generateComponentRow("Mineraalit", mineralData);

  const fatData = foodData.filter((food) => food.component_class === "FAT");
  const FatRow = generateComponentRow("Rasvat", fatData);

  const carbComponentData = foodData.filter((food) => food.component_class === "CARBOCMP");
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
      description: PropTypes.string.isRequired,
      foodid: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      unit_abbrev: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  foodName: PropTypes.string.isRequired,
};

export default Body;
