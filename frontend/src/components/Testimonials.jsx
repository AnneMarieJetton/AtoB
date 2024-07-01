import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Testimonial from './Testimonial';

import '../styles/Testimonials.css';
import personStock1 from '../assets/personStock1.jpg';
import personStock2 from '../assets/personStock2.jpg';
import personStock3 from '../assets/personStock3.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
    const [divIndex, setDivIndex] = useState(0);

    const [testimonials] = useState([
        {
            imageSrc: personStock3,
            text: "It was so convenient to get off the plane and walk directly to the car. I was so happy to pass the lines of people waiting to rent their car. I will definitely rent from A to B again."
        },
        {
            imageSrc: personStock2,
            text: "Great local rentals! Responsive, flexible and great people to work with! I highly recommend this local rental car company!"
        },
        {
            imageSrc: personStock1,
            text: "A to B rentals has been one of my favorite rental companies to work with, and I do quite a bit of traveling for work. I thoroughly appreciated the attention they gave with individual messages and phone calls. They were inexpensive and helped supply car seats. Cars were clean and the whole experience was very smooth and easy. Highly recommend."
        },
    ]);

    // function SlideLeft(){
    //     setDivIndex(prevIndex => {
    //         // Check if divIndex is already at 0, then set it to the last index
    //         if (prevIndex === 0) {
    //             return testimonials.length - 1;
    //         } else {
    //             return prevIndex - 1;
    //         }
    //     });
    // }

    // function SlideRight(){
    //     setDivIndex(prevIndex => {
    //         // Check if divIndex is already at the last index, then set it to 0
    //         if (prevIndex === testimonials.length - 1) {
    //             return 0;
    //         } else {
    //             return prevIndex + 1;
    //         }
    //     });
    // }

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(

        <Carousel 
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        >
            {testimonials.map((testimonial, index) => (
                    <div className='dummy1'>
                        <Testimonial 
                            key={index} 
                            imageSrc={testimonial.imageSrc} 
                            text={testimonial.text}
                        />
                    </div>
                ))}
        </Carousel>


        // <div className='parentDiv'>
        //     <div className='componentHoldingDiv' style={{ transform: `translateX(${divIndex * -100}%)` }}>
        //         {testimonials.map((testimonial, index) => (
        //             <div className='dummy1'>
        //                 <Testimonial 
        //                     key={index} 
        //                     imageSrc={testimonial.imageSrc} 
        //                     text={testimonial.text}
        //                 />
        //             </div>
        //         ))}
        //     </div>

        //     <button className="slideButton leftButton" onClick={SlideLeft}>
        //         &lt;
        //     </button>
        //     <button className="slideButton rightButton" onClick={SlideRight}>
        //         &gt;
        //     </button>
        // </div>
    );
}

export default Testimonials;
