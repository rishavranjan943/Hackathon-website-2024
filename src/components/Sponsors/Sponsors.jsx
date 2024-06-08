import React from 'react'
// import mlhLogo from '../../assets/images/sponsors/mlh.png';
// import postmanLogo from '../../assets/images/sponsors/postman.png';
// import awsLogo from '../../assets/images/sponsors/aws.png';
// import VectorLogo from '../../assets/images/sponsors/Vector.png';
import polygonLogo from '../../assets/images/sponsors/polygon.png';
// import falconLogo from '../../assets/images/sponsors/falcon.png';
// import solanLogo from '../../assets/images/sponsors/solan.png';
// import auth0Logo from '../../assets/images/sponsors/auth0.png';
// import replitLogo from '../../assets/images/sponsors/replit.png';
import devfolioLogo from '../../assets/images/sponsors/devfolio.png';
// import echo3DLogo from '../../assets/images/sponsors/echo3D.png';
// import githubLogo from '../../assets/images/sponsors/github (1).png';
// import jinaLogo from '../../assets/images/sponsors/jina.png';
import ethIndiaLogo from '../../assets/images/sponsors/ethIndia.png';

const Sponsors = () => {
    return (
        <section className="relative">

            <div className="py-10 bg-[url('/src/assets/images/discord/stars.svg')]">


                <div className='mb-4 flex flex-col gap-2 sm:gap-1'>
                    <h1 className="font-vt323 font-medium text-[10vw] leading-[2.5rem] sm:leading-[4rem] md:leading-[5rem] md:text-[9vw] lg:text-[7vw] xl:text-[6vw] xl:leading-[6rem]" style={{ background: 'linear-gradient(to right, blue,blue,#dd50b3,#dd50b3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SPONSORS</h1>
                    <p className='font-vt323 text-gray-400 w-[75vw] leading-4 sm:leading-0 sm:px-0 text-sm sm:w-[70vw] sm:text-lg sm:leading-5 md:leading-5 md:w-[60vw] lg:text-xl lg:w-[56vw] lg:leading-5 xl:text-3xl xl:w-[60vw] mx-auto'>Thank you to our generous sponsors for contributing to the prize pool and making this awesome event a reality!</p>
                </div>


                {/* <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed border-cyan-500 border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-cyan-500 text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem] '>DIAMOND</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        <img src={mlhLogo} alt="mlh" className='w-[18vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={postmanLogo} alt="postman" className='w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw]' />
                        <img src={awsLogo} alt="aws" className='w-[12vw] sm:w-[8vw] sm:h-[5vw]' />
                    </div>
                </div> */}
                <div className='pt-1 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[70vw] mx-auto border-dashed border-[#9d44c0] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#9d44c0] text-[7vw] leading-[1.5rem] sm:leading-[3.5rem] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[6rem]'>PLATINUM</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        {/* <img src={VectorLogo} alt="vector" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4vw]' />
                         */}
                        <img src={devfolioLogo} alt="devfolio" className='w-[27vw] h-[6vw] sm:w-[22vw] sm:h-[4vw]' />

                    </div>
                </div>

                {/* border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] */}
                <div className='pt-1 pb-4 md:pt-4 sm:pb-10 w-[80vw] xl:w-[70vw] mx-auto flex flex-col items-center justify-center gap-4 lg:gap-6'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[7vw] leading-[1.5rem] sm:leading-[3.5rem] lg:text-[6vw] lg:leading-[3rem] xl:text-[5vw] xl:leading-[6rem]'>GOLD</h1>
                    <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-12'>
                        {/* <img src={falconLogo} alt="falcon" className='w-[28vw] h-[8vw] sm:w-[18vw] sm:h-[5vw]' />
                        <img src={solanLogo} alt="solan" className='w-[28vw] h-[5vw] sm:w-[22vw] sm:h-[4vw]' />
                        <img src={auth0Logo} alt="auth0" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={replitLogo} alt="replit" className='w-[18vw] h-[5vw] sm:w-[14vw] sm:h-[3vw]' />
                        <img src={devfolioLogo} alt="devfolio" className='w-[27vw] h-[6vw] sm:w-[22vw] sm:h-[4vw]' />
                        <img src={echo3DLogo} alt="echo3D" className='w-[24vw] sm:w-[22vw] h-[4vw]' /> */}
                        <img src={polygonLogo} alt="polygon" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4.5vw]' />
                        <img src={ethIndiaLogo} alt="ethIndia" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4.5vw]' />
                    </div>
                </div>


                {/* <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-[#9e9e9e] text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem]'>SILVER</h1>
                    <div className='flex items-center justify-center gap-6 sm:gap-16'>
                        <img src={githubLogo} alt="github" className='w-[16vw] h-[6vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src={jinaLogo} alt="jina" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                    </div>

                </div> */}



            </div>
        </section>
    )
}

export default Sponsors
