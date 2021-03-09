import React from 'react'
// import PropTypes from 'prop-types'
import Slider from "react-slick";
import './Banner.css';
import images from '../../constants/images';
import { SampleNextArrow, SamplePrevArrow } from '../../features/Products/pages/Details';

function Banner(props) {

    const settings = {
        fade: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div  className="banner">
            <Slider {...settings}>
                <div >
                    <img src={images.banner_mens_wear} alt="oppp" width="100%" height="100vh" className="banner-img"/>
                </div>
                <div >
                    <img src={images.banner_womens_wear} alt="oppp" width="100%" className="banner-img"/>
                </div>
                <div >
                    <img src={images.banner_clothes} alt="oppp" width="100%" className="banner-img"/>
                </div>
            </Slider>
        </div>
    )
}

Banner.propTypes = {}

export default Banner

