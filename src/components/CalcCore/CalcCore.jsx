import React, { useState } from "react";
import Boton from "../Boton/Boton";
import BotonClear from "../BotonClear/BotonClear";
import "./CalcCore.css";

function CalcCore() {
  const [resultado, setResultado] = useState("");

  const agregarResultado = (value) => {
    setResultado(resultado + value);
  };

  const clearDisplay = () => {
    setResultado("");
  };

  const calcResult = () => {
    if (resultado.length > 0) {
      setResultado(eval(resultado));
    } else alert("Para realizar la operacion hay que ingresar valores");
  };

  return (
    <>
      <div className="container-calc">
        <div className="calc-display">
          <div className="calc-display-text">{resultado}</div>
        </div>
        <div className="calc-buttons">
          <Boton isNumber={true} value="1" handleClick={agregarResultado} />
          <Boton isNumber={true} value="2" handleClick={agregarResultado} />
          <Boton isNumber={true} value="3" handleClick={agregarResultado} />
          <Boton isNumber={false} value="+" handleClick={agregarResultado} />
          <Boton isNumber={true} value="4" handleClick={agregarResultado} />
          <Boton isNumber={true} value="5" handleClick={agregarResultado} />
          <Boton isNumber={true} value="6" handleClick={agregarResultado} />
          <Boton isNumber={false} value="-" handleClick={agregarResultado} />
          <Boton isNumber={true} value="7" handleClick={agregarResultado} />
          <Boton isNumber={true} value="8" handleClick={agregarResultado} />
          <Boton isNumber={true} value="9" handleClick={agregarResultado} />
          <Boton isNumber={false} value="*" handleClick={agregarResultado} />
          <Boton isNumber={false} value="=" handleClick={calcResult} />
          <Boton isNumber={true} value="0" handleClick={agregarResultado} />
          <Boton isNumber={false} value="." handleClick={agregarResultado} />
          <Boton isNumber={false} value="/" handleClick={agregarResultado} />
        </div>
        <BotonClear manejarClick={clearDisplay} />
      </div>
    </>
  );
}

export default CalcCore;
