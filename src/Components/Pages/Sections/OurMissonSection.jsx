import React, { useRef, useState } from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { BsPlayCircleFill } from "react-icons/bs";
import { MdPauseCircleFilled } from "react-icons/md";
import { IoPause, IoPlay } from "react-icons/io5";
import { IoMdPlay } from "react-icons/io";

const OurMissonSection = () => {
  const [toggle, setToggle] = useState(true);
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
        subTitle="The Mission"
        title="Reforming the Education System"
        pera="We’re transforming the future of global education system with the world’s foremost digital learning platform and community, democratizing access to real life, practical skills and information."
        subTitleClassName="lg:text-[1.6vw]"
        titleClassName=" px-[20px]  sm:px-[5vw] md:px-[15vw] lg:text-[4.8vw] lg:leading-[4.8vw]  font-semibold  bg-[linear-gradient(360deg,#ffff_90%,#000)] "
        className="py-[1vw]"
        peraClassName="px-[6vw] leading-[3vw] md:leading-[1.7vw] text-[#959586]"
      />
      <div className=" group ourMissionVideoContainer relative  flex justify-center items-center w-[80%]  rounded-[1.5vw] border border-[#ffffff5e] overflow-hidden mx-auto  cursor-pointer hover:scale-105 myTransition">
        <img
          src="https://cdn.prod.website-files.com/664cd251c9f39da04f82f2ba/664ceb72876a586715373efe_StillsJPG_2.10.4-p-1600.webp"
          muted
          loop
          ref={videoRef}
          alt=""
          className="w-full h-full "
        />
        {/* =============================Div Overlay effect on Video============================= */}
        <div className="w-full h-full absolute bg-[#00000067]"></div>
        {/* ====================================Play Button and SVG Circle============================== */}
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] z-10">
          <IoMdPlay
            onClick={handleClick}
            className=" text-[6vw] ps-1 myTransition absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  text-[#ffffff] group-hover:opacity-100"
          />
          {/* ================================SVG and Custom CSS is written for Hover Effect========================== */}
          <svg
            className=" w-[11vw] h-[11vw] z-20 circleSVG "
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
