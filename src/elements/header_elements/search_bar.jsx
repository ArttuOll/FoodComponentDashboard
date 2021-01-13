import React from "react";
import styled from "styled-components";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled(Button)`
  :hover {
    background-color: #4ba227;
  }
  :focus {
    background-color: #4ba227;
  }
  :active {
    background-color: #277406 !important;
  }
  background-color: #65ba41;
  border: 0 none;
  box-shadow: none;
`;

const SearchBox = styled(FormControl)`
  :focus {
    border-color: #277406;
  }
  border-color: #65ba41;
`;

const SearchBar = () => {
  return (
    <Container>
      <InputGroup className="mb-1">
        <SearchBox className="shadow-none" type="text" placeholder="Search for a food..." />
        <InputGroup.Append>
          <StyledButton className="shadow-none">
            <FontAwesomeIcon icon={faSearch} />
          </StyledButton>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
};

export default SearchBar;
