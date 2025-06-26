import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import HeroImg from "../../../assets/Media/Pictures/HeroMainImage.webp";

const HeroSection = () => {
  return (
    <div className=" px-[4vw] md:px-[80px] sm:px-[50px] py-[4vw] sm:py-[30px] md:py-[50px]  lg:py-[60px]">
      <SectionTitleInfo

        title="We're Changing The Education System Forever."
        pera="We bring practical education to another level by giving you all the tools you need to thrive in this new digital age"
        peraClassName=""
      />
      <div className="w-[85%] h-[85%] mx-auto">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
