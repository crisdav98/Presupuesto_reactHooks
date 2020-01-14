import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){
    const {guardarGasto} = props;
    const {guardarCrearGasto} = props;
    // Crear los states
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    // cuando se agrega al gasto
    const agregarGasto = e =>{
        e.preventDefault();

        // validar
        if (cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === '') {
            guardarError(true);
            return;
          } else {
            
            //construir objeto de gasto
            const gasto = {
                nombreGasto,
                cantidadGasto,
                id: shortid.generate()
            }
            // Enviar al componente Principal
            guardarGasto(gasto);
            guardarError(false);
            guardarCrearGasto(true);
            // resetear el form
            guardarCantidadGasto('');
            guardarNombreGasto('');
          }
    }
    return (
        <form
            onSubmit= {agregarGasto}
        >
            <h2>Agrega tus gastos Aquí</h2>
            {error ? <Error mensaje = "Ambos campos son obligatorios o Presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value ={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value,10))}
                    value ={cantidadGasto}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>

        </form>
    );
};

export default Formulario;