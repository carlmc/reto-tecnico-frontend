export const obtenerReglaNumerico = (valor) => {
	valor = valor.toString().trim()
    
	if (valor !== null) {
		let salida = valor.replace(/[^0-9 \u00f1\u00d1]/gi, '')
		if (!isNaN(salida) && salida !== '') {
			return salida
		} else {
			return ''
		}
	} else {
		return ''
	}
}

export const obtenerEdadExacta = (fecha) => {
    let nacimiento = new Date(fecha)
    let hoy = new Date()
    let edad = hoy.getFullYear()
    let año = nacimiento.getFullYear()
    let edadActual = edad - año
    let mesesFechaActual = hoy.getMonth() + 1
    let mesesNacimiento = nacimiento.getMonth() + 1
    let diasActual = hoy.getDate()
    let obtenerFechaSeparadaPorDia = nacimiento.getDate()
    let cumpleaños = mesesNacimiento < mesesFechaActual ? 0 : 
        mesesNacimiento === mesesFechaActual && diasActual >= obtenerFechaSeparadaPorDia ? 0 : -1 
    let edadExacta = edadActual + cumpleaños

    return edadExacta
}