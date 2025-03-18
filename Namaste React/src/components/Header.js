import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from 'react-router';

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header-container">
            <div className="img-section">
                <img className="img" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ?
                            setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )

}