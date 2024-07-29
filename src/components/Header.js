import { useState } from "react";
import { HEADER_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnLogin, setBtnLogin] = useState('Login')
    return (
        <div className="flex justify-between bg-green-200 items-center">
            <div className="logo-container">
                <img className="w-24" src={HEADER_IMG} />
            </div>
            <div className="p-4 m-4 ">
                <ul className="flex">
                    <li className="m-2 p-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="m-2 p-2">
                        <Link to="/grocery">Grocery</Link>
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