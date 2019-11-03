import React from "react";
import TriangleComponent from "../components/triangleComponent";

const DisplayTriangle = props => {
  return (
    <TriangleComponent
      left={props.leftSide}
      right={props.rightSide}
      bottom={props.bottomSide}
    />
  );
};
export default DisplayTriangle;
