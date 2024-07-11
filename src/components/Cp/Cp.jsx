import React, { useState, useEffect } from 'react';
import './Cp.css';

const topImages = [
  { src: "src/assets/images/cp/cj.svg", alt: "cj" },
  { src: "src/assets/images/cp/cnhooghly.svg", alt: "cnhooghly" },
  { src: "src/assets/images/cp/dev.svg", alt: "dev" },
  { src: "src/assets/images/cp/ieee.svg", alt: "ieee" },
  { src: "src/assets/images/cp/gdsc.svg", alt: "gdsc" },

  // double for infinite loop
  { src: "src/assets/images/cp/cj.svg", alt: "cj" },
  { src: "src/assets/images/cp/cnhooghly.svg", alt: "cnhooghly" },
  { src: "src/assets/images/cp/dev.svg", alt: "dev" },
  { src: "src/assets/images/cp/ieee.svg", alt: "ieee" },
  { src: "src/assets/images/cp/gdsc.svg", alt: "gdsc" },
];

const bottomImages = [
  { src: "src/assets/images/cp/iei.svg", alt: "iei" },
  { src: "src/assets/images/cp/iiitians.svg", alt: "iiitians" },
  { src: "src/assets/images/cp/rc.svg", alt: "rc" },
  { src: "src/assets/images/cp/thc.svg", alt: "thc" },
  { src: "src/assets/images/cp/gdscm.svg", alt: "gdscm" },
  { src: "src/assets/images/cp/vuchvilla.svg", alt: "vv" },

    // double for infinite loop
  { src: "src/assets/images/cp/iei.svg", alt: "iei" },
  { src: "src/assets/images/cp/iiitians.svg", alt: "iiitians" },
  { src: "src/assets/images/cp/rc.svg", alt: "rc" },
  { src: "src/assets/images/cp/thc.svg", alt: "thc" },
  { src: "src/assets/images/cp/gdscm.svg", alt: "gdscm" },
  { src: "src/assets/images/cp/vuchvilla.svg", alt: "vv" },
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
    <div className="slider-container w-screen relative p-0">
      <div
        className={`slider w-fit ${direction === 'left' ? 'slide-left' : 'slide-right'}`}
        style={{
          transform: `translateX(${direction === 'left' ? bgPosition.x * 2 : -bgPosition.x * 2}px)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide my-3 sm:my-6 mx-4 sm:mx-10 w-[200px] sm:w-[30vw] md:w-[25vw] xl:w-[20vw]">
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
    <div className="sliders-wrapper mt-4">
      <div className="w-full max-md:px-5 max-xl:px-10 xl:w-[1280px] self-center mb-0 sm:mb-8">
        <h1 className='text-2xl md:text-4xl xl:text-5xl text-[#9E9E9E]'>
          $ sudo apt-get i&nbsp;<span className='text-white'>commun<span className='text-red'>1</span>ty partners</span>
        </h1>
      </div>
      <SimpleSlider images={topImages} direction="left" />
      <SimpleSlider images={bottomImages} direction="right" />
      
    </div>
    
  );
}

export default Cp;
