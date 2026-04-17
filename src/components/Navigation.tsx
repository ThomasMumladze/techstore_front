import { Link } from "react-router";

interface Props {
    locationPath: string;
}

const Navigation = (props: Props) => {
    const { locationPath } = props;
    return (
        <nav className="navigation">
            <ul className="navigation_list">
                <li className="navigation_list__list-item">
                    <Link className={`${locationPath == "/shop" ? "active" : ""}`} to="/shop">
                        shop
                    </Link>
                </li>
                <li className="navigation_list__list-item">
                    <Link className={`${locationPath == "/about" ? "active" : ""}`} to="/about">
                        about
                    </Link>
                </li>
                <li className="navigation_list__list-item">
                    <Link className={`${locationPath == "/contact" ? "active" : ""}`} to="/contact">
                        contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
