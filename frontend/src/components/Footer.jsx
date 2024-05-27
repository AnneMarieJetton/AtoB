import '../styles/Footer.css';
import airportMap from '../assets/AtoB.png';
import logo from '../assets/AtoB-removebg-preview.png';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterImageContainer'>
                <img src={logo}></img>
            </div>
            <div className='FooterInfoCol'>
                <span className='FooterInfoColTitle'>Title</span>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>atobrentalsutah@gmail.com</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>801-477-5067</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>1331 Sky Wy, Provo, UT 84601</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>Mon - Sat, 9am-7pm</span>
                </div>
            </div>
            <div className='FooterInfoCol'>
                <span className='FooterInfoColTitle'>Title</span>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>Facebook Link</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>Facebook Link</span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span></span>
                </div>
                <div className='FooterInfoColLine'>
                    <div>
                        <img className='FooterImageContainer3' src={logo}></img>
                    </div>
                    <span>Mon - Sat, 9am-7pm</span>
                </div>
            </div>
            <div className='FooterImageContainer2'>
                <img src={airportMap}></img>
            </div>
        </div>
    )
}

export default Footer