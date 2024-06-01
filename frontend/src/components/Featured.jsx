import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

import '../styles/Home.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const Featured = () => {
    return (
        <div className='HomeFeaturedCars'>
            <button className='HomeFeaturedCarsButtons'>
                <img src={leftArrow}></img>
            </button>
            <div className='HomeFeaturedCarsContent'>
                <span className='HomeFeaturedCarsTitle'>Featured Cars</span>
                <div className='HomeFeaturedCarsCards'>
                    <CarCard />
                    <CarCard />
                    <CarCard />
                </div>
            </div>
            <button className='HomeFeaturedCarsButtons'>
                <img src={rightArrow}></img>
            </button>
        </div>
    )
}

export default Featured