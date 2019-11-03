import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.leftBorder} solid transparent;
  border-right: ${props => props.rightBorder} solid transparent;
  border-bottom: ${props => props.bottomBorder}solid black;
`;

const TriangleComponent = props => {
  return (
    <Triangle
      leftBorder={"100px"}
      rightBorder={"100px"}
      bottomBorder={"100px"}
    />
  );
};
export default TriangleComponent;
