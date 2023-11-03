import React from "react";
import "./Loader.css"
const Loader = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center vh-100">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
