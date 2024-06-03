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
    const [imageIndex, setImageIndex] = useState(0);

    const [images, setImages] = useState([
        carStock,
        womanStock,
        carStock,
        womanStock,
        carStock,
        womanStock,
        carStock,
        womanStock,
    ]);

    function showNextImage(){
        setImageIndex(index => {
            if(index === images.length - 1) return 0
            return index + 1
        })
    }

    function showPreviousImage(){

        setImageIndex(index => {
            if(index === 0) return images.length - 1
            return index - 1
        })
    }

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

            <button onClick={showPreviousImage} className='HomeBannerButtonLeft'>
                LEFT
            </button>
            <button onClick={showNextImage} className='HomeBannerButtonRight'>
                Right
            </button>
        </div>
    )
}

export default Banner;
