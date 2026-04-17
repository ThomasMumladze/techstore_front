import { Link, useLocation } from "react-router";

import logo from "../assets/images/logo.png";
import Navigation from "../components/Navigation";

import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    const location = useLocation().pathname;
    return (
        <header className="header">
            <div className="page-logo">
                <Link to={"/"}>
                    <img src={logo} alt="..." className="page-logo_image" />
                </Link>
            </div>
            <Navigation locationPath={location} />

            <div className="header-actions">
                <div className="header-actions__item">
                    <button className="header-actions__btn">
                        <FaHeart />
                    </button>
                </div>

                <div className="header-actions__item">
                    <button className="header-actions__btn">
                        <FaCartShopping />
                    </button>
                </div>

                <div className="header-actions__item header-actions__price">
                    <span>total:</span>
                    <h4>$159.99</h4>
                </div>
            </div>
        </header>
    );
};

export default Header;
