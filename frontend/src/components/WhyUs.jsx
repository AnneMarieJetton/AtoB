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
                    <span className='HomeWhyUsTitle'>Affordable</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        More text here about it skjdf nkauejn nfafj jnfe fn afna jeneafe fnakufeh af fa
                    </div>
                </div>
                <div className='HomeWhyUsSection'>
                    <div className='HomeWhyUsSectionImageContainer'>
                        <img className='HomeWhyUsSectionImage' src={smileIcon}></img>
                    </div>
                    <span className='HomeWhyUsTitle'>Local</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        More text here about it skjdf nkauejn nfafj jnfe fn afna jeneafe fnakufeh af fa
                    </div>
                </div>
                <div className='HomeWhyUsSection'>
                    <div className='HomeWhyUsSectionImageContainer'>
                        <img className='HomeWhyUsSectionImage' src={smileIcon}></img>
                    </div>
                    <span className='HomeWhyUsTitle'>Hassle-Free</span>
                    <div className='HomeWhyUsSectionTextContainer'>
                        More text here about it skjdf nkauejn nfafj jnfe fn afna jeneafe fnakufeh af fa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs