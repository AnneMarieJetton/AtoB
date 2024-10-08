import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

import '../styles/Banner.css';
import carStock from '../assets/AtoB_car_stock.png';
import carStock2 from '../assets/carStock2.jpg';
import carStock3 from '../assets/carStock3.jpg';
import carStock4 from '../assets/carStock4.jpg';
import carStock5 from '../assets/carStock5.jpg';
import AtoBCar1 from '../assets/AtoBCar1.jpg';
import AtoBCar2 from '../assets/AtoBCar2.png';
import AtoBCar3 from '../assets/yaris_adjusted.png';
import womanStock from '../assets/personStock1.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const [images, setImages] = useState([
        AtoBCar1,
        AtoBCar2,
        AtoBCar3,
        carStock,
        carStock2,
        carStock3,
        carStock4,
        carStock5,
    ]);

    // const responsive = {
    //     superLargeDesktop: {
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 1
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 1
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 1
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };

    useEffect(() => {
        const intervalId = setInterval(showNextImage, 5000); // Set interval to switch image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup function to clear the interval
    }, [imageIndex]); // useEffect will run when imageIndex changes

    function showNextImage(){
        setImageIndex(index => {
            if(index === images.length - 1) return 0
            return index + 1
        })
    }

    // function showPreviousImage(){

    //     setImageIndex(index => {
    //         if(index === 0) return images.length - 1
    //         return index - 1
    //     })
    // }

    return (
        <div className='HomeBanner'>

            {/* <div className='HomeBannerContainer'> */}
            <div className='HomeBannerImgContainer'>
                {images.map(url => (
                    <img 
                    key={url} 
                    src={url} 
                    className='HomeBannerImg'
                    style={{ translate: `${-100 * imageIndex}%` }}
                    />
                ))}
            </div>

            {/* <div className='CenterHomeBookingWidget'> */}
            <div className='HomeBookingWidget'>
                <span className="HomeBookingWidgetTitle">Fast and easy car rental at the Provo Airport</span>
                <span className="HomeBookingWidgetTitle2">Give us a call at (801)-477-5067</span>

                {/* desktop */}
                <div className='HomeBookingWidgetInfobox'>
                    <div className='HomeBookingWidgetInfoBoxSection'>
                        <span className='HomeBookingWidgetInfoboxSectionLabel'>PICK UP LOCATION</span>
                        <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                    </div>
                    <div className='HomeBookingWidgetInfoBoxSection'>
                        <span className='HomeBookingWidgetInfoboxSectionLabel'>FROM</span>
                        <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                    </div>
                    <div className='HomeBookingWidgetInfoBoxSection'>
                        <span className='HomeBookingWidgetInfoboxSectionLabel'>RETURN LOCATION</span>
                        <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                    </div>
                    <div className='HomeBookingWidgetInfoBoxSection'>
                        <span className='HomeBookingWidgetInfoboxSectionLabel'>UNTIL</span>
                        <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                    </div>
                    <div className='HomeBookingWidgetInfoBoxSection'>
                        {/* <span className='HomeBookingWidgetInfoboxSectionButtonLabel'></span> */}
                        <div className='HomeBookingWidgetInfoboxSectionInputButton'>Book Now</div>
                    </div>
                </div>

                {/* mobile */}
                <div className='HomeBookingWidgetInfoboxMobile'>
                    <div className='HomeBookingWidgetInfoboxMobileRow'>
                        <div className='HomeBookingWidgetInfoBoxSection'>
                            <span className='HomeBookingWidgetInfoboxSectionLabel'>PICK UP LOCATION</span>
                            <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                        </div>
                        <div className='HomeBookingWidgetInfoBoxSection'>
                            <span className='HomeBookingWidgetInfoboxSectionLabel'>FROM</span>
                            <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                        </div>
                    </div>
                    <div className='HomeBookingWidgetInfoboxMobileRow'>
                        <div className='HomeBookingWidgetInfoBoxSection'>
                            <span className='HomeBookingWidgetInfoboxSectionLabel'>RETURN LOCATION</span>
                            <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                        </div>
                        <div className='HomeBookingWidgetInfoBoxSection'>
                            <span className='HomeBookingWidgetInfoboxSectionLabel'>UNTIL</span>
                            <div className='HomeBookingWidgetInfoboxSectionInput'>text</div>
                        </div>
                    </div>
                    <div className='HomeBookingWidgetInfoBoxButtonSection'>
                        <div className='HomeBookingWidgetInfoboxSectionInputButton'>Book Now</div>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </div>
    )
}

export default Banner;
