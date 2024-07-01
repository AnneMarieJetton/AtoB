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
            // <div className='HomeTestimonials'>
            //     <button className='HomeTestimonialsButtons'>
            //         <img src={leftArrow}></img>
            //     </button>
            //     <div className='HomeTestimonialsImageContainer'>
            //         <img className='HomeTestimonialsImage' src={womanStock}></img>
            //     </div>
            //     <div className='HomeTestimonialsTextContainer'>
            //         We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf
            //     </div>
            //     <button className='HomeTestimonialsButtons'>
            //         <img src={rightArrow}></img>
            //     </button>
            // </div>

            <div className='HomeTestimonials'>
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