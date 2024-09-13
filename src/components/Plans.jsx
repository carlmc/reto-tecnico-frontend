import React, { useContext, useState } from "react"

import Steps from "./Steps"
import ListOfPlans from "./ListOfPlans"
import Summary from "./Summary"

import arrowLeft from '../images/iconArrowLeft.svg'
import iconCheck from '../images/check.svg'
import iconProtection from '../images/iconProtection.svg'
import iconAddUser from '../images/iconAddUser.svg'

import GeneralContext from "../store/context/general-context"
import * as GeneralActions from "../store/actions/general-actions"

const Plans = () => {
    const { state: generalState, dispatch: generalDispatch } = useContext(GeneralContext)

    const [ option, setOption ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false)

    const regresar = () => {
        generalDispatch(GeneralActions.actualizarPasoActual("back"))

        if (generalState.pasoActual === 1)
            generalDispatch(GeneralActions.borrarDataUsuario())

        window.scrollTo({ top: 0, left: 0 })
    }

    const seleccionarPlan = async (option) => {
        setOption(option)

        try {
            setIsLoading(true)
            const urlUser = "https://rimac-front-end-challenge.netlify.app/api/plans.json"
            let response = await fetch(urlUser)
            let data = await response.json()

            let edad = generalState.usuario.edad
            let planesFilter = data.list.filter(plan => plan.age >= edad).map(p => {
                return {
                    nombre: p.name,
                    edad: p.age,
                    descripcion: p.description,
                    precioOriginal: p.price,
                    precioFinal: option === 1 ? p.price : p.price - p.price*0.05,
                    opcion: option
                }
            })

            generalDispatch(GeneralActions.guardarPlanes(planesFilter))
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="stepper">
            <Steps/>

            {generalState.pasoActual < 2 && <div className="divider"></div>}

            <div className="stepper__container">
                <div className="back" onClick={regresar}>
                    <button>
                        <img src={arrowLeft} alt="arrowLeft" />
                    </button>
                    <span>Volver</span>
                </div>

                {generalState.pasoActual === 1 ? (
                    <>
                        <h1 className="stepper__container--title">
                            {generalState.usuario.nombre} ¿Para quién deseas cotizar?
                        </h1>
                        <h6 className="stepper__container--subtitle">
                            Selecciona la opción que se ajuste más a tus necesidades.
                        </h6>

                        <div className="group__options">
                            <div
                                className={`option ${option === 1 ? "option--selected" : ""}`}
                                onClick={() => seleccionarPlan(1)}
                            >
                                <div className={`option__check ${option === 1 ? "option__check--selected" : ""}`}>
                                    {option === 1 && <img src={iconCheck} alt="iconCheck" />}
                                </div>
                                <img src={iconProtection} alt="iconProtection" className="option__img" />
                                <h1 className="option__title">Para mí</h1>
                                <h3 className="option__description">
                                    Cotiza tu seguro de salud y agrega familiares si así lo deseas.
                                </h3>
                            </div>
                            <div
                                className={`option ${option === 2 ? "option--selected" : ""}`}
                                onClick={() => seleccionarPlan(2)}
                            >
                                <div className={`option__check ${option === 2 ? "option__check--selected" : ""}`}>
                                    {option === 2 && <img src={iconCheck} alt="iconCheck" />}
                                </div>
                                <img src={iconAddUser} alt="iconAddUser" className="option__img" />
                                <h1 className="option__title">Para alguien más</h1>
                                <h3 className="option__description">
                                    Realiza una cotización para uno de tus familiares o cualquier persona.
                                </h3>
                            </div>
                        </div>
                        {isLoading ? (
                            <div className="loading">Cargando...</div>
                        ) : (
                            <ListOfPlans plans={generalState.planes} />
                        )}
                    </>
                ) : (
                    <Summary/>
                )}
            </div>
        </section>
    )
}

export default Plans