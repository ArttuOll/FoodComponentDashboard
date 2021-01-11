import React from "react";
import Card from "react-bootstrap/Card";
import Proptypes from "prop-types";
import { HiglightedValue, TextOk } from "./utils/styled_texts";

const ComponentCard = (props) => {
  const { title, unit, value, valueSubtitle } = props;
  return (
    <Card className="text-center shadow-sm my-2" style={{ width: "10rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{unit}</Card.Subtitle>
        <Card.Text>
          <HiglightedValue>{value}</HiglightedValue>
        </Card.Text>
        <Card.Subtitle className="mb-2">
          <TextOk>{valueSubtitle}</TextOk>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

ComponentCard.propTypes = {
  title: Proptypes.string.isRequired,
  unit: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
  valueSubtitle: Proptypes.string.isRequired,
};

export default ComponentCard;
