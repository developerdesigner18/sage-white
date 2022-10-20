import React, { useContext } from "react";

const Paragraph = ({  label }) => {
  return (
    <div className="mb-3">
      <p htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </p>
    </div>
  );
};

export default Paragraph;
