import React, { useState, useEffect } from 'react';
import BgLandingPage from "/images/BgLandingPage.svg";
import HomeMascot from "/images/HomeMascot.svg";
import DevfolioBtn from "/images/DevfolioBtn.svg";
import DevfolioLogo from "../assets/images/LandingPage/DevfolioLogo.svg";
import TimerSection from "./TimerSection";
import Schedule from "../components/Schedule/Schedule";
import ScrollButton from "../assets/images/LandingPage/ScrollButton.svg"


function LandingPage() {
  const [bgSize, setBgSize] = useState('10%');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1248) {
        setBgSize('15%');
      } else if (width >= 1024) {
        setBgSize('18%');
      }else if (width >= 750) {
        setBgSize('22%');
      }else if (width >= 768) {
        setBgSize('15%');
      }  else if(width>= 640){
        setBgSize('25%')
      }
      else {
        setBgSize('40%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTimer = () => {
    const scheduleSection = document.getElementById('timer');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div
        className=" h-full w-full flex flex-col text-center bg-no-repeat  bg-bg_color m-0"
        style={{
          backgroundImage: `url(${BgLandingPage})`,
          backgroundPositionY: "20%",
          backgroundSize: "cover",
        }}
      >
        {/* Hero section */}
        <section id="hero" className=" ml-5 mr-5 max-[540px]:mt-[10px] mt-[100px]">
          <div>
            <h1
              className="text-white min-[320px]:text-[48px] sm:text-[12vh] font-vt323"
              style={{ textShadow: "2px 2px 0 rgb(236, 83, 176, 1)" }}
            >
              STATUS CODE <span className="text-red">1</span>
            </h1>
            <h3 className="text-purple-900 font-vt323 min-[320px]:text-[20px] md:text-2xl bg-gradient-to-r from-gradient_blue_purple-0 via-gradient_blue_purple-50 to-gradient_blue_purple-100  text-transparent bg-clip-text">
              Code With Purpose & Innovate, Collaborate, Dominate
            </h3>
          </div>
          <div className="flex text-center justify-center mt-5 ml-5 mr-5">
            <div className="bg-top bg-no-repeat flex items-end flex-col justify-center md:h-[80%] bg-cover " style={{
              backgroundImage: `url(${HomeMascot})`,
              backgroundSize: bgSize,
            }}
            >
              <div className="text-center justify-center gap-2 min-[320px]:mt-[25%] md:mt-0">
                <div className="bg-no-repeat bg-center bg-cover  text-center justify-center flex flex-row min-[320px]:mt-[25%] min-[640px]:mt-[10%] min-[750px]:mt-[6%] md:mt-[27%] lg:mt-[22%] xl:mt-[20%]" style={{
                  backgroundImage: `url(${DevfolioBtn})`,
                  backgroundSize: "contain",
                }}
                >
                  <a href="https://statuscode-1.devfolio.co/"><button className="text-purple font-vt323 text-2xl text-center justify-center flex  mt-2 mb-2 gap-3 ">
                    <img src={DevfolioLogo} />
                    Apply with Devfolio
                  </button></a>
                </div>
                <p className="max-[540px]:leading-normal md:leading-tight xl:leading-normal md:text-[22px] xl:text-[25px] font-vt323 min-[320px]:text-[18px] md:text-2xl m-3 bg-gradient-to-b from-gradient_purple_fade-0 via-gradient_purple_fade-50 to-gradient_purple_fade-100  text-transparent bg-clip-text">
                  Unleash your creativity and join Status Code 1, an official
                  MLH Member Event and the ultimate 36-hour hackathon
                  extravaganza! Compete across diverse categories, showcasing
                  your skills, ingenuity, and collaborative spirit alongside
                  like-minded individuals. Discover the perfect platform to
                  challenge yourself,
                </p>

                <button className="">
                  <a onClick={scrollToTimer}> <img src={ScrollButton} alt="Down" width="80%" /></a>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Timer section  */}
        <section id="timer" className="mt-[4%]">
          <TimerSection />
        </section>

        {/* Schedule section */}
        <section id="schedule" className="mt-[12%]"></section>
        <Schedule />
      </div>
    </>
  );
}

export default LandingPage;
