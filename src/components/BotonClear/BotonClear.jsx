import React from "react";
import "./BotonClear.css";

function BotonClear({ manejarClick }) {
  return (
    <boton onClick={manejarClick} className="btn-clear">
      BORRAR
    </boton>
  );
}

export default BotonClear;
