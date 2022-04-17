import React, { useState } from 'react';
import '../styles/TopHeader.css';
import Logo from '../assets/CMlogo.jpg'

function TopHeader () {

    return (
        <div className="topheader">
           <img src={Logo} />
        </div>
    )
}

export default TopHeader;