import React from "react";
import './call-message-email.styles.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillFacebook } from 'react-icons/ai';

const CallMessageEmail = () => (
    <section className="Call-e">
        <div className="Call-child">
            <h3 id="Darkblue"><BsFillTelephoneFill size={'2.6rem'} color="#00285E" id="Phone" /> Fancy a chat?</h3>
            <h1 id="Contact-h1">07375 072 442</h1>
        </div>
        <div className="Call-child">
            <h3 id="Darkblue"><MdEmail size={'2.6rem'} color="#00285E" id="Phone" /> Get in touch via email</h3>
            <h1 id="Contact-h1">carringtonheatingltd@hotmail.com</h1>
        </div>
        <div className="Call-child">
            <h3 id="Darkblue"><AiFillFacebook size={'2.6rem'} color="#00285E" id="Phone" /> Or find me on Facebook</h3>
            <h1 id="Contact-h1"><a href="https://www.facebook.com/CarringtonHeatingLtd">www.facebook.com/CarringtonHeatingLtd</a></h1>
        </div>
    </section>
);

export default CallMessageEmail;