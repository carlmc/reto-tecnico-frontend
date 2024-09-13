import * as ACTIONS_TYPE from '../actions/actions-type'

export const initialState = {
    pasoActual: 0,
    usuario: {
        tipoDocumento: 'DNI',
        numDocumento: null,
        numCelular: null
    },
    validacion: {
        numDocumento: {
            mensaje: '',
            estado: false
        },
        numCelular: {
            mensaje: '',
            estado: false
        },
        privacy: {
            mensaje: '',
            estado: false
        },
        communication: {
            mensaje: '',
            estado: false
        }
    },
    planes: [],
    planSeleccionado: null
}

export const GeneralReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS_TYPE.GUARDAR_DATA_INICIO: {
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    [action.payload.campo]: action.payload.valor
                }
            }
        }

        case ACTIONS_TYPE.GUARDAR_DATA_USUARIO: {
            return {
                ...state,
                usuario: {
                    ...state.usuario,
                    ...action.payload.data
                }
            }
        }

        case ACTIONS_TYPE.MENSAJE_VALIDACION: {
            return {
                ...state,
                validacion: {
                    ...state.validacion,
                    [action.payload.campo]: {
                        mensaje: action.payload.mensaje,
                        estado: action.payload.estado
                    }
                }
            }
        }

        case ACTIONS_TYPE.ACTUALIZAR_PASO_ACTUAL: {
            let donde = 0
            if (action.payload.direccion === 'next') {
                donde = state.pasoActual + 1
            } else if (action.payload.direccion === 'back') {
                donde = state.pasoActual - 1
            }

            return {
                ...state,
                pasoActual: donde
            }
        }

        case ACTIONS_TYPE.BORRAR_DATA_USUARIO: {
            return {
                ...state,
                usuario: {
                    tipoDocumento: 'DNI',
                    numDocumento: null,
                    numCelular: null
                },
                planes: [],
                planSeleccionado: null
            }
        }

        case ACTIONS_TYPE.GUARDAR_PLANES: {
            return {
                ...state,
                planes: action.payload.planes
            }
        }
        
        case ACTIONS_TYPE.SELECCIONAR_PLAN: {
            return {
                ...state,
                planSeleccionado: action.payload.plan
            }
        }

        default: {
            return state
        }
    }
}