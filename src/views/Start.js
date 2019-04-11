import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import StyledInput from "../components/StyledInput";
const StyledForm = styled.div`
  width: 320px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 10px;
  font-size: 20px;
  color: #2e6fff;
  border: none;
  border-bottom: 4px solid #2e6fff;
  background-color: transparent;
  user-select: none;
  outline: none;
  margin-bottom: 10px;
  ::placeholder {
    color: #2e6fff;
  }
`;

const Start = props => {
  return (
    <>
      <StyledForm>
        <StyledSelect
          placeholder="wybierz kod produktu"
          name="productID"
          onChange={props.answersHandle}
          value={props.productID}
        >
          <option value="">Wybierz kod produktu</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </StyledSelect>
        <StyledInput
          type="text"
          placeholder="imie i nazwisko"
          name="name"
          onChange={props.answersHandle}
          value={props.name}
        />
      </StyledForm>
      <Button path="/letStart" name="Rozpocznij Ankietę" />
    </>
  );
};

export default Start;
