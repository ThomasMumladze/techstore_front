import { Link } from "react-router";
import logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <p>Address: Tbilisi georgia</p>
                    <p>Phone: 599 95 95 95</p>
                    <p>Email: hello@gmail.com</p>
                </div>
                <div>ws</div>
            </div>
        </footer>
    );
};

export default Footer;
