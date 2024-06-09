import SwipeableTemporaryDrawer from "./HamburgerMenu";
import iiit_logo from '../assets/images/Navbar/IIITlogo.svg';
import iiit_logo_mobile from '../assets/images/Navbar/iiit_kalyani_logo.svg';
import sc1_logo from '../assets/images/Navbar/logo.svg';
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
    const scrollToSponsors = () => {
        const footerSection = document.getElementById('sponsors');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToFaq = () => {
        const footerSection = document.getElementById('faq');
        if (footerSection) {
            footerSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <section className="w-full">
        <nav className="fixed z-30 flex bg-gradient-to-b from-[#040842] to-[#040842] justify-between w-full h-[100px] max-[540px]:h-[60px] mt-0 bg-blue-800 font-vt323 ">
            <img className=" xl:ml-[0] xl:mt-[1%] lg:w-[10%] lg:h-[62%] sm:w-[12%] min-[540px]:w-[13%] min-[900px]:h-[55%] min-[900px]:mt-[2%] sm:ml-[1.7%] min-[540px]:ml-[1.7%] lg:ml-[1.5%] lg:mt-[1.5%] mt-[1%] max-[540px]:h-[50%] max-[540px]:ml-[4%] max-[540px]:mt-[4%]" src={sc1_logo}></img>
            
            <ul className=" flex xl:space-x-[5rem] lg:space-x-[4rem] sm:space-x-[1.6rem] sm:text-[22px] min-[540px]:space-x-[1.6rem] min-[540px]:text-[22px] md:space-x-[2.2rem] md:text-[25px] min-[900px]:space-x-[2.4rem] min-[900px]:text-[1.8rem] lg:text-[2rem] text-white items-center max-[540px]:hidden ">
                <a onClick={scrollToSchedule} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">SCHEDULE</li></a>
                <a onClick={scrollToSponsors} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">SPONSORS</li></a>
                <a onClick={scrollToFaq} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">FAQ</li></a>
                <a onClick={scrollToFooter} style={{ cursor: 'pointer' }}><li className="hover:text-[#c3c3c3]">CONTACT US</li></a>
            </ul>
            <img className="xl:w-[14%] xl:mr-[1%] lg:w-[15%] sm:w-[17%] sm:mr-[1.7%] min-[540px]:w-[17%] min-[540px]:mr-[1.7%] lg:mr-[1.2%] lg:mt-[1%] mt-[1%]   max-[540px]:hidden" src={iiit_logo}></img>
            <img className="min-[540px]:hidden max-[540px]:h-[58%] min-[450px]:mr-[73%] max-[540px]:mt-[3%]  min-[320px]:mr-[65%] min-[350px]:mr-[68%] min-[400px]:mr-[70%]" src={iiit_logo_mobile}></img>
            {/* <img className="min-[540px]:hidden w-[10%] h-[18%] mt-[7%] mr-[5%]" src="./images/Vector.svg" ></img> */}
            
        </nav>
        <SwipeableTemporaryDrawer/>
        </section>
    )
}
// max-[540px]:h-[40%] max-[540px]:mr-[4%] max-[540px]:mt-[4%]