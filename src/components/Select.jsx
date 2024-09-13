import React, { useId } from "react"
import arrow from '../images/arrowDown.svg'

const Select = () => {
    const id = useId()
    return (
        <label
            htmlFor={id}
            className={`select no-radius-tr no-radius-br`}
        >
            <img src={arrow} alt='arrow' className="select__arrow" />
            <select name="" id={id}>
                <option value='DNI'>DNI</option>
            </select>
        </label>
    )
}

export default Select