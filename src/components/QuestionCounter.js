import React from "react";
import styled from "styled-components";
const StyledCounter = styled.div`
  text-align: center;
  span {
    font-size: 24px;
  }
`;
const QuestionCouner = props => {
  return (
    <StyledCounter>
      <span>{props.questionNumber}</span>/{props.questionsNumber}
    </StyledCounter>
  );
};

export default QuestionCouner;
