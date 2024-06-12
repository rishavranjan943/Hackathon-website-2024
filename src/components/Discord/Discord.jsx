import React from 'react';
import Bgimage from '../../assets/images/discord/JOIN.png';
import './Discord.css';

function Discord() {
    return (
        <div className="section">
            <div className="star-background"></div>
            <img src={Bgimage} alt="" className='img-background' />
            <a
                href="https://discord.gg/UHwPBzy7UF"
                className="bottom-overlay"
                target="_blank"
                rel="noopener noreferrer"
            ></a>
        </div>
    );
}

export default Discord;
