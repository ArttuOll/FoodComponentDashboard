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
  // TODO: erottele näille kuuluvat datat
  const MacroComponentsRow = generateComponentRow("Energiaravintoaineet", foodData);
  const VitaminsRow = generateComponentRow("Vitamiinit", foodData);
  return (
    <>
      <FoodLabel className="text-center">{foodName}</FoodLabel>
      <MacroComponentsRow />
      <VitaminsRow />
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
