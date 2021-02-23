import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ComponentCard from "elements/body/component_card";
import { FoodLabel, ComponentLabel } from "elements/utils/styled_texts";

function generateComponentRow(title, data) {
  return () => (
    <Container>
      <ComponentLabel className="my-3 text-break">{title}</ComponentLabel>
      <Row xs={1} sm={2} md={4} style={{ backgroundColor: "#F4F4F4" }}>
        {data.map((componentCard) => (
          <Col key={componentCard.description} className="d-flex justify-content-center">
            <ComponentCard
              key={componentCard.description}
              title={componentCard.description}
              unit={componentCard.unit}
              value={parseInt(componentCard.value, 10)}
              valueSubtitle={componentCard.valueSubtitle}
            />
          </Col>
        ))}
      </Row>
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
