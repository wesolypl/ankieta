import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/Button";
const StyledMessage = styled.div`
  flex-grow: 1;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2e6fff;
`;
class LetStart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StyledMessage>
          <p>
            <b>Dziękujemy za wybór</b> cieszymy się, że zdecywowałeś się wziąć
            udział w ankiecie.
          </p>
        </StyledMessage>
        <Button path="/question/0" name="zacznij" />
      </>
    );
  }
}

export default LetStart;
