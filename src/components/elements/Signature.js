import React, { useContext } from "react";

const Signature = ({  label }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
    </div>
  );
};

export default Signature;
