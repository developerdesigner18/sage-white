import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const NumberInput = ({ id, label, value }) => {
  console.log(value, "vvvv");
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="number"
        className="form-control"
        id={id}
        placeholder=""
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default NumberInput;
