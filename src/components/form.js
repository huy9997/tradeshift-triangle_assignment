import React from "react";

const Form = props => {
  return (
    <form data-ts="Form">
      <fieldset>
        <label>
          <span> {props.name} </span>
          <input
            name={props.name}
            type="number"
            value={props.value}
            onChange={props.onChange}
          />
        </label>
      </fieldset>
    </form>
  );
};
export default Form;
