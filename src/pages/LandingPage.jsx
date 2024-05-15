
import BgLandingPage from "/images/BgLandingPage.svg";
import HomeMascot from "/images/HomeMascot.svg";
import DevfolioBtn from "/images/DevfolioBtn.svg";
import TimerSection from "./TimerSection";
import Schedule from "../components/Schedule/Schedule";


function LandingPage() {
  return (
    <>
      <div
        className=" h-full w-full flex flex-col text-center bg-no-repeat  bg-bg_color m-0"
        style={{
          backgroundImage: `url(${BgLandingPage})`,
          backgroundPositionY: "20%",
          backgroundSize: "cover",
        }}
      >
        {/* Hero section */}
        <section id="hero" className="ml-5 mr-5 mt-5">
          <div>
            <h1
              className="text-white text-[12vh] font-vt323"
              style={{ textShadow: "2px 2px 0 rgb(236, 83, 176, 1)" }}
            >
              STATUS CODE <span className="text-red">1</span>
            </h1>
            <h3 className="text-purple-900 font-vt323 text-2xl bg-gradient-to-r from-gradient_blue_purple-0 via-gradient_blue_purple-50 to-gradient_blue_purple-100  text-transparent bg-clip-text">
              Code With Purpose & Innovate, Collaborate, Dominate
            </h3>
          </div>
          <div className="flex text-center justify-center mt-5 ml-5 mr-5">
            <div className="bg-top bg-no-repeat flex items-end flex-col justify-center h-[90%] "style={{
                backgroundImage: `url(${HomeMascot})`,
                backgroundSize: "15%",
              }}
            >
              <div className="text-center justify-center gap-2 mt-[21%]">
                <div   className="bg-no-repeat bg-center text-center justify-center flex flex-row" style={{
                    backgroundImage: `url(${DevfolioBtn})`,
                    backgroundSize: "contain",
                  }}
                >
                  <button className="text-purple font-vt323 text-2xl  text-center justify-center flex  mt-2 mb-2 gap-3 ">
                    <img src="/images/DevfolioLogo.svg"  />
                    Apply with Devfolio
                  </button>
                </div>
                <p className=" font-vt323 text-2xl m-3 bg-gradient-to-b from-gradient_purple_fade-0 via-gradient_purple_fade-50 to-gradient_purple_fade-100  text-transparent bg-clip-text">
                  Unleash your creativity and join Status Code 1, an official
                  MLH Member Event and the ultimate 36-hour hackathon
                  extravaganza! Compete across diverse categories, showcasing
                  your skills, ingenuity, and collaborative spirit alongside
                  like-minded individuals. Discover the perfect platform to
                  challenge yourself,
                </p>

                <button className="">
                  <img src="/images/ScrollButton.svg" alt="Down" width="80%" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Timer section  */}
        <section id="timer" className="mt-[4%] mb-10">
          <TimerSection/>
        </section>

        {/* Schedule section */}
        <section id="schedule" className="mt-[12%]"></section>
        <Schedule/>
      </div>
    </>
  );
}

export default LandingPage;
