import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ComponentCard from "elements/body/components/component_card";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import { ComponentLabel } from "elements/utils/styled_texts";

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

const ComponentCardRow = ({ data }) => {
  return (
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
  );
};

ComponentCardRow.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export { ComponentCardRow, generateComponentRow };
