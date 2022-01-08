import React from "react";
import './call-message.styles.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';

const CallMessage = () => (
    <section className="Call">
        <h3 id="Darkblue"><BsFillTelephoneFill size={'2.6rem'} color="#00285E" id="Phone" /> Call me for a quote today</h3>
        <h1>07375 072 442</h1>
    </section>
);

export default CallMessage;