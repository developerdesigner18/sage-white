import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const Checkbox = ({ id, label, value, options }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3 form-check ">
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          {label}
        </label>
      </div>
      {options?.length > 0 &&
        options.map((option, i) => (
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id={id}
              value={option.value}
              name={option.checked}
              onChange={(event) => handleChange(option.id, event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              {option.value}
            </label>
          </div>
        ))}
    </div>
  );
};

export default Checkbox;
