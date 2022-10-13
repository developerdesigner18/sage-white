import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const TextArea = ({ id, label, value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <textarea
        type="text"
        className="form-control"
        id={id}
        placeholder=""
        value={value}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default TextArea;
