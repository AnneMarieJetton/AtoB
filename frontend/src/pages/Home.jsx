import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';

import '../styles/Home.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

const Home = () => {
    return (
        <div className='Home'>
            <NavBar />

            {/* banner */}
            <Banner/>

            {/* featured */}
            <Featured />

            {/* testimonials */}
            <Testimonials />

            {/* whyUs */}
            <WhyUs />

            <Footer />
        </div>
    )
}

export default Home