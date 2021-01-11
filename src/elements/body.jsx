import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ComponentCard from "./component_card";
import { BigLabel } from "./utils/styled_texts";

const Body = () => (
  <div>
    <MacroComponentsRow />
  </div>
);

const MacroComponentsRow = () => {
  const componentCards = [
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

  return (
    <Container>
      <BigLabel className="mb-3 text-break">Energiaravintoaineet</BigLabel>
      <Row xs={1} sm={2} md={4} style={{ backgroundColor: "#F4F4F4" }}>
        {componentCards.map((componentCard) => (
          <Col className="d-flex justify-content-center">
            <ComponentCard
              key={componentCard.title}
              title={componentCard.title}
              unit={componentCard.unit}
              value={componentCard.value}
              valueSubtitle={componentCard.valueSubtitle}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Body;
