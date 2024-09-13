import React, { useId } from "react"

const Input = ({ type, label, name, border, value, onChange, maxLength, error }) => {
    const id = useId()
    
    return (
        <label
            htmlFor={id}
            className={`input ${border ? "no-radius-tl no-radius-bl no-border-left" : ""} ${error ? "errorB" : ""}`}
        >
            {label}
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={maxLength}
            />
        </label>
    )
}

export default Input