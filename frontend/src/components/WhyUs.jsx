import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

// import '../styles/Home.css';
import '../styles/WhyUs.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const WhyUs = () => {
    return (
        <div className='HomeWhyUs'>
            <span className='HomeWhyUsTitle'>Why Us?</span>
            <div className='HomeWhyUsSections'>
                <div className='HomeWhyUsSection'>
                    <div className='HomeWhyUsSectionImageContainer'>
                        <img className='HomeWhyUsSectionImage' src={smileIcon}></img>
                    </div>
                    <span className='HomeWhyUsTitle'>Easy</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        {/* We guarantee the easiest pickup and drop off process in the industry */}
                        We guarantee the easiest pickup and drop off process in the industry 
                    </div>
                </div>
                <div className='HomeWhyUsSection'>
                    <div className='HomeWhyUsSectionImageContainer'>
                        <img className='HomeWhyUsSectionImage' src={smileIcon}></img>
                    </div>
                    <span className='HomeWhyUsTitle'>Personable</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        {/* Every reservation is handled by a human. No clicking keys through robot menus and no re-routed calls to any call centers. */}
                        Every reservation is handled by a human. No clicking keys through robot menus and no re-routed calls to any call centers.
                    </div>
                </div>
                <div className='HomeWhyUsSection'>
                    <div className='HomeWhyUsSectionImageContainer'>
                        <img className='HomeWhyUsSectionImage' src={smileIcon}></img>
                    </div>
                    <span className='HomeWhyUsTitle'>Quality</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        {/* Each vehicle on our fleet is hand selected and strictly maintained. You can look forward to a safe and comfortable trip.  */}
                        Each vehicle on our fleet is hand selected and strictly maintained. You can look forward to a safe and comfortable trip.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs