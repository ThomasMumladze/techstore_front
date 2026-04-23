import React from "react";

import DropDawnMenu from "../components/DropDawnMenu";

import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router";

import useDropdown from "../hooks/useDropdown";

import asus from "../assets/images/asus-rog.svg";
import logitech from "../assets/images/logitech-gaming-2.svg";
import nvidia from "../assets/images/nvidia-7.svg";
import msi from "../assets/images/msi-gaming.svg";
import dell from "../assets/images/Dell_Logo.svg.png";

import Button from "../components/Button";
import Card from "../components/Card";

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
        {
            name: "nvidia",
            img: nvidia,
        },
        {
            name: "msi",
            img: msi,
        },
        {
            name: "dell",
            img: dell,
        },
    ];

    return (
        <React.Fragment>
            <section className="hero">
                <div className="col-1" ref={dropdownRef}>
                    <Button onClick={toggleDropdown} className="col-1__btn">
                        {!isOpen ? <HiMenu /> : <HiMenuAlt1 />} categories
                    </Button>
                    <DropDawnMenu isOpen={!isOpen} />
                </div>
                <div className="col-2">
                    <div className="col-2__search">
                        <input type="text" placeholder="search product" />
                        <Button>search</Button>
                    </div>

                    <div className="col-2__item">
                        <div className="col-2__item__content">
                            <span>computer parts</span>
                            <h2>
                                High-Performance <br /> Components
                            </h2>

                            <Button>
                                <Link to={"/shop"}>shop now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand">
                <div className="brand__slider">
                    {brands?.map((brand) => (
                        <div className="brand__item" key={brand.name}>
                            <img src={brand.img} alt={brand.name} />
                            <h5>
                                <Link to={``}>{brand.name}</Link>
                            </h5>
                        </div>
                    ))}
                </div>
            </section>

            <section className="featured-products">
                <h1 className="featured-products__title">Featured Products</h1>

                <div className="featured-products__grid">
                    <Card />
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
