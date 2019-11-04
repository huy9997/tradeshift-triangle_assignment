import React, { Component } from "react";
import Form from "../components/form";
import TriangleComponent from "../components/triangleComponent";
import Button from "../components/button";
import checkTriangle from "../helperFunctions/checkTriangle";

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

  onsubmit = () => {
    const { leftSide, rightSide, bottomSide } = this.state;
    let check = checkTriangle(leftSide, rightSide, bottomSide);
    if (check[0] === "error") {
      this.setState({ type: check[1] });
    } else {
      this.setState({ type: check });
    }
  };
  render() {
    const { leftSide, rightSide, bottomSide, type } = this.state;

    return (
      <div>
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
        <Button name="Submit" onClick={this.onsubmit} />
        <TriangleComponent />
        {type}
      </div>
    );
  }
}

export default Triangle;
