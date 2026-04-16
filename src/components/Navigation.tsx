import "../styles/components/_navigation.scss";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation_list">
                <li className="navigation_list__list-item">
                    <a className="active" href="">
                        shop
                    </a>
                </li>
                <li className="navigation_list__list-item">
                    <a className="active" href="">
                        about
                    </a>
                </li>
                <li className="navigation_list__list-item">
                    <a className="active" href="">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
