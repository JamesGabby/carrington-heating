import React from "react";
import './react-message.styles.scss';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


const ReactMessage = () => (
    <div className="React-message">
        <div className="pwr"><code>Built by James Gabbitus</code></div>
        <code id="name"><AiOutlineCopyrightCircle id="icon"/> Carrington Heating Ltd, 2022</code>
    </div>
);

export default ReactMessage;