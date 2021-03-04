import { useState, React } from "react";
import Container from "react-bootstrap/Container";
import Body from "./elements/body/body";
import Footer from "./elements/footer/footer";
import Header from "./elements/header/header";
import "styles.css";

/**
 * Sovelluksen pääkomponentti.
 *
 * Sovellus koostuu kolmesta ylätason komponentista: yläpalkista (Header), rungosta (Body) ja
 * alatunnisteeta (Footer).
 *
 * Sisältää tilamuuttujina kullakin hetkellä näytettävän ruoan komponenttidatan sekä sen nimen.
 * Data näihin saadaan yläpalkkiin vietävän takaisinkutsufunktion avulla ja saatu data puolestaan
 * välitetään runkokomponentille. Tilamuuttujat siis välittävät yläpalkista saatua dataa
 * runkokomponentille.
 *
 * @returns {jsx} Koko sovellus
 */
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodName, setFoodName] = useState("");

  return (
    <Container className="bottomStickyFooterContainer">
      <Header foodDataCallback={setFoodData} foodNameCallback={setFoodName} />
      <Body foodData={foodData} foodName={foodName} />
      <Footer />
    </Container>
  );
}

export default App;
