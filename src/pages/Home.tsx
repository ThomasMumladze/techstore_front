import React from "react";

import DropDawnMenu from "../components/DropDawnMenu";

import { HiMenu } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";
import useDropdown from "../hooks/useDropdown";

const Home = () => {
    const { dropdownRef, isOpen, toggleDropdown } = useDropdown();

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

                    <div className="col-2__item"></div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;
