import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Footer = () => (
  <footer className="border-top mt-5">
    <Container>
      <Row>
        <Col>
          <h6 className="text-muted mt-2">
            Tietojen alkuperäislähde: Terveyden ja hyvinvoinnin laitos, Fineli. Tiedot käytettävissä
            Creative Commons 4.0 nimeä (CC-BY 4.0) -lisenssillä.
          </h6>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
