import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
const Navbar = ({ cartNumber }) => {
    return (
        <>
            <div className="container-fluid">
            <div className="container menu">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink
                                    exact
                                    className="navbar-brand mx-auto"
                                    to="/"
                                >
                                    <img
                                        style={{ width: "120px" }}
                                        src={logo}
                                        alt=""
                                    />
                                </NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    data-target="/navbarSupportedContent"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
                                        <li className="nav-item ">
                                            <NavLink
                                                exact
                                                activeClassName="menu_active"
                                                className="nav-link active"
                                                aria-current="page"
                                                to="/"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                activeClassName="menu_active"
                                                className="nav-link"
                                                to="/about"
                                            >
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item ">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                to="/shop"
                                                className="nav-link"
                                            >
                                                Shop
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                activeClassName="menu_active"
                                                className="nav-link"
                                                to="/pages"
                                            >
                                                Pages
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                activeClassName="menu_active"
                                                className="nav-link"
                                                to="/blog"
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/contact"
                                            >
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li
                                            className="nav-item"
                                            style={{ marginLeft: "100px" }}
                                        >
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/cart"
                                            >
                                                <FontAwesomeIcon
                                                    style={{ color: "tomato" }}
                                                    icon={faSearch}
                                                />
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                activeClassName="menu_active"
                                                exact
                                                className="nav-link"
                                                to="/cart"
                                            >
                                                <FontAwesomeIcon
                                                    style={{ color: "tomato" }}
                                                    icon={faBagShopping}
                                                />
                                                <span
                                                    style={{
                                                        color: "tomato",
                                                        paddingLeft: "10px",
                                                    }}
                                                >
                                                    2 Items
                                                </span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Navbar;
