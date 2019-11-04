import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.leftValue}px solid transparent;
  border-right: ${props => props.rightValue}px solid transparent;
  border-bottom: ${props => props.bottomValue}px solid black;
`;

const MaxContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

const TriangleComponent = props => {
  return (
    <MaxContainer>
      <Triangle
        leftValue={props.leftPassValue}
        rightValue={props.rightPassValue}
        bottomValue={props.bottomPassValue}
      />
    </MaxContainer>
  );
};
export default TriangleComponent;
