import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 25px;
  background-color: #2e6fff;
  border-radius: 25px;
  user-select: none;
  outline: none;
  cursor: pointer;
`;

const Button = props => {
  return (
    <StyledLink to={props.path} onClick={props.handle}>
      {props.name}
    </StyledLink>
  );
};

export default Button;
