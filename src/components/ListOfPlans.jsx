import React, { useContext } from "react"

import iconHome from "../images/iconHome.svg"
import Button from "./Button"

import GeneralContext from "../store/context/general-context"
import * as GeneralActions from "../store/actions/general-actions"

const ListOfPlans = ({ plans }) => {
    const { dispatch: generalDispatch } = useContext(GeneralContext)

    const seleccionarPlan = (plan) => {
        generalDispatch(GeneralActions.seleccionarPlan(plan))
        generalDispatch(GeneralActions.actualizarPasoActual('next'))
    }

    return (
        <div className="list__plans">
            {plans.map((plan, index) => {
                const { descripcion, nombre, precioOriginal, precioFinal, opcion } = plan
                return (
                    <div key={index} className="plan">
                        {nombre === 'Plan en Casa y Clínica' ? <div className="plan__recommended">Plan recomendado</div> : null}
                        <div className="plan__header">
                            <div className="group">
                                <h1 className="group__name">{nombre}</h1>
                                <h6 className="group__h6">COSTO DEL PLAN</h6>
                                {opcion === 2 ? <h5 className="group__h5">${precioOriginal} antes</h5> : null}
                                <span className="group__price">${precioFinal} al mes</span>
                            </div>
                            <img src={iconHome} alt="iconHome" />
                        </div>

                        <div className="plan__separator" />

                        <ul>
                            {descripcion.map((string, index) => (
                                <li key={index}>{string}</li>
                            ))}
                        </ul>

                        <Button
                            color="secondary"
                            title="Seleccionar Plan"
                            onClick={() => seleccionarPlan(plan)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfPlans