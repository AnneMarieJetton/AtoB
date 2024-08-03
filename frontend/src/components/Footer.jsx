import '../styles/Footer.css';
import airportMap from '../assets/AirportMap.png';
import logo from '../assets/AtoB-removebg-preview.png';

import clockIcon from '../assets/clock_icon_2.png';
import emailIcon from '../assets/email_icon_2.png';
import facebookIcon from '../assets/facebook_icon_2.png';
import instagramIcon from '../assets/instagram_icon.png';
import locationIcon from '../assets/location_icon.png';
import phoneIcon from '../assets/phone_icon_2.png';
import transparentIcon from '../assets/transparent_2.png';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterImageContainer'>
                <img src={logo}></img>
            </div>
            <div className='FooterInfoCol'>
                <span className='FooterInfoColTitle'>Contact Us</span>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={emailIcon}></img>
                    </div>
                    <span>atobrentalsutah@gmail.com</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={phoneIcon}></img>
                    </div>
                    <span>801-477-5067</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={locationIcon}></img>
                    </div>
                    <span>1331 Sky Wy, Provo, UT 84601</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={clockIcon}></img>
                    </div>
                    <span>Mon - Sat, 9am-7pm</span>
                </div>
            </div>
            <div className='FooterInfoCol2'>
            {/* <div className='FooterInfoColAligner'> */}
                <span className='FooterInfoColTitle'>Social Media</span>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={facebookIcon}></img>
                    </div>
                    {/* <span>https://www.facebook.com/</span> */}
                    <span><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={instagramIcon}></img>
                    </div>
                    {/* <span>https://www.instagram.com/</span> */}
                    <span><a href="https://www.instagram.com/atobrentalsutah?igsh=eWszbncza2ZjZnZu" target="_blank" rel="noopener noreferrer">Instagram</a></span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={transparentIcon}></img>
                    </div>
                    <span></span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={transparentIcon}></img>
                    </div>
                    <span></span>
                </div>
            </div>
            {/* </div> */}
            <div className='FooterImageContainer2'>
                <img src={airportMap}></img>
            </div>
        </div>
    )
}

export default Footer