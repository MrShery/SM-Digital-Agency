import React from "react";
import SectionTitleInfo from "../../SectionTitleInfo";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

const HelpSection = () => {
  return (
    <section className="pt-[5vw]">
      <SectionTitleInfo
        titleClassName="lg:text-[43px]"
        subTitleClassName="lg:text-[13px]"
        peraClassName=" lg:text-[15px]"
        subTitle="Not sure if this is for you?"
        title="Our Team Is Ready To Help You"
        pera="Talk to one of our student success managers to get all your questions answered. You can schedule a free discovery call below. They'll get back to you within a few minutes and are ready to answer all your questions."
      />
      <div className="w-[45vw] h-[17vw] flex flex-col justify-between py-[2.5vw] px-[5vw] my-[5vw] items-center text-center bg-white mx-auto rounded-lg">
        <RxCross2 className="text-[red] text-[8vw] md:text-[4vw] rotatingAnimation " />
        <div>
          <h4 className="text-[1.3vw] font-semibold">
            This iClosed link is not valid.
          </h4>
          <p className="text-[1.2vw] font-semibold">
            Sorry for the inconvenience, but this link is no longer valid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
