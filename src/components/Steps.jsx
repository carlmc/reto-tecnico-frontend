import React, { useContext } from "react"

import line from "../images/lineDashed.svg"
import arrowLeft from "../images/iconArrowLeft.svg"

import GeneralContext from "../store/context/general-context"
import * as GeneralActions from "../store/actions/general-actions"

const Steps = () => {
    const { state: generalState, dispatch: generalDispatch } = useContext(GeneralContext)

    const regresar = () => {
        generalDispatch(GeneralActions.actualizarPasoActual("back"))

        if (generalState.pasoActual === 1)
            generalDispatch(GeneralActions.borrarDataUsuario())

        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <>
            <div className="stepper__steps steps">
                <div className={`steps__circle ${generalState.pasoActual === 1 ? "steps__circle--selected" : ""}`}>
                    1
                </div>
                <h3 className={`steps__title ${generalState.pasoActual === 1 ? "steps__title--selected" : ""}`}>
                    Planes y coberturas
                </h3>
                <img src={line} alt="line" />
                <div className={`steps__circle ${generalState.pasoActual === 2 ? "steps__circle--selected" : ""}`}>
                    2
                </div>
                <h3 className={`steps__title ${generalState.pasoActual === 2 ? "steps__title--selected" : ""}`}>
                    Resumen
                </h3>
            </div>
            <div className="steps__mobile">
                <button onClick={regresar}>
                    <img src={arrowLeft} alt="arrowLeft" />
                </button>
                <p>Paso {generalState.pasoActual} de 2</p>
                <div className="progress">
                    <div style={{ width: generalState.pasoActual === 1 ? "50%" : "100%" }} />
                </div>
            </div>
        </>
    )
}

export default Steps