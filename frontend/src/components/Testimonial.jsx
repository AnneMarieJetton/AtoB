import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

// import '../styles/Home.css';
import '../styles/Testimonials.css';
import carStock from '../assets/AtoB_car_stock.png';
import personStock1 from '../assets/personStock1.jpg';
import personStock2 from '../assets/personStock2.jpg';
import personStock3 from '../assets/personStock3.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const Testimonial = ({ imageSrc, text }) => {
    return (

            <div className='HomeTestimonial'>
                <div className='HomeTestimonialsImageContainer'>
                    <img className='HomeTestimonialsImage' src={imageSrc} alt="Testimonial"></img>
                </div>
                <div className='HomeTestimonialsTextContainer'>
                    {text}
                </div>
            </div>
    )
}

export default Testimonial