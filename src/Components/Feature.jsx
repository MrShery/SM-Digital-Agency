import React from "react";
import FeatureImg1 from "../assets/Media/Pictures/feature-1.webp";
import SectionTitleInfo from "./SectionTitleInfo";

const Feature = ({ featureID, title, subTitle, description, profileImage }) => {
  return (
    <div
      className={` md:w-[90vw] lg:w-[85vw] h-full md:flex justify-center  items-center mx-auto md:px-16 md:gap-9 lg:gap-0 md:py-10 lg:py-20 ${
        featureID % 2 != 0 && "flex-row-reverse"
      }`}
    >
      <div className="md:w-[35.9vw] lg:w-[49.9vw] w-[80vw] xs:w-[60vw] sm:w-[70vw] mx-auto  bgGlow rounded-xl sm:rounded-xl overflow-hidden border border-[#8043ef]">
        <img
          src={FeatureImg1}
          alt="feature Image..."
          className=" lg:h-[340px] md:h-[25vw] sm:h-[39vw] scale-x-[1.19]"
        />
      </div>
      <SectionTitleInfo
        className={` text-start overflow-hidden w-[80vw] xs:w-[60vw] sm:w-[70vw] md:w-[50vw]  sm:px-0 md:px-[1.5vw]  mx-auto md:py-0 py-5 ${
          featureID % 2 != 0 && "flex-row-reverse lg:ps-0"
        }`}
        subTitleClassName="w-full text-[1.7vw] sm:text-[1vw] md:text-[1vw] sm:tracking-[1.5px] md:tracking-[2px] "
        peraClassName=" lg:w-fit md:w-fit sm:w-fit lg:text-[16px]"
        titleClassName=" px-0 md:px-[0px] sm:pe-[20vw] md:pe-[1px] md:text-[30px] lg:text-[45.5px] font-extrabold "
        title="SM Digital Agency."
        subTitle="agency foundations"
        pera="Learn hello how to set your agency up for success. Basically  everything you need to get up and running…"
      />
    </div>
  );
};

export default Feature;
