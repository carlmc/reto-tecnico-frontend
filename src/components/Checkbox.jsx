import React from "react"
import check from '../images/check.svg'

const Checkbox = ({ checked, setChecked, label, error }) => {
    return (
        <div className="checkbox" onClick={setChecked}>
            <div className={`checkbox__box ${checked ? "checkbox__box--checked" : ""} ${error ? "errorB" : ""}`}>
                {checked && (<img src={check} alt="check" />)}
            </div>
            <p className={`checkbox__label ${error ? "errorL" : ""}`}>{label}</p>
        </div>
    )
}

export default Checkbox