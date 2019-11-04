import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 100% solid transparent;
  border-right: 100%  solid transparent;
  border-bottom: 100% }solid black;
`;
const Container = styled.div`
  width: 400px;
  height: 400px;
  background
`;

const TriangleComponent = props => {
  return (
    <Container>
      <Triangle />
    </Container>
  );
};
export default TriangleComponent;
