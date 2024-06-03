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
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const Banner = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const [images, setImages] = useState([
        carStock,
        carStock2,
        carStock3,
        carStock4,
        carStock5,
    ]);

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

            {/* <button onClick={showPreviousImage} className='HomeBannerButtonLeft'>
                LEFT
            </button>
            <button onClick={showNextImage} className='HomeBannerButtonRight'>
                Right
            </button> */}

            <div className='HomeBookingWidget'>
                <span className="HomeBookingWidgetTitle">Provo's Local Car Rental</span>
                <span className="HomeBookingWidgetTitle2">Text and Stuff</span>
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
            </div>
        </div>
    )
}

export default Banner;
