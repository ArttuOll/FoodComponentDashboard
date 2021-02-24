import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BottomStickyFooter from "elements/footer/footer_styled_components";

const Footer = () => (
  <BottomStickyFooter className="border-top">
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
  </BottomStickyFooter>
);

export default Footer;
