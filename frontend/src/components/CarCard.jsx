import '../styles/CarCard.css';

import carStock from '../assets/car_transparent.png';
import carInfo from '../assets/car_info.png';

const CarCard = () => {
    return (
        <div className='CarCard'>
            <div className='CarCardImgContainer'>
                <img src={carStock}></img>
            </div>
            <img className='temp' src={carInfo}></img>
            <button className='carCardButton'>Book Now</button>
        </div>
    )
}

export default CarCard