import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';

// import '../styles/Home.css';
import '../styles/Featured.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

import {useRef } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (

        <div className='HomeFeaturedCars'>
            <div className='HomeFeaturedCarsContent'>
                <span className='HomeFeaturedCarsTitle'>Featured Cars</span>
                <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={false}
                infinite={true}
                >
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                            <div className='cardContainer'><CarCard/></div>
                </Carousel>
            </div>
        </div>
    );
}

export default Featured;