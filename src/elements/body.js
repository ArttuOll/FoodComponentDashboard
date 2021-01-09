import ComponentCard from "./component_card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Body = () => {
  return (
    <div style={{ backgroundColor:"#F4F4F4" }}>
      <MacroComponentsRow/>
    </div>
  );
};

const MacroComponentsRow = () => {
  return (
    <div>
      <h1>Energiaravintoaineet</h1>
      <Container>
        <Row>
          <Col md>
            <ComponentCard
              title="Energia"
              unit="Kilokaloria"
              value="60"
              valueSubtitle="X % suosituksesta"
            />
          </Col>
          <Col md>
            <ComponentCard
              title="Hiilihydraatit"
              unit="g/100 g"
              value="20"
              valueSubtitle="X % suosituksesta"
            />
          </Col>
          <Col md>
            <ComponentCard
              title="Proteiini"
              unit="g/100 g"
              value="90"
              valueSubtitle="X % suosituksesta"
            />
          </Col>
          <Col md>
            <ComponentCard
              title="Rasva"
              unit="g/100 g"
              value="2"
              valueSubtitle="X % suosituksesta"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
