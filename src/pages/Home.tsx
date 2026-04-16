import React from "react";

import DropDawnMenu from "../components/DropDawnMenu";

import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import useDropdown from "../hooks/useDropdown";
import { Link } from "react-router";

import asus from "../assets/images/asus-rog.svg";
import logitech from "../assets/images/logitech-gaming-2.svg";

const Home = () => {
    const { dropdownRef, isOpen, toggleDropdown } = useDropdown();

    const brands = [
        {
            name: "asus",
            img: asus,
        },
        {
            name: "logitech",
            img: logitech,
        },
    ];

    return (
        <React.Fragment>
            <section className="hero">
                <div className="col-1" ref={dropdownRef}>
                    <button className="col-1__btn" onClick={toggleDropdown}>
                        {!isOpen ? <HiMenu /> : <HiMenuAlt1 />} categories
                    </button>
                    <DropDawnMenu isOpen={!isOpen} />
                </div>
                <div className="col-2">
                    <div className="col-2__search">
                        <input type="text" placeholder="search product" />
                        <button>Search</button>
                    </div>

                    <div className="col-2__item">
                        <div className="col-2__item__content">
                            <span>computer parts</span>
                            <h2>
                                High-Performance <br /> Components
                            </h2>
                            <Link to={"/shop"}>shop now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand">
                {brands?.map((brand) => (
                    <div className="brand__item" key={brand.name}>
                        <img src={brand.img} alt={brand.name} />
                        <h5>
                            <Link to={``}>{brand.name}</Link>
                        </h5>
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
};

export default Home;
