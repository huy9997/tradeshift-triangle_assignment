import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 120px solid transparent;
  border-right: 60px solid transparent;

  border-bottom: 60px solid black;
`;

const Triangle = props => {
  return (
    <div>
      <Arrow />
    </div>
  );
};
export default Triangle;
