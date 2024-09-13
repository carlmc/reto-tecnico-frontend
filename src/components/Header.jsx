import React from "react"
import logo from '../images/logo.svg'
import phone from '../images/phone.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="wrapper__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="wrapper__call">
                    <p className="wrapper__call--text">¡Compra por este medio!</p>
                    <a href="tel:(01) 411 6001" className="wrapper__call--number">
                        <img src={phone} alt="phone" />
                        (01) 411 6001
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header