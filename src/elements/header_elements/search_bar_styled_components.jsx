import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Proptypes from "prop-types";
import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const StyledFormControl = styled(FormControl)`
  :focus {
    border-color: #277406;
  }
  border-color: #65ba41;
`;

const SearchBox = (props) => {
  const { onSearchInputChanged } = props;
  return (
    <StyledFormControl
      onChange={onSearchInputChanged}
      className="shadow-none"
      type="text"
      placeholder="Search for a food..."
    />
  );
};

SearchBox.propTypes = {
  onSearchInputChanged: Proptypes.func.isRequired,
};

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

const SearchButton = () => {
  return (
    <StyledButton className="shadow-none">
      <FontAwesomeIcon icon={faSearch} />
    </StyledButton>
  );
};

export { SearchButton, SearchBox };
