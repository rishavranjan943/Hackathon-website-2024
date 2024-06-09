import React, { useState } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import left_key from '../../assets/images/left_key.svg';
import right_key from '../../assets/images/right_key.svg';
import medical from '../../assets/images/tracks/medical.png';
import medical_card from '../../assets/images/tracks/medical_card.png';
import wildlife from '../../assets/images/tracks/wildlife.png';
import wildlife_card from '../../assets/images/tracks/wildlife_card.png';

const Tracks = () => {
    const [selectedTrack, setSelectedTrack] = useState(1);

    const trackData = [
        { id: 1, title: 'MEDICAL', description: 'In this track, participants work on developing software solutions related to healthcare and medicine. They might build applications that help patients manage their health, or tools that assist healthcare providers in diagnosing and treating patients.', image: medical, card: medical_card },
        { id: 2, title: 'WILDLIFE', description: 'This track focuses on building software solutions that promote sustainability and protect the environment. Participants might create applications that help reduce waste, conserve energy, prevent illegal wildlife trade, or even provide early warning systems for natural calamities that can impact wildlife and their habitats. ', image: wildlife, card: wildlife_card},
        { id: 3, title: 'Track 3', description: 'Description for Track 3' },
        { id: 4, title: 'Track 4', description: 'Description for Track 4' },
        { id: 5, title: 'Track 4', description: 'Description for Track 4' },
        { id: 6, title: 'Track 4', description: 'Descrip`tion for Track 4' },
        // Add more tracks here...
    ];

    const handleCardClick = (trackId) => {
        setSelectedTrack(trackId);
    };

    return (
        <section className='relative mb-10 mx-5'>
            <img src={stars} className=" z-0 absolute pointer-events-none w-screen opacity-50"></img>
            <img src={trackData[selectedTrack - 1].image} alt="" className='z-1 absolute pointer-events-none left-0 right-0 mx-auto max-w-full xl:-translate-y-48 opacity-50'/>
            <div className='text-white max-w-[1280px] md:mx-8 lg:mx-12 xl:mx-auto z-2'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl text-[#9E9E9E]'>$ ls -a <span className='text-white'>TRACKS</span></h1>
                <div className='xl:flex'>
                    <div className="track-section pl-12 xl:w-1/2 mr-5 mb-5 xl:mb-0" >
                        {selectedTrack ? (
                            <div>
                                <h2 className='text-5xl md:text-7xl xl:text-8xl my-4 md:my-12'>{trackData[selectedTrack - 1].title}</h2>
                                <p className='text-lg md:text-xl xl:text-2xl'>{trackData[selectedTrack - 1].description}</p>
                            </div>
                        ) : (
                            <p>Select a track to see more information.</p>
                        )}
                    </div>
                    <div className="carousel flex items-center gap-5 h-fit self-end">
                        <img src={left_key} alt="" className='opacity-50 hover:opacity-100'onClick={() => {document.querySelector('.tracks-wrapper').scrollLeft -= 158}}/>
                        <div className='tracks-wrapper flex gap-5 max-w-[480px] overflow-x-auto scroll-smooth no-scrollbar'>
                            {trackData.map((track) => (
                                <div key={track.id} className="card min-w-36 relative" onClick={() => handleCardClick(track.id)}>
                                    <img src={medical_card} alt="" className='object-cover opacity-70'/>
                                    <h4 className='absolute text-3xl left-0 top-0 right-0 bottom-0 m-auto w h-fit text-center'>{track.title}</h4>
                                </div>
                            ))}
                        </div>
                        <img src={right_key} alt="" className='opacity-50 hover:opacity-100' onClick={() => {document.querySelector('.tracks-wrapper').scrollLeft += 158}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tracks;