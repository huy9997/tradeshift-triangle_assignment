import React, { Component } from "react";
import Form from "../components/form";
import TriangleComponent from "../components/triangleComponent";
import Button from "../components/button";
class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSide: 0,
      rightSide: 0,
      bottomSide: 0,
      type: ""
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkTriangle = (left, right, bottom) => {
    //equilateral, isosceles or scalene.

    if (left === right && right === bottom) {
      return "equalateral";
    }
    if (left === right || right === bottom || bottom === left) {
      return "isosceles";
    } else {
      return "scalene";
    }
  };

  onsubmit = e => {
    return <TriangleComponent />;
  };
  render() {
    const { leftSide, rightSide, bottomSide } = this.state;
    return (
      <div className="App">
        <Form name="leftSide" onChange={this.changeHandler} value={leftSide} />
        <Form
          name="rightSide"
          onChange={this.changeHandler}
          value={rightSide}
        />
        <Form
          name="bottomSide"
          onChange={this.changeHandler}
          value={bottomSide}
        />
        {this.onsubmit}
        <Button name="Submit" onSubmit={this.onsubmit} />
      </div>
    );
  }
}

export default Triangle;
