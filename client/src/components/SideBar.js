import React, { useState } from 'react';
import '../styles/SideBar.css';
import IconHome from '../assets/HomeIcon.jpg'; 
import IconConfig from '../assets/ConfigIcon.jpg';
import IconExecution from '../assets/RocketIcon.png'; 


function SideBar () {

    return (
        <div className="sidebar">
            <div>
                
                <img src={IconHome} className="icon-home"/>
            </div>
            <div>
                <img src={IconConfig} className="icon-configuration"/>
            </div>
            <div>  
                <img src={IconExecution} className="icon-execution" />
            </div>
        </div>
    )
}

export default SideBar;