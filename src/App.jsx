import React from "react";
import Container from "react-bootstrap/Container";
import Body from "./elements/body/body";
import Footer from "./elements/footer/footer";
import Header from "./elements/header/header";

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
