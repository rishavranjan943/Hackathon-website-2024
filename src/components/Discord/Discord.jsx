import React from "react";
import "./Discord.css";
import discordSCImage from "../../assets/images/discord/text-fotor-20240610164442.png"; // Import the image

function Discord() {
  return (
    <div>
      <div className="hero">
        <div className="background-container text-center">
          <div className="image-container">
            <img src={discordSCImage} alt="" className="darken-image" />
            <a
              href="https://discord.gg/UHwPBzy7UF"
              className="bottom-overlay"
              target="_blank"
            ></a>
          </div>
        </div>
        <div>
          <div className="mx-auto px-4 py-8 text-center">
            <p className="footercontent text-xl md:text-2xl  text-[#BEBEBE] text-center inline">
              Join our Discord Community to stay updated on all the latest{" "}
              <br className="hidden lg:inline" />
              developments and announcements for our hackathon! Don&apos;t miss
              out on <br className="hidden lg:inline" />
              key updates and opportunities, join us today!
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Discord;
