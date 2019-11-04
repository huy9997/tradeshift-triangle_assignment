import React, { Component } from "react";

import Form from "../components/form";
import TriangleComponent from "../components/triangleComponent";
import Button from "../components/button";

import checkTriangle from "../helperFunctions/checkTriangle";
import {
  SCALENE_DATA,
  EQUILATERAL_DATA,
  ISOSCELES_DATA
} from "../test/triangleTestData";
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

  onSubmit = () => {
    const { leftSide, rightSide, bottomSide } = this.state;
    let check = checkTriangle(leftSide, rightSide, bottomSide);
    if (check[0] === "error") {
      this.setState({ type: check[1] });
    } else if (check[0] === "max") {
      this.setState({ type: check });
    } else {
      this.setState({ type: check });
    }
  };
  onTest = props => {
    this.setState({
      leftSide: props.leftSide,
      rightSide: props.rightSide,
      bottomSide: props.bottomSide
    });
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
        <Button name="Submit Values" onClick={this.onSubmit} />
        <Button name="Scalene Test" onClick={() => this.onTest(SCALENE_DATA)} />
        <Button
          name="Equilateral Test"
          onClick={() => this.onTest(EQUILATERAL_DATA)}
        />
        <Button
          name="Isosceles Test"
          onClick={() => this.onTest(ISOSCELES_DATA)}
        />
        {type}
        {type !== "" && type[0] !== "error" && (
          <TriangleComponent
            leftPassValue={leftSide}
            rightPassValue={rightSide}
            bottomPassValue={bottomSide}
          />
        )}
      </div>
    );
  }
}

export default Triangle;
