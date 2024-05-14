export default function Navbar(){
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFooter = () => {
        const footerSection = document.getElementById('footer');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <>
        <nav className="flex bg-gradient-to-b from-[#040842] to-[#040842] justify-between w-[100vw] h-[100px] mt-0 bg-blue-800 font-vt323">
            <img className="ml-[2%] pt-[1%]" src="./public/images/logo.svg"></img>
            
            <ul className="flex space-x-[3rem] text-[2rem] text-white items-center">
                <a onClick={scrollToSchedule} style={{ cursor: 'pointer' }}><li>SCHEDULE</li></a>
                <li style={{ cursor: 'pointer' }}>TRACKS</li>
                <li style={{ cursor: 'pointer' }}>PRIZES</li>
                <a onClick={scrollToFooter} style={{ cursor: 'pointer' }}><li>MORE</li></a>
            </ul>
            <img className="mr-[3%] pt-[1%]" src="./public/images/IIITlogo.svg"></img>
            
        </nav>
        </>
    )
}
