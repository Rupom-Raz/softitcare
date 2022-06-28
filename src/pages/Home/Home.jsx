import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SliderComponent from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="home mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="home-heading text-center">
                                <h2>Contact</h2>
                                <p>
                                    <span href="/">home</span>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <FontAwesomeIcon icon={faChevronRight} />

                                    <span className="contact">contact</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact section */}
            <div className="container mt-5">
                <div className="row">
                    {/* Login */}
                    <div className="col-md-6 login">
                        <h3>Login your account</h3>
                        <form action="">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                />
                                <input
                                    className="form-control mt-3"
                                    type="text"
                                    placeholder="Password"
                                />
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div class="mb-3 form-check">
                                            <input
                                                type="checkbox"
                                                class="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="exampleCheck1"
                                                style={{ color: "#333" }}
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <span
                                            style={{
                                                marginLeft: "150px",
                                                color: "#de4644",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Forget password?
                                        </span>
                                    </div>
                                </div>
                                <button className="login_btn">Login</button>
                            </div>
                        </form>
                    </div>
                    {/* Registration */}
                    <div className="col-md-6 register">
                        <h3>
                            Register now{" "}
                            <span className="reg_word">
                                (if Don't Have Any Account)
                            </span>
                        </h3>
                        <form className="form-group" action="">
                            <div className="row ">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                            <div className="mb-3 form-check mt-2">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label
                                    className="form-check-label"
                                    for="exampleCheck1"
                                    style={{ color: "#333" }}
                                >
                                    I Accept All The Terms And Condition
                                    Including Privacy Policy
                                </label>
                            </div>
                            <button className="reg_btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Slider Section */}
            <SliderComponent />

            {/* Footer  */}

            <Footer />
        </>
    );
};

export default Home;
