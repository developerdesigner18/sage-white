import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
import { Slider } from "@mui/material";
const Range = ({ id, label, value, min, max, step }) => {
  console.log(max, "max");
  const marks = [
    
    {
        value:value,
        label:value
    },

   
  ];
  console.log(value, "vvvv");
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <Slider
        style={{ width: 300 }}
        min={min}
        max={max}
        step={step}
        value={value}
        marks={marks}
        onChange={(event) => handleChange(id, event)}
      />
    </div>
  );
};

export default Range;
