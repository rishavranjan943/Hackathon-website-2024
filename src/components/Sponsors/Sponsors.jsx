import React from 'react'

const Sponsors = () => {
    return (
        <section className="relative">

            <div className="py-20 bg-[url('/src/assets/images/discord/stars.svg')]">


                <div className='mb-4'>
                    <h1 className="font-vt323 font-medium text-[10vw] leading-[2.5rem] sm:text-[6vw] sm:leading-[6rem]" style={{ background: 'linear-gradient(to right, blue, pink)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SPONSORS</h1>
                    <p className='font-vt323 text-gray-400 w-[85vw] leading-4 sm:leading-0 sm:px-0 text-sm sm:text-3xl sm:w-[60vw] mx-auto'>Thank you to our generous sponsors for contributing to the prize pool and making this awesome event a reality!</p>
                </div>


                <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed border-cyan-500 border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-cyan-500 text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem] '>DIAMOND</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        <img src="/src/assets/images/sponsors/mlh.png" alt="" className='w-[18vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src="/src/assets/images/sponsors/postman.png" alt="" className='w-[7vw] h-[7vw] sm:w-[5vw] sm:h-[5vw]' />
                        <img src="/src/assets/images/sponsors/aws.png" alt="" className='w-[12vw] sm:w-[8vw] sm:h-[5vw]' />
                    </div>
                </div>
                <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed border-[#9d44c0] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-[#9d44c0] text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem]'>PLATINUM</h1>
                    <div className='flex items-center justify-center gap-5 sm:gap-20'>
                        <img src="/src/assets/images/sponsors/Vector.png" alt="" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4vw]' />
                        <img src="/src/assets/images/sponsors/polygon.png" alt="" className='w-[25vw] h-[5vw] sm:w-[20vw] sm:h-[4.5vw]' />
                    </div>

                </div>
                <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[78vw] mx-auto border-dashed border-[#e29b29] border-b-[0.1rem] sm:border-b-[0.5rem] flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-[#e29b29] text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem]'>GOLD</h1>
                    <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-12'>
                        <img src="/src/assets/images/sponsors/falcon.png" alt="" className='w-[28vw] h-[8vw] sm:w-[18vw] sm:h-[5vw]' />
                        <img src="/src/assets/images/sponsors/solan.png" alt="" className='w-[28vw] h-[5vw] sm:w-[22vw] sm:h-[4vw]' />
                        <img src="/src/assets/images/sponsors/auth0.png" alt="" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src="/src/assets/images/sponsors/replit.png" alt="" className='w-[18vw] h-[5vw] sm:w-[14vw] sm:h-[3vw]' />
                        <img src="/src/assets/images/sponsors/devfolio.png" alt="" className='w-[27vw] h-[6vw] sm:w-[22vw] sm:h-[4vw]' />
                        <img src="/src/assets/images/sponsors/echo3D.png" alt="" className='w-[24vw] sm:w-[22vw] h-[4vw]' />
                    </div>
                </div>


                <div className='pt-1 pb-4 sm:pt-4 sm:pb-10 w-[80vw] sm:w-[75vw] mx-auto border-dashed flex flex-col items-center justify-center gap-4'>
                    <h1 className='font-vt323 font-medium text-[#9e9e9e] text-[7vw] leading-[1.5rem] sm:text-[5vw] sm:leading-[6rem]'>SILVER</h1>
                    <div className='flex items-center justify-center gap-6 sm:gap-16'>
                        <img src="/src/assets/images/sponsors/github (1).png" alt="" className='w-[16vw] h-[6vw] sm:w-[12vw] sm:h-[5vw]' />
                        <img src="/src/assets/images/sponsors/jina.png" alt="" className='w-[16vw] h-[7vw] sm:w-[12vw] sm:h-[5vw]' />
                    </div>

                </div>



            </div>
        </section>
    )
}

export default Sponsors
