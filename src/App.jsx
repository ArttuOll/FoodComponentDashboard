import React from "react";
import Container from "react-bootstrap/Container";
import Body from "./elements/body";
import Footer from "./elements/footer";
import Header from "./elements/header";

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
