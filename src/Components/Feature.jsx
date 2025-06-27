import React from "react";
import FeatureImg1 from "../assets/Media/Pictures/feature-1.webp";
import SectionTitleInfo from "./SectionTitleInfo";

const Feature = ({featureID,title,subTitle,description,profileImage}) => {
  return (
    <div className={` w-full h-full md:flex justify-center items-center pt-5 md:py-10 ${featureID%2!=0&&"flex-row-reverse"}`}>
      <div className="md:w-[49.5vw]  bgGlow rounded-xl sm:rounded-xl overflow-hidden">
        <img src={FeatureImg1} alt="feature Image..." className=" lg:h-[340px]" />
      </div>
      <SectionTitleInfo
        className={` text-start overflow-hidden w-[60vw] md:w-[50vw]  sm:px-4 md:px-[3vw] md:py-0 py-5 ${featureID%2!=0&&"flex-row-reverse lg:ps-0"}`}
        subTitleClassName="w-full text-[1.7vw] sm:text-[1vw] md:text-[1vw] sm:tracking-[1.5px] md:tracking-[2px] "
        peraClassName=" lg:w-fit md:w-fit sm:w-fit lg:text-[16px]"
        titleClassName=" px-0 sm:pe-[20vw] md:pe-[1px] md:text-[30px] lg:text-[45px] font-semibold "
        title="SM Digital Agency."
        subTitle="agency foundations"
        pera="Learn hello how to set your agency up for success. Basically  everything you need to get up and running…"
      />
    </div>
  );
};

export default Feature;
