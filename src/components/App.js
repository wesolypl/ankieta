import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    answer: ""
  };
  changeHandle = e => {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <p>XDDD</p>
        <textarea
          name="answer"
          onChange={event => this.changeHandle(event)}
          value={this.state.answer}
        />
      </div>
    );
  }
}

export default App;
