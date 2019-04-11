import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import components
import Start from "../views/Start";
import LetStart from "../views/LetStart";
import Question from "../views/Question";
//import styles
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Send from "../views/Send";
import End from "../views/End";
const Main = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  state = {
    questions: undefined,
    name: "",
    productID: "",
    "0": "",
    "2": "",
    "3": "",
    email: "",
    accept: false
  };
  postData = () => {
    const data = {};
    data.name = this.state.name;
    data.productID = this.state.productID;
    data.email = this.state.email;
    data.accept = this.state.accept;
    data.question1 = this.state["0"];
    data.question2 = this.state["1"];
    data.question3 = this.state["2"];
    console.log(data);
  };
  componentDidMount() {
    fetch("https://images.egzaw.pl/questions.json")
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        this.setState({
          questions: res
        });
      })
      .catch(error => console.error(error));
  }
  answersHandle = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Main>
          <Route
            path="/"
            exact
            render={() => (
              <Start
                answersHandle={this.answersHandle}
                productID={this.productID}
                name={this.name}
              />
            )}
          />
          <Route
            path="/letStart"
            render={() =>
              this.state.questions !== undefined ? (
                <LetStart questions={this.state.questions} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/question/:id"
            render={() =>
              this.state.questions !== undefined ? (
                <Question
                  questions={this.state.questions}
                  answersHandle={this.answersHandle}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/send"
            render={() =>
              this.state.questions !== undefined ? (
                <Send
                  email={this.state.email}
                  accept={this.state.accept}
                  answersHandle={this.answersHandle}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/end"
            render={() =>
              this.state.questions !== undefined ? (
                <End {...this.state} handle={this.postData} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </Main>
      </Router>
    );
  }
}

export default App;
