import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const TextInput = ({ id, label, value }) => {
  console.log(value, "vvvv");
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder=""
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default TextInput;
