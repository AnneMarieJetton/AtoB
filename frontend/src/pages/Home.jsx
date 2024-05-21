import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <NavBar />
            <div className='HomeBanner'>
                banner
            </div>
            <div className='HomeFeaturedCars'>
                featured
            </div>
            <div className='HomeTestimonials'>
                testimonials
            </div>
            <div className='HomeWhyUs'>
                whyus
            </div>
            <Footer />
        </div>
    )
}

export default Home