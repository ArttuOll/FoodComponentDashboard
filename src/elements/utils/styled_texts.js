import styled from "styled-components";

const HiglightedValue = styled.h1`
  font-family: "Trebuchet MS";
  color: #65ba41;
`;

const FoodLabel = styled.h1`
  font-family: "Trebuchet MS";
  font-size: calc(100% + 1vw + 1vh);
`;

const ComponentLabel = styled.h2`
  font-family: "Verdana";
  font-size: calc(100% + 1vw + 1vh);
`;

const TextAlert = styled.h6`
  color: #ec4c4c;
`;

const TextOk = styled.h6`
  color: #65ba41;
`;

const TextWarning = styled.h6`
  color: #bab43c;
`;

export { HiglightedValue, FoodLabel, ComponentLabel, TextAlert, TextOk, TextWarning };
