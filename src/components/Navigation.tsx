import { Link } from "react-router";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation_list">
                <li className="navigation_list__list-item">
                    <Link className="active" to="/shop">
                        shop
                    </Link>
                </li>
                <li className="navigation_list__list-item">
                    <Link className="active" to="/about">
                        about
                    </Link>
                </li>
                <li className="navigation_list__list-item">
                    <Link className="active" to="/contact">
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
