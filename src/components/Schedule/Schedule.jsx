import React, { useEffect, useRef } from 'react';
import right_key from '../../assets/images/right_key.svg'
import left_key from '../../assets/images/left_key.svg'
import bounty from '../../assets/images/bounty.svg'
import bounty_start from '../../assets/images/bounty_start.svg'

function Schedule() {
    const timelineWrapperRef = useRef(null);

    useEffect(() => {
        if (timelineWrapperRef.current) {
            if (window.innerWidth < 768) {
                document.querySelector('.timeline-wrapper').scrollTo({ left: 20, behavior: 'smooth'});
            }
            var timelineElementWidth = 338;
            var timelineWrapperWidth =
                document.querySelector('.timeline-wrapper').clientWidth;
            var defaultShiftWidth =
                timelineWrapperWidth < timelineElementWidth
                    ? timelineElementWidth / 4
                    : 0;
            document.querySelector('.timeline-wrapper')
                .scrollBy({ left: defaultShiftWidth, behavior: 'smooth' });

            document.querySelector('.prev').addEventListener('click', () => {
                var timelineWrapperWidth =
                    document.querySelector('.timeline-wrapper').clientWidth;
                var defaultShiftWidth =
                    timelineWrapperWidth < timelineElementWidth
                        ? timelineElementWidth / 4
                        : 0;
                var leftPosition =
                    defaultShiftWidth +
                    Math.max(
                        0,
                        Math.floor(
                            (document.querySelector('.timeline-wrapper').scrollLeft -
                                timelineElementWidth) /
                            timelineElementWidth
                        ) * timelineElementWidth
                    );
                document
                    .querySelector('.timeline-wrapper')
                    .scrollTo({ left: leftPosition, behavior: 'smooth' });
            });
            document.querySelector('.next').addEventListener('click', () => {
                var timelineWrapperWidth =
                    document.querySelector('.timeline-wrapper').clientWidth;
                var defaultShiftWidth =
                    timelineWrapperWidth < timelineElementWidth
                        ? timelineElementWidth / 4
                        : 0;
                var leftPosition =
                    defaultShiftWidth +
                    Math.min(
                        document.querySelector('.timeline-wrapper').scrollWidth -
                        timelineWrapperWidth,
                        Math.ceil(
                            (document.querySelector('.timeline-wrapper').scrollLeft +
                                timelineElementWidth) /
                            timelineElementWidth
                        ) * timelineElementWidth
                    );
                document
                    .querySelector('.timeline-wrapper')
                    .scrollTo({ left: leftPosition, behavior: 'smooth' });
            });
        }

    }, [document.querySelector('.timeline-wrapper')]);

    return (
        <>
            <div
                id="schedule"
                name="schedule"
                className="w-screen py-10 bg-[#040842] font-vt323 bg-[url('/src/assets/images/discord/stars.svg')]"
            >
                <div className='max-w-[1280px] md:mx-8 lg:mx-12 xl:mx-auto'>
                    <h1 className='mx-5 xl:mx-0 py-6 text-left text-2xl md:text-4xl xl:text-5xl text-[#9E9E9E]'>$ cat <span className='text-white'>SCHEDULE</span>.txt</h1>
                    <div className="mx-5 xl:mx-0 timeline mx-30 flex justify-center">
                        <button className="prev mr-10 opacity-50 hover:opacity-100 min-w-[30px]">
                            <img src={left_key} alt="" />
                        </button>

                        <div className="contents mx-30 px-10 flex mx-auto">
                            <div
                                className="timeline-wrapper max-w-[990px] flex overflow-x-auto no-scrollbar" ref={timelineWrapperRef}
                            >
                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#FF6D75] text-3xl md:text-4xl xl:text-4xl">
                                        May 5
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        12:00 AM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Registration
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Begins
                                    </h3>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#FFC977] text-3xl md:text-4xl xl:text-4xl">
                                        Aug 17
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        12:00 AM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Registration
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Closes
                                    </h3>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#DA77D6] text-3xl md:text-4xl xl:text-4xl">
                                        Aug 24
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        11:00 AM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Hacking
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Starts
                                    </h3>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#FF6D75] text-3xl md:text-4xl xl:text-4xl">
                                        Aug 24
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        11:00 PM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Mid
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Evaluation
                                    </h3>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#FFC977] text-3xl md:text-4xl xl:text-4xl">
                                        Aug 25
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        04:00 PM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Final
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Evaluation
                                    </h3>
                                </div>

                                <div
                                    className="flex flex-col justify-center items-center min-w-[330px] m-1"
                                >
                                    <h1 className="text-[#DA77D6] text-3xl md:text-4xl xl:text-4xl">
                                        Aug 25
                                    </h1>
                                    <h3 className="text-[#00FFDF] text-1xl md:text-2xl xl:text-2xl">
                                        05:15 PM
                                    </h3>
                                    <img src={bounty} alt="" />
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Closing
                                    </h3>
                                    <h3 className="text-[#FFFFFF] text-2xl md:text-3xl xl:text-3xl">
                                        Ceremony
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <button className="next ml-10 opacity-50 hover:opacity-100 min-w-[30px]">
                            <img src={right_key} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;
