import React from "react";
import styled from "styled-components";

const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
`;
const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
`;
const RightArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;

  border-left: 60px solid green;
`;
const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-right: 10px solid blue;
`;

const Triangle = props => {
  return (
    <div>
      <UpArrow />
      <DownArrow />
      <RightArrow />
      <LeftArrow />
    </div>
  );
};
export default Triangle;
