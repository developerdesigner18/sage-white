import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
const RadioButton = ({ id, label, value, options, required }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3 form-check">
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          {label}
        </label>
      </div>
      {options?.length > 0 &&
        options.map((option, i) => (
          <>
            <div>
              <input
                type="radio"
                value={option.value}
                name="radio"
                onChange={(event) => handleChange(option.id, event)}
                id={id}
                required={required}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {option.value}
              </label>
            </div>
          </>
        ))}
    </div>
  );
};

export default RadioButton;
