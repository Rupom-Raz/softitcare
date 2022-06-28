import React from "react";
import logo from "../../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMarker,
    faPhone,
    faEnvelope,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="logo">
                                <img src={logo} alt="" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore.
                                </p>
                                <p>
                                    magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-2">
                            <div className="contact">
                                <h2 style={{ color: "#fff" }}>Contact us</h2>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faMarker}
                                        style={{ color: "fff" }}
                                    />
                                    <a style={{ paddingLeft: "10px" }} href="#">
                                        1234, Parkstreet Avenue, NewYork
                                    </a>{" "}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{ color: "fff" }}
                                    />
                                    <a
                                        style={{ paddingLeft: "10px" }}
                                        href="tel:+12345678900"
                                    >
                                        +123 456 78900
                                    </a>
                                    ,
                                    <a
                                        style={{ paddingLeft: "10px" }}
                                        href="tel:+00987654321"
                                    >
                                        {" "}
                                        +009 876 54321
                                    </a>{" "}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{ color: "fff" }}
                                    />
                                    <a
                                        style={{ paddingLeft: "10px" }}
                                        href="mailto:info@e-feri.com"
                                    >
                                        info@e-feri.com
                                    </a>
                                    ,
                                    <a href="mailto:e-feri@info.com">
                                        {" "}
                                        e-feri@info.com
                                    </a>{" "}
                                </p>
                                <p>
                                    <FontAwesomeIcon
                                        style={{ color: "fff" }}
                                        icon={faGlobe}
                                    />
                                    <a
                                        style={{ paddingLeft: "10px" }}
                                        href="www.e-feri.com"
                                    >
                                        www.e-feri.com
                                    </a>
                                    ,
                                    <a href="www.infoferi.com">
                                        www.infoferi.com
                                    </a>{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="account">
                                <h2>My account</h2>
                                <a href="my-account.html">my account</a>
                                <a href="shopping-cart.html">wishlist</a>
                                <a href="shopping-cart.html">shopping cart</a>
                                <a href="#">compare</a>
                                <a href="checkout.html">checkout</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
