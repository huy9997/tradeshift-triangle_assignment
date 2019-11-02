import React from "react";

const Button = props => {
  return (
    <button data-ts="Button" class="ts-primary">
      <span>{props.name}</span>
    </button>
  );
};
export default Button;
