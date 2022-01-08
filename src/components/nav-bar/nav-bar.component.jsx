import React, { useState } from "react";
import './nav-bar.styles.scss';
import logo from './logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const NavBar = () => {
    const [count, setCount] = useState(false);

    return (
        <div className="Nav">
            <div className="Nav-left">
                <img src={logo} />
                <h2 id="Nav-text">Carrington Heating Ltd</h2>
            </div>
            <div className="Nav-right">
                <BsFillTelephoneFill size={'2.3rem'} color="#6CADDF" />
                <div className="Top-down">
                    <p id="Blue">24/7 Phone Line</p>
                    <h2 id="Nav-text-right">009343 277 272</h2>
                </div>
                <a onClick={() => setCount(!count)}>{count ? <ImCross size={'2rem'} /> : <AiOutlineMenu size={'2rem'} />}</a>
            </div>
        </div>
    );
}

export default NavBar;