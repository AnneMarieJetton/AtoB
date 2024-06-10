import '../styles/NavBar.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../assets/AtoB.png'
import HamburgerIcon from '../assets/Hamburger_icon.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("Menu toggled");
    }

    return (
        <div className='NavBar'>
            <Link to='/' className='NavBarLogo'>
                <img src={logo} alt="Logo"></img>
            </Link>
            <div className={`NavBarLinks ${isOpen ? 'open' : 'closed'}`}>
                <Link className='NavBarLink' to='/Fleet'>Fleet</Link>
                <Link className='NavBarLink' to='/'>FAQ's</Link>
                <Link className='NavBarLink' to='/'>Location</Link>
                <Link className='NavBarLink' to='/'>Contact</Link>
            </div>
            <button className='NavBarLinksHamburger' onClick={toggleMenu}>
                <img src={HamburgerIcon}></img>
            </button>
            <button className='NavBarButton'>
                Book Now
            </button>
        </div>
    )
}

export default NavBar