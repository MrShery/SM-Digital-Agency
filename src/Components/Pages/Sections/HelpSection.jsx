import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const HelpSection = () => {
  return (
    <section className="py-[2vw]">
      <SectionTitleInfo
        className="px-[3vw]"
        titleClassName="lg:text-[48px] xs:px-[8vw] xs:leading-[8vw] xs:text-[7vw] font-bold"
        subTitle="Not Sure If We’re The Right Fit?"
        subTitleClassName=" font-semibold  lg:tracking-[3px]"
        title="Our Team Is Ready To Help You"
        pera="Talk to one of our eCom growth experts to get all your questions answered. Schedule a free discovery call below, and we’ll get back to you within minutes, ready to help you scale."
        peraClassName="px-[0vw] xs:w-full pt-[6vw]  md:text-[2vw] md:w-[70vw] "
      />
      <div className="w-[90vw] md:w-[41vw] dark:text-white md:h-[19vw] h-[42vw] file: flex flex-col justify-between py-[2.5vw] px-[5vw] my-[5vw] items-center text-center bg-[#fcfcfc] dark:bg-[#8043ef] mx-auto rounded-lg">
        <RxCross2 className="text-[red] text-[12vw] md:text-[4vw] rotatingAnimation " />
        <div>
          <h4 className="text-[4.5vw] md:text-[1.3vw] font-semibold">
            This iClosed link is not valid.
          </h4>
          <p className="text-[4.1vw] md:text-[1.2vw] font-semibold">
            Sorry for the inconvenience, but this link is no longer valid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
