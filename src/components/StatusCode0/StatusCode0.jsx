import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import './StatusCode0.css';
import x01 from '../../assets/images/sc0/01.png';
import x02 from '../../assets/images/sc0/02.png';
import x03 from '../../assets/images/sc0/03.png';
import x10 from '../../assets/images/sc0/10.png';
import x11 from '../../assets/images/sc0/11.png';
import x12 from '../../assets/images/sc0/12.png';
import x13 from '../../assets/images/sc0/13.png';
import x14 from '../../assets/images/sc0/14.png';
import x20 from '../../assets/images/sc0/20.png';
import x21 from '../../assets/images/sc0/21.png';
import x22 from '../../assets/images/sc0/22.png';
import x23 from '../../assets/images/sc0/23.png';
import x24 from '../../assets/images/sc0/24.png';
import x31 from '../../assets/images/sc0/31.png';
import x32 from '../../assets/images/sc0/32.png';
import x40 from '../../assets/images/sc0/40.png';
import x41 from '../../assets/images/sc0/41.png';
import x42 from '../../assets/images/sc0/42.png';
import mascot from '../../assets/images/sc0/mascot.png';


const StatusCode0 = () => {
    const [selectedTrack, setSelectedTrack] = useState(1);
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 60; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 60; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id='sc0' className="max-[768px]:pt-[30px] pt-[80px] relative mb-10 px-5 bg-no-repeat" style={{
            backgroundImage: `url(${stars})`,
            backgroundPosition: `${50}% calc(50% - ${bgPosition.y}px)`,
            backgroundSize: 'cover',
        }}>
            {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen sm:opacity-60 opacity-80"></img> */}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto relative'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ man <span className='text-white'>statusCode<span className='text-red'>0</span></span></h1>
                <div className='grid gallery place-content-center relative'>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x01} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x02} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x03} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    
                    <img src={x10} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x11} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x12} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x13} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x14} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    
                    <img src={x20} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x21} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x22} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x23} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x24} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    
                    <img src={mascot} alt="" className='sm:opacity-90 opacity-100 max-md:min-w-[15vw] min-w-[12vw] translate-y-8 sm:translate-y-16 2xl:translate-y-12 animate-[bounce_3s_ease-out_infinite]'/>
                    <img src={x31} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x32} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    
                    <img src={x40} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x41} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src={x42} alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    {/* <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/>
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" className='sm:opacity-60 opacity-80 sm:hover:opacity-100 transition-all duration-500'/> */}
                    <div className='sc0-text text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-5xl opacity-80 sm:opacity-70 -translate-y-[4vw] ml-4'>
                        <h2>GLIMPSES OF </h2>
                        <h2 className='text-4xl sm:text-7xl lg:text-8xl 2xl:text-8xl'>STATUS </h2>
                        <h2 className='text-4xl sm:text-7xl lg:text-8xl 2xl:text-8xl'>CODE<span className='text-red'>0</span></h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatusCode0;
