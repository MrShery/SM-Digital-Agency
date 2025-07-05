import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import BookCallBg from "../../../assets/Media/Pictures/helpSectionBox.png";

const HelpSection = () => {
  return (
    <section id="helpSection" className="py-[2vw] dark:bg-[#8043ef] my-[5vw]">
      <SectionTitleInfo
        className="px-[3vw]"
        titleClassName="lg:text-[48px] xs:px-[8vw] xs:leading-[8vw] xs:text-[7vw] font-bold dark:text-white"
        subTitle="Not Sure If We’re The Right Fit?"
        subTitleClassName=" font-semibold  lg:tracking-[3px] dark:text-white"
        title="Our Team Is Ready To Help You"
        pera="Talk to one of our eCom growth experts to get all your questions answered. Schedule a free discovery call below, and we’ll get back to you within minutes, ready to help you scale."
        peraClassName="px-[0vw] dark:text-white xs:w-full pt-[6vw] lg:pt-[2vw] lg:px-[4vw] lg:leading-[1.5vw]  md:text-[2vw] md:w-[70vw] "
      />
      <div
        style={{
          backgroundImage: `url(${BookCallBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[80vw] flex flex-col justify-center items-center md:w-[51vw] md:h-[24vw] lg:w-[41vw] lg:h-[19vw] h-[37vw] my-[5vw] lg:my-2 text-center bg-[#fcfcfc]  mx-auto rounded-[29px]"
      >
        <a
          href=" https://form.jotform.com/251822452192454"
          target="_blank"
          className="text-[4.5vw] md:text-[1.4vw] font-[500]"
        >
          <button className="bg-white rounded-lg py-[.5vw] px-[3vw] text-[3.5vw] md:text-[1.222vw] font-bold ">
            Book A Call
          </button>
        </a>
      </div>
    </section>
  );
};

export default HelpSection;
