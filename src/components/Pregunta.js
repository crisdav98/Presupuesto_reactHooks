import React, { Fragment, useState } from "react";
import Error from './Error';

function Pregunta(props) {
    const { guardarPresupuesto, guardarPregunta, guardarRestante} = props;
  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  // Validar el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    // validar
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    } else {
      // Enviar al componente Principal
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      guardarPregunta(false)
    }
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje = "El presupuesto es incorrecto"/> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;
