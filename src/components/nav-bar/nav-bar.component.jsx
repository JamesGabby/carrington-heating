import React, { useState } from "react";
import './nav-bar.styles.scss';
import logo from './logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
    const [count, setCount] = useState(false);
    const [toolbar, setToolbar] = useState(false);

    const reSize = () => {
        window.scrollY >= 10 ? setToolbar(true) : setToolbar(false);
    }
    window.addEventListener('scroll', reSize);

    return (
        <div className={toolbar ? 'Nav active' : 'Nav'}>
            <div className="Nav-left">
                <img src={logo} />
                <h2 id="Nav-text">Carrington Heating Ltd</h2>
            </div> 
            
            <div className="Nav-right">
                <BsFillTelephoneFill size={'2.3rem'} color="#6CADDF" id="Phone" />
                <div className="Top-down">
                    <p id="Blue">24/7 Phone Line</p>
                    <h2 id="Nav-text-right">07375 072 442</h2>
                </div>
                <a id='Menu' onClick={() => setCount(!count)}>{count ? <ImCross size={'2rem'} color="red" /> : <AiOutlineMenu size={'2.8rem'} color="#6CADDF" />}</a>
            </div>
            <div className={count ? 'List active' : 'List'}>
                <div className="List-child">
                    <a style={{color: '#fff'}} href="#home" onClick={() => setCount(!count)}><h2>Home</h2></a>
                </div>
                <div className="List-child">
                    <a title="Services" onClick={() => setCount(!count)} style={{color: '#fff'}} href="#services"><h2>Services</h2></a>
                </div>
                
                <div className="List-child">
                    <a style={{color: '#fff'}} href="#contact" onClick={() => setCount(!count)}><h2>Contact</h2></a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;