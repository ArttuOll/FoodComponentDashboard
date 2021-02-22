import { useState, React } from "react";
import Container from "react-bootstrap/Container";
import Body from "./elements/body/body";
import Footer from "./elements/footer/footer";
import Header from "./elements/header/header";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodName, setFoodName] = useState("");

  return (
    <Container>
      <Header foodDataCallback={setFoodData} foodNameCallback={setFoodName} />
      <Body foodData={foodData} foodName={foodName} />
      <Footer />
    </Container>
  );
}

export default App;
