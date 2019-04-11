import React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`
  cursor: pointer;
  z-index: 1;
  user-select:none;
  outline:none;
  ::before {
    content: '';
    display: block;
    background-color: #fff;
    border: 4px solid #ffe700;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    user-select:none;
    outline:none;
  }
  ::after{
    content:'${props => props.value}';
    display: block;
    text-align:center;
    position:relative;
    top:-40px;
    user-select:none;
    outline:none;
  }
`;
const StyledInput = styled.input`
  display: none;
  user-select: none;
  outline: none;
  &:checked + ${StyledLabel} {
    ::before {
      background-color: #ffe700;
    }
    ::after {
      color: #fff;
    }
  }
`;

const QuestionInput = props => {
  return (
    <>
      <StyledInput
        type="radio"
        id={props.questionNumber + props.answer}
        name={props.questionNumber}
        value={props.answer}
        onChange={props.answersHandle}
      />
      <StyledLabel
        htmlFor={props.questionNumber + props.answer}
        value={props.answer}
      />
    </>
  );
};

export default QuestionInput;
