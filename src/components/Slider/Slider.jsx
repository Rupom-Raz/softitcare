import React, { Component } from "react";
import Slider from "react-slick";
import pic1 from "../../assets/audioJungle.png";
import pic2 from "../../assets/codecanon.png";
import pic3 from "../../assets/graphicriver.png";
import pic4 from "../../assets/themeforest.png";
import "./Slider.css";

export default class SliderComponent extends Component {
    render() {
        const settings = {

            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
        };
        return (
            <div>
                <div className=" mt-5">
                    <Slider  {...settings}>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                        <div>
                            <img src={pic2} alt="" />
                        </div>
                        <div>
                            <img src={pic3} alt="" />
                        </div>
                        <div>
                            <img src={pic4} alt="" />
                        </div>
                        <div>
                            <img src={pic2} alt="" />
                        </div>
                        <div>
                            <img src={pic3} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}
