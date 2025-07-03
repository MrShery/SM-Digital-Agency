import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const HelpSection = () => {
  return (
    <section id="helpSection" className="py-[2vw]">
      <SectionTitleInfo
        className="px-[3vw]"
        titleClassName="lg:text-[48px] xs:px-[8vw] xs:leading-[8vw] xs:text-[7vw] font-bold"
        subTitle="Not Sure If We’re The Right Fit?"
        subTitleClassName=" font-semibold  lg:tracking-[3px]"
        title="Our Team Is Ready To Help You"
        pera="Talk to one of our eCom growth experts to get all your questions answered. Schedule a free discovery call below, and we’ll get back to you within minutes, ready to help you scale."
        peraClassName="px-[0vw] xs:w-full pt-[6vw] lg:pt-[2vw] lg:px-[4vw] lg:leading-[1.5vw]  md:text-[2vw] md:w-[70vw] "
      />
      <div className="w-[90vw] md:w-[41vw] dark:text-white md:h-[19vw] h-[42vw]   py-[2.5vw] px-[5vw] my-[5vw] lg:my-2 text-center bg-[#fcfcfc] dark:bg-[#8043ef] mx-auto rounded-lg">
        <a href="https://form.jotform.com/251822452192454" className="w-full h-full flex flex-col justify-center gap-10 items-center">
          <RxCross2 className="text-[red] text-[12vw] md:text-[4vw] rotatingAnimation " />
          <div>
            <a href=" https://form.jotform.com/251822452192454" className=" hover:decoration-current text-[4.5vw] md:text-[1.4vw] font-[500]">
              Book Your Call
            </a>
            {/* <p className="text-[4.1vw] md:text-[1.3vw] ">
              Sorry for the inconvenience, but this link is no longer valid.
            </p> */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default HelpSection;
