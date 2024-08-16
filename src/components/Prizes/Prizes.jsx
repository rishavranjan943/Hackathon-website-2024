import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import win1 from '../../assets/images/prizes/win1.png';
import win2 from '../../assets/images/prizes/win2.png';
import win3 from '../../assets/images/prizes/win3.png';
import small_trophy from '../../assets/images/prizes/small_trpohy.png'

const Prizes = () => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 10; // Adjust the multiplier for sensitivity
            const y = (e.clientY / innerHeight - 0.5) * 10; // Adjust the multiplier for sensitivity
            setBgPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id='tracks'
            className="pt-[30px] md:pt-[80px] relative mb-10 px-5 bg-no-repeat"
            style={{
                backgroundImage: `url(${stars})`,
                backgroundPosition: `${50 + bgPosition.x}% ${50 + bgPosition.y}%`,
                backgroundSize: 'cover',
            }}
        >
            {/* <img
                src={prizesbg}
                alt=""
                className="absolute w-full h-full object-cover top-0 left-0"
                style={{ clipPath: 'inset(0 0 -10px 0)' }} // Adjust this as needed to leave space at the bottom
            /> */}
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>

                <h1 className="py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
                    $ vi <span className="text-white">PRIZES</span>.yml
                </h1>
                <div className="flex justify-center items-center h-full">
                    <div className="p-10 text-center w-[80vw] mx-auto">
                        {/* Main Rectangle */}
                        <div className="flex justify-between border-8 border-dashed border-[#0384fc] w-full h-auto mb-4 overflow-hidden">
                            <div className="flex items-center">
                                {/* Text on the left side */}
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  whitespace-nowrap lg:p-10 sm:pl-4 pl-1 tracking-wide">
                                    &nbsp;FIRST PRIZE
                                    <br />
                                    <span className="text-blue-500">$</span> 3600
                                </h1>
                            </div>
                            <div className="flex items-end h-full">
                                {/* Image container */}
                                <div className="relative w-full h-full flex px-2 pt-2">
                                    <img src={win1} alt="Image 1" />
                                </div>
                            </div>
                        </div>

                        {/* Two Rectangles Below Main */}
                        <div className="flex flex-col xs:flex-row w-full justify-between mb-4 gap-2">
                            <div className="flex justify-between border-8 border-dashed border-purple w-full h-auto mb-4 overflow-hidden">
                                <div className="flex items-center">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  whitespace-nowrap p-2 pl-1 tracking-wide">
                                        &nbsp;SECOND PRIZE
                                        <br />
                                        <span className="text-blue-500">$</span> 2950
                                    </h1>
                                </div>
                                <div className="flex items-end h-24 xs:h-auto">
                                    {/* Image container */}
                                    <div className="relative w-full h-full flex px-2 pt-2">
                                        <img src={win2} alt="Image 2" className="object-contain h-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between border-8 border-dashed border-purple w-full h-auto mb-4 overflow-hidden">
                                <div className="flex items-center">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                        &nbsp;THIRD PRIZE
                                        <br />
                                        <span className="text-blue-500">$</span> 2750
                                    </h1>
                                </div>
                                <div className="flex items-end h-24 xs:h-auto">
                                    {/* Image container */}
                                    <div className="relative w-full h-full flex px-2 pt-2">
                                        <img src={win3} alt="Image 3" className="object-contain h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Thin Rectangles Below */}
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex-1 mb-4 flex flex-col transition-all duration-300">
                                <div className="border-8 border-dashed border-[#E29B29] mb-4 relative transition-all duration-300 group">
                                    <div className="flex justify-between items-center w-full h-auto p-3">
                                        <div className="text-left flex items-center">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2  tracking-wide">
                                                AVALANCHE TRACK
                                            </h1>
                                            <img
                                                src={small_trophy}
                                                alt="Avalanche Icon"
                                                className="w-14 h-14 ml-3"
                                            />
                                        </div>
                                        <div className="text-right pr-2">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                                <span className="text-blue-500">$</span> 1000
                                            </h1>
                                        </div>
                                    </div>
                                    {/* Hidden text that shows on hover */}
                                    <div className="transition-all duration-300 overflow-hidden group-hover:max-h-40 max-h-0">
                                        <p className="text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl">
                                            For more details, check out our  <a href="https://statuscode-1.devfolio.co/">devfolio page</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="border-8 border-dashed border-[#E29B29] mb-4 relative transition-all duration-300 group">
                                    <div className="flex justify-between items-center w-full h-auto p-3">
                                        <div className="text-left flex items-center">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2  tracking-wide">
                                                RISE TRACK
                                            </h1>
                                            <img
                                                src={small_trophy}
                                                alt="Avalanche Icon"
                                                className="w-14 h-14 ml-3"
                                            />
                                        </div>
                                        <div className="text-right pr-2">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                                {/* <span className="text-blue-500">$</span> 2000 */}
                                            </h1>
                                        </div>
                                    </div>
                                    {/* Hidden text that shows on hover */}
                                    <div className="transition-all duration-300 overflow-hidden group-hover:max-h-40 max-h-0">
                                        <p className="text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl">
                                            For more details, check out <a href='https://drive.google.com/file/d/1kAX4GPCz4tu1u--Qb2oSAMEJOsbdyoPy/view'>problem statement</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="border-8 border-dashed border-[#E29B29] mb-4 relative transition-all duration-300 group">
                                    <div className="flex justify-between items-center w-full h-auto p-3">
                                        <div className="text-left flex items-center">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2  tracking-wide">
                                                GIAN TRACK
                                            </h1>
                                            <img
                                                src={small_trophy}
                                                alt="Avalanche Icon"
                                                className="w-14 h-14 ml-3"
                                            />
                                        </div>
                                        <div className="text-right pr-2">
                                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                                <span className="text-blue-500">$</span> 360
                                            </h1>
                                        </div>
                                    </div>
                                    {/* Hidden text that shows on hover */}
                                    <div className="transition-all duration-300 overflow-hidden group-hover:max-h-40 max-h-0">
                                        <p className="text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl">
                                            For more details, check out <a href='https://drive.google.com/file/d/1VwnsCryNCkqx0Ij_iZW5KmTPjL_Dn9mF/view?usp=sharing'>problem statement</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col xs:flex-row w-full  gap-2">
                                    <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
                                        <div className="border-8 border-dashed border-[#E29B29] relative transition-all duration-300">
                                            <div className="flex justify-between items-center w-full h-auto p-3">
                                                <div className="text-left flex items-center">
                                                    <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl whitespace-nowrap lg:p-2 tracking-wide">
                                                        BEST FRESHER TEAM
                                                    </h1>
                                                </div>
                                                <div className="text-right pr-2">
                                                    <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                                        <span className="text-blue-500">$</span> 25
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
                                        <div className="border-8 border-dashed border-[#E29B29] relative transition-all duration-300">
                                            <div className="flex justify-between items-center w-full h-auto p-3">
                                                <div className="text-left flex items-center">
                                                    <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl whitespace-nowrap lg:p-2 tracking-wide">
                                                        BEST ALL GIRLS TEAM
                                                    </h1>
                                                </div>
                                                <div className="text-right pr-2">
                                                    <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl whitespace-nowrap lg:p-2 pl-1 tracking-wide">
                                                        <span className="text-blue-500">$</span> 25
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>






                            </div>
                        </div>





                    </div>
                </div>

            </div>

        </section>
    );
}

export default Prizes;
