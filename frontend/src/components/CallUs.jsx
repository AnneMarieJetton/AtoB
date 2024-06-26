import '../styles/CallUs.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from '../assets/AtoB.png'
import HamburgerIcon from '../assets/Hamburger_icon.png'

const CallUs = () => {

    return (
        <div className='CallUs'>
            Give us a call at (801)-477-5067
        </div>
    )
}

export default CallUs