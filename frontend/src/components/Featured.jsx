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

const Featured = () => {
    const [divIndex, setDivIndex] = useState(0);

    const [carCards] = useState([
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
        {
            imageSrc: carStock,
            text: "We would put a review here from a customer. Ideally, here is where I would use the cursive script, as it implies spoken words. thsjd aoedf  fjalkdf  fnls fjs suef  fjfoak  fjiea ndkns jfg fjajkd ajer lgf  fjapei  fjd fj  teija dd fjeiieifalmd fjijei a her skdjfn  fnaejfn  jfdnfsk fgn fknsfe  kfsl ndland fnfale kfueakf aefbdk lgg asajef a fnejsnf."
        },
    ]);

    function SlideLeft(){
        setDivIndex(prevIndex => {
            // Check if divIndex is already at 0, then set it to the last index
            if (prevIndex === 0) {
                return carCards.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    function SlideRight(){
        setDivIndex(prevIndex => {
            // Check if divIndex is already at the last index, then set it to 0
            if (prevIndex === carCards.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }

    return (
        <div className='HomeFeaturedCars'>
            <div className='cardScreen'></div>
            <div className='HomeFeaturedCarsContent'>
                <span className='HomeFeaturedCarsTitle'>Featured Cars</span>
                {/* <div className='HomeFeaturedCarsCards' style={{ transform: `translateX(${divIndex * -33}%)` }}>
                    {carCards.map((carCard, index) => (
                    <div>
                        <CarCard 
                            key={index}
                        />
                    </div>
                ))}
                </div> */}
                {/* <div className='HomeFeaturedCarsCardsMobile'>
                    <CarCard />
                </div> */}
            </div>
            <div className='cardScreen'></div>

            <button className='HomeFeaturedCarsButtons' onClick={SlideLeft}>
                <img src={leftArrow}></img>
            </button>
            <button className='HomeFeaturedCarsButtons' onClick={SlideRight}>
                <img src={rightArrow}></img>
            </button>
        </div>
    )
}

export default Featured