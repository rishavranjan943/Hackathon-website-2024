import React from 'react';
import './Discord.css';
import discordSCImage from '../../assets/images/discord/discord_sc.svg'; // Import the image


function Discord() {
    return (
        <>
            <div className="background-container">
                <div className="over"></div>
                <div className="overlay"></div>
                <div className="overlay2"></div>
                <div className="stars"></div>
                <div className="image-container">
                <img src={discordSCImage} alt="" className="darken-image" />
                <a href="https://discord.gg/UHwPBzy7UF" className="bottom-overlay" target='_blank'></a>
                </div>
            </div>
        </>
    );
}

export default Discord;
