import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import HeroImg from "../../../assets/Media/Pictures/HeroMainImage.webp";

const HeroSection = () => {
  return (
    <div className=" px-[4vw] md:px-[80px] sm:px-[50px] py-[4vw] sm:py-[30px] md:py-[50px]  lg:py-[30px]">
      <SectionTitleInfo
        title="We’re Changing How E-Com Brands Grow"
        pera="We take e-com growth to another level by giving you every tool, system, and strategy you need to dominate this new digital economy"
        titleClassName="lg:px-[2vw] px-[5vw] lg:leading-[5vw] lg:text-[4.7vw] font-semibold md:px-0 "
        className=" mt-4"
        peraClassName="hidden xs:block"
      />
      <div className="xs:w-[80vw]   mx-auto overflow-hidden  sm:translate-y-[-4.5%] mt-10 sm:mt-0">
        <img src={HeroImg} alt="" className=" sm:scale-100 scale-125 origin-left w-full h-full" />
      </div>
    </div>
  );
};

export default HeroSection;
