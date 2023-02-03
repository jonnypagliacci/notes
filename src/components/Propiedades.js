import React from "react";

export default function Propiedades (props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano}</li>
                <li>{props.arreglo}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
};

Propiedades.defaultProps = {
    porDefecto : "Las props",
};