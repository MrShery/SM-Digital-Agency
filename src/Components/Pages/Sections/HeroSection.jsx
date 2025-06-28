import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import HeroImg from "../../../assets/Media/Pictures/HeroMainImage.webp";

const HeroSection = () => {
  return (
    <div className=" px-[4vw] md:px-[80px] sm:px-[50px] py-[4vw] sm:py-[30px] md:py-[50px]  lg:py-[30px]">
      <SectionTitleInfo

        title="We're Changing The Education System Forever."
        pera="We bring practical education to another level by giving you all the tools you need to thrive in this new digital age"
        titleClassName="px-3 md:px-0 font-bold "
        className=" mt-4"
      />
      <div className="w-[80vw] mx-auto overflow-hidden translate-y-[-4.5%]">
        <img src={HeroImg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HeroSection;
