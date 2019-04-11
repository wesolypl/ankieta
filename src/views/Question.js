import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import QuestionCouner from "../components/QuestionCounter";
import styled from "styled-components";
import QuestionInput from "../components/QuestionInput";
import StyledLink from "../components/StyledLink";
const StyledQuestion = styled.div`
  flex-grow: 1;
  width: 420px;
  display: flex;
  flex-direction: column;
  color: #2e6fff;
  justify-items: flex-start;
  padding-top: 10%;
`;
const StyledAnswers = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-around;
  padding: 0 20px;
`;
const StyledQuestionDiv = styled.div`
  text-align: center;
  margin-top: 40px;
`;
const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 420px;
`;

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0
    };
  }
  goBackHandle = () => {
    let questionNumber = this.state.questionNumber - 1;
    this.setState({
      questionNumber
    });
  };
  goForwardHandle = () => {
    let questionNumber = this.state.questionNumber + 1;
    this.setState({
      questionNumber
    });
  };
  render() {
    const questionNumber = this.state.questionNumber;
    const questions = this.props.questions;
    const answersHandle = this.props.answersHandle;
    const question = questions[questionNumber]["question"];
    const answers = questions[questionNumber]["answers"].map(answer => (
      <QuestionInput
        key={questionNumber + answer}
        questionNumber={questionNumber}
        answer={answer}
        answersHandle={answersHandle}
      />
    ));
    return (
      <>
        <StyledQuestion>
          <QuestionCouner
            questionNumber={questionNumber + 1}
            questionsNumber={questions.length}
          />
          <StyledQuestionDiv>{question}</StyledQuestionDiv>
          <StyledAnswers>{answers}</StyledAnswers>
        </StyledQuestion>
        <StyledButtonDiv>
          {questionNumber === 0 ? (
            <Button path="/letStart" name="Cofnij" />
          ) : (
            <Button
              path={`/question/${questionNumber - 1}`}
              name="Cofnij"
              handle={this.goBackHandle}
            />
          )}
          {questionNumber === 2 ? (
            <Button path={`/send`} name="Zakończ" />
          ) : (
            <Button
              path={`/question/${questionNumber + 1}`}
              name="Następne"
              handle={this.goForwardHandle}
            />
          )}
        </StyledButtonDiv>
        <StyledLink to={`/`}>cofinj do początku</StyledLink>
      </>
    );
  }
}

export default Answer;
