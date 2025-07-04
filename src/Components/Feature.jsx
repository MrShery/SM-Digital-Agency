import React from "react";
import SectionTitleInfo from "./SectionTitleInfo";

const Feature = ({ featureID, title, subTitle, description, profileImage }) => {
  return (
    <div
      className={` md:w-[90vw] lg:w-[85vw] h-full md:flex justify-center  items-center mx-auto md:px-[2.5vw] md:gap-9 lg:gap-0 md:py-10 lg:py-20 ${
        featureID % 2 != 0 && "flex-row-reverse"
      }`}
    >
      <div className="md:w-[40.9vw] lg:w-[46vw] w-[90vw] xs:w-[85vw] bg-black sm:w-[70vw] mx-auto  bgGlow rounded-xl  sm:rounded-[1vw] overflow-hidden border-[2px] border-[#7f43ef57]">
        <img
          src={profileImage}
          alt="feature Image..."
          className="  w-full lg:h-[25vw] md:h-[30vw] xs:h-[30vw] sm:h-[39vw] scale-[.9]"
        />
      </div>
      <SectionTitleInfo
        className={` text-start overflow-hidden w-[90vw] xs:w-[85vw] sm:w-[70vw] md:w-[52vw]  sm:px-0 md:px-[1.5vw] lg:px-[4vw]  mx-auto md:py-0 py-5 ${
          featureID % 2 != 0 && "flex-row-reverse lg:ps-0"
        }`}
        subTitleClassName="w-full text-[4.5vw] sm:text-[1vw] md:text-[1.3vw] scale-y-[.7] font-semibold lg:py-[1.5vw] sm:tracking-[1.5px] md:tracking-[2px] "
        titleClassName=" px-0 md:px-[0px] sm:pe-[11vw] md:pe-[1px] md:text-[30px] lg:text-[3.45vw] font-bold "
        title={title}
        subTitle={subTitle}
        pera={description}
        peraClassName=" lg:w-fit md:w-fit sm:w-fit sm:text-[2.69vw] md:text-[1.9vw] lg:text-[1.10vw] px-[0px] mx-[0px] xs:mx-0 lg:leading-[1.5vw]"
      />
    </div>
  );
};

export default Feature;
