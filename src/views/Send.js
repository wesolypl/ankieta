import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import StyledLink from "../components/StyledLink";
import StyledInput from "../components/StyledInput";
import Checkbox from "../components/Checkbox";
const StyledSend = styled.div`
  flex-grow: 1;
  width: 420px;
  display: flex;
  flex-direction: column;
  color: #2e6fff;
  justify-items: flex-start;
  padding-top: 10%;
  p {
    margin-top: 15px;
    font-size: 18px;
  }
  h2 {
    margin-top: 15px;
  }
  ${StyledInput} {
    margin: 15px 0;
  }
`;
const Send = props => {
  return (
    <>
      <StyledSend>
        <h3>Dziękujemy za ocenę.</h3>
        <p>
          Chcielibyśmy dodatkowo wysłać Ci ankietę,Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis aut illo eaque non molestiae
          temporibus magni, hic accusantium. Perspiciatis, magnam! Dignissimos
          magni eligendi doloremque aliquam nam. Aut magni cupiditate eius?
        </p>
        <h2>
          Będziemy wdzięczni Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ea, possimus.
        </h2>
        <StyledInput
          placeholder="e-mail"
          value={props.email}
          onChange={props.answersHandle}
          name="email"
        />
        <Checkbox answersHandle={props.answersHandle} accept={props.accept} />
      </StyledSend>

      <Button path="/end" name="wyślij" />
      <StyledLink to="/">cofnij do początku</StyledLink>
    </>
  );
};

export default Send;
