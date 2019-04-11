import styled from "styled-components";
import React from "react";
const ChecboxDiv = styled.div`
  width: 420px;
`;
const StyledLabel = styled.label`
  display: block;
  position:relative;
  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid #2e6fff;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left:0;
  }
  &::after {
    content: '${props => props.desc}';
    display: block;
    position: absolute;
    width: 400px;
    top:0;
    left:25px;
    font-size:12px;
  }
`;
const StyledCheckbox = styled.input`
  display: none;
  &:checked + ${StyledLabel} {
    ::before {
      background-color: #2e6fff;
    }
  }
`;

const Checkbox = props => {
  return (
    <ChecboxDiv>
      <StyledCheckbox
        type="checkbox"
        id="accept"
        name="accept"
        value={props.accept}
        onChange={props.answersHandle}
      />
      <StyledLabel
        htmlFor="accept"
        desc="Chcę otrzymywać najlepsze Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Magnam, inventore."
      />
    </ChecboxDiv>
  );
};

export default Checkbox;
