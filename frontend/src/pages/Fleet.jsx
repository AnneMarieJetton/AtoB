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

import '../styles/Fleet.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/personStock1.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

import FleetList from '../components/FleetList'

const Fleet = () => {
    return (
        <div className='Fleet'>
            <NavBar />

            <FleetList />

            <Footer />
        </div>
    )
}

export default Fleet