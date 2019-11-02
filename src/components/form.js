import React from "react";

const Form = props => {
  return (
    <form data-ts="Form">
      <fieldset>
        <label>
          <span> {props.name} </span>
          <input
            type="number"
            onChange={value => this.props.changeHandler(value.target.value)}
          />
        </label>
      </fieldset>
    </form>
  );
};
export default Form;
