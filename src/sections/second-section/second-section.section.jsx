import React from "react";
import './second-section.styles.scss';
import { TiSpanner } from 'react-icons/ti';
import { GoChecklist } from 'react-icons/go';
import { FaTemperatureLow } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';

import { CgSmartHomeBoiler } from 'react-icons/cg';



const SecondSection = () => (
    <section className="Second-section" id="services">
        <div className="Container" id="Sec-top">
            <div className="First">
                <h1>How Can I Help?</h1>
                <p>All of our engineers specialise in providing heating repair and maintenance services across the UK. There is nothing more stressful than having problems heating up your home or water, and we can provide speedy maintenance services such as:</p>
            </div>
        </div>

        <div className="Container" id="Top-sec">
            <div className="Second">
                <TiSpanner size={'5rem'} />
                <h2>Gas Repair Work</h2>
                <p>From noisy boilers, to the boilers that leave you with no hot water, our Gas Safe engineers are well versed in a whole host of repair works on the heating systems on your property. With just one phone call, you can have a local and highly trained expert out to your property on the same day as your call!</p>
            </div>
            <div className="Second">
                <GoChecklist size={'5rem'} />
                <h2>Local Boiler Servicing</h2>
                <p>Ensuring that your boiler gets a regular service helps to ensure that you are not left in the cold over the winter. Along with ensuring that your boiler is under warranty, complying with regulations as a landlord, or just giving yourself peace of mind, our boiler servicing work can pick up any potential faults or repairs that your boiler may need!</p>
            </div>
            <div className="Second">
                <FaTemperatureLow size={'5rem'} />
                <h2>Gas Safe Engineers</h2>
                <p>Our experts are Gas Safe registered, and capable of handling any kind of heating work that you could need. From cap-offs, boiler work and heating appliance installs, our team of local Gas Safe engineers have you covered no matter what your request. Give us a call today and our local gas engineers will look after you!</p>
            </div>
        </div>

        <div className="Container" id="Top-sec">
            <div className="First">
                <h1>Emergency Boiler Repairs, Servicing & Installations Near Me</h1>
                <p>No matter the problem with your boiler, our team of highly trained professionals have you covered. We can:</p>
            </div>
        </div>
        <div className="Container" id="Top-sec">
            <div className="Second">
                <BsTools size={'5rem'} />
                <h2>Boiler Repair</h2>
                <p>Detect any faults with your current boiler and provide the fixes. Often there is a simple fix for your noisy or faulty boiler. Our experts will do all they can to find and repair the fault with your boiler, getting your central heating system back up to full health in no time!</p>
            </div>
            <div className="Second">
                <GoChecklist size={'5rem'} />
                <h2>Boiler Servicing</h2>
                <p>As stated above, it is highly recommended that you get your boiler serviced at regular annual intervals. Here, our qualified gas engineers can detect any faults and rectify before they cause more serious and long-term boiler problems.</p>
            </div>
            <div className="Second">
                <CgSmartHomeBoiler size={'5rem'} />
                <h2>Boiler Installs</h2>
                <p>Our gas specialists can install a wide range of boilers into your property. There are a large range of brands to choose from, and our team of heating experts can work with them all, installing them safely and correctly for a fair and reasonable rate.</p>
            </div>
        </div>
    </section>
);

export default SecondSection;