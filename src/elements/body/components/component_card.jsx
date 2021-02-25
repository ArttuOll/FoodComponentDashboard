import React from "react";
import Card from "react-bootstrap/Card";
import Proptypes from "prop-types";
import { HiglightedValue } from "elements/utils/styled_texts";

const ComponentCard = (props) => {
  const { title, unit, value } = props;
  return (
    <Card className="text-center shadow-sm my-2" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>
          <HiglightedValue>{value}</HiglightedValue>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{`${unit}a`}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

ComponentCard.propTypes = {
  title: Proptypes.string.isRequired,
  unit: Proptypes.string.isRequired,
  value: Proptypes.number.isRequired,
};

export default ComponentCard;
