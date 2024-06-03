import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Testimonial from './Testimonial';

import '../styles/Testimonials.css';
import womanStock from '../assets/woman_stock_photo.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';

const Testimonials = () => {
    const [divIndex, setDivIndex] = useState(0);

    const [testimonials] = useState([
        {
            imageSrc: womanStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: womanStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: womanStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: womanStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
    ]);

    function SlideLeft(){
        setDivIndex(prevIndex => {
            // Check if divIndex is already at 0, then set it to the last index
            if (prevIndex === 0) {
                return testimonials.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function SlideRight(){
        setDivIndex(prevIndex => {
            // Check if divIndex is already at the last index, then set it to 0
            if (prevIndex === testimonials.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    return(
        <div className='parentDiv'>
            <div className='componentHoldingDiv' style={{ transform: `translateX(${divIndex * -100}%)` }}>
                {testimonials.map((testimonial, index) => (
                    <div className='dummy1'>
                        <Testimonial 
                            key={index} 
                            imageSrc={testimonial.imageSrc} 
                            text={testimonial.text}
                        />
                    </div>
                ))}
            </div>

            <button className="slideButton leftButton" style={{ paddingRight: '15px' }} onClick={SlideLeft}>
                <img src={leftArrow}></img>
            </button>
            <button className="slideButton rightButton" style={{ paddingLeft: '15px' }} onClick={SlideRight}>
                <img src={rightArrow}></img>
            </button>
        </div>
    );
}

export default Testimonials;
