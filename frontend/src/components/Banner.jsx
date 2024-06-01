import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

import '../styles/Banner.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        carStock,
        carStock,
        carStock,
        carStock,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            // Cycle through images
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    return (
        <div className='HomeBanner'>
            {images.map((image, index) => (
                <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    )
}

export default Banner;