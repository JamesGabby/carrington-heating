import React, { useState } from "react";
import './nav-bar.styles.scss';
import logo from './logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
    const [count, setCount] = useState(false);

    return (
        <div className={count ? 'Nav active' : 'Nav'}>
            <div className="Nav-left">
                <img src={logo} />
                <h2 id="Nav-text">Carrington Heating Ltd</h2>
            </div>
            <div className={count ? 'List active' : 'List'}>
                <div>
                    <h2>Home</h2>
                </div>
                <div>
                    <h2>About</h2>
                </div>
                <div>
                    <h2>Services</h2>
                </div>
                <div>
                    <h2>Contact</h2>
                </div>
            </div>
            <div className="Nav-right">
                <BsFillTelephoneFill size={'2.3rem'} color="#6CADDF" id="Phone" />
                <div className="Top-down">
                    <p id="Blue">24/7 Phone Line</p>
                    <h2 id="Nav-text-right">07375 072 442</h2>
                </div>
                <a id='Menu' onClick={() => setCount(!count)}>{count ? <ImCross size={'2rem'} /> : <AiOutlineMenu size={'2rem'} />}</a>
            </div>
        </div>
    );
}

export default NavBar;