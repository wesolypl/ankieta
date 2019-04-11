import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
const StyledEnd = styled.div`
  flex-grow: 1;
  width: 420px;
  display: flex;
  flex-direction: column;
  color: #2e6fff;
  justify-items: flex-start;
  padding-top: 10%;
  p {
    margin-top: 15px;
  }
  p:last-of-type {
    margin-top: 30px;
    font-size: 12px;
  }
`;
const End = props => {
  return (
    <>
      <StyledEnd>
        <h3>Dziękujemy za ocenę</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          perferendis, architecto repellendus culpa numquam accusamus?
          <b>Lorem ipsum dolor sit amet.</b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
          nobis ullam corporis quam quod dicta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, a
          cum. Asperiores minus ipsa cupiditate tenetur quo blanditiis nobis
          unde sunt odit eos nulla ipsam laboriosam suscipit temporibus quia
          culpa consectetur, ipsum assumenda similique a maxime! Alias non sint
          maiores.
        </p>
      </StyledEnd>
      <Button path="/" name="Koniec" handle={props.handle} />
    </>
  );
};

export default End;
