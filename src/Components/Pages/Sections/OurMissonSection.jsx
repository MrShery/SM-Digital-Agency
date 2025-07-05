import React, { useRef, useState } from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import SM_introVideo from "../../../assets/Media/Videos/SMDigitalintroVideo.mp4"

const OurMissonSection = () => {
  const [toggle, setToggle] = useState(false);
  const videoRef = useRef(null);
  const handleClick = () => {
    if (videoRef.current) {
      toggle ? videoRef.current.play() : videoRef.current.pause();
    }
    setToggle(!toggle);
  };
  return (
    <section id="our-mission" className="pb-8">
      <SectionTitleInfo
        className="py-[1vw]"
        subTitle="The Mission"
        title="Rebuilding The E-Commerce Growth System"
        titleClassName=" px-[0px]  sm:px-[5vw] md:px-[15vw] lg:text-[4.8vw] lg:leading-[4.8vw]  font-semibold  sm:bg-[linear-gradient(360deg,#ffff_90%,#000)] "
        pera="We’re building the most elite growth engine for modern brands delivering high-impact marketing, proven systems, and expert strategy to help founders win in today’s hyper-competitive e-com world" subTitleClassName="lg:text-[1.6vw]"
        peraClassName="px-[6vw] leading-[3vw] md:text-[2vw] lg:text-[1.6vw] xs:w-fit  md:w-[65vw] text-[#ffffff93] "
      /> 
      <div className=" group ourMissionVideoContainer relative my-8 md:my-0  flex justify-center items-center w-[88%] rounded-[3.5vw]  md:rounded-[1.5vw] border border-[#ffffff5e] overflow-hidden mx-auto  cursor-pointer hover:scale-105 myTransition">
        <video onClick={handleClick} ref={videoRef} src={SM_introVideo} autoPlay muted loop playsInline loading="lazy" ></video>

        {/* ====================================Play Button and SVG Circle============================== */}
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] z-10">
         {toggle? <IoMdPlay
            onClick={handleClick}
            className={`text-[6vw] ps-1 myTransition absolute top-[50%] left-[50%] translate-x-[-50%] z-50  translate-y-[-50%]  text-[#ffffff] group-hover:opacity-100 ${!toggle&&"group-hover:opacity-100 opacity-0"}`}
          />:<IoMdPause
            onClick={handleClick}
            className={`text-[6vw] ps-1 myTransition absolute top-[50%] left-[50%] translate-x-[-50%] z-50  translate-y-[-50%]  text-[#ffffff] group-hover:opacity-100 ${!toggle&&"group-hover:opacity-100 opacity-0"}`}
          />}
          {/* ================================SVG and Custom CSS is written for Hover Effect========================== */}
          <svg
            className={` w-[11vw] h-[11vw] z-20 circleSVG ${!toggle&&"group-hover:opacity-100 opacity-0"} `}
            viewBox="25 25 50 50"
          >
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OurMissonSection;
