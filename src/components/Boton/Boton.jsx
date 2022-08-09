import React from "react";
import "./Boton.css";

function Boton({ value, isNumber, handleClick }) {
  return (
    <button
      className={`btn ${isNumber ? "btn-number" : "btn-operator"}`}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

export default Boton;
