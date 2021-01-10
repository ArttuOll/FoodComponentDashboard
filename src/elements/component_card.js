import Card from "react-bootstrap/Card";
import {HiglightedValue, TextOk} from "./utils/styled_texts";

const ComponentCard = (props) => {

  return (
    <Card className="text-center shadow-sm my-2" style={{ width: "10rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.unit}</Card.Subtitle>
        <Card.Text><HiglightedValue>{props.value}</HiglightedValue></Card.Text>
        <Card.Subtitle className="mb-2"><TextOk>{props.valueSubtitle}</TextOk></Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ComponentCard;
