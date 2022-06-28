import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/about" element = {<About />} />
                    <Route path="/shop" element = {<Shop />} />
                    <Route path="/pages" element = {<Pages />} />
                    <Route path="/blog" element = {<Blog />} />
                    <Route path="/contact" element = {<Contact
                     />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
