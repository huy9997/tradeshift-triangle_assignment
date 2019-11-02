import React, { Component } from "react";
import Form from "../components/form";
import TriangleComponent from "../components/createTriangle";

class Triangle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSide: 60,
      rightSide: 10,
      bottomSide: 50,
      type: ""
    };
  }
  changeHandler = e => {
    console.log(e.target);
    console.log(this.state.type + "state");
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

  onsubmit = e => {};
  render() {
    const { leftSide, rightSide, bottomSide } = this.state;
    return (
      <div className="App">
        <input type="number" name="type" onChange={this.changeHandler} />

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
        {console.log(this.checkTriangle(leftSide, rightSide, bottomSide))}

        <TriangleComponent />
      </div>
    );
  }
}

export default Triangle;
