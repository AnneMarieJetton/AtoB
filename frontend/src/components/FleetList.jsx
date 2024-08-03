import Featured from '../components/Featured';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import WhyUs from '../components/WhyUs';

import '../styles/FleetList.css';
import carStock from '../assets/AtoB_car_stock.png';
import womanStock from '../assets/personStock1.jpg';
import leftArrow from '../assets/left_arrow.png';
import rightArrow from '../assets/right_arrow.png';
import smileIcon from '../assets/smile_transparent.png';

import Carcard from './CarCard';

const Fleet = () => {
    return (
        <div className='FleetList'>
            {/* <div className='FleetListSortContainer'>
                <button className='FleetListSort'>Sort By:</button>
            </div> */}
            <div className='FleetListRow'>
                <Carcard />
                <Carcard />
                <Carcard />
            </div>
            <div className='FleetListRow'>
                <Carcard />
                <Carcard />
                <Carcard />
            </div>
            <div className='FleetListRow'>
                <Carcard />
                <Carcard />
                <Carcard />
            </div>
        </div>
    )
}

export default Fleet