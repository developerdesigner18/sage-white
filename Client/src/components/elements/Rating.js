import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
import Rating from '@mui/material/Rating';
const RatingComponent = ({ id, label, value ,numberOfStars}) => {
  console.log(value, "vvvv");
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event)=>handleChange(id, event) }
      />
    </div>
  );
};

export default RatingComponent;
