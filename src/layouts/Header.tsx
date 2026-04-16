import logo from "../assets/images/logo.png";
import Navigation from "../components/Navigation";

import { IoIosBookmark } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="header">
            <div className="page-logo">
                <img src={logo} alt="..." className="page-logo_image" />
            </div>
            <Navigation />

            <div className="header-actions">
                <div className="header-actions__item">
                    <button className="header-actions__btn">
                        <IoIosBookmark />
                    </button>
                </div>

                <div className="header-actions__item">
                    <button className="header-actions__btn">
                        <FaCartShopping />
                    </button>
                </div>

                <div className="header-actions__item header-actions__price">
                    <span>span:</span>
                    <h4>$159.99</h4>
                </div>
            </div>
        </header>
    );
};

export default Header;
