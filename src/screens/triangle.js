import React, { Component } from "react";
import Form from "../components/form";
import TriangleComponent from "../components/createTriangle";

class Triangle extends Component {
  render() {
    return (
      <div className="App">
        <text>Hello worlds</text>
        <Form />
        <TriangleComponent />
      </div>
    );
  }
}

export default Triangle;
