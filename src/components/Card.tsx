import { Link } from "react-router";

import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Card = () => {
    return (
        <div className="card">
            <Link to={""}>
                <img src="https://imgstore.alta.ge/images/cdc0d35a-f051-49da-bb18-df6f56d59b70_Thumb.jpeg" alt="..." />

                <p>Intel COre i7 9700K</p>
                <h5>499.99$</h5>
            </Link>
            <div className="card__actions">
                <button>
                    <FaHeart />
                </button>
                <button>
                    <FaCartShopping />
                </button>
            </div>
        </div>
    );
};

export default Card;
