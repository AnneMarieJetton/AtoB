import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

const Home = () => {
    return (
        <div className='Home'>
            <NavBar />
            {/* banner */}
            <div className='HomeBanner'>
                <img src={carStock}></img>
            </div>

            {/* featured */}
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

            {/* testimonials */}
            <div className='HomeTestimonials'>
                <button className='HomeTestimonialsButtons'>
                    <img src={leftArrow}></img>
                </button>
                <div className='HomeTestimonialsImageContainer'>
                    <img className='HomeTestimonialsImage' src={womanStock}></img>
                </div>
                <div className='HomeTestimonialsTextContainer'>
                    We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf
                </div>
                <button className='HomeTestimonialsButtons'>
                    <img src={rightArrow}></img>
                </button>
            </div>

            {/* whyUs */}
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

            <Footer />
        </div>
    )
}

export default Home