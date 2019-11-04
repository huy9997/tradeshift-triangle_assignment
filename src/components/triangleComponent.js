import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.leftValue}px solid transparent;
  border-right: ${props => props.rightValue}px solid transparent;
  border-bottom: ${props => props.bottomValue}px solid black;
  max-width: 700px;
  max-height: 700px;
`;

const TriangleComponent = props => {
  return (
    <Triangle
      leftValue={props.leftPassValue}
      rightValue={props.rightPassValue}
      bottomValue={props.bottomPassValue}
    />
  );
};
export default TriangleComponent;
