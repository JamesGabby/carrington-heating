import React from "react";
import './home.styles.scss';
import Button from 'react-bootstrap/Button';
import fb from './fb.png';
import bg from './bgd.png';
import Card from 'react-bootstrap/Card';
import { BsThermometerSun } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';


const Home = () => (
    <section className='Main-page'>
        <div className="Container">
            <div className="Left">
                <h3 id="Blue">Fast Response 24-Hours A Day</h3> 
                <h1>Boiler & Heating Repairs, Maintenance & Servicing</h1>
                <p>With over 4500  five-star reviews attained, our gas engineers are the people you want to trust with the heating repairs, service or other maintenance needs on your domestic or commercial property. Give us a call for a free quote today!</p>
                <div className="Table-container">
                    <div className="Left-table">
                        <div className="Left-table-item">
                            <p><BsThermometerSun /> Central heating repair</p>
                        </div>
                        <div className="Left-table-item">
                            <p><BsThermometerSun /> Boiler repair</p>
                        </div>
                        <div className="Left-table-item">
                            <p><BsThermometerSun /> Boiler installation</p>
                        </div>
                        <div className="Left-table-item">
                            <p><BsThermometerSun /> Gas Safety certificates</p>
                        </div>
                        <div className="Left-table-item">
                            <p><BsThermometerSun /> Fault finding</p>
                        </div>
                    </div>
                    <div className="Right-table">
                        <div className="Right-table-item">
                            <p><AiOutlineCheck /> Fast response from 60 minutes</p>
                        </div>
                        <div className="Right-table-item">
                            <p><AiOutlineCheck /> No call-out charge on completed work</p>
                        </div>
                        <div className="Right-table-item">
                            <p><AiOutlineCheck /> Very competitive local rates</p>
                        </div>
                        <div className="Right-table-item">
                            <p><AiOutlineCheck /> Gas Safe registered engineer</p>
                        </div>
                        <div className="Right-table-item">
                            <p><AiOutlineCheck /> 24/7 services</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Right">
                <div className="Top-right">
                    <h2><img className="British-gas" src={bg} /><div></div> Engineer for 20 years</h2>
                    
                </div>
                <div className="Bottom-right">
                    <h2>5 Star Facebook Rating</h2>
                    <img src={fb}></img>
                    <h2>Excellent Quick Service</h2>
                    <p>
                        "Excellent quick service. Local Heating engineer was at my door same day and rectified issue with boiler. Good communication throughout. Highly recommended "
                        Sam Mclaughlan
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Home;