import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from 'react-router';
import { UserContext } from "../context/UserContext";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between border shadow-lg mb-4">
            <div className="img-section">
                <Link to="/">
                <img className="w-28" src={LOGO_URL} />
                </Link>
            </div>

            <div className="flex-row">
                <ul className="flex p-4 m-4">
                    <li className="p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="p-4 cursor-pointer border-gray-300" onClick={() => {
                        btnName === "Login" ?
                            setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName} {loggedInUser}</button>
                    
                </ul>
            </div>
        </div>
    )

}