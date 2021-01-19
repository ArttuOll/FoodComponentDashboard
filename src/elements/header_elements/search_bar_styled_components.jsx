import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Proptypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";
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
  const { onSearchInputChanged, searchQuery } = props;
  return (
    <StyledFormControl
      onChange={onSearchInputChanged}
      className="shadow-none"
      type="text"
      placeholder="Search for a food..."
      value={searchQuery}
    />
  );
};

SearchBox.propTypes = {
  onSearchInputChanged: Proptypes.func.isRequired,
  searchQuery: Proptypes.string.isRequired,
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

const SuggestionsList = styled(ListGroup)`
  position: absolute;
  z-index: 99;
  top: 100%;
`;

export { SearchButton, SearchBox, SuggestionsList };
