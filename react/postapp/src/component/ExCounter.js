import React from "react";

class ExCounter extends React.Component {
  componentDidMount() {
    console.log("hello");
  }

  componentDidUpdate() {
    console.log("1 more");
  }

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleAddCounter = () => {
    this.setState(function (state) {
      return { counter: state.counter + 1 };
    });
  };

  handleSubtractCounter = () => {
    this.setState(function (state) {
      return { counter: state.counter - 1 };
    });
  };

  handleResetCounter = () => {
    this.setState(function () {
      return { counter: 0 };
    });
  };

  render() {
    return (
      <div>
        <h1>counter: {this.state.counter}</h1>
        <button onClick={this.handleAddCounter}>Random</button>
        <button onClick={this.handleSubtractCounter}>Subtract</button>
        <button onClick={this.handleResetCounter}>Reset</button>
      </div>
    );
  }
}

export default ExCounter;
