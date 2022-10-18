import React, { useContext } from "react";

const Header = ({  label }) => {
  return (
    <div className="mb-3">
      <h1 htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </h1>
    </div>
  );
};

export default Header;
