import { useState } from "react";
import { HEADER_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login')
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_IMG} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button onClick={() => {
                        btnLogin === 'Login' ? setBtnLogin('Logout') : setBtnLogin('Login')
                    }}>{btnLogin}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;