import React, { useContext } from "react"
import iconFamily from "../images/iconFamily.svg"

import GeneralContext from "../store/context/general-context"

const Summary = () => {
    const { state: generalState } = useContext(GeneralContext)

    return (
        <div className="summary-container">
            <h1 className="summary--title">Resumen del seguro</h1>
            <div className="summary">
                <h6>Precios calculados para:</h6>
                <h1>
                    <img src={iconFamily} alt="iconFamily" />
                    {generalState.usuario.nombre} {generalState.usuario.apellidos}
                </h1>

                <div className="separator" />

                <strong>Responsable de pago</strong>
                <p>{generalState.usuario.tipoDocumento}: {generalState.usuario.numDocumento}</p>
                <p>Celular: {generalState.usuario.numCelular}</p>
                <strong>Plan elegido</strong>
                <p>{generalState.planSeleccionado.nombre}</p>
                <p>Costo del plan: ${generalState.planSeleccionado.precioFinal} al mes</p>
            </div>
        </div>
    )
}

export default Summary