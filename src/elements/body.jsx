import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ComponentCard from "./component_card";
import { FoodLabel, ComponentLabel } from "./utils/styled_texts";

function generateComponentRow(title, data) {
  return () => (
    <Container>
      <ComponentLabel className="my-3 text-break">{title}</ComponentLabel>
      <Row xs={1} sm={2} md={4} style={{ backgroundColor: "#F4F4F4" }}>
        {data.map((componentCard) => (
          <Col key={componentCard.title} className="d-flex justify-content-center">
            <ComponentCard
              key={componentCard.title}
              title={componentCard.title}
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

const Body = () => {
  // TODO: Korvaa oikealla, APIsta saatavalla datalla.
  const macroData = [
    {
      title: "Energia",
      unit: "Kilokaloria",
      value: "60",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "Hiilihydraatit",
      unit: "g / 100 g",
      value: "20",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "Proteiini",
      unit: "g / 100 g",
      value: "45",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "Rasva",
      unit: "g / 100 g",
      value: "4",
      valueSubtitle: "X % suosituksesta",
    },
  ];

  const vitaminData = [
    {
      title: "C-vitamiini",
      unit: "mg",
      value: "6800",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "D-vitamiini",
      unit: "mcg",
      value: "50",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "A-vitamiini",
      unit: "mg",
      value: "45",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "B12-vitamiini",
      unit: "mg",
      value: "4",
      valueSubtitle: "X % suosituksesta",
    },
    {
      title: "K-vitamiini",
      unit: "mcg",
      value: "20",
      valueSubtitle: "X % suosituksesta",
    },
  ];

  // TODO: aseta nimi API:sta saatavan datan perusteella
  const foodName = "Ruisleipä";
  const MacroComponentsRow = generateComponentRow("Energiaravintoaineet", macroData);
  const VitaminsRow = generateComponentRow("Vitamiinit", vitaminData);
  return (
    <>
      <FoodLabel className="text-center">{foodName}</FoodLabel>
      <MacroComponentsRow />
      <VitaminsRow />
    </>
  );
};

export default Body;
