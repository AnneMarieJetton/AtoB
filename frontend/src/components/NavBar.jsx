import '../styles/NavBar.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../assets/AtoB.png'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to='/' className='NavBarLogo'>
                <img src={logo}></img>
            </Link>
            <div className='NavBarLinks'>
                <Link className='NavBarLink' to='/'>Fleet</Link>
                <Link className='NavBarLink' to='/'>FAQ's</Link>
                <Link className='NavBarLink' to='/'>Location</Link>
                <Link className='NavBarLink' to='/'>Contact</Link>
            </div>
            <button className='NavBarButton'>
                Book Now
            </button>
        </div>
    )
}

export default NavBar