import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Email = ({ id, label, value }) => {
  console.log(value, "vvvv");
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="email"
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

export default Email;
