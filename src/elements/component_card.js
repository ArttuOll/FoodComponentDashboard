import Card from "react-bootstrap/Card";

const ComponentCard = (props) => {
  return (
    <Card className="text-center" style={{ width: "10rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.unit}</Card.Subtitle>
        <Card.Text><h1>{props.value}</h1></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{props.valueSubtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ComponentCard;
