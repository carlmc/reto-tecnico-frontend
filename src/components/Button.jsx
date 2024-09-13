import React from "react"

const Button = ({ title, onClick, color, isLoading }) => {
    return (
        <button
            type="submit"
            className={`button ${color === "secondary" ? "button--secondary" : ""}`}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? "Cargando..." : title}
        </button>
    )
}

export default Button