import React, { useState, useEffect } from 'react';
import './Cp.css';

const topImages = [
  { src: "src/assets/images/cp/cj.svg", alt: "cj" },
  { src: "src/assets/images/cp/cnhooghly.svg", alt: "cnhooghly" },
  { src: "src/assets/images/cp/dev.svg", alt: "dev" },
  { src: "src/assets/images/cp/gian.svg", alt: "gian" },
  { src: "src/assets/images/cp/ieee.svg", alt: "ieee" },
  { src: "src/assets/images/cp/gdsc.svg", alt: "gdsc" }
];

const bottomImages = [
  { src: "src/assets/images/cp/iei.svg", alt: "iei" },
  { src: "src/assets/images/cp/iiitians.svg", alt: "iiitians" },
  { src: "src/assets/images/cp/rc.svg", alt: "rc" },
  { src: "src/assets/images/cp/thc.svg", alt: "thc" },
  { src: "src/assets/images/cp/gdscm.svg", alt: "gdscm" },
  { src: "src/assets/images/cp/vuchvilla.svg", alt: "vv" }
];

const SimpleSlider = ({ images, direction }) => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      const posX = (clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
      const posY = (clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
      setBgPosition({ x: posX, y: posY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="slider-container">
      <div
        className={`slider ${direction === 'left' ? 'slide-left' : 'slide-right'}`}
        style={{
          transform: `translateX(${direction === 'left' ? bgPosition.x * 2 : -bgPosition.x * 2}px)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image.src}
              alt={image.alt}
              className="slide-image"
              style={{
                transform: `translateY(${bgPosition.y}px)`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Cp = () => {
  return (
    <div className="sliders-wrapper">
      <SimpleSlider images={topImages} direction="left" />
      <div className="max-w-[1280px] md:mx-8 lg:mx-12 xl:mx-auto">
        <h1 className='flex justify-center text-center mx-5 xl:mx-0 py-6 md:text-left text-2xl md:text-4xl xl:text-5xl text-[#9E9E9E]'>
          $ sudo apt-get i&nbsp;<span className='text-white'>commun<span className='text-red'>1</span>ty partners</span>
        </h1>
      </div>
      <SimpleSlider images={bottomImages} direction="right" />
      
    </div>
    
  );
}

export default Cp;
